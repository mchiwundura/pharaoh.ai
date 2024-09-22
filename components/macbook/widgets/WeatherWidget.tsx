import React from "react";
import Image from "next/image";
const WeatherWidget = () => {
	return (
		<div>
			<Image
				src={"/macbook/icons/weather.svg"}
				width={100}
				height={100}
				alt='Clock App'
			/>
		</div>
	);
};

export default WeatherWidget;
