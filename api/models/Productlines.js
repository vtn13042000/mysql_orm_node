
export default function (sequelize, Sequelize) {
  const Productlines = sequelize.define("productlines", {
    productLine: {
      type: Sequelize.STRING(64),
      primaryKey: true,
    },
    textDescription: {
      type: Sequelize.STRING(64),
    },
    htmlDescription: {
      type: Sequelize.STRING(64),
    },
    image: {
      type: Sequelize.STRING(64),
    },
  });
  return Productlines;
}
