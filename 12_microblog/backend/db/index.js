const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://localhost/microblog-db"
});

client.connect();

module.exports = client;
