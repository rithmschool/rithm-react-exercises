const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");
const cors = require("cors");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/posts", postsRoutes);
app.use("/api/posts/:post_id/comments", commentsRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}

app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
