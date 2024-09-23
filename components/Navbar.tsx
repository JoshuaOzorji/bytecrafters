"use client";
import { links } from "./data";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/img/logo-green.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { TiTimes } from "react-icons/ti";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
	posts: Post[];
};

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const toggleMenu = () => {
		setMobileMenu(!mobileMenu);
	};

	return (
		<nav className='text-lg font-ubuntu text-primary '>
			<div className='fixed top-0 left-0 right-0 z-50 flex-row items-center justify-between bg-white shadow-md sm:hidden md:flex px-14'>
				<Link href='/'>
					<Image
						alt='logo'
						src={Logo}
						width={60}
						height={40}
						className='h-12 transition delay-150 hover:text-accent2 hover:border'
					/>
				</Link>
				<div className='flex flex-row gap-4 py-6 text-xl font-extrabold text-primary font-abel'>
					{links.map((link) => (
						<ClientSideRoute
							key={link.id}
							route={link.url}>
							{link.text}
						</ClientSideRoute>
					))}
				</div>
			</div>

			{/* MOBILE MENU */}

			<div className='fixed top-0 left-0 right-0 z-50 flex-row items-center justify-between px-2 py-4 bg-white shadow-md md:hidden sm:flex'>
				<Link href='/'>
					<Image
						alt='logo'
						src={Logo}
						width={60}
						height={40}
						className='h-[2.8rem] hover:text-accent2 delay-150 transition hover:border'
					/>
				</Link>
				<div onClick={toggleMenu}>
					<CgMenuRightAlt className='w-10 h-10 transition delay-150 cursor-pointer hover:text-accent2 hover:border' />

					<div
						className={
							mobileMenu
								? "show-menu menu"
								: "menu"
						}>
						<div className='font-semibold font-abel'>
							{links.map((link) => {
								const {
									id,
									url,
									text,
								} = link;
								return (
									<div
										key={
											id
										}
										w-full
										className='mt-10 text-left text-primary hover:text-hover:text-underline'>
										<Link
											href={
												url
											}>
											{
												text
											}
										</Link>
									</div>
								);
							})}
						</div>

						<button onClick={toggleMenu}>
							<TiTimes className='absolute w-10 h-10 transition delay-150 cursor-pointer top-6 right-3 hover:text-accent2 hover:border' />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
