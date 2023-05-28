
export default function (sequelize, Sequelize) {
  const Payments = sequelize.define("payments", {
    customerNumber: {
      type: Sequelize.INTEGER(32),
      primaryKey: true,
    },
    checkNumber: {
      type: Sequelize.INTEGER(32),
      primaryKey: true,
    },
    paymentDate: {
      type: Sequelize.DATEONLY,
    },
    amount: {
      type: Sequelize.INTEGER(32),
    },
  });
  return Payments;
}
