export default function onStartUp() {
	const musicController = document.getElementById("bgMusicController");
	const musicButton = document.getElementById("musicButton");
	const musicButtonMobile = document.getElementById("musicButtonMobile");

	musicController.volume = 0.2;

	// music button mobile
	musicButtonMobile.onclick = () => {
		const current = musicButtonMobile.getAttribute("status");
		const newState = current === "on" ? "off" : "on";

		if (newState === "on") {
			musicController.play();
		} else {
			musicController.pause();
		}
		musicButton.setAttribute("status", newState);
		musicButtonMobile.setAttribute("status", newState);
	};

	musicButton.onclick = () => {
		console.log("clicked");
		const current = musicButton.getAttribute("status");
		const newState = current === "on" ? "off" : "on";

		if (newState === "on") {
			musicController.play();
		} else {
			musicController.pause();
		}
		musicButton.setAttribute("status", newState);
		musicButtonMobile.setAttribute("status", newState);
	};
}
