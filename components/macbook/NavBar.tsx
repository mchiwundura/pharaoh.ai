import React, { FunctionComponent } from "react";
import AppIcon from "./AppIcon";

const NavBar: FunctionComponent = ({ children }) => {
	return (
		<div className='w-full flex justify-center'>
			<div
				className={`w-10/12 bg-white bg-opacity-50 rounded-3xl flex justify-between p-4 items-center`}
			>
				{children}
			</div>
		</div>
	);
};

export default NavBar;
