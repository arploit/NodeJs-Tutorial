const express = require("express");
const sortRouter = express.Router();
const books = require("../../../booksJson/books.json");

const sortByName = require("./helper.js/sortByName");
const sortByAuthor = require("./helper.js/sortByAuthor");
const sortByYear = require("./helper.js/sortByYear");

sortRouter.get("/name", (req, res) => {
  res.json(sortByName(books));
});

sortRouter.get("/author", (req, res) => {
  res.json(sortByAuthor(books));
});

sortRouter.get("/year", (req, res) => {
  res.json(sortByYear(books));
});

module.exports = sortRouter;
