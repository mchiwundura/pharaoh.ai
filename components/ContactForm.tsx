import React from "react";
import { motion } from "framer-motion";
import { motionSection, motionItem } from "../lib/motionVariants";
const ContactForm = () => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log("done");
			}}
		>
			<div className=' grid gap-3 grid-cols-2 md:min-w-[500px] w-full'>
				<motion.input
					variants={motionItem}
					viewport={{ once: true }}
					initial={"hidden"}
					whileInView={"show"}
					transition={{ duration: 0.5, delay: 0 }}
					type='text'
					name='username'
					placeholder='Name'
					className='w-full m-0 form-input'
				/>
				<motion.input
					variants={motionItem}
					viewport={{ once: true }}
					initial={"hidden"}
					whileInView={"show"}
					transition={{ duration: 0.5, delay: 0.3 }}
					type='text'
					name='email'
					placeholder='Email'
					className='w-full m-0 form-input'
				/>

				<motion.input
					variants={motionItem}
					viewport={{ once: true }}
					initial={"hidden"}
					whileInView={"show"}
					transition={{ duration: 0.5, delay: 0.6 }}
					type='text'
					name='subject'
					placeholder='Subject'
					className='w-full m-0 col-span-2 form-input'
				/>
				<motion.textarea
					variants={motionItem}
					viewport={{ once: true }}
					initial={"hidden"}
					whileInView={"show"}
					transition={{ duration: 0.5, delay: 0.9 }}
					className='w-full m-0 col-span-2 form-input h-56 pt-3'
					name='content'
					placeholder='Message'
				></motion.textarea>
				<motion.button
					variants={motionItem}
					viewport={{ once: true }}
					initial={"hidden"}
					whileInView={"show"}
					transition={{ duration: 0.5, delay: 1 }}
					whileTap={{ scale: 0.9 }}
					type='submit'
					className='p-2 rounded hover:bg-blue-500 hover:text-white w-fit transition-all text-md text-blue-500 border-2 border-blue-500 '
				>
					Send Message
				</motion.button>
			</div>
		</form>
	);
};

export default ContactForm;
