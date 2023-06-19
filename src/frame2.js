import { togglePopup } from "./popup.js";
import { setVideo } from "./videos.js";

const maleHTML = `<h3 id="monphaiTitle">NAM ĐIỆP KHÁCH: MỊCH KHANH</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur expedita similique voluptates illum odit.</p>`;
const femaleHTML = `<h3 id="monphaiTitle">NỮ ĐIỆP KHÁCH: MỊCH KHANH</h3><p>Là một người yêu hoa và cái đẹp, đấu tranh hết mình để giúp tộc Bạch Điệp hóa giải lời nguyền của Thần Vu.</p>`;

export default function runFrame2() {
	let isMale = true;
	// display character
	const characterDisplay = document.getElementById("characterDisplay");
	characterDisplay.setAttribute("gender", isMale ? "male" : "female");

	// text box
	const textBox = document.querySelector("#textBox #text");
	textBox.innerHTML = isMale ? maleHTML : femaleHTML;

	// swap character button
	const swapCharacterButton = document.getElementById("swapCharacterButton");
	swapCharacterButton.setAttribute("gender", isMale ? "male" : "female");
	swapCharacterButton.addEventListener("click", () => {
		isMale = !isMale;
		swapCharacterButton.setAttribute("gender", isMale ? "male" : "female");
		characterDisplay.setAttribute("gender", isMale ? "male" : "female");
		textBox.innerHTML = isMale ? maleHTML : femaleHTML;
	});

	const playVideoButton = document.getElementById("playVideoButtonFrame2");
	playVideoButton.onclick = () => {
		togglePopup(true, "video");
		setVideo(isMale ? "male" : "female");
	};
}
