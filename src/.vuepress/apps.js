const { version } = require("../../package.json");

module.exports = [
	{
		text: "Windows",
		items: [
			{
				text: "Exe o'rnatuvchi",
				link: `https://github.com/xinuxuz/docs/releases/download/v${version}/Xinux-Setup-${version}.exe`,
				target: "_blank",
			},
		],
	},
	{
		text: "MacOS",
		items: [
			{
				text: "dmg",
				link: `https://github.com/xinuxuz/docs/releases/download/v${version}/Xinux-${version}.dmg`,
				target: "_blank",
			},
			{
				text: "zip",
				link: `https://github.com/xinuxuz/docs/releases/download/v${version}/Xinux-${version}-mac.zip`,
				target: "_blank",
			},
		],
	},
	{
		text: "Linux",
		items: [
			{
				text: "tar.xz",
				link: `https://github.com/xinuxuz/docs/releases/download/v${version}/xinux-${version}.tar.xz`,
				target: "_blank",
			},
			{
				text: "rpm",
				link: `https://github.com/xinuxuz/docs/releases/download/v${version}/xinux-${version}.x86_64.rpm`,
				target: "_blank",
			},
			{
				text: "deb",
				link: `https://github.com/xinuxuz/docs/releases/download/v${version}/xinux_${version}_amd64.deb`,
				target: "_blank",
			},
			{
				text: "AppImage",
				link: `https://github.com/xinuxuz/docs/releases/download/v${version}/Xinux-${version}.AppImage`,
				target: "_blank",
			},
		],
	},
];
