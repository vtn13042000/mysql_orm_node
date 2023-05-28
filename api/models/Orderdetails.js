
export default function (sequelize, Sequelize) {
  const Ordersdetails = sequelize.define("ordersdetails", {
    orderNumber: {
      type: Sequelize.INTEGER(32),
      primaryKey: true,
    },
    productCode: {
      type: Sequelize.STRING(64),
      primaryKey: true,
    },
    quantityOrdered: {
      type: Sequelize.INTEGER(32),
    },
    priceEach: {
      type: Sequelize.INTEGER(32),
    },
    orderLineNumber: {
      type: Sequelize.INTEGER(32),
    },
  });
  return Ordersdetails;
}
