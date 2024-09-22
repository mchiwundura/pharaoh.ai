import { motion } from "framer-motion";
import React from "react";
import ContactForm from "../ContactForm";
import { motionSection, motionText } from "../../lib/motionVariants";

const ContactSection = () => {
	return (
		<section className='my-6 w-11/12 flex flex-col items-center'>
			<motion.h1
				variants={motionText}
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				className='text-white text-6xl md:text-[96px] my-6  font-extrabold  '
			>
				Contact Me
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
						Get in touch.
					</motion.h2>
					<motion.h2
						className='md:text-6xl text-4xl origin-bottom font-bold text-white'
						viewport={{ once: true }}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{ duration: 0.5, delay: 0.3 }}
						initial={{ opacity: 0, y: 20 }}
					>
						Let&apos;s Work Together
					</motion.h2>
					<motion.p
						className='mt-5 mb-3'
						viewport={{ once: true }}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{ duration: 0.5, delay: 0.6 }}
						initial={{ opacity: 0, y: 20 }}
					>
						Please Fill out the form on the right or email me directly at{" "}
					</motion.p>
					<motion.a
						className='text-blue-500'
						href='munyachiwundura@gmail.com'
						viewport={{ once: true }}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{ duration: 0.5, delay: 0.9 }}
						initial={{ opacity: 0, y: 20 }}
					>
						munyachiwundura@gmail.com
					</motion.a>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactSection;
