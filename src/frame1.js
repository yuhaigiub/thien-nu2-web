import { fancyboxVideo } from "./fancybox-utils";
import { togglePopup, setPopupTitle, setPopupContent } from "./popup";
import { isInViewport } from "./utils";
export const progressLineProcess = (fallback, mutationList, observer) => {
	const container1 = document.getElementById("container1");
	let numberOfUser;
	try {
		numberOfUser = parseInt(mutationList[0].addedNodes[0].data.replace(".", ""));
	} catch {
		// console.log("something wrong with number of user");
		numberOfUser = fallback;
	}

	const maxWidth = document.getElementById("progressLine").offsetWidth;

	//
	const checkpointValues = [0, 3000, 5000, 10000, 15000];
	const checkpoints = [0, maxWidth * 0.2, maxWidth * 0.4, maxWidth * 0.6, maxWidth * 0.8];
	let desiredWidth = 0;
	const n = checkpointValues.length;

	// if (numberOfUser <= 3000) {
	// 	desiredWidth = 0 + (numberOfUser / 3000) * (checkpoints[0] - 0);
	// 	// console.log(`checkpoint0 ${desiredWidth}`);
	// } else if (numberOfUser <= 5000) {
	// 	desiredWidth = checkpoints[0] + ((numberOfUser - 3000) / (5000 - 3000)) * (checkpoints[1] - checkpoints[0]);
	// 	// console.log(`checkpoint1 ${desiredWidth}`);
	// } else if (numberOfUser <= 10000) {
	// 	desiredWidth = checkpoints[1] + ((numberOfUser - 5000) / (10000 - 5000)) * (checkpoints[2] - checkpoints[1]);
	// } else if (numberOfUser <= 15000) {
	// 	desiredWidth = checkpoints[2] + ((numberOfUser - 10000) / (15000 - 10000)) * (checkpoints[3] - checkpoints[2]);
	// 	// console.log(`checkpoint2 ${desiredWidth}`);
	// } else {
	// 	desiredWidth = checkpoints[3] + Math.min((numberOfUser - 15000) / 3000, 1) * (checkpoints[4] - checkpoints[3]);
	// 	// console.log(`checkpoint3 ${desiredWidth}`);
	// }

	for (let i = 1; i < n; i++) {
		if (numberOfUser <= checkpointValues[i]) {
			const percent = (numberOfUser - checkpointValues[i - 1]) / (checkpointValues[i] - checkpointValues[i - 1]);
			desiredWidth = checkpoints[i - 1] + percent * (checkpoints[i] - checkpoints[i - 1]);
			break;
		}
	}

	const upperMaxAmount = 3000;
	if (numberOfUser > checkpointValues[n - 1]) {
		const percent = Math.min((numberOfUser - checkpointValues[n - 1]) / upperMaxAmount, 1);
		desiredWidth = checkpoints[n - 1] + percent * (maxWidth - checkpoints[n - 1]);
	}

	console.log(desiredWidth);
	container1.style.setProperty("--width", `${desiredWidth}px`);

	// progressItemUpdate
	const progressItems = document.querySelectorAll(".progressItem");
	progressItems.forEach((item, index) => {
		item.setAttribute("activate", numberOfUser >= checkpointValues[index]);
	});
};

export default function runFrame1() {
	const target = document.querySelector("#announcement span");
	let numberOfUser = parseInt(target.innerText.replace(".", ""));

	const playVideoButton = document.getElementById("playButton");
	playVideoButton.onclick = () => {
		fancyboxVideo("./videos/main.mp4");
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
	progressLineProcess(numberOfUser);

	// announcement
	const observer = new MutationObserver((mutationList, observer) => {
		progressLineProcess(numberOfUser, mutationList, observer);
	});
	observer.observe(target, { attributes: true, childList: true, characterData: true });

	const innerProgressLine = document.getElementById("innerProgressLine");
	const butterflyProgress = document.getElementById("butterflyProgress");

	let triggerProgressAnimation = false;
	function progressLineAnimation() {
		if (isInViewport(innerProgressLine) && !triggerProgressAnimation) {
			console.log("in view");
			innerProgressLine.style.animationName = "my_progress_animation";
			butterflyProgress.style.animationName = "my_butterfly_progress_animation";
			triggerProgressAnimation = true;
		}
	}

	window.addEventListener("load", progressLineAnimation, { once: true });
	document.body.addEventListener("scroll", progressLineAnimation);
}
