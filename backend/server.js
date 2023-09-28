const express = require("express");
const chats = require("./data/data");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("My home api is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
