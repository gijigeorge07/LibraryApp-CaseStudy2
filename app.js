// Part #1 Point 1
// In Package.json, server.js is changed to app.js

const express = require("express");

// Part #1 Point 2
// Added bodyparser

const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const nav = [
  {
    link: "/books",
    title: "Books",
  },
  {
    link: "/authors",
    title: "Authors",
  },
  {
    link: "/books/addbook", //Part #2 Point 6
    title: "Add Book",
  },
  {
    link: "/authors/addauthor", //Part #2 Point 6
    title: "Add Author",
  },
];

const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");

// Part #1 Point 3
// homeroute is changed to homerouter

const homeRouter = require("./src/routes/homerouter")(nav); // Part #2 Point 6
const booksRouter = require("./src/routes/booksroute")(nav); // Part #2 Point 6
const authorsRouter = require("./src/routes/authorsroute")(nav); // Part #2 Point 6

const app = new express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

//Part #2 Point 7
// cors added

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

app.get("/", function (req, res) {
  res.render("index", {});
});

// Part #1 Point 5
// port changed from 5000 to 3000 in console

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Ready on " + PORT);
});
