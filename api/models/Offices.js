import { randomBytes } from "crypto";

export default function (sequelize, Sequelize) {
  const Offices = sequelize.define("offices", {
    officeCode: {
      type: Sequelize.STRING(64),
      primaryKey: true,
    },
    city: {
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
    state: {
      type: Sequelize.STRING(64),
    },
    country: {
      type: Sequelize.STRING(64),
    },
    postalCode: {
      type: Sequelize.STRING(64),
    },
    terriory: {
      type: Sequelize.STRING(64),
    },

  });
  return Offices;
}
