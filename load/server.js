let Hyperdrive = require("hyperdrive");
let archive = new Hyperdrive("./digital-garden");
let cors = require("cors");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.text({ type: "text/html" }));
app.use(cors());

app.get("/", function (req, res) {
  res.send("💌");
});

app.post("/", function (req, res) {
  archive.writeFile(`/seeds/${Date()}.html`, req.body, function (err) {
    if (err) throw err;
  });
});

let onrequest = require("hyperdrive-http");

app.get("/browse", function (req, res) {
  console.log("whee ✵ " + archive.key.toString("hex"));
  let onreq = onrequest(archive);
  onreq(req, res);
});

if (!module.parent) {
  // if not requiring this file, then this file is being run directly.
  // and the server should be started up
  app.listen(3000);
}

module.exports = app
