const { title, description } = require("../../package.json");

module.exports = {
	main: {
		head: {
			title: "Xinux",
			description: "Xinux O'zbekiston jamiyatiga xush kelibsiz",
		},
	},
	debian: {
		head: {
			title: "Debian | Xinux",
			description: "Debian turkumiga oid bo'lgan Xinux qo'llanmasi",
		},
	},
	redhat: {
		head: {
			title: "Red Hat | Xinux",
			description: "Red Hat turkumiga oid bo'lgan Xinux qo'llanmasi",
		},
	},
};
