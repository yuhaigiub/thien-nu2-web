import { togglePopup } from "./popup";
import { youtubeLinks } from "./frame3";
const popupVideoContainer = document.getElementById("popupVideoContainer");
const youtubeIframe = document.querySelector("#popupYoutubeContainer iframe");
const skillMobilePlayButtons = document.querySelectorAll(".playVideoButtonFrame3Mobile");

export function setVideo(type) {
	popupVideoContainer.setAttribute("type", type);
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
