import { togglePopup, setPopupTitle, setPopupContent } from "./popup";

export default function runFrame5() {
	const ctaButton = document.getElementById("ctaButton");
	const ctaButtonMobile = document.getElementById("ctaButtonMobile");

	function onClick() {
		togglePopup(true);
		setPopupTitle("dang_ky_hen_uoc");
		setPopupContent("dang_ky_hen_uoc");
	}

	ctaButton.onclick = () => {
		onClick();
	};

	ctaButtonMobile.onclick = () => {
		onClick();
	};
}
