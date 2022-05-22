const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");

app.use("/", express.static(path.join(__dirname, "src")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

server.listen(5000, () => console.log(`Server is running on port 5000`));
