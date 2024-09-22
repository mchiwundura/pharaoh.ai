import Image from "next/image";
import React from "react";

const ClockWidget = () => {
	return (
		<div>
			<Image
				src={"/macbook/icons/clock.svg"}
				width={100}
				height={100}
				alt='Clock App'
			/>
		</div>
	);
};

export default ClockWidget;
