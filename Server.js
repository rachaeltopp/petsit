const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080; // default port 8080
const sass = require("node-sass-middleware");

app.set("view engine", "ejs");

// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});