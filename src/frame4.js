import Swiper from "swiper";
// import "swiper/css/bundle";

import { nangcapAssets } from "./import_assets";
const options = nangcapAssets.options;
const texts = nangcapAssets.texts;

export default function runFrame4() {
	let currentId;
	const buttons = document.querySelectorAll("#buttonsContainer button");

	const swiperMobile = new Swiper(".frame4-swiper-mobile", {
		slidesPerView: 1,
		direction: "horizontal",
		loop: false,
		centeredSlides: true,
		grabCursor: true,
		pagination: {
			el: ".frame4-swiper-mobile .swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});

	const swiperPC = new Swiper(".frame4-swiper-pc", {
		slidesPerView: 1,
		direction: "horizontal",
		loop: false,
		centeredSlides: true,
		grabCursor: true,
		on: {
			init: function (swiper) {
				currentId = swiper.activeIndex;
				buttons[currentId].setAttribute("isActive", true);
			},
			slideChange: function (swiper) {
				const newIndex = swiper.activeIndex;
				buttons[currentId].setAttribute("isActive", false);
				buttons[newIndex].setAttribute("isActive", true);
				currentId = newIndex;
			},
		},
	});

	buttons.forEach((button, i) => {
		button.onclick = () => {
			swiperPC.slideTo(i);

			buttons[currentId].setAttribute("isActive", false);
			buttons[i].setAttribute("isActive", true);
			currentId = i;
		};
	});
}
