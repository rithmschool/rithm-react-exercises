const db = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query("SELECT * FROM posts");
    return res.status(200).json(results.rows);
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO posts (title,body) VALUES ($1,$2) RETURNING *",
      [req.body.title, req.body.body]
    );
    return res.status(201).json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const results = await db.query(
      "UPDATE posts SET title=$1,body=$2 WHERE id=$3 RETURNING *",
      [req.body.title, req.body.body, req.params.id]
    );
    return res.status(200).json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const results = await db.query("DELETE FROM posts WHERE id=$1", [
      req.params.id
    ]);
    return res.status(200).json({ message: "Post deleted" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
