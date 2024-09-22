import Image from "next/image";
import React from "react";

const MusicWidget = () => {
	return (
		<div className='h-1/2 p-4 w-full items-center justify-between bg-white flex rounded-3xl'>
			<div className='w-20 h-20 flex items-center mr-1'>
				<Image
					src={"/macbook/music/rick_ashtley.png"}
					width={100}
					height={100}
					alt='Never Gonna Give you Up'
				/>
			</div>
			<div>
				<p className='font-medium'>Never gonn</p>
				<p className='text-xs opacity-50'>Rick Ashtley</p>
				<div className='w-11/12 h-1 my-2 bg-black opacity-20 rounded'>
					<div></div>
				</div>
				<div className='flex w-11/12 justify-between px-1'>
					<div className='h-5 w-5 bg-black'></div>
					<div className='h-5 w-5 bg-black'></div>
					<div className='h-5 w-5 bg-black'></div>
				</div>
			</div>
		</div>
	);
};

export default MusicWidget;
