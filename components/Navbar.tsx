"use client";
import { links } from "./data";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/img/josh-logo-mini.png";
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
		<nav className='font-ubuntu text-lg text-primary '>
			<div className='sm:hidden md:flex flex-row justify-between items-center shadow-md px-14 fixed top-0 left-0 right-0 bg-white z-50'>
				<Link href='/'>
					<Image
						alt='logo'
						src={Logo}
						className='h-10 w-10 hover:text-accent2 delay-150 transition hover:border'
					/>
				</Link>
				<div className='flex flex-row gap-4 font-extrabold text-primary font-abel py-6 text-xl'>
					{links.map((link) => (
						<ClientSideRoute key={link.id} route={link.url}>
							{link.text}
						</ClientSideRoute>
					))}
				</div>
			</div>

			{/* MOBILE MENU */}

			<div className='md:hidden sm:flex flex-row justify-between items-center shadow-md px-2 py-3 fixed top-0 left-0 right-0 bg-white z-50'>
				<Link href='/'>
					<Image alt='logo' src={Logo} className='h-9 w-9' />
				</Link>
				<div onClick={toggleMenu}>
					<CgMenuRightAlt className='w-8 h-8 cursor-pointer' />

					<div className={mobileMenu ? "show-menu menu" : "menu"}>
						<div className='font-abel font-semibold'>
							{links.map((link) => {
								const { id, url, text } = link;
								return (
									<div
										key={id}
										w-full
										className='text-primary hover:text-hover:text-underline mt-10 text-left'>
										<Link href={url}>{text}</Link>
									</div>
								);
							})}
						</div>

						<button onClick={toggleMenu}>
							<TiTimes className='w-8 h-8 cursor-pointer absolute top-6 right-3 hover:text-accent2 delay-150 transition hover:border' />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
