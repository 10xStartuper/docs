const tree = require("./tree");
const heads = require("./head");
const head = require("./meta");
const theme = require("./theme");
const plugins = require("./plugins");
const { repository } = require("../../package");

module.exports = {
	dest: "build",
	theme: "xenon",
	locales: {
		"/": heads.main.head,
		"/debian/": heads.debian.head,
	},
	head: head,
	themeConfig: {
		xenon: theme.xenon,
		logo: "/xinux.svg",
		searchPlaceholder: "Izlash...",
		smoothScroll: true,
		repo: repository["link"],
		repoLabel: "Ishtirok eting!",
		editLinks: true,
		docsDir: "src",
		docsBranch: "main",
		docsRepo: "xinuxuz/docs",
		editLinkText: "O'zgartirish kiriting!",
		lastUpdated: false,
		locales: {
			"/": tree.main,
			"/debian/": tree.debian,
		},
	},
	plugins: plugins,
};
