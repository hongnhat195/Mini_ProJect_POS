const { Order, OrderItem, Customer } = require("../models/index.js");
const { Op } = require("sequelize");
const ordering = async (req, res) => {
  const { customer_id, items, total_amount, payment_method } = req.body;
  const today = new Date();
  const order_date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  try {
    const newOrder = await Order.create({
      customer_id: customer_id,
      order_date: order_date,
      total_amount: total_amount,
      payment_method: payment_method,
    });
    items.forEach((item) => {
      item.order_id = newOrder.id;
    });
    const x = await OrderItem.bulkCreate(items);
    res.status(201).send({ newOrder, x });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const viewListOrder = async (req, res) => {
  try {
    const list = await Order.findAll({
      include: [
        {
          model: OrderItem,
        },
      ],
    });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
};
const viewOrderByCustomer = async (req, res) => {
  const customer_id = req.params.id;
  try {
    const listOrder = await Customer.findAll({
      where: { id: customer_id },
      include: [
        {
          model: Order,
          include: [
            {
              model: OrderItem,
            },
          ],
        },
      ],
    });
    res.status(200).send(listOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};
const viewListOrderToday = async (req, res) => {
  try {
    const today = new Date();
    const date = (
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate()
    ).toString();
    const list = await Order.findAll({
      where: { order_date: { [Op.startsWith]: `${date}%` } },
      order: [["order_date", "DESC"]],
      include: [
        {
          model: OrderItem,
        },
      ],
    });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
};
const viewListOrderByDate = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const date = id.toString().toString();
    console.log(date);
    const list = await Order.findAll({
      where: { order_date: { [Op.startsWith]: `${date}%` } },
      order: [["order_date", "DESC"]],
      include: [
        {
          model: OrderItem,
        },
      ],
    });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
};
const viewListOrderByMonth = async (req, res) => {
  try {
    const today = new Date();
    const date = (
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1)
    ).toString();
    console.log(date);
    const list = await Order.findAll({
      where: { order_date: { [Op.startsWith]: `${date}%` } },
      order: [["order_date", "DESC"]],
      include: [
        {
          model: OrderItem,
        },
      ],
    });
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  ordering,
  viewListOrder,
  viewOrderByCustomer,
  viewListOrderToday,
  viewListOrderByDate,
  viewListOrderByMonth,
};
