import { setPopupContent, setPopupTitle, togglePopup } from "./popup";

export default function runFrame5() {
	const ctaButton = document.getElementById("ctaButton");
	const ctaButtonMobile = document.getElementById("ctaButtonMobile");

	function onClick() {
		togglePopup(true);
		setPopupTitle("dang_ky_thong_tin");
		setPopupContent("dang_ky_thong_tin_1");
	}

	ctaButton.onclick = () => {
		onClick();
	};

	ctaButtonMobile.onclick = () => {
		onClick();
	};
}
