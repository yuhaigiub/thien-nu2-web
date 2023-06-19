import Swiper from "swiper";
// import "swiper/css/bundle";

import { nangcapAssets } from "./import_assets";
const options = nangcapAssets.options;
const texts = nangcapAssets.texts;

export default function runFrame4() {
	let optionIndex = 0;
	const optionImg = document.getElementById("optionImg");
	const img = new Image();
	img.src = options[optionIndex];
	optionImg.appendChild(img);

	//buttons
	const buttons = [0, 1, 2, 3, 4].map((i) => {
		const button = document.getElementById(`button${i}`);
		button.setAttribute("active", i === optionIndex ? true : false);
		return button;
	});

	// text
	const optionText = document.getElementById("optionText");
	const textImg = new Image();
	textImg.src = texts[optionIndex];
	optionText.append(textImg);

	buttons.forEach((button, i) => {
		button.addEventListener("click", () => {
			buttons[optionIndex].setAttribute("active", false);
			optionIndex = i;
			button.setAttribute("active", true);
			img.src = options[optionIndex];
			textImg.src = texts[optionIndex];
		});
	});

	// swiper
	const swiper = new Swiper(".swiper", {
		slidesPerView: 1,
		direction: "horizontal",
		loop: false,
		centeredSlides: true,
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});
}
