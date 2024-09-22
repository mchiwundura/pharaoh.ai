import Image from "next/image";
import React, { useState } from "react";
import { marked } from "marked";

const ProjectPreview = (props: any) => {
	const [image, setImage] = useState(0);
	return (
		<div className='bg-background w-screen px-12 fixed  h-[90vh] top-24 right-0 z-50 border-t-2 border-t-gray-700 overflow-y-auto'>
			<div className='flex mt-6 w-10/12 mx-auto items-center bg-background '>
				<div className='w-20 h-20 rounded-full flex-shrink-0 relative'>
					<Image
						className='rounded-full'
						src={`/projects/${props.project.logo}`}
						layout='fill'
						alt={props.project.images[0].alt}
					/>
				</div>

				<h1 className='text-white w-1/2 font-bold text-4xl ml-5'>
					{props.project.title}
				</h1>
			</div>
			<div className='relative w-10/12 h-[30vw] mx-auto mt-12'>
				<Image
					className=''
					src={`/projects/${props.project.images[image].src}`}
					layout='fill'
					alt={props.project.images[0].alt}
				/>
				<div
					onClick={() =>
						setImage(image === 0 ? props.project.images.length - 1 : image - 1)
					}
					className='absolute top-[15vw] w-10 left-5 h-10 bg-black'
				></div>
				<div
					onClick={() =>
						setImage(image < props.project.images.length - 1 ? image + 1 : 0)
					}
					className='absolute top-[15vw]  right-5 w-10 h-10 bg-black'
				></div>
			</div>
			<div className='flex w-10/12 mx-auto overflow-x-scroll'>
				{props.project.images.map((x: any, y: number) => (
					<div
						style={{ opacity: y === image ? 1 : 0.6 }}
						onClick={() => setImage(y)}
						key={x.id}
						className='md:w-52 md:h-24 w-24 h-12 mr-3 my-3 relative flex-shrink-0 cursor-pointer opacity-60 hover:bg-blue-500'
					>
						<Image
							className=''
							src={`/projects/${x.src}`}
							layout='fill'
							alt={props.project.images[y].alt}
						/>
					</div>
				))}
			</div>
			<div className='blog_content blue w-10/12 mt-10 text-white mx-auto'>
				<div dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
				<h2>Technology Used</h2>
				<div className='flex w-full flex-wrap'>
					{props.project.technology.map((x: any, y: any) => (
						<div
							className='relative w-32 h-16 cursor-pointer shrink-0 flex-wrap  m-2'
							key={y}
						>
							<Image
								className=''
								src={`/projects/technology/${x}.png`}
								layout='fill'
								alt={x}
							/>
						</div>
					))}
				</div>
				<h2>Review</h2>
				<div className='flex items-center'>
					<div className='w-36 flex-shrink-0 h-36 relative mr-5'>
						<Image
							className='rounded-full'
							src={`/projects/${props.project.reviewer.profile}`}
							layout='fill'
							alt={props.project.images[0].alt}
						/>
					</div>
					<div>
						<h4 className='font-bold text-lg'>{props.project.reviewer.name}</h4>
						<p className='w-64'>{props.project.review}</p>
						<div className='flex'>
							{props.project.rating.map((x: any, y: any) => (
								<p key={y}>{x}</p>
							))}
						</div>
					</div>
				</div>
				<a href={props.project.sourceCode}>
					<div className='flex items-center group hover:text-purple-900 transition-all mt-10 w-64 justify-between'>
						<p className='mr-4 text-2xl cursor-pointer'>Source Code</p>
						<div className='w-10 h-10 relative mr-5'>
							<Image
								className='rounded-full transition-all group-hover:bg-purple-900'
								src={`/projects/technology/github.svg`}
								layout='fill'
								alt='github'
							/>
						</div>
					</div>
				</a>
				<a href={props.project.link}>
					<div className='flex group items-center transition-all mt-5 w-64 hover:text-blue-500 justify-between'>
						<p className='mr-4 text-2xl '>Visit Page</p>
						<div className='w-10 h-10 relative mr-5 '>
							<Image
								className='rounded-full transition-all group-hover:bg-blue-500'
								src={`/projects/technology/globe.svg`}
								layout='fill'
								alt='github'
							/>
						</div>
					</div>
				</a>
			</div>
			<div className='h-32 w-20'></div>
		</div>
	);
};

export default ProjectPreview;
