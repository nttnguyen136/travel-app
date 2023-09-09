const dotenv = require("dotenv");

const bodyParser = require("body-parser");

const cors = require("cors");
const express = require("express");

dotenv.config();
const PORT = 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, () => {
  console.log("Server running...");
  console.log(`Running on localhost: ${PORT}`);
});
