const db = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(
      `SELECT p.id,p.title,p.body,p.votes,c.id as comment_id, c.text 
        FROM posts p 
        FULL JOIN comments c 
        ON c.post_id = p.id 
      ORDER BY p.id
      `
    );
    let offset = -1; // offset for each subarray of comments
    let finalResult = [];
    const data = results.rows;
    if (results.rows.length === 0) {
      return res.status(200).json(finalResult);
    }
    let counter = data[0].id - 1; // start with lowest id
    for (let i = 0; i < data.length; i++) {
      let currentPost = results.rows[i];
      if (counter !== currentPost.id) {
        counter = currentPost.id;
        currentPost.comments = [];
        if (currentPost.text !== null && currentPost.comment_id !== null) {
          currentPost.comments.push({
            text: currentPost.text,
            id: currentPost.comment_id
          });
        }
        delete currentPost.text;
        delete currentPost.comment_id;
        finalResult.push(currentPost);
        offset++;
      } else {
        finalResult[offset].comments.push({
          text: currentPost.text,
          id: currentPost.comment_id
        });
      }
    }
    return res.status(200).json(finalResult);
  } catch (e) {
    return next(e);
  }
});

router.post("/:id/vote/:direction", async (req, res, next) => {
  try {
    let query = "";
    if (req.params.direction === "up") {
      query = "UPDATE posts SET votes = votes + 1 WHERE id=$1 RETURNING *";
    } else {
      query = "UPDATE posts SET votes = votes - 1 WHERE id=$1 RETURNING *";
    }

    const results = await db.query(query, [req.params.id]);

    return res.status(200).json(results.rows[0]);
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
