import { setPopupContent, setPopupTitle, togglePopup } from "./popup.js";
import { setVideo } from "./videos.js";
import { maxUser } from "./index.js";

export default function runFrame1() {
	const target = document.querySelector("#announcement span");
	let numberOfUser = parseInt(target.innerText);

	const playVideoButton = document.getElementById("playButton");
	playVideoButton.onclick = () => {
		togglePopup(true, "video");
		setVideo("main");
	};

	// open popup
	const henUocButton = document.getElementById("henUocButton");
	const henUocButtonMobile = document.getElementById("henUocButtonMobile");
	const theLeButton = document.getElementById("theLeButton");
	henUocButton.onclick = () => {
		togglePopup(true);
		setPopupTitle("dang_ky_hen_uoc");
		setPopupContent("dang_ky_hen_uoc");
	};

	henUocButtonMobile.onclick = () => {
		togglePopup(true);
		setPopupTitle("dang_ky_hen_uoc");
		setPopupContent("dang_ky_hen_uoc");
	};

	theLeButton.onclick = () => {
		togglePopup(true);
		setPopupTitle("the_le");
		setPopupContent("the_le");
	};

	// observer
	const progressLineProcess = (mutationList, observer) => {
		console.log(maxUser);
		try {
			numberOfUser = mutationList[0].addedNodes[0].data;
		} catch {
			console.log("something wrong with number of user");
		}
		const maxWidth = document.getElementById("progressLine").offsetWidth;
		console.log(maxWidth);
		const innerProgressLine = document.getElementById("innerProgressLine");
		const desiredWidth = (maxWidth * numberOfUser) / maxUser;
		innerProgressLine.style.width = `${desiredWidth}px`;

		// progressItemUpdate
		const progressItems = document.querySelectorAll(".progressItem");
		progressItems[0].setAttribute("activate", numberOfUser >= 3000);
		progressItems[1].setAttribute("activate", numberOfUser >= 5000);
		progressItems[2].setAttribute("activate", numberOfUser >= 10000);
		progressItems[3].setAttribute("activate", numberOfUser >= 15000);
	};

	// initial call
	progressLineProcess();

	// announcement
	const observer = new MutationObserver(progressLineProcess);
	observer.observe(target, { attributes: true, childList: true, characterData: true });

	// music button mobile
	const musicButtonMobile = document.getElementById("musicButtonMobile");
	musicButtonMobile.onclick = () => {
		const current = musicButtonMobile.getAttribute("status");
		musicButtonMobile.setAttribute("status", current === "on" ? "off" : "on");
	};
}
