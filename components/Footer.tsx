import React from "react";
import Logo from "../assets/img/logo-green.png";
import Image from "next/image";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="sm:mx-4 md:mx-14 mt-16">
			{/* MD BREAKPOINT */}
			<div className="sm:hidden md:block">
				<div className="my-4">
					<a href="/">
						<Image
							alt="logo"
							src={Logo}
							width={60}
							height={40}
							className="h-12 cursor-pointer"
						/>
					</a>
				</div>
				<div className="flex flex-row justify-between items-center mb-4">
					<p className="text-base font-abel text-secondary max-w-[30%]">
						<span className="font-bold">Byte Crafters</span> is the ultimate
						go-to resource for updates in the technology sector and emerging
						markets
					</p>
					<div className="flex flex-row gap-2 text-primary">
						<Link href="https://twitter.com/mrjosh_65">
							<AiOutlineTwitter className="w-8 h-8 cursor-pointer hover:text-secondary" />
						</Link>
						<Link href="https://github.com/JoshuaOzorji">
							<AiFillGithub className="w-8 h-8 cursor-pointer hover:text-secondary" />
						</Link>
					</div>
				</div>
			</div>

			{/* SM BREAKPOINT */}
			<div className="sm:visible md:hidden">
				<div className="my-4 flex flex-row justify-between items-center">
					<Link href="/">
						<Image
							alt="logo"
							src={Logo}
							width={60}
							height={40}
							className="h-12 cursor-pointer"
						/>
					</Link>

					<div className="flex flex-row gap-2 text-primary">
						<Link href="https://twitter.com/mrjosh_65">
							<AiOutlineTwitter className="w-8 h-8 cursor-pointer" />
						</Link>
						<Link href="https://github.com/JoshuaOzorji">
							<AiFillGithub className="w-8 h-8 cursor-pointer" />
						</Link>
					</div>
				</div>
				<div className="flex flex-row justify-between items-center mb-4">
					<p className="sm:text-sm md:text-base font-abel text-secondary">
						<span className="font-bold">Byte Crafters</span> is the ultimate
						go-to resource for updates in the technology sector and emerging
						markets
					</p>
				</div>
			</div>
			<p className="sm:text-sm border-t pt-6 text-base font-abel text-secondary text-center py-6">
				&copy; Byte Crafters - All right Reserved.
			</p>
		</div>
	);
};

export default Footer;
