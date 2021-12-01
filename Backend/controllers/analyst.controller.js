const { Food, Order, sequelize } = require("../models/index.js");
const getCounTotalbyDay = async (req, res) => {
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();
  try {
    const [result] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where DAY(Orders.order_date) =${d}`
    );
    const [result1] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${
        m + 1
      }`
    );
    const [result2] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where YEAR(Orders.order_date) =${y}`
    );
    const array = [];
    array.push(result[0]);
    array.push(result1[0]);
    array.push(result2[0]);
    res.status(200).send(array);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getCounTotalbyMonth = async (req, res) => {
  try {
    const [result1] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${1}`
    );
    const [result2] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${2}`
    );
    const [result3] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${3}`
    );
    const [result4] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${4}`
    );
    const [result5] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${5}`
    );
    const [result6] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${6}`
    );
    const [result7] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${7}`
    );
    const [result8] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${8}`
    );
    const [result9] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${9}`
    );
    const [result10] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${10}`
    );
    const [result11] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${11}`
    );
    const [result12] = await sequelize.query(
      `SELECT sum(total_amount) as count FROM Orders where MONTH(Orders.order_date) =${12}`
    );
    const array = [];
    array.push(result1[0]);
    array.push(result2[0]);
    array.push(result3[0]);
    array.push(result4[0]);
    array.push(result5[0]);
    array.push(result6[0]);
    array.push(result7[0]);
    array.push(result8[0]);
    array.push(result9[0]);
    array.push(result10[0]);
    array.push(result11[0]);
    array.push(result12[0]);
    res.status(200).send(array);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getCounTotalbyDay, getCounTotalbyMonth };
