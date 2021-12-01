"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.OrderItem, { foreignKey: "order_id" });
      this.belongsTo(models.Customer, { foreignKey: "customer_id" });
    }
  }
  Order.init(
    {
      order_date: DataTypes.DATE,
      total_amount: DataTypes.INTEGER,
      payment_method: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
