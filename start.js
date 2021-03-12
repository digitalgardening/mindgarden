#!/usr/bin/env node

let path = require("path");
let os = require("os");
let fs = require("fs-extra");
let fsp = require("fs/promises");
let copy = require("recursive-copy");
let cors = require("cors");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.text({ type: "text/html" }));
app.use(cors());
const home = path.join(__dirname, "/garden");

let writeFile = (path, text) => {
  //TODO: change from callback to promise
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

app.get("/export", async function (req, res) {
  let newPath = path.join(os.homedir(), "/garden");
  let oldIndex = path.join(os.homedir(), "/garden/js/index.js");
  let newIndex = path.join(os.homedir(), "/garden/js/link.js");

  let options = {
    filter: [
      "**",
      "!**/**g.wasm",
      "!**/**n.js",
      "!**/**s.js",
      "!**/**x.js",
      "!**/**d.css",
      "!**/**f.html",
      "!index.html",
    ],
  };

  let afterCopied = async () => {
    await Promise.all([
      fs.remove(path.join(os.homedir(), "/garden/js/pkg")),
      fs.remove(path.join(os.homedir(), "/garden/load")),
      fsp.rename(newIndex, oldIndex),
    ]);
  };

  copy(home, newPath, options)
    .then(function (results) {
      console.info("Copied " + results.length + " files");
      afterCopied();
    })
    .catch(function (error) {
      console.error("Copy failed: " + error);
    });

  res.send("⚗︎");
});

app.listen(3000);

console.log("Open http://localhost:3000 in your browser to start writing 🍃");
