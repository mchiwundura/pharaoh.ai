import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { motionText } from "../../lib/motionVariants";

const HeroSection = () => {
	return (
		<section className='my-6 w-11/12 flex flex-col items-center'>
			<motion.h1
				variants={motionText}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				className='text-white text-6xl md:text-[96px] my-6  font-extrabold  '
			>
				Welcome
			</motion.h1>
			<div className='md:flex-row flex w-full flex-col justify-between items-center '>
				<div className='text-white w-full mb-6'>
					<motion.h2
						className='md:text-6xl text-4xl origin-bottom relative font-bold text-white'
						viewport={{ once: true }}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0 }}
					>
						Hi, I&apos;m Munya,
						<br /> Web Developer
					</motion.h2>
				</div>
				<motion.div
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ once: true }}
					initial={{ opacity: 0, scale: 0.7 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className='flex relative w-96 h-96 shrink-0 md:w-[600px] md:h-[600px]'
				>
					<Image src='/munya_wave.png' layout='fill' alt='Bitmojie of Munya' />
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
