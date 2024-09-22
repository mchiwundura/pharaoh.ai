import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import BlogThumbnail from "./BlogThumbnail";
import { motionItem, motionText } from "../../lib/motionVariants";

const BlogsSection = (props: any) => {
	return (
		<section className='my-6 w-11/12 flex flex-col items-center'>
			<motion.h1
				variants={motionText}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				className='text-white text-6xl md:text-[96px] my-6  font-extrabold  '
			>
				Blog
			</motion.h1>
			<div className='w-full flex justify-center'>
				<div className='grid gap-4 md:grid-cols-3  grid-cols-1 lg:w-8/12 mt-4 w-full'>
					{/* featured Blog */}
					<motion.div
						variants={motionItem}
						viewport={{ once: true }}
						initial={"hidden"}
						whileInView={"show"}
						transition={{ duration: 0.5, delay: 0 }}
						className='md:hidden'
					>
						<BlogThumbnail
							id={props.showcase.slug}
							category={props.showcase.frontmatter.category}
							cover={props.showcase.frontmatter.cover}
							intro={props.showcase.frontmatter.exerpt}
							link={props.showcase.slug}
							title={props.showcase.frontmatter.title}
							key={props.showcase.slug}
						/>
					</motion.div>
					<Link href={`/blogs/${props.showcase.slug}`} passHref>
						<motion.div
							variants={motionItem}
							viewport={{ once: true }}
							initial={"hidden"}
							whileInView={"show"}
							transition={{ duration: 0.5, delay: 0 }}
							className='hover:scale-105  col-span-2 group shadow-lg m-2 w-full h-full cursor-pointer relative -top-2 -left-2  text-white pb-4 hover:shadow-2xl transition-all hidden md:flex'
						>
							<div className='absolute top-0 z-10 flex items-center justify-center right-0 h-full w-full'>
								<div
									className={`bg-${props.showcase.frontmatter.category.color}-500  text-white  bg-opacity-80 h-24 font-bold flex items-center justify-center transition-all scale-0 group-hover:scale-100 w-24 rounded-full`}
								>
									Read Now
								</div>
							</div>
							<Image
								src={props.showcase.frontmatter.cover}
								layout='fill'
								alt={props.showcase.frontmatter.showcaseCover}
							/>
							<h4
								style={{
									color: props.showcase.frontmatter.category.color,
									opacity: 0.5,
								}}
								className='px-4 my-1 text-lg absolute bottom-14 group-hover:bottom-32 transition-all'
							>
								{props.showcase.frontmatter.category.title}
							</h4>
							<h3 className='font-bold text-3xl px-4 absolute bottom-6 group-hover:bottom-24 transition-all'>
								{props.showcase.frontmatter.title}
							</h3>
							<h3 className='font-bold text-md w-60  px-4 absolute bottom-6 group-hover:scale-100 scale-0  transition-all'>
								{props.showcase.frontmatter.exerpt}
							</h3>
						</motion.div>
					</Link>
					{props.posts.map((x: any, y: number) => (
						<motion.div
							variants={motionItem}
							viewport={{ once: true }}
							initial={"hidden"}
							whileInView={"show"}
							transition={{ duration: 0.5, delay: 0.3 * y }}
							key={x.slug}
						>
							<BlogThumbnail
								id={x.slug}
								category={x.frontmatter.category}
								cover={x.frontmatter.cover}
								intro={x.frontmatter.exerpt}
								link={x.slug}
								title={x.frontmatter.title}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogsSection;
