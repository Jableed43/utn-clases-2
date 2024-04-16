const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

//cuando lleguen datos de un form se pasará a json
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
