import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Navigation = () => {
	const router = useRouter();

	return (
		<nav className='z-40 text-4xl bg-background shadow-md fixed h-20 top-0 w-screen px-20 py-5 text-white '>
			<div className='flex justify-between items-center'>
				<Link href={"/"} passHref>
					<div className='cursor-pointer'>
						<h1 className=' font-bold'>MUNYA</h1>
					</div>
				</Link>
				<div className='md:flex hidden w-1/2 text-2xl'>
					<ul className='flex justify-between w-full h-12'>
						<Link href={"/"} passHref>
							<li
								className={`hover:border-b-2 ${
									router.pathname === "/" && "border-b-2 opacity-100"
								} py-2 border-b-blue-500 relative hover:opacity-100 transition-all opacity-80 cursor-pointer`}
							>
								Home
							</li>
						</Link>
						<Link href={"/projects"} passHref>
							<li
								className={`hover:border-b-2 ${
									router.pathname === "/projects" && "border-b-2 opacity-100"
								} py-2 border-b-blue-500 relative hover:opacity-100 transition-all opacity-80 cursor-pointer`}
							>
								Projects
							</li>
						</Link>

						<Link href={"/blogs"} passHref>
							<li
								className={`hover:border-b-2 ${
									router.pathname === "/blogs" && "border-b-2 opacity-100"
								} py-2 border-b-blue-500 relative hover:opacity-100 transition-all opacity-80 cursor-pointer`}
							>
								{" "}
								Blog
							</li>
						</Link>

						<Link href={"/about"} passHref>
							<li
								className={`hover:border-b-2 ${
									router.pathname === "/about" && "border-b-2 opacity-100"
								} py-2 border-b-blue-500 relative hover:opacity-100 transition-all opacity-80 cursor-pointer`}
							>
								{" "}
								About
							</li>
						</Link>

						<motion.button
							whileTap={{ scale: 0.9 }}
							className='bg-blue-500 px-5 scale-1 rounded relative'
						>
							Contact
						</motion.button>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
