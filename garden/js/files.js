
let addCss = (fileName) => {
  let head = document.head;
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;
  head.appendChild(link);
}

window.onload = function () {
  let multiTask = () => {
    let new_doc = prompt("Are you connecting a new pdf to this page?");
    switch (new_doc) {
      case "yes":
        openPdf();
        break;
      default:
      openHtml("new.html");
    }
    addCss('css/grid.css');
  };

  let openPdf = () => {
    document.getElementById("flex-html").style.display = "none";
    document.getElementById("flex-pdf").style.display = "inline-block";
  };

  let openHtml = (src) => {
    document.getElementById("flex-pdf").style.display = "none";
    document.getElementById('flex-html').src = src;
    document.getElementById("flex-html").style.display = "inline-block";
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

  document.getElementById("archiveThis").addEventListener("click", savePage, false);

  let searchFiles = () => {
      window.open("localhost:3000/all")
  }

  document.getElementById("search").addEventListener("click", searchFiles, false);

  let tedNelson = () => {
    let text = window.getSelection();
    let noteLink = prompt("Which note are you linking to?")
    let insertedHtml = `<a href="${noteLink}">${text}</a><iframe src="${noteLink}" loading="lazy" class="hover" height="100%" width="50%"></iframe>`
    document.execCommand('insertHTML',false,insertedHtml);
  }


  document.getElementById("transclude").addEventListener("click", tedNelson, false);


};
