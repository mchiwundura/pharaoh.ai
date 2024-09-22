import React from "react";
import Image from "next/image";

const News = () => {
	return (
		<div className='h-full w-64 bg-white rounded-3xl'>
			<div className='flex items-center justify-between px-4'>
				<h3 className='text-[#fe4961] font-semibold text-2xl'>Top Stories</h3>
				<Image
					src={"/macbook/icons/news.svg"}
					width={44}
					height={44}
					alt='News'
				/>
			</div>
			<div className='flex items-center justify-between my-2 px-4'>
				<div>
					<p className='text-sm text-yellow-300'>Entertainment</p>
					<h4 className='text-xl font-semibold '>The Lion King</h4>
				</div>
				<div>
					<Image
						className='rounded-2xl'
						src={"/blog/covers/thelionking.png"}
						width={64}
						height={64}
						alt='The Lion King'
					/>
				</div>
			</div>
			<div className='flex items-center justify-between my-2 px-4'>
				<div>
					<p className='text-sm text-yellow-300'>Entertainment</p>
					<h4 className='text-xl font-semibold '>The Lion King</h4>
				</div>
				<div>
					<Image
						className='rounded-2xl'
						src={"/blog/covers/thelionking.png"}
						width={64}
						height={64}
						alt='The Lion King'
					/>
				</div>
			</div>
		</div>
	);
};

export default News;
