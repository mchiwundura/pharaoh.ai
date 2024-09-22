import Image from "next/image";
import React, { FunctionComponent } from "react";

const PhotosWidget: FunctionComponent = () => {
	return (
		<div className='h-full flex relative'>
			<p className='absolute text-white text-lg bottom-5 left-5'>On this Day</p>
			<Image
				className='-z-10'
				src={"/macbook/gallery/gallery_cover.png"}
				alt='looking to the sun'
				width={250}
				height={250}
			/>
		</div>
	);
};

export default PhotosWidget;
