import React from "react";

const Subscription = () => {
	return (
<<<<<<< HEAD
		<div className='flex items-center justify-between gap-8 sm:mx-4 sm:flex-col lg:flex-row bg-primary sm:p-8 lg:p-12'>
			<div className='flex flex-col lg:gap-y-4 sm:items-center lg:items-start sm:gap-y-2 lg:w-1/2'>
				<p className='font-bold font-ubuntu sm:text-3xl lg:text-5xl text-accent2'>
					Subscribe
				</p>
				<p className='text-accent font-abel sm:text-sm lg:text-lg lg:pr-8'>
					Get unlimited access to tech news and
					data delivered to your inbox weekly.
=======
		<div className='sm:mx-4 flex sm:flex-col lg:flex-row justify-between items-center bg-primary sm:p-8 lg:p-12 gap-4 md:gap-8'>
			<div className='flex flex-col lg:gap-y-4 sm:items-center lg:items-start sm:gap-y-2 lg:w-1/2'>
				<p className='font-ubuntu font-bold sm:text-3xl lg:text-5xl text-accent2'>
					Subscribe
				</p>
				<p className='text-accent font-abel sm:text-sm lg:text-lg lg:pr-8'>
					Get unlimited access to tech news and data delivered to your inbox
					weekly.
>>>>>>> 985550f6222f0e67c6aac3a01c59103f8daa4e36
				</p>
			</div>

			{/* MD BREAKPOINT */}
<<<<<<< HEAD
			<div className='flex-col justify-center mt-3 sm:hidden lg:flex lg:w-1/2'>
=======
			<div className='sm:hidden lg:flex flex-col justify-center mt-3 lg:w-1/2'>
>>>>>>> 985550f6222f0e67c6aac3a01c59103f8daa4e36
				<div className='relative flex flex-row'>
					<input
						type='search'
						className='relative flex-auto lg:w-[28rem] block h-[4rem] px-2 py-1.5 text-base font-abel text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
						placeholder='youremail@gmail.com'
						aria-label='Search'
					/>

					<button
<<<<<<< HEAD
						className='inline-block px-10 py-2 ml-0 text-base font-medium transition duration-150 ease-in-out border btn text-primary hover:bg-secondary hover:text-accent2 bg-accent2 focus:outline-none focus:ring-0'
=======
						className='btn inline-block px-10 py-2  text-primary font-medium text-base ml-0 hover:bg-secondary hover:text-accent2 bg-accent2 border focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
>>>>>>> 985550f6222f0e67c6aac3a01c59103f8daa4e36
						type='button'
						id='button-addon3'>
						<div>Subscribe</div>
					</button>
				</div>
			</div>

			{/* SM BREAKPOINT */}

<<<<<<< HEAD
			<div className='flex flex-col w-full lg:hidden'>
				<input
					type='search'
					className='w-full px-2 py-3 mr-0 text-base text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid font-abel bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
=======
			<div className='lg:hidden flex flex-col w-full gap-3'>
				<input
					type='search'
					className='w-full px-2 py-2 text-base font-abel text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
>>>>>>> 985550f6222f0e67c6aac3a01c59103f8daa4e36
					placeholder='youremail@gmail.com'
					aria-label='Search'
				/>

				<button
<<<<<<< HEAD
					className='block px-10 py-3 mt-8 ml-0 text-base font-medium transition duration-150 ease-in-out border text-primary hover:bg-secondary hover:text-accent2 bg-accent2 focus:outline-none focus:ring-0 '
					type='button'
					id='button-addon3'>
					<div className='text-base font-bold font-abel'>
						{" "}
						Search
					</div>
=======
					className='block px-10 py-2  text-primary font-medium text-base ml-0 hover:bg-secondary hover:text-accent2 bg-accent2 border focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
					type='button'
					id='button-addon3'>
					<div className='font-abel text-base font-bold'> Search</div>
>>>>>>> 985550f6222f0e67c6aac3a01c59103f8daa4e36
				</button>
			</div>
		</div>
	);
};

export default Subscription;
