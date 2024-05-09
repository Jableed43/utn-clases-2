import Category from "../models/categoryModel.js";

export const getAll = async (req, res) => {
  try {
    const category = await Category.find().lean();
    if (!category) {
      //empty state
      res.render("category/getAllCategory", {
        message: "No existe ninguna categoria",
      });
    }
    res.render("category/getAllCategory", { category });
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
  }
};

export const create = async (req, res) => {
  try {
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      res.render("category/createCategory", {
        message: "La categoria ya existe",
      });
    } else {
      const newCategory = new Category({ name: req.body.name });
      const response = await newCategory.save();
      res.redirect("/api/category/getAll");
    }
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.findByIdAndDelete(id);
    res.redirect("/api/category/getAll");
  } catch (error) {
    res.status(500).render("500", { message: "internal server error" });
  }
};

export const createView = (req, res) => {
  res.render("category/createCategory");
};
