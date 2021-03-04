# Mind Garden 🌳
## Private, whimsical, decentralized note-taking

I like Notion but I don't like their privacy policy. 

I needed a note-taking app that would be fun enough to replace Notion, but more private than Notion.

I want to make it clear that the point of Mind Garden is to make it fun to live inside your computer. I live inside my computer, so I want to use a note taking app that respects my privacy while also being fun. We spend all our time online these days so let us spend the time with glee.

Make pull requests to this README if you think it is boring or doesn't make sense or [insert reason to make pull request].

## Install

`npm install mindgarden`

[I'm not a node expert...please help me.](https://github.com/digitalgardening/mindgarden/blob/main/load/server.js)

## Issues 

I am not a node expert. I figured out how to save files but not how to then view the files saved. [Please help me.](https://github.com/digitalgardening/mindgarden/blob/main/load/server.js)

This is an excerpt from `load/server.js` which exhibits my inability to finish this project essentially:

```
const onrequest = require("hyperdrive-http"); // I think mafintosh wrote this in the tests fot hyperdrive-http but I butchered it

// later on...after all the imports

app.get("/browse", function (req, res) {

drive.ready(function (err) {

if (err) throw err;

console.log("whee ✵ " + drive.key.toString("hex"));

onrequest(drive); //this doesn't work. I don't know what I did

});

});

```
      
