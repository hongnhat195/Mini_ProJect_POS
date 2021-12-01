const { Op } = require("sequelize");
const { Food, category } = require("../models/index.js");

const addFood = async (req, res) => {
  const { name, category_id, food_img, description, price, active } = req.body;
  const quantity_order = 0;
  console.log(name, category_id, food_img, description, price, quantity_order);
  try {
    const newFood = await Food.create({
      name,
      category_id,
      food_img,
      description,
      price,
      quantity_order,
      active,
    });
    res.status(201).send(newFood);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailFood = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await Food.findOne({ where: { id } });
    res.status(200).send(food);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListFoodbyName = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  try {
    if (name == undefined) {
      const listFood = await Food.findAll({
        where: { active: 1 },
        include: [
          {
            model: category,
          },
        ],
      });
      console.log("1");
      res.status(200).send(listFood);
    } else {
      console.log("2");
      const listFood = await Food.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });

      res.status(200).send(listFood);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListFoodByPriceASC = async (req, res) => {
  try {
    const listFood = await Food.findAll({
      order: [["price", "ASC"]],
    });
    res.status(200).send(listFood);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListFoodByPriceDESC = async (req, res) => {
  try {
    const listFood = await Food.findAll({
      order: [["price", "DESC"]],
    });
    res.status(200).send(listFood);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListFoodByType = async (req, res) => {
  const type = req.body;
  try {
    const listFood = await Food.findAll({
      where: {
        type: type,
      },
    });
    res.status(200).send(listFood);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateFood = async (req, res) => {
  const { name, category_id, food_img, price, description, active } = req.body;
  const { id } = req.params;
  try {
    await Food.update(
      { name, category_id, food_img, price, description, active },
      { where: { id } }
    );
    res.status(200).send("Update successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeFood = async (req, res) => {
  const { id } = req.params;
  try {
    await Food.destroy({
      where: { id: id },
    });
    res.status(200).send("Delete successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadImgFood = async (req, res) => {
  const { id } = req.params;
  const file = req.file;
  const url = `https://project1952001.herokuapp.com/${file.path}`;
  try {
    const img_path = await Food.findOne({
      where: { id },
    });
    img_path.food_img = url;
    await img_path.save();
    res.status(200).send(img_path);
  } catch (error) {
    req.status(500).send(error);
  }
};
const getallfoodAsync = async (req, res) => {
  try {
    const listFood = await Food.findAll();
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
module.exports = {
  addFood,
  getListFoodbyName,
  getListFoodByType,
  getListFoodByPriceASC,
  getListFoodByPriceDESC,
  updateFood,
  removeFood,
  uploadImgFood,
  getDetailFood,
  getallfoodAsync,
  getallCategoryAsync,
};
