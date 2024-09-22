import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SEO from "../../components/Seo";

const Projects: NextPage = ({ projects }: any) => {
	return (
		<main className={`w-screen flex flex-col   items-center `}>
			<SEO
				description='See what Ive have been working on in my journey'
				image='/munya.png'
				icon='/munya_icon.png'
				openGraphType='website'
				schemaType='website'
				title='My Projects | Munyaradzi Chiwundura'
				url='https:therealmunya.vercel.app'
			/>
			<header className='bg-background z-20 w-full flex flex-col items-center shadow-xl mb-12 py-10'>
				<motion.h1
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 0.1 }}
					viewport={{ once: true }}
					className='text-white opacity-10 text-[96px] font-extrabold ml-12  w-full text-center'
				>
					Projects
				</motion.h1>
				<motion.h2 className='text-white text-4xl font-bold w-1/2 text-center my-5'>
					Some of the creations i&apos;ve worked on in my journey
				</motion.h2>
			</header>
			<section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-1/2 '>
				{projects.map((x: any) => (
					<Link key={x.id} href={`/projects/${x.id}`} passHref>
						<div className='cursor-pointer hover:scale-105 group transition-all shadow-md  group-hover:shadow-xl'>
							<div className='w-full relative h-32 '>
								<Image
									src={`/projects/${x.images[0].src}`}
									layout='fill'
									alt={x.images[0].alt}
								/>
							</div>
							<div className='flex items-center justify-between my-2 px-2'>
								<p className='text-xl text-white'>{x.title}</p>
								<p
									className={`px-2 py-1 rounded-lg text-white ${
										x.technology[0] === "Django" ? "bg-green-500" : "bg-black"
									}`}
								>
									{x.technology[0]}
								</p>
							</div>
						</div>
					</Link>
				))}
			</section>
		</main>
	);
};

export default Projects;

export const getStaticProps = async () => {
	// get files from posts directory
	const files = fs.readdirSync(path.join("projects"));
	// get slugs
	const projects = files.map((filename) => {
		const slug = filename.replace(".mdx", "");
		const markdownWithMeta = fs.readFileSync(
			path.join("projects", filename),
			"utf-8"
		);
		const { data: frontmatter } = matter(markdownWithMeta);
		console.log(frontmatter, markdownWithMeta);
		return { slug, frontmatter };
	});

	//  get frontmatter

	return {
		props: {
			projects: projects.map((x) => x.frontmatter),
		},
	};
};
