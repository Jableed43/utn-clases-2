import Product from "../models/productModel.js";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find().populate("category").lean();
    if (products.length === 0) {
      return res.status(404).json({ message: "There are no products" });
    }
    const productsWithCategory = products.map(product => ({
      ...product,
      categoryName: product.category ? product.category.name : "Sin categoria",
    }));
    res.render("product/getAll", { products: productsWithCategory });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const create = async (req, res) => {
  try {
    let destacado = req.body.destacado;
    console.log(destacado);
    destacado = destacado === "true";
    const productDestacado = { destacado, ...req.body };
    const productData = new Product(productDestacado);
    const { name } = productData;
    const productExist = await Product.findOne({ name });
    if (productExist) {
      return res.status(400).json({ message: `Product ${name} already exist` });
    }
    const savedProduct = await productData.save();
    res.redirect("/api/product/getAll");
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const findOne = async (req, res) => {
  try {
    const name = req.params.name;
    //quitamos espacios y pasamos a minusculas
    const parsedName = name.trim().toLowerCase();
    const productExist = await Product.findOne({ name: parsedName });
    if (!productExist) {
      return res.status(400).json({ message: `Product ${name} not exist` });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      return res.status(404).json({ message: "User not found" });
    }
    await Product.findByIdAndUpdate({ _id: id }, req.body, { new: true });
    res.redirect("/api/product/getAll");
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const updateView = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id }).lean();
    if (!productExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const productCategoryId = productExist.category.toString();
    res.render("product/updateProduct", {
      product: productExist,
      productCategoryId,
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(id);
    res.redirect("/api/product/getAll");
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const createView = (req, res) => {
  res.render("product/createProduct");
};
