import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SEO from "../components/Seo";

const About = () => (
	<main className='w-screen flex flex-col items-center '>
		<SEO
			description='Here is some information about myself'
			image='/munya.png'
			icon='/munya_icon.png'
			openGraphType='website'
			schemaType='website'
			title='About Me | Munyaradzi Chiwundura'
			url='https:therealmunya.vercel.app'
		/>
		<header className='bg-background z-20 w-full flex flex-col items-center py-2'>
			<motion.h1
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 0.1 }}
				viewport={{ once: true }}
				className='text-white opacity-10 text-[96px] font-extrabold ml-12  w-full text-center'
			>
				About Me
			</motion.h1>
		</header>
		<section className='flex flex-col md:flex-row w-9/12 md:w-8/12 text-white justify-between'>
			<div className='order-2'>
				<div>
					<h1 className='font-bold text-4xl mt-5'>Background</h1>
					<p className='w-80 md:w-96 text-xl mt-5'>
						Hello, I&apos;m Munya! I was born and raised in Zimbabwe (I&apos;ve
						watched enough American movies to loose the accent) and am currently
						living in South Africa. If you like my site don&apos;t hesitate to
						reach out.{" "}
					</p>
				</div>
				<div className='mt-6'>
					<h1 className='font-bold text-4xl mb-2'>Some Of My Interests</h1>
					<ul>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-purple-700 transition-all'>
								Gaming
							</li>
						</a>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-green-400 transition-all'>
								Making Playlists
							</li>
						</a>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-yellow-500 transition-all'>
								Overthinking Rap Lyrics
							</li>
						</a>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-red-700 transition-all'>
								Movies
							</li>
						</a>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-blue-500 transition-all'>
								Building Stuff
							</li>
						</a>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-green-500 transition-all'>
								Writing Stuff
							</li>
						</a>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-orange-500 transition-all'>
								Helping Other Coders
							</li>
						</a>
						<a href='https://twitch.com/'>
							<li className='text-xl hover:text-purple-700 transition-all'>
								My side hussle as a pharmacy student
							</li>
						</a>
					</ul>
				</div>
			</div>
			<div className='flex items-center justify-center order-1 md:order-3 my-5'>
				<div className='relative w-64 h-64 md:w-[500px] md:h-[500px]'>
					<Image
						className='rounded-full'
						src='/munya.png'
						layout='fill'
						alt='Munyaradzi Chiwundura'
					/>
				</div>
			</div>
		</section>
	</main>
);

export default About;
