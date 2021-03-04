import "./files.js";
import init, {
  switch_mouseover,
  switch_mousedown,
  switch_input,
  showMenu,
  renderTitle,
} from "./pkg/neon.js";
async function run() {
  await init();

  document.onselectionchange = () => showMenu();

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
    s.oninput = (e) =>
      document.execCommand(
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

  title.oninput = () => requestIdleCallback(renderTitle);
}

run();
