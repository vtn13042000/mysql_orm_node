
export default function (sequelize, Sequelize) {
  const Products = sequelize.define("products", {
    productCode: {
      type: Sequelize.STRING(64),
      primaryKey: true,
    },
    productName: {
      type: Sequelize.STRING(64),
    },
    productLine: {
      type: Sequelize.STRING(64),
    },
    productScale: {
      type: Sequelize.STRING(64),
    },
    productVendor: {
      type: Sequelize.STRING(64),
    },
    productDescription: {
      type: Sequelize.STRING(64),
    },
    quantityInStock: {
      type: Sequelize.INTEGER(5),
    },
    buyPrice: {
      type: Sequelize.INTEGER(10),
    },
    MSRP: {
      type: Sequelize.INTEGER(10),
    },
  });
  return Products;
}
