<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://raw.githubusercontent.com/digitalgardening/mindgarden/main/assets/tree.png" alt="Mind Garden Logo"></a>
</p>
<h2 align="center">Mind Garden</h2>
<p align="center"> Mind Garden helps you take <a href="https://maggieappleton.com/garden-history">notes that link to other notes.</a></p>
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

The point of [Mind Garden](https://www.npmjs.com/package/mindgarden) is to make this world of computers and thought what we would like it to be.

> "[L]et us forge directly toward the Screen Future, and the creation of screenworlds we will love to live in."

## 🏁 Getting Started <a name = "getting_started"></a>

First, make sure [Node](https://nodejs.org/en/download/) is installed.

Then, type this in your [terminal](https://launchschool.com/books/command_line):

`npm i -g mindgarden`

After that, type

`mindgarden`

to get started 🌳.

### Prerequisites

You need [Node](https://nodejs.org/en/download/) on your system, an [OS](http://markburgess.org/os/os.pdf) with a [terminal,](https://launchschool.com/books/command_line) and a browser with [WebAssembly](https://webassembly.org/) enabled.

### Linting

In order to lint the module for development purposes, you can run `npm run lint`. This script formats all files with [Prettier](https://prettier.io/).

## 🎈 Usage <a name="usage"></a>

When you run `mindgarden` and navigate to `localhost:3000` in a [WebAssembly](https://webassembly.org/) enabled browser, you can start writing notes.

To export your notes, type `localhost:3000/export` in your browser. Your notes will be saved in your home folder within a folder named `garden`. 

## ⛏️ Built Using <a name = "built_using"></a>

- [express](https://expressjs.com/) - server framework
- [web-sys](https://rustwasm.github.io/wasm-bindgen/api/web_sys/) - web framework in [Rust](https://doc.rust-lang.org/stable/rust-by-example/)
- [wasm-pack](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm) - [Rust](https://doc.rust-lang.org/stable/rust-by-example/) to [WebAssembly](https://webassembly.org/) compiler
- [node](https://nodejs.org/en/) - server environment

## ✍️ Authors <a name = "authors"></a>

- [Ender](https://github.com/genderev) - Idea & initial work

See also the list of [contributors](https://github.com/digitalgardening/mindgarden/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Ted Nelson's [life and work](https://maggieappleton.com/xanadu-patterns) shaping [hypertext](https://monoskop.org/File:Nelson_Ted_Literary_Machines_c1987_chs_0-1.pdf)
  > "[B]y hypertext I mean non-sequential writing — text that branches and allows choices to the reader, best read at an interactive screen...a framework of reunification."
