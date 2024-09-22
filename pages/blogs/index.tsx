import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogThumbnail from "../../components/home/BlogThumbnail";
import { blogCategories } from "../../lib/categories";
import Image from "next/image";
import Link from "next/link";
type Props = {
	posts: string;
};
const Blog: NextPage = (props: any) => {
	const [filter, setFilter] = useState<false | string>(false);
	const [search, setSearching] = useState(false);
	const [suggestions, setSuggestions] = useState("");

	const closeSearch = () => {
		setTimeout(() => {
			setSearching(false);
		}, 500);
	};

	return (
		<main className='relative w-screen flex flex-col items-center '>
			<header className='bg-background z-20 w-full flex flex-col items-center mt-5'>
				<motion.h1
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 0.1 }}
					viewport={{ once: true }}
					className='text-white opacity-10 text-5xl md:text-[96px] font-extrabold ml-12  w-full text-center'
				>
					My Blog
				</motion.h1>
				<motion.h2 className='text-white text-3xl font-bold md:w-1/2 w-10/12 text-center my-5'>
					A collection of some helpful insights but more frequently my random
					shower thoughts
				</motion.h2>
			</header>
			<div className='my-5 sticky pb-10 top-20 shadow-lg bg-background md:w-10/12 z-30 w-11/12 '>
				<motion.h3 className='text-white font-bold text-lg my-2'>
					Filter by Category
				</motion.h3>
				<div className='flex w-full flex-wrap justify-between '>
					<div>
						<motion.button
							whileTap={{ scale: 0.9 }}
							onClick={() => setFilter(false)}
							className={`text-white font-bold px-5 py-2 m-2 rounded-full text-white-500  bg-opacity-50 bg-white`}
						>
							View All
						</motion.button>
						{blogCategories.map((x: any) => (
							<motion.button
								whileTap={{ scale: 0.9 }}
								onClick={() => setFilter(x.title)}
								className={`text-white font-bold px-5 py-2 m-2 rounded-full text-${x.color}-500  bg-opacity-50 bg-${x.color}-500`}
								key={x.id}
							>
								{x.title}
							</motion.button>
						))}
					</div>
					<div className='z-50 w-60 md:ml-56 mt-1 flex items-center relative'>
						<input
							onFocus={() => setSearching(true)}
							onBlur={() => closeSearch()}
							onChange={(e) => setSuggestions(e.target.value)}
							className=' w-full h-9 rounded-full pl-4 bg-transparent border-2 border-white text-white font-bold'
							type='text'
							name='Search'
							placeholder='Search'
						/>
						<div className='relative right-8 flex items-center justify-center'>
							<Image
								src={"/search.svg"}
								width={18}
								height={18}
								alt='Search Icon'
							/>
						</div>
						{search && (
							<div className='absolute top-10 -left-4 bg-background p-4 shadow-md'>
								{props.posts
									.filter((str: any) =>
										str.frontmatter.title
											.toLowerCase()
											.includes(suggestions.toLowerCase())
									)
									.slice(0, 5)
									.map((x: any, y: number) => (
										<Link key={y} href={`/blogs/${x.slug}`} passHref>
											<p className='my-1 bg-white bg-opacity-10 rounded hover:bg-blue-500 hover:text-opacity-100 cursor-pointer text-white text-opacity-60 w-56 pl-4'>
												{x.frontmatter.title}
											</p>
										</Link>
									))}
							</div>
						)}
					</div>
				</div>
			</div>
			<section className='relative  w-full flex justify-center min-h-screen'>
				<motion.div
					layout
					className='grid gap-4 w-1/2 md:grid-cols-3 grid-cols-1'
				>
					{!filter && (
						<Link href={`/blogs/${props.showcase[0].slug}`} passHref>
							<motion.div
								layoutId={`BlogThumbnail ${props.showcase[0].slug} showcase`}
								className='md:col-span-2 hidden md:inline-grid col-span-2 relative group cursor-pointer md:row-span-2 hover:shadow-2xl transition-all shadow-lg'
							>
								<div className='opacity-50'>
									<Image
										src={props.showcase[0].frontmatter.showcaseCover}
										layout='fill'
										alt={props.showcase[0].frontmatter.title}
									/>
								</div>
								<h2 className='absolute group-hover:bottom-52 transition-all text-3xl font-medium text-white bottom-6 left-6'>
									{props.showcase[0].frontmatter.title}
								</h2>
								<h2
									style={{
										color: props.showcase[0].frontmatter.category.color,
									}}
									className='absolute group-hover:bottom-60 transition-all text-xl font-medium text-white bottom-14 left-6'
								>
									{props.showcase[0].frontmatter.category.title}
								</h2>
								<p className='font-white absolute bottom-28 transition-all scale-0 left-6 text-xl group-hover:scale-100 text-white w-64'>
									{props.showcase[0].frontmatter.exerpt}
								</p>
								<div className='absolute top-0 z-10 flex items-center justify-center right-0 h-full w-full'>
									<div
										className={`bg-${props.showcase[0].frontmatter.category.color}-500 text-white  bg-opacity-80 h-24 font-bold flex items-center justify-center transition-all scale-0 group-hover:scale-100 w-24 rounded-full`}
									>
										Read Now
									</div>
								</div>
							</motion.div>
						</Link>
					)}
					{!filter && (
						<Link href={`/blogs/${props.showcase[1].slug}`} passHref>
							<motion.div
								layoutId={`BlogThumbnail ${props.showcase[1].slug} showcase`}
								className='col-span-2 col-start-2 row-start-4 hidden md:inline-grid  relative group cursor-pointer row-span-2 hover:shadow-2xl transition-all shadow-lg'
							>
								<div className='opacity-50'>
									<Image
										src={props.showcase[1].frontmatter.showcaseCover}
										layout='fill'
										alt={props.showcase[1].frontmatter.title}
									/>
								</div>
								<h2 className='absolute group-hover:bottom-52 transition-all text-3xl font-medium text-white bottom-6 left-6'>
									{props.showcase[1].frontmatter.title}
								</h2>
								<h2
									style={{
										color: props.showcase[1].frontmatter.category.color,
									}}
									className='absolute group-hover:bottom-60 transition-all text-xl font-medium text-white bottom-14 left-6'
								>
									{props.showcase[1].frontmatter.category.title}
								</h2>
								<p className='font-white absolute bottom-24 transition-all scale-0 left-6 text-xl group-hover:scale-100 text-white w-72'>
									{props.showcase[1].frontmatter.exerpt}
								</p>
								<div className='absolute top-0 z-10 flex items-center justify-center right-0 h-full w-full'>
									<div
										className={`bg-${props.showcase[1].frontmatter.category.color}-500 text-white  bg-opacity-80 h-24 font-bold flex items-center justify-center transition-all scale-0 group-hover:scale-100 w-24 rounded-full`}
									>
										Read Now
									</div>
								</div>
							</motion.div>
						</Link>
					)}
					{filter === false &&
						props.posts
							.filter((c: any) =>
								filter
									? c.frontmatter.category.title === filter
									: c.frontmatter.showcase === true
							)
							.map((x: any) => (
								<div key={x.slug} className='md:hidden'>
									<BlogThumbnail
										id={x.slug}
										category={x.frontmatter.category}
										cover={x.frontmatter.cover}
										intro={x.frontmatter.exerpt}
										link={x.slug}
										title={x.frontmatter.title}
									/>
								</div>
							))}
					{props.posts

						.filter((c: any) =>
							filter
								? c.frontmatter.category.title === filter
								: c.frontmatter.showcase === false
						)
						.map((x: any) => (
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

					<h1 className='text-4xl text-green-500'></h1>
				</motion.div>
			</section>
		</main>
	);
};

export default Blog;

export const getStaticProps = async () => {
	// get files from posts directory
	const files = fs.readdirSync(path.join("blog_posts"));
	// get slugs
	const posts = files.map((filename) => {
		const slug = filename.replace(".mdx", "");
		const markdownWithMeta = fs.readFileSync(
			path.join("blog_posts", filename),
			"utf-8"
		);
		const { data: frontmatter } = matter(markdownWithMeta);
		return { slug, frontmatter };
	});

	//  get frontmatter

	return {
		props: {
			posts: posts,
			showcase: posts.filter((x) => x.frontmatter.showcase === true),
		},
	};
};
