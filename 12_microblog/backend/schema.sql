
DROP DATABASE IF EXISTS "microblog-db";

CREATE DATABASE "microblog-db";

\c "microblog-db"
CREATE TABLE posts (id SERIAL PRIMARY KEY, title TEXT, body TEXT);
CREATE TABLE comments (id SERIAL PRIMARY KEY, text TEXT, post_id INTEGER REFERENCES "posts" (id) ON DELETE CASCADE);

