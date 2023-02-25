const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 9891;
const staticPath = path.join(__dirname, "./public");

app.use(express.static(staticPath));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
