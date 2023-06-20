import { setPopupContent, setPopupTitle, togglePopup } from "./popup.js";
import { setVideo } from "./videos.js";

export const progressLineProcess = (fallback, fallbackTarget, mutationList, observer) => {
	let numberOfUser;
	try {
		numberOfUser = parseInt(mutationList[0].addedNodes[0].data.replace(".", ""));
	} catch {
		// console.log("something wrong with number of user");
		numberOfUser = fallback;
	}

	const maxWidth = document.getElementById("progressLine").offsetWidth;

	//
	const checkpoints = [maxWidth * 0.2, maxWidth * 0.4, maxWidth * 0.6, maxWidth * 0.8, maxWidth];

	let desiredWidth = 0;
	if (numberOfUser <= 3000) {
		desiredWidth = 0 + (numberOfUser / 3000) * (checkpoints[0] - 0);
		// console.log(`checkpoint0 ${desiredWidth}`);
	} else if (numberOfUser <= 5000) {
		desiredWidth = checkpoints[0] + ((numberOfUser - 3000) / (5000 - 3000)) * (checkpoints[1] - checkpoints[0]);
		// console.log(`checkpoint1 ${desiredWidth}`);
	} else if (numberOfUser <= 10000) {
		desiredWidth = checkpoints[1] + ((numberOfUser - 5000) / (10000 - 5000)) * (checkpoints[2] - checkpoints[1]);
	} else if (numberOfUser <= 15000) {
		desiredWidth = checkpoints[2] + ((numberOfUser - 10000) / (15000 - 10000)) * (checkpoints[3] - checkpoints[2]);
		// console.log(`checkpoint2 ${desiredWidth}`);
	} else {
		desiredWidth = checkpoints[3] + Math.min((numberOfUser - 15000) / 3000, 1) * (checkpoints[4] - checkpoints[3]);
		// console.log(`checkpoint3 ${desiredWidth}`);
	}

	const innerProgressLine = document.getElementById("innerProgressLine");
	innerProgressLine.style.width = `${desiredWidth}px`;

	// progressItemUpdate
	const progressItems = document.querySelectorAll(".progressItem");
	progressItems[0].setAttribute("activate", numberOfUser >= 3000);
	progressItems[1].setAttribute("activate", numberOfUser >= 5000);
	progressItems[2].setAttribute("activate", numberOfUser >= 10000);
	progressItems[3].setAttribute("activate", numberOfUser >= 15000);
};

export default function runFrame1() {
	const target = document.querySelector("#announcement span");
	let numberOfUser = parseInt(target.innerText.replace(".", ""));

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

	// observer (on number of user change)

	// initial call
	progressLineProcess(numberOfUser, target);

	// announcement
	const observer = new MutationObserver((mutationList, observer) => {
		progressLineProcess(numberOfUser, target, mutationList, observer);
	});
	observer.observe(target, { attributes: true, childList: true, characterData: true });

	// music button mobile
	const musicButtonMobile = document.getElementById("musicButtonMobile");
	musicButtonMobile.onclick = () => {
		const current = musicButtonMobile.getAttribute("status");
		musicButtonMobile.setAttribute("status", current === "on" ? "off" : "on");
	};
}
