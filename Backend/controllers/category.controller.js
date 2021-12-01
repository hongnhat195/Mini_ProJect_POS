const { Op } = require("sequelize");
const { category } = require("../models/index.js");

const addCate = async (req, res) => {
  const { name, img_url } = req.body;
  console.log(name, img_url);
  try {
    const newCategory = await category.create({
      name,
      img_url,
    });
    res.status(201).send(newCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateCate = async (req, res) => {
  const { name, img_url } = req.body;
  const { id } = req.params;
  try {
    await category.update({ name, img_url }, { where: { id } });
    res.status(200).send("Update successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
//
const removeCate = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await category.destroy({ where: { id } });
    const listFood = await category.findAll();
    res.status(200).send(listFood);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getallCategoryAsync = async (req, res) => {
  try {
    const listFood = await category.findAll();
    res.status(200).send(listFood);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailCate = async (req, res) => {
  const { id } = req.params;
  try {
    const cate = await category.findOne({ where: { id } });
    res.status(200).send(cate);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  addCate,
  updateCate,
  removeCate,
  getallCategoryAsync,
  getDetailCate,
};
