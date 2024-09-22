import { NextPage } from "next";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectPreview from "../../components/ProjectPreview";
import Link from "next/link";
import SEO from "../../components/Seo";

const ProjectPage: NextPage = (props: any) => {
	return (
		<div>
			<SEO
				description='Here is some information about myself'
				image='/munya.png'
				icon='/munya_icon.png'
				openGraphType='website'
				schemaType='website'
				title={props.post.title}
				url='https:therealmunya.vercel.app'
			/>
			<Link passHref href={"/projects"}>
				<div className='w-full h-screen top-0 justify-end flex left-0 cursor-pointer backdrop-blur-md z-40 fixed'>
					<div className='w-24 flex items-center justify-center h-24 relative'>
						<i className='w-12 h-12 bg-white rounded-full cursor-pointer'></i>
					</div>
				</div>
			</Link>
			<ProjectPreview project={props.post} content={props.content} />
		</div>
	);
};

export default ProjectPage;

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join("projects"));
	const paths = files.map((filename) => ({
		params: {
			id: filename.replace(".mdx", ""),
		},
	}));
	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { id } }: any) => {
	const files = fs.readdirSync(path.join("projects"));

	const CurrentPostMarkdownWithMeta = fs.readFileSync(
		path.join("projects", id + ".mdx"),
		"utf-8"
	);

	const { data: frontMatter, content } = matter(CurrentPostMarkdownWithMeta);

	return {
		props: {
			post: frontMatter,
			content,
		},
	};
};
