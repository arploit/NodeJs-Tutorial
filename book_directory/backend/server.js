const express = require("express");
const app = express();
const router = express.Router();

const books = require("./booksJson/books.json");

const bookRoutes = require("./routes/bookRoutes/index");

app.use(router);
app.use("/book", bookRoutes.searchRouter);
app.use("/book/sortBy", bookRoutes.sortRouter);
app.use("/", (req, res) => {
  res.json(books);
});

app.listen(3000, (err) => {
  if (err) console.log("error", err);
  console.log("Server listening on Port No: 3000");
});

module.exports = router;
