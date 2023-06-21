import { togglePopup } from "./popup";
import { youtubeLinks } from "./frame3";
const popupVideoContainer = document.getElementById("popupVideoContainer");
const youtubeIframe = document.querySelector("#popupYoutubeContainer iframe");
const skillMobilePlayButtons = document.querySelectorAll(".playVideoButtonFrame3Mobile");

let currentVideo = "none";

export function setVideo(type) {
	popupVideoContainer.setAttribute("type", type);
	if (type === "none") {
		let popupVideo;
		switch (currentVideo) {
			case "male":
				popupVideo = document.getElementById("popupVideoMale");
				break;
			case "female":
				popupVideo = document.getElementById("popupVideoFemale");
				break;
			case "main":
				popupVideo = document.getElementById("popupVideoMain");
				break;
		}

		popupVideo.pause();
		popupVideo.currentTime = 0;
	}
	currentVideo = type;
}

export function setYoutube(url) {
	youtubeIframe.src = url;
}

skillMobilePlayButtons.forEach((button, index) => {
	button.onclick = () => {
		togglePopup(true, "youtube");
		setYoutube(youtubeLinks[index]);
	};
});
