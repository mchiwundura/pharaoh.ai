import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	posts: any[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		posts: [
			{
				title: "The Lion King",
				cover: "/blog/covers/thelionking.png",
				ultrawideCover: "/blog/covers/thelionking_ultrawide.png",
				showcaseCover: "/blog/covers/thelionking_showcase.png",
				category: { title: "Entertainment", color: "yellow" },
				exerpt: "Why scar has to be the most relatable movie villain out there",
				date: "12 February 2021",
				featured: true,
				link: 1,
				showcase: true,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "The Bread Basket",
				cover: "/blog/covers/thebreadbasket.png",
				link: 1,

				ultrawideCover: "/blog/covers/thebreadbasket_ultrawide.png",
				category: { title: "Web Development", color: "blue" },
				exerpt: "My Personal favorite e-commerce project",
				date: "12 February 2021",
				showcaseCover: "/blog/covers/thelionking_showcase.png",
				featured: false,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "My First Portfolio",
				cover: "/blog/covers/myportfolio.png",
				ultrawideCover: "/blog/covers/myportfolio_ultrawide.png",
				link: 1,

				category: { title: "Web Development", color: "blue" },
				exerpt: "The lost portfolio page more complex than this one",
				date: "12 February 2021",
				showcaseCover: "/blog/covers/thelionking_showcase.png",
				featured: false,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Tailwind Psycho",
				cover: "/blog/covers/bussiness_cards.png",
				link: 1,

				ultrawideCover: "/blog/covers/bussiness_cards_ultrawide.png",
				showcaseCover: "/blog/covers/bussiness_cards_showcase.png",
				category: { title: "Entertainment", color: "yellow" },
				exerpt:
					"Learning Tailwind Custom Fonts By Making Some of The Most Famous Pop Culture Bussiness Cards",
				date: "12 February 2021",
				featured: true,
				showcase: true,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Spider Man",
				cover: "/blog/covers/spider.png",
				ultrawideCover: "/blog/covers/spider_ultrawide.png",
				showcaseCover: "/blog/covers/spider_showcase.png",
				link: 1,

				category: { title: "Web Development", color: "blue" },
				exerpt: "How I made that cute little spider game on my home page",
				date: "12 February 2021",
				featured: true,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Teach AI Pharmacy",
				cover: "/blog/covers/study_ai.png",
				ultrawideCover: "/blog/covers/study_ai_ultrawide.png",
				link: 1,

				showcaseCover: "/blog/covers/study_ai_showcase.png",
				category: { title: "Mental Health", color: "green" },
				date: "12 February 2021",
				exerpt:
					"Making Tensorflow.js do the studiying for me to get that pharmacy degree",
				featured: true,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Talking about My Ex",
				cover: "/blog/covers/dating.png",
				ultrawideCover: "/blog/covers/dating_ultrawide.png",
				exerpt: "The truth on why I completely gave up on dating",
				link: 1,

				category: { title: "Mental Health", color: "green" },
				date: "12 February 2021",
				featured: false,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Relax",
				cover: "/blog/covers/breakdown.png",
				ultrawideCover: "/blog/covers/breakdown_ultrawide.png",
				category: { title: "Mental Health", color: "green" },
				link: 1,

				exerpt: "how to not have a mental brakdown",
				date: "12 February 2021",
				featured: true,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Making Guap",
				cover: "/blog/covers/guap.png",
				ultrawideCover: "/blog/covers/guap_ultrawide.png",
				category: { title: "Web Development", color: "blue" },
				exerpt: "Making an all in one money management app in Next.js",
				link: 1,

				date: "12 February 2021",
				showcaseCover: "/blog/covers/thelionking_showcase.png",
				featured: true,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Making Juicy Kotas",
				cover: "/blog/covers/juicykotas.png",
				ultrawideCover: "/blog/covers/juicykotas_ultrawide.png",
				link: 1,

				category: { title: "Web Development", color: "blue" },
				exerpt: "Cooking up a web-app for a local reataraunt",
				date: "12 February 2021",
				showcaseCover: "/blog/covers/thelionking_showcase.png",
				featured: true,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
			{
				title: "Just a To-do App",
				cover: "/blog/covers/overkilltodoapp.png",
				ultrawideCover: "/blog/covers/overkilltodoapp_ultrawide.png",
				category: { title: "Web Development", color: "blue" },
				link: 1,

				exerpt: "How to overengineer a to-do app using next js and prisma",
				date: "12 February 2021",
				showcaseCover: "/blog/covers/thelionking_showcase.png",
				featured: false,
				showcase: false,
				author: {
					name: "Munyaradzi Chiwundura",
					image: "/img/munya.png",
					link: "/munya",
				},
			},
		],
	});
}
