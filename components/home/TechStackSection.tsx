import React from "react";
import { motion } from "framer-motion";
import SpiderMinigame from "./SpiderMinigame";
import { motionText } from "../../lib/motionVariants";

const TechStackSection = () => (
	<section className='my-6 w-11/12 flex flex-col items-center'>
		<motion.h1
			variants={motionText}
			initial={"hidden"}
			whileInView={"show"}
			viewport={{ once: true }}
			className='text-white text-6xl md:text-[96px] my-6  font-extrabold  '
		>
			Tech Stack
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
					The Technologies I Specialise In
				</motion.h2>
				<motion.p
					className='text-md text-white max-w-sm relative w-full mt-8'
					viewport={{ once: true }}
					whileInView={{
						y: 0,
						opacity: 1,
					}}
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					My web development journey has been a wild one with numerous
					experiments with different languages and frameworks here are the ones
					I’ve Mastered,
					<br /> PS: click on one to see something cool
				</motion.p>
			</div>
			<SpiderMinigame />
		</div>
	</section>
);

export default TechStackSection;
