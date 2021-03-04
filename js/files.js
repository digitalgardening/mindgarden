let link = () => {
  let newFile = window.getSelection();

  let new_doc = prompt("Are you connecting a pdf to this page?");

  switch (new_doc) {
    case "yes":
      openPdf();
      break;
    default:
      openHtml();
  }
};

let openPdf = () => {
  document.getElementById("flex-pdf").style.display = "inline-block";
};

let openHtml = () => {
  document.getElementById("flex-html").style.display = "inline-block";
};

let submit = () => {
  link();
};

document.getElementById("archiveFile").addEventListener("click", submit, false);

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

  console.log("we did it");
};

savePage();
