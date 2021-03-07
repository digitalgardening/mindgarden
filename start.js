#!/usr/bin/env node

let path = require("path");
let os = require("os");
let fs = require("fs-extra");
let cors = require("cors");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.text({ type: "text/html" }));
app.use(cors());
const home = path.join(__dirname, "/garden");

let writeFile = (path, text) => {
  fs.writeFile(path, text, (err) => {
    if (err) console.log(err);
    else {
      console.log("File saved.");
    }
  });
};

app.use(express.static(home)); //just serve the garden

app.post("/", function (req, res) {
  let newFilePath = path.join(__dirname, `/garden/${Date()}.html`); //changed from os homedir to node module dir
  fs.ensureDir(home)
    .then(() => {
      writeFile(newFilePath, req.body);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/all", function (req, res) {
  let filenames = fs.readdirSync(home);
  let files = [];
  filenames.forEach((file) => {
    if (file.includes("Time")) {
      files.push(`<a href='${file}'>${file}</a>`);
    }
  });
  let fileList = files.join("<br>");
  res.send(
    `<html><body><head><style>body, a{font-family:sans-serif;font-size:80%;}</style></head><h1>Seeds 🌱</h1><br>${fileList}</body></html>`
  );
});

app.listen(3000);

console.log("Open http://localhost:3000 in your browser to start writing 🍃");
