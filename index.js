// I'm so cool with a 404 page, you can't compare.

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

app.listen(8080);