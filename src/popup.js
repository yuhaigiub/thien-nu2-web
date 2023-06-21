const popupBlackScreen = document.getElementById("popupBlackScreen");
const popupContainer = document.getElementById("popupContainer");
const popupCloseButton = document.getElementById("popupCloseButton");
const popupTitle = document.getElementById("popupTitle");
const currentServerButton = document.getElementById("currentServer");
const newServerButton = document.getElementById("newServer");

export function togglePopup(open, type = "non-video") {
	popupBlackScreen.style.opacity = open ? "1 !important" : "0 !important";
	popupBlackScreen.style.pointerEvents = open ? "all !important" : "none !important";
	popupBlackScreen.setAttribute("type", type);
	if (!open) {
		setPopupContent("none");
		popupBlackScreen.setAttribute("type", "none");
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
