const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Student = require("../models/Student");


router.get("/", (req, res) =>
  Student.findAll()
    .then((students) => {
      res.send(students);
    })
    .catch((err) => console.log("Error"))
);
router.get("/", async (req, res) => {
  const students = await Student.findAll();
  res.send(students);
});
router.post("/", async (req, res) => {
  console.log(req.body);
  const student = await Student.create({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });
  student.save();
  res.send(student);
});

module.exports = router;
