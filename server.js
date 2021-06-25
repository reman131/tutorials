const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.json({ message: "it's work" });
});

// set port, listen for requests
require("./app/routes/tutorial.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


const db = require("./app/models");
/*
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
*/
db.sequelize.sync();