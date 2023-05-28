
export default function (sequelize, Sequelize) {
  const Orders = sequelize.define("orders", {
    orderNumber: {
      type: Sequelize.INTEGER(32),
      primaryKey: true,
    },
    orderDate: {
      type: Sequelize.DATEONLY,
    },
    requireDate: {
      type: Sequelize.DATEONLY,
    },
    shippedDate: {
      type: Sequelize.DATEONLY,
    },
    status: {
      type: Sequelize.STRING(32),
    },
    comments: {
      type: Sequelize.STRING(64),
    },
    customerNumber: {
      type: Sequelize.INTEGER(32),
    },
  });
  return Orders;
}
