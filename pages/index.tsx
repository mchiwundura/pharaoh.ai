import type { NextPage } from "next";
import Head from "next/head";
import Macbook from "../components/macbook/Macbook";
import TechStackSection from "../components/home/TechStackSection";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ContactSection from "../components/home/ContactSection";
import BlogsSection from "../components/home/BlogsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import HeroSection from "../components/home/HeroSection";
import SEO from "../components/Seo";

const Home: NextPage = (props: any) => {
	return (
		<>
			<SEO
				description="Hie I'm Munyaradzi and I am a whole IT department"
				image='https://therealmunya.vercel.app/munya.png'
				icon='/munya_icon.png'
				openGraphType='website'
				schemaType='website'
				title='My Portfolio | Munyaradzi Chiwundura'
				url='https:therealmunya.vercel.app'
			/>
			<main className='w-screen lg:px-20 flex flex-col items-center pb-32'>
				<Macbook />
				<div className='h-[120vh]'></div>
				<HeroSection />
				<ProjectsSection />
				<TechStackSection />
				<BlogsSection showcase={props.showcase} posts={props.posts} />
				<ContactSection />
			</main>
		</>
	);
};

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join("blog_posts"));
	const posts = files.map((filename) => {
		const slug = filename.replace(".mdx", "");
		const markdownWithMeta = fs.readFileSync(
			path.join("blog_posts", filename),
			"utf-8"
		);
		const { data: frontmatter } = matter(markdownWithMeta);
		return { slug, frontmatter };
	});
	return {
		props: {
			posts: posts
				.filter((x) => x.frontmatter.featured === true)
				.filter((x) => x.frontmatter.showcase === false)
				.slice(0, 4),
			showcase: posts.filter((x) => x.frontmatter.showcase === true)[0],
		},
	};
};

export default Home;
