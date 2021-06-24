module.exports = {
    HOST: "0.0.0.0",
    PORT: 9999,
    USER: "userName",
    PASSWORD: "password",
    DB: "db name",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };