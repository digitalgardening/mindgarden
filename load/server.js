let Hyperdrive = require("hyperdrive");
let drive = new Hyperdrive("./digital-garden");
let cors = require("cors");
let express = require("express");
let app = express();
const os = require("os");
const bodyParser = require("body-parser");
app.use(bodyParser.text({ type: "text/html" }));
app.use(cors());

const onrequest = require("hyperdrive-http");

app.get("/", function (req, res) {
  res.send("💌");
});

app.post("/", function (req, res) {
  drive.writeFile(`/seeds/${Date()}.html`, req.body, function (err) {
    if (err) throw err;
  });
});

app.get("/browse", function (req, res) {
  drive.ready(function (err) {
    if (err) throw err;
    console.log("whee ✵ " + drive.key.toString("hex"));
    onrequest(drive);
  });
});

if (!module.parent) {
  // if not requiring this file, then this file is being run directly.
  // and the server should be started up
  app.listen(3000);
}

module.exports = app
