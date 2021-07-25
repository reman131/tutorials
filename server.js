const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// integrate react with node
const views_path = __dirname + "/app/views/";
app.use(express.static(views_path));


var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// home route
app.get("/", (req, res) => {
  res.sendFile(views_path + "index.html");
});
app.get("/tutorials", (req, res) => {
  res.sendFile(views_path + "index.html");
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

  // initiate role table.
  db.role.create({
    id: 1,
    name: "user"
  });
 
  db.role.create({
    id: 2,
    name: "moderator"
  });
 
  db.role.create({
    id: 3,
    name: "admin"
  });  
});
*/
db.sequelize.sync();