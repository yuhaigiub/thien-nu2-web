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

	// half width
	const itemWidth = document.querySelector(".progressItem").offsetWidth / 2;

	let desiredWidth = 0;
	const checkpointValues = [0, 3000, 5000, 10000, 15000, 18000];
	const checkpoints = [0, maxWidth * 0.2, maxWidth * 0.4, maxWidth * 0.6, maxWidth * 0.8];
	const n = checkpointValues.length;

	const intervals = [[checkpoints[0], checkpoints[1] - itemWidth]];
	for (let i = 1; i < n - 1; i++) {
		intervals.push([checkpoints[i] + itemWidth, checkpoints[i + 1] - itemWidth]);
	}
	intervals.push([checkpoints[n - 1] + itemWidth, maxWidth]);

	for (let i = 0; i < n - 1; i++) {
		if (numberOfUser <= checkpointValues[i + 1]) {
			const interval = intervals[i];
			const percent = (numberOfUser - checkpointValues[i]) / (checkpointValues[i + 1] - checkpointValues[i]);
			desiredWidth = interval[0] + percent * (interval[1] - interval[0]);
			break;
		}
	}

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
