const motionSection: any = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const motionText: any = {
	hidden: { opacity: 0, y: 20 },
	show: { y: 0, opacity: 0.5 },
	transition: {
		duration: 1,
	},
};
const motionItem: any = {
	hidden: { opacity: 0, y: 20 },
	show: { y: 0, opacity: 1 },
	transition: {
		duration: 1,
	},
};

export { motionSection, motionText, motionItem };
