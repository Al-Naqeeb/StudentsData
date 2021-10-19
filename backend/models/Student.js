const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Student = db.define("Student", {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  gender: {
    type: DataTypes.CHAR,
  },
});

module.exports = Student;
