const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { connectToDb, getDb } = require("./db");
const ObjectId = require("mongodb").ObjectId;
const PORT = process.env.PORT;

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// db connection
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(PORT || 4000, () => {
      console.log("App listening on port 4000");
    });
    db = getDb();
  }
});

// Routes
app.get("/books", (req, res) => {
  let books = [];

  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: " Could not fetch the documents" });
    });
});

app.get("/books/:id", (req, res) => {
  let id = new ObjectId(req.params.id);
  db.collection("books")
    .findOne({ _id: id })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not fetch the docs" });
    });
});

app.post("/books", (req, res) => {
  const book = req.body;

  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create a new document" });
    });
});