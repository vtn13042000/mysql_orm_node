
export default function (sequelize, Sequelize) {
  const Customers = sequelize.define("customers", {
    customerNumber: {
      type: Sequelize.INTEGER(32),
      primaryKey: true,
    },
    customerName: {
      type: Sequelize.STRING(64),
    },
    contactLastName: {
      type: Sequelize.STRING(64),
    },
    contacFirstName: {
      type: Sequelize.STRING(64),
    },
    phone: {
      type: Sequelize.STRING(64),
    },
    addressLine1: {
      type: Sequelize.STRING(64),
    },
    addressLine2: {
      type: Sequelize.STRING(64),
    },
    city: {
      type: Sequelize.STRING(64),
    },
    state: {
      type: Sequelize.STRING(64),
    },
    postalCode: {
      type: Sequelize.STRING(64),
    },
    country: {
      type: Sequelize.STRING(64),
    },
    salesRepEmployeeNumber: {
      type: Sequelize.INTEGER(32),
    },
    creditLimit: {
      type: Sequelize.INTEGER(32),
    },
  });
  return Customers;
}
