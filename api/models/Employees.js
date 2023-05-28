
export default function (sequelize, Sequelize) {
  const Employees = sequelize.define("employees", {
    employeeNumber: {
      type: Sequelize.INTEGER(32),
      primaryKey: true,
    },
    lastName: {
      type: Sequelize.STRING(64),
    },
    firstName: {
      type: Sequelize.STRING(64),
    },
    extension: {
      type: Sequelize.STRING(64),
    },
    email: {
      type: Sequelize.STRING(64),
    },
    // foreignkey to relate to the office
    officeCode: {
      type: Sequelize.STRING(64),
    },
    reportsTo: {
      type: Sequelize.STRING(64),
    },
    jobTitle: {
      type: Sequelize.STRING(64),
    },

  });
  return Employees;
}
