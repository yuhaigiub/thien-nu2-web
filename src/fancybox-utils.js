export function fancyboxVideo(url) {
	$.fancybox.open({
		src: url,
		opts: {
			arrows: false,
			infobar: false,
			modal: false,
			buttons: [],
			transitionEffect: "zoom-in-out",
			transitionDuration: 1000,
			baseTpl:
				`<div class="fancybox-container fancybox-video-container" role="dialog" tabindex="-1">` + `<div class="fancybox-stage"></div>` + `</div>`,
			clickContent: function (current, event) {
				return "close";
			},
			video: {
				tpl:
					`<div>` +
					'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
					'<source src="{{src}}" type="{{format}}" />' +
					'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
					"</video>" +
					'<button id="popupCloseButton"></button>' +
					`</div>`,
				autoStart: true,
			},
			afterLoad: function (instance, slide) {
				const popupCloseButton = document.getElementById("popupCloseButton");
				popupCloseButton.onclick = () => {
					instance.close();
				};
			},
		},
	});
}

export function scaleRootFancybox() {
	const target = document.querySelector(".fancybox-container");
	if (target) {
		// check on every trigger
		const mode = window.innerWidth <= 768 ? "mobile" : "pc";
		const width = target.offsetWidth;
		const height = target.offsetHeight;
		const ratio = width / height;

		const desiredWidth = window.innerWidth;
		const desiredHeight = desiredWidth / ratio;

		const ratioW = desiredWidth / width;
		const ratioH = desiredHeight / height;

		target.style.transform = `scale(${ratioW}, ${ratioH})`;
	}
}
