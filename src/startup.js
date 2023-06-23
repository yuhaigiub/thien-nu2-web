export default function onStartUp() {
	const musicController = document.getElementById("bgMusicController");
	const musicButton = document.getElementById("musicButton");
	const musicButtonMobile = document.getElementById("musicButtonMobile");

	musicController.volume = 0.2;
	musicController.loop = true;

	let firstClick = false;

	function trackFirstAction(e) {
		if (e.target.id !== "musicButton" || e.target.id !== "musicButtonMobile") {
			const musicButton = document.getElementById("musicButton");
			musicButton.click();
		}
	}

	window.addEventListener("click", trackFirstAction, { once: true });
	window.addEventListener("keypress", trackFirstAction, { once: true });

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
