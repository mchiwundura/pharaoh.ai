import { AnimatePresence, motion } from "framer-motion";
import React, { FunctionComponent } from "react";

const AppContainer: FunctionComponent = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0.5, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0.5, scale: 0.5 }}
			layoutId='app'
			className='w-full h-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  rounded-[50px] md:rounded-none'
		>
			{children}
		</motion.div>
	);
};

export default AppContainer;
