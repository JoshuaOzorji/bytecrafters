"use client";
import { useState } from "react";
import Image from "next/image";
import urlFor from "../sanity/lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import { calculateReadTime } from "./utils";
import { FiGrid } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import Subscription from "./Subscription";
type Props = {
	posts: Post[];
};

const Bloglist = ({ posts }: Props) => {
	const [visiblePosts, setVisiblePosts] = useState(5);
	const postsToShow = posts.slice(0, visiblePosts);
	const loadMorePosts = () => {
		setVisiblePosts(visiblePosts + 4);
	};

	return (
		<div className='sm:mx-4 md:mx-14 mt-20 mb-10'>
			{postsToShow.map((post) => {
				const readTime = calculateReadTime(post);
				return (
					<ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
						<div className='flex md:flex-row sm:flex-row sm:gap-2 md:gap-10 sm:py-4 md:py-8 border-b items-center'>
							<div className='flex flex-col w-3/4 gap-y-3'>
								<div className='flex flex-wrap gap-2'>
									{post.categories?.map((category) => (
										<div key={post._id} className='inline-block '>
											<p className='bg-accent rounded-lg px-3 mr-4 sm:text-sm md:text-base border flex md:flex-row font-abel flex-row items-center gap-1'>
												<FiGrid />
												{category.title}
											</p>
										</div>
									))}
									<div className='inline-block'>
										<p className=' bg-accent rounded-lg px-3 mr-4 sm:text-sm md:text-base border flex md:flex-row font-abel flex-row items-center gap-1'>
											{" "}
											<CiClock2 />
											{readTime} min read
										</p>
									</div>
								</div>

								<div className='sm:text-xl md:text-6xl font-bold font-abel text-primary hover:text-secondary'>
									{post.title}
								</div>

								<div className='flex items-center gap-x-2 '>
									<Image
										className='rounded-full object-contain'
										src={urlFor(post.author.image).url()}
										alt={post.author.name}
										height={30}
										width={30}
									/>

									<p className='font-abel text-secondary sm:text-sm md:text-base'>
										{new Date(post._createdAt).toLocaleDateString("en-US", {
											day: "numeric",
											month: "short",
											year: "numeric",
										})}
									</p>
								</div>
							</div>

							<div className='w-1/4'>
								<div
									style={{
										width: "100%",
										height: 0,
										paddingTop: "100%",
										position: "relative",
									}}>
									<Image
										src={urlFor(post.mainImage).url()}
										alt={post.author.name}
										fill
										className='rounded-lg object-cover object-right'
									/>
								</div>
							</div>
						</div>
					</ClientSideRoute>
				);
			})}
			<section className='my-16 flex justify-center '>
				{visiblePosts < posts.length && (
					<button
						className='bg-primary inline-block text-accent2 rounded py-2 font-abel text-xl px-5 hover:bg-secondary hover:text-accent delay-200 transition hover:border'
						onClick={loadMorePosts}>
						Load more...
					</button>
				)}
			</section>
		</div>
	);
};

export default Bloglist;
