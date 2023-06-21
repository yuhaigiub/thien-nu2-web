import { setVideo, setYoutube } from "./videos";

const popupBlackScreen = document.getElementById("popupBlackScreen");
const popupContainer = document.getElementById("popupContainer");
const popupCloseButton = document.getElementById("popupCloseButton");
const popupTitle = document.getElementById("popupTitle");
const currentServerButton = document.getElementById("currentServer");
const newServerButton = document.getElementById("newServer");

let opening = "none";
export function togglePopup(open, type = "non-video") {
	if (open) {
		opening = type;
		popupBlackScreen.setAttribute("isOpen", true);
		popupBlackScreen.setAttribute("type", type);
		document.body.style.overflowY = "hidden";
	} else {
		setPopupContent("none");
		popupBlackScreen.removeAttribute("isOpen");
		popupBlackScreen.setAttribute("type", "none");
		if (opening === "youtube") setYoutube(""); // turn off youtube video by reseting the src
		if (opening === "video") setVideo("none");
		document.body.style.overflowY = "auto";
		opening = "none";
	}
}

export function setPopupTitle(type) {
	popupTitle.setAttribute("type", type);
}

export function setPopupContent(type) {
	popupContainer.setAttribute("type", type);
}

//----------------------------------------------

// close popup
popupCloseButton.onclick = (e) => {
	togglePopup(false);
	e.stopPropagation();
};

currentServerButton.onclick = (e) => {
	setPopupTitle("dang_ky_thong_tin");
	setPopupContent("dang_ky_thong_tin_1");
	e.stopPropagation();
};

newServerButton.onclick = (e) => {
	setPopupTitle("dang_ky_thong_tin");
	setPopupContent("dang_ky_thong_tin_2");
	e.stopPropagation();
};

popupBlackScreen.onclick = () => {
	togglePopup(false);
};

popupContainer.onclick = (e) => {
	e.stopPropagation();
};
