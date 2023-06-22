export function fancyboxVideo(url) {
	$.fancybox.open({
		src: url,

		opts: {
			baseTpl:
				`<div class="fancybox-container fancybox-video-container" role="dialog" tabindex="-1">` + `<div class="fancybox-stage"></div>` + `</div>`,
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
			iframe: {
				tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe><button id="popupCloseButton"></button>',
			},
			clickContent: function (current, event) {
				return false;
			},
			afterLoad: function (instance, current) {
				const popupCloseButton = document.getElementById("popupCloseButton");
				popupCloseButton.onclick = () => {
					instance.close();
				};
			},
		},
	});
}

// export function fancyboxObject(cssSelector, options) {
// 	$.fancybox.open({
// 		src: cssSelector,
// 		type: "inline",
// 		opts: {
// 			smallBtn: false,
// 			baseTpl:
// 				`<div class="fancybox-container fancybox-object-container" role="dialog" tabindex="-1">` + `<div class="fancybox-stage"></div>` + `</div>`,

// 			clickSlide: function (current, event) {
// 				// console.log(event);
// 				return false;
// 			},
// 			clickContent: function (current, event) {
// 				console.log(event);
// 			},
// 			...options,
// 		},
// 	});
// }
