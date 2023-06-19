import "./styles/general.css";

import "./styles/main.css";
import "./styles/monphai.css";
import "./styles/kynang.css";
import "./styles/nangcap.css";
import "./styles/maychu.css";
import "./styles/popup.css";

import runFrame1 from "./frame1";
import runFrame2 from "./frame2";
import runFrame3 from "./frame3";
import runFrame4 from "./frame4";
import runFrame5 from "./frame5";

// UNIVERSAL CONSTANT (never change or must be taken from other sources)
export let maxUser = 15000;
// ------------------------------------------------------------------------

// test
// const target = document.querySelector("#announcement span");
// const testInput = document.getElementById("testInput");
// const testButton = document.getElementById("testButton");
// testButton.onclick = () => {
// 	target.innerText = parseInt(testInput.value);
// };

runFrame1();
runFrame2();
runFrame3();
runFrame4();
runFrame5();

const root = document.getElementById("root");
const popup = document.getElementById("popupScale");
root.style.transformOrigin = "top left";

let mode = "pc";
let width = root.offsetWidth;
let height = root.offsetHeight;
let ratio = width / height;

console.log(width, height);

function scaleRoot() {
	if ((window.innerWidth <= 768 && mode !== "mobile") || (window.innerWidth > 768 && mode !== "pc")) {
		// mobile
		width = root.offsetWidth;
		height = root.offsetHeight;
		ratio = width / height;
		mode = mode === "pc" ? "mobile" : "pc";
		maxUser = mode === "pc" ? 15000 : 15000;
		console.log(`switch to ${mode}`);
	}

	const desiredWidth = window.innerWidth;
	const desiredHeight = desiredWidth / ratio;

	const ratioW = desiredWidth / width;
	const ratioH = desiredHeight / height;

	root.style.transform = `scale(${ratioW}, ${ratioH})`;
	popup.style.transform = `scale(${ratioW}, ${ratioH})`;
}

window.addEventListener("load", scaleRoot);
window.addEventListener("resize", scaleRoot);
