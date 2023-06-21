export default function fancyBoxInit() {
	const playButton = document.getElementById("playButton");
	playButton.onclick = () => {
		$.fancybox.open({
			src: "./videos/main.mp4",
			opts: {
				arrows: false,
				infobar: false,
				buttons: [],
				baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-stage"></div>',
			},
		});
	};
}
