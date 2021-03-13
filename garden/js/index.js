import init, {
render_title,
switch_mousedown,
switch_mouseover,
switch_input,
show_menu,
add_css,
search_files,
} from "./pkg/neon.js";
async function run() {
  await init();

  document.onselectionchange = () => show_menu();

  document.onmouseover = (e) => {
    if (e.target.id) {
      switch_mouseover(e.target.id);
    }
  };

  document.onmousedown = (e) => {
    if (e.target.id) {
      switch_mousedown(e.target.id);
    } else {
      placeMenu(e);
    }
  };

  //methods I couldn't rustify: placeMenu and hiliteColor
  let placeMenu = (e) =>
    (document.getElementById("menubar2").style.top = `${e.clientY - 30}px`);

  document.getElementById("hiliteColor").onmousedown = () => {
    let s = document.querySelector("[aria-label='Text Color']");
    s.style.display = "block";
    s.oninput = (e) => document.execCommand(
        "hiliteColor",
        false,
        document.querySelector("[type='color']").value
      );
  };

  document.oninput = (e) => {
    if (e.data) {
      switch_input(e.data);
    }
  };

  title.oninput = () => requestIdleCallback(render_title);
  let openPdf = () => {
      if (document.getElementById("flex-html")) {
        document.getElementById("flex-html").style.display = "none";
      }
      let flex = document.createElement("iframe");
      flex.setAttribute("loading", "lazy");
      flex.setAttribute("height", "100%");
      flex.setAttribute("width", "100%");
      flex.id = "flex-pdf";
      flex.src = "load/pdf.html";
      document.body.append(flex);
      document.getElementById("flex-pdf").style.display = "inline-block";
    };
    let openHtml = (url) => {
      if (document.getElementById("flex-pdf")) {
        document.getElementById("flex-pdf").style.display = "none";
      }

      let flex = document.createElement("iframe");
      flex.setAttribute("loading", "lazy");
      flex.setAttribute("height", "100%");
      flex.setAttribute("width", "100%");
      flex.id = "flex-html";
      flex.src = url;
      document.body.append(flex);
      document.getElementById("flex-html").style.display = "inline-block";
    };
    let openWebPage = () => {
      let pageUrl = prompt(
        "What page do you want to open?",
        "https://www.wikipedia.org/"
      );
      openHtml(pageUrl);
    };
  let multiTask = () => {
    let new_doc = prompt("Are you connecting a pdf, note, or webpage?");
    switch (new_doc) {
      case "pdf":
        openPdf();
        break;
      case "webpage":
        openWebPage();
        break;
      default:
        openHtml("index.html");
    }
    add_css("css/grid.css");
  };

  document
    .getElementById("newWindow")
    .addEventListener("click", multiTask, false);

  let savePage = async () => {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "text/html",
      },
      body: document.documentElement.innerHTML,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  document
    .getElementById("archiveThis")
    .addEventListener("click", savePage, false);

  document
    .getElementById("search")
    .addEventListener("click", search_files, false);
}
run();
