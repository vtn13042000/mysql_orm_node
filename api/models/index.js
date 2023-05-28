

import { Sequelize } from 'sequelize';

// import { default as classRe } from './relation/productsRe.js';

// import { default as Admin } from './Productlines.js';
import { default as Customers } from './Customers.js';
import { default as Employees } from './Employees.js';
import { default as Offices } from './Offices.js';
import { default as Orderdetails } from './Orderdetails.js';
import { default as Orders } from './Orders.js';
import { default as Payments } from './Payments.js';
import { default as Productlines } from './Productlines.js';
import { default as Products } from './Products.js';

import { config } from 'dotenv';
config();

console.log('-------------------');
console.log('db name -- dialect -- host -- port');
console.log(
	process.env.DB_NAME,
	process.env.DB_DIALECT,
	process.env.DB_HOST,
	process.env.DB_PORT
);
console.log('-------------------');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT,
		// logging: false,
		define: {
			timestamps: false,
			freezeTableName: true,
		},
	}
);

const db = {};

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
		db.sequelize.sync();
})
.catch((err) => {
		console.log('Unable to connect to the database:', err);
	});

db.Sequelize = Sequelize;
db.sequelize = sequelize;



// create tables
db.customers = Customers(sequelize, Sequelize);
db.employees = Employees(sequelize, Sequelize);
db.offices = Offices(sequelize, Sequelize);
db.orderdetails = Orderdetails(sequelize, Sequelize);

db.orders = Orders(sequelize, Sequelize);
db.payments = Payments(sequelize, Sequelize);
db.productlines = Productlines(sequelize, Sequelize);
db.products = Products(sequelize, Sequelize);


// create relation
// a productline has many products
db.productlines.hasMany(db.products, {
	foreignKey: {
		allowNull: false,
	},
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// a product has many order details
db.products.hasMany(db.orderdetails, {
	foreignKey: "productCode", // Specify the foreign key field
	// sourceKey: "productCode", // Specify the source key field in the "product" table
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
	});
	
// an order has many order details
db.orders.hasMany(db.orderdetails, {
	foreignKey: "orderNumber", // Specify the foreign key field
	// sourceKey: "orderNumber", // Specify the source key field in the "orders" table
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// a customer has many orders
db.customers.hasMany(db.orders, {
	foreignKey: "customerNumber",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// a customer has many payments
db.customers.hasMany(db.payments, {
	foreignKey: "customerNumber",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// an office has many employees
db.offices.hasMany(db.employees, {
	foreignKey: "officeCode",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});

// an employee has many customers
db.employees.hasMany(db.customers, {
	foreignKey: "salesRepEmployeeNumber",
	onDelete: "CASCADE",
	onUpdate: "CASCADE",
});



export default db;
