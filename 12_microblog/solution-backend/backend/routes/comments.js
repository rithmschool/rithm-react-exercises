const db = require("../db");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query("SELECT * FROM comments WHERE post_id=$1", [
      req.params.post_id
    ]);
    return res.json(results.rows.map(v => v.text));
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO comments (text, post_id) VALUES ($1,$2) RETURNING *",
      [req.body.text, req.params.post_id]
    );
    return res.json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const results = await db.query(
      "UPDATE comments SET text=$1 WHERE id=$2 RETURNING *",
      [req.body.text, req.params.id]
    );
    return res.json(results.rows[0]);
  } catch (e) {
    return next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const results = await db.query("DELETE FROM comments WHERE id=$1", [
      req.params.id
    ]);
    return res.status(204).json({ message: "Post deleted" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
