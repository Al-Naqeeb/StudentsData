const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Setting up port
const PORT = process.env.PORT || 5000;

// Database
const db = require("./config/database");
db.authenticate().then(() => console.log("Connected"));

//Setting up server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use(json)
app.listen(PORT, console.log(`Server started on port ${PORT}`));
app.get("/", (req, res) => res.send("Home Page"));

// Student Routes
app.use("/students", require("./routes/students"));
