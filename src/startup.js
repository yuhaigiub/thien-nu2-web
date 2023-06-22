import { togglePopup } from "./popup";

export default function onStartUp() {
	const playAudio = document.getElementById("playAudio");
	const muteAudio = document.getElementById("muteAudio");
	const musicController = document.getElementById("bgMusicController");
	const musicButton = document.getElementById("musicButton");
	const musicButtonMobile = document.getElementById("musicButtonMobile");

	musicController.volume = 0.2;

	playAudio.onclick = () => {
		togglePopup(false);
		musicButtonMobile.setAttribute("status", "on");
		musicButton.setAttribute("status", "on");
		musicController.play();
	};

	muteAudio.onclick = () => {
		togglePopup(false);
		musicButtonMobile.setAttribute("status", "off");
		musicButton.setAttribute("status", "off");
	};

	// music button mobile
	musicButtonMobile.onclick = () => {
		const current = musicButtonMobile.getAttribute("status");
		const newState = current === "on" ? "off" : "on";

		if (newState === "on") {
			musicController.play();
		} else {
			musicController.pause();
		}
		musicButtonMobile.setAttribute("status", newState);
	};

	musicButton.onclick = () => {
		const current = musicButton.getAttribute("status");
		const newState = current === "on" ? "off" : "on";

		if (newState === "on") {
			musicController.play();
		} else {
			musicController.pause();
		}
		musicButton.setAttribute("status", newState);
	};
}
