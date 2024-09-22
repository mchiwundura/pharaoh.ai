import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
	title: string;
	category: { title: string; color: string };
	cover: string;
	intro: string;
	link: string;
	id: number;
};

const BlogThumbnail: FunctionComponent<Props> = (props) => {
	return (
		<Link href={`/blogs/${props.id}`} passHref>
			<motion.div
				layoutId={`BlogThumbnail ${props.id}`}
				// whileTap={{ scale: 0.95 }}
				className='relative group shadow-lg h-72 w-full hover:scale-105 cursor-pointer text-white pb-4 hover:shadow-2xl transition-all'
			>
				<div className='absolute top-0 z-10 flex items-center justify-center right-0 h-36 w-full'>
					<div
						className={`bg-${props.category.color}-500  bg-opacity-80 h-24 font-bold flex items-center justify-center transition-all scale-0 group-hover:scale-100 w-24 rounded-full`}
					>
						Read Now
					</div>
				</div>
				<div className='relative h-36'>
					<Image src={props.cover} layout='fill' alt={props.title} />
					<div
						style={{ backgroundColor: props.category.color }}
						className='w-full h-1 top-36 relative px-3'
					></div>
				</div>
				<h4
					style={{ color: props.category.color, opacity: 0.5 }}
					className='px-4 my-1 text-lg'
				>
					{props.category.title}
				</h4>
				<h3 className='font-bold text-2xl px-4'>{props.title}</h3>
				<p className='px-4 opacity-80'>{props.intro}</p>
			</motion.div>
		</Link>
	);
};

export default BlogThumbnail;
