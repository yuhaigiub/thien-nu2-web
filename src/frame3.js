import { kynangAssets } from "./import_assets";
import { togglePopup } from "./popup";
import { setYoutube } from "./videos";
import Swiper from "swiper";

const books = kynangAssets.books;
const ingames = kynangAssets.ingames;
const icons = kynangAssets.icons;
const skillNames = ["Họa Thủy Lâu Băng", "Tương Kiến Hoan", "Li Huyền Phi Tiễn", "Bát Hoang Sát", "Hạ Phồn"];
const descriptions = [
	"Gây cho nhiều kẻ địch xung quanh sát thương thủy; Gây sát thương băng cho nhiều kể địch xung quanh Phân Thân. Khi Họa Thủy Lâu Băng gây sát thương thủy và băng sẽ giảm Kháng Thủy và Kháng Băng kẻ địch, khi gây sát thương băng cho kẻ địch, nếu dinh lực mục tiêu thấp hơn 30% sẽ có xác suất khiến mục tiêu bị đóng băng. Kỹ năng là đoạn 2 của Lâm Kính Tự Tả.",
	"Giúp bản thân tạm thời tăng Kháng Hỗn Loạn và Tăng Hỗn Loạn. Kỹ năng là đoạn 2 của Hỗn La Y.",
	"Tăng di chuyển và tốc độ vật công của bản thân, khi tốc độ đánh bản thân khá cao sẽ không tăng tốc đánh mà chuyển thành vật công. Kỹ năng là đoạn 2 của Ngưng Sương.",
	"Giúp bản thân tăng phòng thủ, trong thời gian này khi bị khống chế, kháng khống chế thường của bản thân sẽ tăng. Bát Hoang Sát là kỹ năng đoạn 2 của Huyết Tinh Sát",
	"Trị liệu bản thân và 1 đồng đội bị thương ở gần, hồi ít sinh lực tối đa. Đồng thời kèm hiệu quả của Hạ Phồn cho bản thân và đồng đội được trị liệu. Khi có hiệu quả Hạ Phồn, kháng khống chế thường tăng, khi sinh lực dưới 20% chịu sát thương sẽ xóa hiệu quả Hạ Phồn, bên cạnh đó sẽ hồi phục sinh lực. Kỹ năng đoạn 2 là Thiên Tiên Tử.",
];

const names = ["Họa Hồn", "Mị Giả", "Xạ Thủ", "Yển Sư", "Y Sư"];
const maxSkills = books.length;
const mobileIcons = kynangAssets.mobileIcons;
export const youtubeLinks = [
	"https://www.youtube.com/embed/YonS9_QJbp8",
	"https://www.youtube.com/embed/HxM_ZV2i0C4",
	"https://www.youtube.com/embed/jfobiCq0YUc",
	"https://www.youtube.com/embed/i0Q7T_9vNNE",
	"https://www.youtube.com/embed/r_0JjYUe5jo",
];

const info = names.map((_, index) => {
	return {
		name: names[index],
		book: books[index],
		ingame: ingames[index],
		icon: icons[index],
		skillName: skillNames[index],
		description: descriptions[index],
		mobileIcon: mobileIcons[index],
		youtubeLink: youtubeLinks[index],
	};
});

export default function runFrame3() {
	let skillId = 0;
	// skill background
	const skillBg = document.getElementById("skill");
	const skillImg = new Image();
	skillImg.src = info[skillId].ingame;
	skillImg.style.width = "100%";
	skillImg.style.height = "100%";
	skillBg.appendChild(skillImg);

	// skill book
	const book = document.getElementById("book");
	const bookImg = new Image();
	bookImg.src = info[skillId].book;
	book.appendChild(bookImg);

	// skillIcon
	const skillIcon = document.getElementById("skillIcon");
	skillIcon.src = info[skillId].icon;

	// skillName
	const skillName = document.getElementById("skillName");
	skillName.innerText = info[skillId].skillName;

	// skillDescription
	const skillDescription = document.getElementById("skillDescription");
	skillDescription.innerText = info[skillId].description;

	// skillText
	const skillText = document.getElementById("skillText");
	skillText.innerText = info[skillId].name;

	const playVideoButtonFrame3 = document.getElementById("playVideoButtonFrame3");
	playVideoButtonFrame3.onclick = () => {
		togglePopup(true, "youtube");
		setYoutube(youtubeLinks[skillId]);
	};

	// buttons
	const prevButton = document.getElementById("prevButton");
	const nextButton = document.getElementById("nextButton");
	function onClick(x, jump = false) {
		if (jump) {
			skillId = x;
		} else {
			skillId = skillId + x;
		}
		if (skillId < 0) skillId = maxSkills - 1;
		if (skillId === maxSkills) skillId = 0;

		skillImg.src = ingames[skillId];
		bookImg.src = books[skillId];
		skillIcon.src = info[skillId].icon;
		skillName.innerText = info[skillId].skillName;
		skillDescription.innerText = info[skillId].description;
		skillText.innerText = info[skillId].name;
		playVideoButtonFrame3.onclick = () => {
			togglePopup(true, "youtube");
			setYoutube(youtubeLinks[skillId]);
		};
	}

	prevButton.addEventListener("click", () => {
		onClick(-1);
	});
	nextButton.addEventListener("click", () => {
		onClick(1);
	});

	// mobile
	const skillSwiper = new Swiper(".skill-swiper", {
		slidesPerView: 1,
		direction: "horizontal",
		loop: false,
		centeredSlides: true,
		grabCursor: true,
		navigation: {
			nextEl: ".skill-swiper .swiper-button-next",
			prevEl: ".skill-swiper .swiper-button-prev",
		},
		pagination: {
			el: ".skill-swiper .swiper-pagination",
			clickable: true,
		},
	});
}
