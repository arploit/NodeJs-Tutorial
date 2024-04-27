const express = require("express");
const searchRouter = express.Router();

const searchBook = require("./helper/searchBook");

searchRouter.get("/search", (req, res) => {
  console.log("req", req.query);
  let query = req.query;
  let searchResult = searchBook(query);
  console.log("searchResult", searchResult);
  if (searchResult.length) {
    res.json(searchResult);
  } else res.send({ error: "No Data exist" });
});

module.exports = searchRouter;
