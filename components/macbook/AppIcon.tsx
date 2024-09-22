import Image from "next/image";
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

type Props = {
	icon: string;
	mobile?: boolean;
	onClick: () => void;
};

const AppIcon: FunctionComponent<Props> = (props) => {
	return (
		<motion.div
			onClick={props.onClick}
			className={`relative flex bg-white rounded-3xl xl:w-16 xl:h-16 md:w-16 md:h-16 h-12 w-12 mx-auto ${
				props.mobile ? "" : "md:flex hidden"
			}`}
			whileTap={{ scale: 0.9 }}
		>
			<Image
				src={`/macbook/icons/${props.icon}.svg`}
				layout='fill'
				alt={props.icon}
			/>
		</motion.div>
	);
};

export default AppIcon;
