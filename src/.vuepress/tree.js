const apps = require("./apps");
const socials = require("./social");

module.exports = {
	main: {
		selectText: "Turkum",
		label: "Asosiy",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/malumot/",
			},
			{
				text: "Jamoa",
				link: "/jamoa/",
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
			{
				text: "Dasturlar",
				ariaLabel: "Dasturlarimiz",
				items: apps,
			},
		],
		sidebar: {
			"/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
		},
	},
	arch: {
		selectText: "Turkum",
		label: "Arch",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/arch/malumot/",
			},
			{
				text: "Distribut",
				ariaLabel: "Distributlar",
				items: [
					{
						text: "Manjaro",
						link: "/arch/distribut/Manjaro/",
					},
					{
						text: "Black Arch",
						link: "/arch/distribut/Black Arch/",
					},
					{
						text: "Xeonix",
						link: "/arch/distribut/Xeonix/",
					},
				],
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
			{
				text: "Dasturlar",
				ariaLabel: "Dasturlarimiz",
				items: apps,
			},
		],
		sidebar: {
			"/arch/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/arch/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
			"/arch/distribut/Manjaro/": [
				{
					title: "Manjaro",
					collapsable: false,
					children: [
						"",
						"/arch/distribut/Manjaro/ornatish",
						"/arch/distribut/Manjaro/maslahatlar",
						"/arch/distribut/Manjaro/interfeys",
						"/arch/distribut/Manjaro/solishtirish",
						"/arch/distribut/Manjaro/yuklash",
					],
				},
			],
			"/arch/distribut/Black Arch/": [
				{
					title: "Black Arch",
					collapsable: false,
					children: [
						"",
						"/arch/distribut/Black Arch/ornatish",
						"/arch/distribut/Black Arch/maslahatlar",
						"/arch/distribut/Black Arch/interfeys",
						"/arch/distribut/Black Arch/solishtirish",
						"/arch/distribut/Black Arch/yuklash",
					],
				},
			],
			"/arch/distribut/Xeonix/": [
				{
					title: "Xeonix",
					collapsable: false,
					children: [
						"",
						"/arch/distribut/Xeonix/ornatish",
						"/arch/distribut/Xeonix/maslahatlar",
						"/arch/distribut/Xeonix/interfeys",
						"/arch/distribut/Xeonix/solishtirish",
						"/arch/distribut/Xeonix/yuklash",
					],
				},
			],
		},
	},
	debian: {
		selectText: "Turkum",
		label: "Debian",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/debian/malumot/",
			},
			{
				text: "Distribut",
				ariaLabel: "Distributlar",
				items: [
					{
						text: "Manjaro",
						link: "/debian/distribut/Ubuntu/",
					},
					{
						text: "Astra Linux",
						link: "/debian/distribut/AstraLinux/",
					},
					{
						text: "MX Linux",
						link: "/debian/distribut/MXLinux/",
					},
					{
						text: "Black Arch",
						link: "/debian/distribut/Raspbian/",
					},
					{
						text: "CentOS",
						link: "/debian/distribut/AntiX/",
					},
				],
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
			{
				text: "Dasturlar",
				ariaLabel: "Dasturlarimiz",
				items: apps,
			},
		],
		sidebar: {
			"/debian/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/debian/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
			"/debian/distribut/Ubuntu/": [
				{
					title: "Manjaro",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/Manjaro/ornatish",
						"/debian/distribut/Manjaro/maslahatlar",
						"/debian/distribut/Manjaro/interfeys",
						"/debian/distribut/Manjaro/solishtirish",
						"/debian/distribut/Manjaro/yuklash",
					],
				},
			],
			"/debian/distribut/AntiX/": [
				{
					title: "CentOS",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/AntiX/ornatish",
						"/debian/distribut/AntiX/maslahatlar",
						"/debian/distribut/AntiX/interfeys",
						"/debian/distribut/AntiX/solishtirish",
						"/debian/distribut/AntiX/yuklash",
					],
				},
			],
			"/debian/distribut/AstraLinux/": [
				{
					title: "AstraLinux",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/AstraLinux/ornatish",
						"/debian/distribut/AstraLinux/maslahatlar",
						"/debian/distribut/AstraLinux/interfeys",
						"/debian/distribut/AstraLinux/solishtirish",
						"/debian/distribut/AstraLinux/yuklash",
					],
				},
			],
			"/debian/distribut/MXLinux/": [
				{
					title: "MXLinux",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/MXLinux/ornatish",
						"/debian/distribut/MXLinux/maslahatlar",
						"/debian/distribut/MXLinux/interfeys",
						"/debian/distribut/MXLinux/solishtirish",
						"/debian/distribut/MXLinux/yuklash",
					],
				},
			],
			"/debian/distribut/Raspbian/": [
				{
					title: "Black Arch",
					collapsable: false,
					children: [
						"",
						"/debian/distribut/Black Arch/ornatish",
						"/debian/distribut/Black Arch/maslahatlar",
						"/debian/distribut/Black Arch/interfeys",
						"/debian/distribut/Black Arch/solishtirish",
						"/debian/distribut/Black Arch/yuklash",
					],
				},
			],
		},
	},
	redhat: {
		selectText: "Turkum",
		label: "Red Hat",
		ariaLabel: "Turkumlar",
		nav: [
			{
				text: "Asosiy",
				link: "/",
			},
			{
				text: "Ma'lumot",
				link: "/redhat/malumot/",
			},
			{
				text: "Distribut",
				ariaLabel: "Distributlar",
				items: [
					{
						text: "CentOS",
						link: "/redhat/distribut/CentOS/",
					},
				],
			},
			{
				text: "Tarmoq",
				ariaLabel: "Tarmoqlarimiz",
				items: socials,
			},
			{
				text: "Dasturlar",
				ariaLabel: "Dasturlarimiz",
				items: apps,
			},
		],
		sidebar: {
			"/redhat/malumot/": [
				{
					title: "Ma'lumotlar",
					collapsable: false,
					children: [""],
				},
			],
			"/redhat/jamoa/": [
				{
					title: "Jamoamiz",
					collapsable: false,
					children: [""],
				},
			],
			"/redhat/distribut/CentOS/": [
				{
					title: "CentOS",
					collapsable: false,
					children: [
						"",
						"/redhat/distribut/CentOS/ornatish",
						"/redhat/distribut/CentOS/maslahatlar",
						"/redhat/distribut/CentOS/interfeys",
						"/redhat/distribut/CentOS/solishtirish",
						"/redhat/distribut/CentOS/yuklash",
					],
				},
			],
		},
	},
};
