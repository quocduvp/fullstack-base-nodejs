const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "views")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views", "index.html"));
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello",
  });
});
app.listen(4321, () => {
  console.log(`Server listen port 4321`);
});
