require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000 || process.env.port;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static("public"));

//Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const locals = {
    title: "NoteJS",
    description: "Node Js Notes App",
  };

  res.render("index", locals);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
