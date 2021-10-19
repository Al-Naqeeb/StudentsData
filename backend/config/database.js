const { Sequelize } = require("sequelize");

module.exports = new Sequelize("backend", "postgres", "pwd", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});
