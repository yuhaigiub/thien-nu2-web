import { trackFirstAction } from "./index";

export default function onStartUp() {
	const musicController = document.getElementById("bgMusicController");
	const musicButton = document.getElementById("musicButton");
	const musicButtonMobile = document.getElementById("musicButtonMobile");

	musicController.volume = 0.2;
	musicController.loop = true;

	let firstClick = false;

	function trackFirstAction(e) {
		console.log("first action tracker");
		if (e.target.id !== "musicButton" || e.target.id !== "musicButtonMobile") {
			const musicButton = document.getElementById("musicButton");
			musicButton.click();
		}

		window.removeEventListener("keypress", trackFirstAction);
		window.removeEventListener("click", trackFirstAction);
	}

	window.addEventListener("click", trackFirstAction);
	window.addEventListener("keypress", trackFirstAction);

	// music button mobile
	musicButtonMobile.onclick = (e) => {
		const current = musicButtonMobile.getAttribute("status");
		const newState = current === "on" ? "off" : "on";

		if (newState === "on") {
			musicController.play();
		} else {
			musicController.pause();
		}
		e.stopPropagation();
		musicButton.setAttribute("status", newState);
		musicButtonMobile.setAttribute("status", newState);

		if (!firstClick) {
			window.removeEventListener("keypress", trackFirstAction);
			window.removeEventListener("click", trackFirstAction);
			firstClick = true;
		}
	};

	musicButton.onclick = (e) => {
		console.log("clicked");
		const current = musicButton.getAttribute("status");
		const newState = current === "on" ? "off" : "on";

		if (newState === "on") {
			musicController.play();
		} else {
			musicController.pause();
		}
		e.stopPropagation();
		musicButton.setAttribute("status", newState);
		musicButtonMobile.setAttribute("status", newState);

		if (!firstClick) {
			window.removeEventListener("keypress", trackFirstAction);
			window.removeEventListener("click", trackFirstAction);
			firstClick = true;
		}
	};
}
