/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import BlogThumbnail from "../../components/home/BlogThumbnail";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogPost: NextPage = (props: any) => {
	const router = useRouter();
	const { id } = router.query;
	console.log(props.showcase.frontmatter.cover);
	return (
		<main className='w-screen flex flex-col items-center'>
			<div className='w-screen  h-[30vw] flex items-center justify-center flex-col relative'>
				<h3
					style={{ color: props.post.category.color }}
					className='md:text-xl font-medium text-lg'
				>
					{props.post.category.title}
				</h3>
				<h1 className='md:text-5xl text-3xl text-white font-bold'>
					{props.post.title}
				</h1>
				<h3 className='w-96 text-center text-white text-lg md:text-xl mt-1 md:mt-3 '>
					{props.post.exerpt}
				</h3>
				<div
					className={
						" object-fill mx-0 h-full -z-10 px-0 w-screen absolute opacity-70"
					}
				>
					<Image src={`${props.post.ultrawideCover}`} layout='fill' alt='' />
				</div>
			</div>
			<article
				className={`md:w-1/2 w-8/12 blog_content text-white ${props.post.category.color}`}
				dangerouslySetInnerHTML={{ __html: marked(props.content) }}
			></article>
			<section className='relative w-screen flex flex-col items-center'>
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className='my-12 text-white font-bold text-5xl w-1/2 '
				>
					Read More
				</motion.h2>
				<div className='w-full flex justify-center'>
					<div className='grid gap-4 md:grid-cols-3 grid-cols-1 w-8/12 md:w-1/2'>
						{/* featured Blog */}
						<div className='md:hidden'>
							<BlogThumbnail
								id={props.showcase.slug}
								category={props.showcase.frontmatter.category}
								cover={props.showcase.frontmatter.cover}
								intro={props.showcase.frontmatter.exerpt}
								link={props.showcase.slug}
								title={props.showcase.frontmatter.title}
								key={props.showcase.slug}
							/>
						</div>
						<Link href={`/blogs/${props.showcase.slug}`} passHref>
							<div className='hover:scale-105 hidden col-span-2 group shadow-lg m-2 w-full h-full cursor-pointer relative -top-2 -left-2  text-white pb-4 hover:shadow-2xl transition-all md:flex'>
								<div className='absolute top-0 z-10 flex items-center justify-center right-0 h-full w-full'>
									<div
										className={`bg-${props.showcase.frontmatter.category.color}-500  text-white  bg-opacity-80 h-24 font-bold flex items-center justify-center transition-all scale-0 group-hover:scale-100 w-24 rounded-full`}
									>
										Read Now
									</div>
								</div>
								<div className='opacity-50'>
									<Image
										src={props.showcase.frontmatter.cover}
										layout='fill'
										alt={props.showcase.frontmatter.showcaseCover}
									/>
								</div>
								<h4
									style={{
										color: props.showcase.frontmatter.category.color,
										opacity: 0.5,
									}}
									className='px-4 my-1 text-lg absolute bottom-14 group-hover:bottom-44 transition-all'
								>
									{props.showcase.frontmatter.category.title}
								</h4>
								<h3 className='font-bold text-3xl px-4 absolute bottom-6 group-hover:bottom-36 transition-all'>
									{props.showcase.frontmatter.title}
								</h3>
								<h3 className=' text-base w-60  px-4 absolute bottom-6 group-hover:scale-100 scale-0  transition-all'>
									{props.showcase.frontmatter.exerpt}
								</h3>
							</div>
						</Link>
						{props.posts.map((x: any) => (
							<BlogThumbnail
								id={x.slug}
								category={x.frontmatter.category}
								cover={x.frontmatter.cover}
								intro={x.frontmatter.exerpt}
								link={x.slug}
								title={x.frontmatter.title}
								key={x.slug}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export const getStaticPaths = async () => {
	// get files from posts directory
	const files = fs.readdirSync(path.join("blog_posts"));
	// get slugs
	const paths = files.map((filename) => ({
		params: {
			id: filename.replace(".mdx", ""),
		},
	}));
	console.log(paths);
	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { id } }: any) => {
	// get files from posts directory
	const files = fs.readdirSync(path.join("blog_posts"));
	// get slugs

	const CurrentPostMarkdownWithMeta = fs.readFileSync(
		path.join("blog_posts", id + ".mdx"),
		"utf-8"
	);

	const { data: currentFrontMatter, content } = matter(
		CurrentPostMarkdownWithMeta
	);

	const FeaturedPosts = files.map((filename) => {
		const slug = filename.replace(".mdx", "");
		const markdownWithMeta = fs.readFileSync(
			path.join("blog_posts", filename),
			"utf-8"
		);
		//  get frontmatter
		const { data: frontmatter } = matter(markdownWithMeta);
		return { slug, frontmatter };
	});
	const posts = FeaturedPosts.filter((x) => x.slug !== id);

	return {
		props: {
			post: currentFrontMatter,
			content,
			posts: posts
				.filter((x) => x.frontmatter.featured === true)
				.filter((x) => x.frontmatter.showcase === false)
				.slice(0, 4),
			showcase: posts.filter((x) => x.frontmatter.showcase === true)[0],
		},
	};
};

export default BlogPost;
