import { FunctionComponent, useEffect, useState } from "react";
import {
	useViewportScroll,
	useTransform,
	motion,
	AnimatePresence,
} from "framer-motion";
import NavBar from "./NavBar";
import AppIcon from "./AppIcon";
import NewsWidget from "./widgets/NewsWidget";
import PhotosWidget from "./widgets/PhotosWidget";
import RemindersWidget from "./widgets/RemindersWidget";
import MusicWidget from "./widgets/MusicWidget";
import ClockWidget from "./widgets/ClockWidget";
import WeatherWidget from "./widgets/WeatherWidget";
import News from "./apps/News";

const Macbook: FunctionComponent = () => {
	const { scrollY } = useViewportScroll();
	const [openApp, setOpenApp] = useState<false | string>(false);
	const scale = useTransform(scrollY, [0, 500], [1.15, 0.5]);

	return (
		<header className='absolute flex flex-col mx-auto items-center top-0 left-0 w-screen h-[150vh] z-50'>
			<motion.div
				layout
				style={{ scale: scale }}
				className=' flex flex-col items-center border-8 md:border-[50px]  border-black rounded-[60px] md:rounded-3xl bg-gradient-to-r justify-between py-12 from-indigo-200 via-red-200 to-yellow-100 sticky w-screen h-screen top-0 left-0'
			>
				{/* apps */}
				{openApp && (
					<div className='flex md:flex-col flex-col-reverse items-end absolute inset-0 w-full h-full z-10'>
						<AnimatePresence>{openApp == "news" && <News />}</AnimatePresence>
					</div>
				)}
				<div
					onClick={() => setOpenApp(false)}
					className='cursor-pointer w-full h-5  z-50 absolute bottom-5 md:bottom-1 lg:bottom-3 items-center justify-center flex'
				>
					{/* close bar */}
					<motion.div
						initial={{ y: 0 }}
						animate={{ y: -5 }}
						onClick={() => setOpenApp(false)}
						className='w-64 rounded-full h-1 shadow-md bg-white '
						transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
					></motion.div>
				</div>
				{/* Notch */}
				<div className='md:hidden w-full h-full flex justify-center absolute top-0'>
					<div className='h-[5%] w-[40%] z-20 bg-black rounded-b-xl'></div>
				</div>
				{/* widgets */}
				<header className='h-[210px] w-10/12 px-10 flex justify-between'>
					<div className='w-52 md:mx-0 mx-auto'>
						<div className='flex w-full justify-between'>
							<ClockWidget />
							<WeatherWidget />
						</div>
						<MusicWidget />
					</div>
					<div className='hidden md:flex'>
						<NewsWidget />
					</div>
					<div className='hidden xl:flex'>
						<PhotosWidget />
					</div>
					<div className='hidden lg:flex'>
						<RemindersWidget />
					</div>
				</header>
				{/* desktop apps */}
				<section className='w-full flex justify-center mt-10'>
					<div className=' w-10/12 grid grid-cols-4 md:grid-cols-5 gap-y-10 center '>
						<AppIcon
							mobile
							icon='instagram'
							onClick={() => setOpenApp("instagram")}
						/>
						<AppIcon
							mobile
							icon='whatsapp'
							onClick={() => setOpenApp("whatsapp")}
						/>
						<AppIcon
							mobile
							icon='youtube'
							onClick={() => setOpenApp("youtube")}
						/>
						<AppIcon icon='weather' onClick={() => console.log("whatsapp")} />
						<AppIcon
							mobile
							icon='github'
							onClick={() => setOpenApp("weather")}
						/>
						<AppIcon icon='twitter' onClick={() => setOpenApp("twitter")} />
						<AppIcon
							mobile
							icon='twitter'
							onClick={() => setOpenApp("twitter")}
						/>
						<AppIcon mobile icon='news' onClick={() => setOpenApp("news")} />
						<AppIcon
							mobile
							icon='discord'
							onClick={() => setOpenApp("discord")}
						/>
						<AppIcon
							mobile
							icon='settings'
							onClick={() => setOpenApp("settings")}
						/>
					</div>
				</section>

				{/* Navigation */}
				<NavBar>
					<AppIcon mobile icon='safari' onClick={() => setOpenApp("safari")} />
					<AppIcon
						mobile
						icon='messages'
						onClick={() => setOpenApp("messages")}
					/>
					<AppIcon icon='contacts' onClick={() => setOpenApp("contacts")} />
					<AppIcon icon='reminders' onClick={() => setOpenApp("reminders")} />
					<AppIcon mobile icon='photos' onClick={() => setOpenApp("photos")} />
					<AppIcon icon='notes' onClick={() => setOpenApp("notes")} />
					<AppIcon
						mobile
						icon='app_store'
						onClick={() => setOpenApp("app_store")}
					/>
					<AppIcon icon='mail' onClick={() => setOpenApp("mail")} />
					<AppIcon icon='calculator' onClick={() => setOpenApp("calculator")} />
				</NavBar>
			</motion.div>
		</header>
	);
};

export default Macbook;
