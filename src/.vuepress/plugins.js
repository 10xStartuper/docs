module.exports = [
	"reading-progress",
	[
		"vuepress-plugin-code-copy",
		{
			align: "bottom",
			color: "#646464",
			backgroundTransition: true,
			backgroundColor: "#262626",
			successText: "Ko'chirib olindi!",
		},
	],
	[
		"@vuepress/plugin-pwa",
		{
			serviceWorker: true,
			popupComponent: "MySWUpdatePopup",
			updatePopup: {
				message: "Yangi ma'lumot mavjud!",
				buttonText: "Yangilash",
			},
		},
	],
	"@vuepress/plugin-back-to-top",
	"@vuepress/plugin-medium-zoom",
	"@vuepress/plugin-nprogress",
];
