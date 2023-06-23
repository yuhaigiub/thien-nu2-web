import "./styles/general.css";
import "./styles/main.css";
import "./styles/monphai.css";
import "./styles/kynang.css";
import "./styles/nangcap.css";
import "./styles/maychu.css";
import "./styles/popup.css";
import "./styles/fancybox-styling.css";

import runFrame1, { progressLineProcess } from "./frame1";
import runFrame2 from "./frame2";
import runFrame3 from "./frame3";
import runFrame4 from "./frame4";
import runFrame5 from "./frame5";
import onStartUp from "./startup";

import "lazysizes";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import "animate.css";

// import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";

import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);

// jquery and fancybox
const $ = require("jquery");
window.$ = $;
window.jQuery = $;
require("@fancyapps/fancybox");

// ------------------------------------------------------------------------

onStartUp();
runFrame1();
runFrame2();
runFrame3();
runFrame4();
runFrame5();

const popupScale = document.getElementById("popupScale");
const outerRoot = document.getElementById("outerRoot");
const root = document.getElementById("root");
root.style.transformOrigin = "top left";

let mode, width, height, ratio;

function scaleRoot() {
	// check on every trigger
	mode = window.innerWidth <= 768 ? "mobile" : "pc";
	width = root.offsetWidth;
	height = root.offsetHeight;
	ratio = width / height;

	const desiredWidth = window.innerWidth;
	const desiredHeight = desiredWidth / ratio;

	const ratioW = desiredWidth / width;
	const ratioH = desiredHeight / height;

	outerRoot.style.width = `${desiredWidth}px`;
	outerRoot.style.height = `${desiredHeight}px`;

	root.style.transform = `scale(${ratioW}, ${ratioH})`;
	popupScale.style.transform = `scale(${ratioW}, ${ratioH})`;

	const target = document.querySelector("#announcement span");
	const numberOfUser = parseInt(target.innerText.replace(".", ""));
	progressLineProcess(numberOfUser);
}

window.addEventListener("load", scaleRoot);
window.addEventListener("resize", scaleRoot);
