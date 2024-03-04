import React from "react";

const Subscription = () => {
	return (
		<div className="sm:mx-4 flex sm:flex-col lg:flex-row justify-between items-center bg-primary sm:p-8 lg:p-12 gap-8">
			<div className="flex flex-col lg:gap-y-4 sm:items-center lg:items-start sm:gap-y-2 lg:w-1/2">
				<p className="font-ubuntu font-bold sm:text-3xl lg:text-5xl text-accent2">
					Subscribe
				</p>
				<p className="text-accent font-abel sm:text-sm lg:text-lg lg:pr-8">
					Get unlimited access to tech news and data delivered to your inbox
					weekly.
				</p>
			</div>

			{/* MD BREAKPOINT */}
			<div className="sm:hidden lg:flex flex-col justify-center mt-3 lg:w-1/2">
				<div className="relative flex flex-row">
					<input
						type="search"
						className="relative flex-auto lg:w-[28rem] block h-[4rem] px-2 py-1.5 text-base font-abel text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						placeholder="youremail@gmail.com"
						aria-label="Search"
					/>

					<button
						className="btn inline-block px-10 py-2  text-primary font-medium text-base ml-0 hover:bg-secondary hover:text-accent2 bg-accent2 border focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
						type="button"
						id="button-addon3">
						<div>Subscribe</div>
					</button>
				</div>
			</div>

			{/* SM BREAKPOINT */}

			<div className="lg:hidden flex flex-col w-full">
				<input
					type="search"
					className="w-full px-2 py-3 text-base font-abel text-gray-700 bg-white bg-clip-padding border mr-0 border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					placeholder="youremail@gmail.com"
					aria-label="Search"
				/>

				<button
					className="block px-10 py-3  text-primary font-medium text-base ml-0 hover:bg-secondary hover:text-accent2 bg-accent2 border focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-8 "
					type="button"
					id="button-addon3">
					<div className="font-abel text-base font-bold"> Search</div>
				</button>
			</div>
		</div>
	);
};

export default Subscription;
