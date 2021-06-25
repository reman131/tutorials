const dbConfig = require("../config/db.config.js");

// set up database connection
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port:dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define database modules.
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize,Sequelize);
db.role = require("./role.model.js")(sequelize,Sequelize);

// define the relation between User table and Roles table.

/*
db.user.belongsToMany(db.role,{
  through:"user_role",
  foreignKey:"userId",
  otherKey:"roleId"
});

db.role.belongsToMany(db.user,{
  through:"user_role",
  foreignKey:"roleId",
  otherKey:"userId"
});
*/
//faster
db.user.belongsToMany(db.role,{through:"user-role"});
db.role.belongsToMany(db.user,{through:"user-role"});

// 
db.ROLES = ["user", "admin", "moderator"];

console.log("------------------------- koshi - out models/index --------------------------");


module.exports = db;
