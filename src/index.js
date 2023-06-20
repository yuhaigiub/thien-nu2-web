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

const root = document.getElementById("root");
const popup = document.getElementById("popupScale");
root.style.transformOrigin = "top left";

let mode = "pc";
let width = root.offsetWidth;
let height = root.offsetHeight;
let ratio = width / height;

function scaleRoot() {
	if ((window.innerWidth <= 768 && mode !== "mobile") || (window.innerWidth > 768 && mode !== "pc")) {
		// mobile
		width = root.offsetWidth;
		height = root.offsetHeight;
		ratio = width / height;
		mode = mode === "pc" ? "mobile" : "pc";
		const target = document.querySelector("#announcement span");
		const numberOfUser = parseInt(target.innerText.replace(".", ""));
		progressLineProcess(numberOfUser, target);
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
