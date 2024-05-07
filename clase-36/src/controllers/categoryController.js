import Category from "../models/categoryModel.js";

export const getAll = async (req, res) => {
  try {
    const category = await Category.find().lean();
    res.render("category/getAllCategory", { category });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const create = async (req, res) => {
  try {
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      res.status(400).json({ message: "category already exists" });
    } else {
      const newCategory = new Category({ name: req.body.name });
      const response = await newCategory.save();
      res.redirect("/api/category/getAll");
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const categoryExist = await Category.findOne({ _id: id });
    if (!categoryExist) {
      return res.status(404).json({ message: "Category not found" });
    }
    await Category.findByIdAndDelete(id);
    res.redirect("/api/category/getAll");
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const createView = (req, res) => {
  res.render("category/createCategory");
};
