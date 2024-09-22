import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AppContainer from "./AppContainer";

const News = () => {
	const today = new Date();
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		const request = await fetch("/api/blog");
		const data = await request.json();
		setPosts(data.posts);
		if (!request.ok) {
			throw Error(request.statusText);
		}
		return data;
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<AppContainer>
			<div className='h-full w-full  flex relative'>
				<div className='flex top-8 left-16 absolute justify-between items-center'>
					<Image
						width={36}
						height={36}
						alt='news icon'
						src={`/macbook/icons/news.svg`}
					/>
					<h2 className='text-[#fe4961] font-bold mx-2 text-xl md:text-2xl lg:text-4xl'>
						My Blog
					</h2>
				</div>
				<div className='w-1/4 md:flex hidden flex-col  h-full'>
					<div></div>
				</div>
				<div className='bg-black bg-opacity-20 pt-20 md:pt-10 flex flex-col items-center h-full md:w-3/4 p-10'>
					<h1 className='text-5xl opacity-50 font-bold'>
						{today.toDateString()}
					</h1>
					<h2 className='text-[#fe4961] font-bold text-4xl mt-4'>
						Top Stories
					</h2>
					<div className='flex h-3/4 overflow-y-scroll justify-center md:pr-20 w-full mt-5 flex-wrap'>
						{posts.map((x: any, y) => (
							<div key={y}>
								<div className='cursor-pointer m-2'>
									<div className='bg-black bg-opacity-50 flex items-center justify-center'>
										<Image
											src={x.cover}
											className='opacity-90'
											width={300}
											height={150}
											alt={x.title}
										/>
									</div>
									<h2
										className='font-semibold'
										style={{ color: x.category.color }}
									>
										{x.category.title}
									</h2>
									<h2 className='text-xl font-semibold'>{x.title}</h2>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</AppContainer>
	);
};

export default News;
