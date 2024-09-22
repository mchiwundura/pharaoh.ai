import { FunctionComponent } from "react";
import Navigation from "./Navigation";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<>
			<Navigation />
			<div className='mt-20'>{children}</div>
		</>
	);
};

export default Layout;
