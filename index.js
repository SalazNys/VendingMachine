const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended : true }));

app.listen(3000, () => {
  console.log("Node running successfully at http://localhost:3000");
});
