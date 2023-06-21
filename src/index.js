import "./styles/general.css";

import "./styles/main.css";
import "./styles/monphai.css";
import "./styles/kynang.css";
import "./styles/nangcap.css";
import "./styles/maychu.css";
import "./styles/popup.css";

import runFrame1, { progressLineProcess } from "./frame1";
import runFrame2 from "./frame2";
import runFrame3 from "./frame3";
import runFrame4 from "./frame4";
import runFrame5 from "./frame5";

import Swiper, { Pagination, Navigation } from "swiper";

Swiper.use([Pagination, Navigation]);

// ------------------------------------------------------------------------

runFrame1();
runFrame2();
runFrame3();
runFrame4();
runFrame5();

const outerRoot = document.getElementById("outerRoot");
const root = document.getElementById("root");
const popup = document.getElementById("popupScale");
root.style.transformOrigin = "top left";

let mode, width, height, ratio;

function scaleRoot() {
	// check on every trigger
	mode = window.innerWidth <= 768 ? "mobile" : "pc";
	width = root.offsetWidth;
	height = root.offsetHeight;
	ratio = width / height;
	const target = document.querySelector("#announcement span");
	const numberOfUser = parseInt(target.innerText.replace(".", ""));
	progressLineProcess(numberOfUser);

	// if ((window.innerWidth <= 768 && mode !== "mobile") || (window.innerWidth > 768 && mode !== "pc")) {
	// 	// mobile
	// 	width = root.offsetWidth;
	// 	height = root.offsetHeight;
	// 	ratio = width / height;
	// 	mode = mode === "pc" ? "mobile" : "pc";
	// 	const target = document.querySelector("#announcement span");
	// 	const numberOfUser = parseInt(target.innerText.replace(".", ""));
	// 	progressLineProcess(numberOfUser);
	// }

	const desiredWidth = window.innerWidth;
	const desiredHeight = desiredWidth / ratio;

	const ratioW = desiredWidth / width;
	const ratioH = desiredHeight / height;

	outerRoot.style.height = `${desiredHeight}px`;

	root.style.transform = `scale(${ratioW}, ${ratioH})`;
	popup.style.transform = `scale(${ratioW}, ${ratioH})`;
}

// // debug
// const cb = (mutationList, observer) => {
// 	console.log("observer said that blackScreen state changed");
// };
// const blackScreen = document.getElementById("popupBlackScreen");
// const obs = new MutationObserver(cb);
// obs.observe(blackScreen, { attributes: true, childList: true, characterData: true });

window.addEventListener("load", scaleRoot);
window.addEventListener("resize", scaleRoot);
