const functions = require("firebase-functions");

const express = require("express");
const app = express();
// const ejs = require('ejs');
// const port = 5000;


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/6-month-Progress-Meeting", (req, res) => {
  res.render("6-month-progress-meeting");
});

app.get("/WHD-events-2021", (req, res) => {
  res.render("WHD-events-2021");
});

// app.listen(port, () => {
//   console.log(`Application listening at http://localhost:${port}`);
// });

exports.app = functions.https.onRequest(app);
