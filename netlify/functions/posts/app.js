const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");

const cold = new Date().toLocaleString();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (response.ok) {
      const data = await response.json();

      res.json(data);
    } else {
      res.status(response.status);
      res.send(response.statusText);
    }
  } catch (e) {
    console.error(e);

    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const warm = new Date().toLocaleString();

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (response.ok) {
      const data = await response.json();

      res.json({ ...data, cold, warm });
    } else {
      res.status(response.status);
      res.send(response.statusText);
    }
  } catch (e) {
    console.error(e);

    res.sendStatus(500);
  }
});

app.use("/api/posts", router);

module.exports = app;
