#!/usr/bin/env node

const server = require("./load/server");
server.listen(3000);


let path = require("path");
let express = require("express");
let serve = express();
serve.use(express.static(path.join(__dirname, "/")));

serve.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

serve.listen(8080);
