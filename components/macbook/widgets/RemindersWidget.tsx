import React from "react";

const RemindersWidget = () => {
	return (
		<div className='w-64 h-full bg-white rounded-3xl p-3'>
			<h3 className='text-2xl font-medium text-[#CF1928]'>Monday</h3>
			<h1 className='text-5xl'>28</h1>
			<div>
				{/* tasks */}
				<div>
					<div className='bg-green-200 rounded mt-1 flex '>
						<div className='h-12 bg-green-500 w-2 rounded'></div>
						<div className='px-5'>
							<p className='font-medium'>View Munya&apos;s Portfolio</p>
							<p className='text-green-500 font-medium'>12:45 - 13:15</p>
						</div>
					</div>
					<div className='bg-yellow-200 rounded mt-1 flex justify-start'>
						<div className='h-12 bg-yellow-500 w-2 rounded'></div>
						<div className='px-5'>
							<p className='font-medium'>Buy Munya A Cofee</p>
							<p className='text-yellow-500 font-medium'>12:45 - 13:15</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RemindersWidget;
