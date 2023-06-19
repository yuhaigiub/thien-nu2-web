import { kynangAssets } from "./import_assets";
import Swiper from "swiper";

const books = kynangAssets.books;
const ingames = kynangAssets.ingames;
const icons = kynangAssets.icons;
const skillNames = ["Họa Thủy Lâu Băng", "Tương Kiến Hoan", "Li Huyền Phi Tiễn", "Bát Hoang Sát", "Hạ Phồn"];
const descriptions = [
	"Gây cho nhiều kẻ địch xung quanh sát thương thủy; Gây sát thương băng cho nhiều kể địch xung quanh Phân Thân. Khi Họa Thủy Lâu Băng gây sát thương thủy và băng sẽ giảm Kháng Thủy và Kháng Băng kẻ địch, khi gây sát thương băng cho kẻ địch, nếu dinh lực mục tiêu thấp hơn 30% sẽ có xác suất khiến mục tiêu bị đóng băng. Kỹ năng là đoạn 2 của Lâm Kính Tự Tả.",
	"Giúp bản thân tạm thời tăng Kháng Hỗn Loạn và Tăng Hỗn Loạn. Kỹ năng là đoạn 2 của Hỗn La Y.",
	"Tăng di chuyển và tốc độ vật công của bản thân, khi tốc độ đánh bản thân khá cao sẽ không tăng tốc đánh mà chuyển thành vật công. Kỹ năng là đoạn 2 của Ngưng Sương.",
	"Tăng di chuyển và tốc độ vật công của bản thân, khi tốc độ đánh bản thân khá cao sẽ không tăng tốc đánh mà chuyển thành vật công. Kỹ năng là đoạn 2 của Ngưng Sương.",
	"Trị liệu bản thân và 1 đồng đội bị thương ở gần, hồi ít sinh lực tối đa. Đồng thời kèm hiệu quả của Hạ Phồn cho bản thân và đồng đội được trị liệu. Khi có hiệu quả Hạ Phồn, kháng khống chế thường tăng, khi sinh lực dưới 20% chịu sát thương sẽ xóa hiệu quả Hạ Phồn, bên cạnh đó sẽ hồi phục sinh lực. Kỹ năng đoạn 2 là Thiên Tiên Tử.",
];
const names = ["Họa hồn", "Mị giả", "Xạ thủ", "Yển Sư", "Y Sư"];
const maxSkills = books.length;
const mobileIcons = kynangAssets.mobileIcons;

const info = names.map((_, index) => {
	return {
		name: names[index],
		book: books[index],
		ingame: ingames[index],
		icon: icons[index],
		skillName: skillNames[index],
		description: descriptions[index],
		mobileIcon: mobileIcons[index],
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

		// mobile
		skillIconMobile.src = info[skillId].icon;
		skillNameMobile.innerText = info[skillId].skillName;
		skillDescriptionMobile.innerText = info[skillId].description;
	}

	prevButton.addEventListener("click", () => {
		onClick(-1);
	});
	nextButton.addEventListener("click", () => {
		onClick(1);
	});

	//mobileIcon
	const mobileIconContainer = document.getElementById("mobileIconContainer");
	info.map((item, index) => {
		const button = document.createElement("button");
		const buttonImg = new Image();
		buttonImg.src = item.mobileIcon;
		button.appendChild(buttonImg);
		// button.onclick = () => {
		// 	onClick(index, true);
		// };
		mobileIconContainer.appendChild(button);
	});

	const skillSwiper = new Swiper(".skill-swiper", {
		slidesPerView: 1,
		direction: "horizontal",
		loop: false,
		centeredSlides: true,
		grabCursor: true,
	});
}
