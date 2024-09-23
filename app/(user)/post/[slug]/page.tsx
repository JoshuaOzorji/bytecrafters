"use client";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Subscription from "@/components/Subscription";
import {
	AiOutlineTwitter,
	AiFillFacebook,
	AiFillLinkedin,
} from "react-icons/ai";
import { BsCalendarWeek } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";

type Props = {
	params: {
		slug: string;
	};
};

export const revalidate = 60;

const Post = ({ params: { slug } }: Props) => {
	const [post, setPost] = useState<Post | null>(null);
	const [readTime, setReadTime] = useState(0);
	const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPost = async () => {
			const query = groq`
        *[_type == "post" && slug.current == $slug][0] {
          ...,
          author->,
          categories[]->
        }
      `;
			const fetchedPost: Post = await client.fetch(query, {
				slug,
			});
			setPost(fetchedPost);
		};

		fetchPost();
	}, [slug]);

	useEffect(() => {
		if (post) {
			const wordsPerMinute = 150;
			const wordCount = post.body.reduce(
				(count: number, block: any) =>
					count +
					block.children[0].text.split(" ")
						.length,
				0,
			);
			const time = Math.ceil(wordCount / wordsPerMinute);
			setReadTime(time);
		}
	}, [post]);

	useEffect(() => {
		const fetchRelatedPosts = async () => {
			const relatedQuery = groq`
			*[_type == "post" && slug.current == $slug][0] {
			title,
			categories[]->,
			"related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..2] {
				title,
				slug
			}
			}
		  `;

			const fetchedRelatedPost = await client.fetch(
				relatedQuery,
				{
					slug,
				},
			);

			if (fetchedRelatedPost.related) {
				setRelatedPosts(fetchedRelatedPost.related);
			}
		};
		if (post) {
			fetchRelatedPosts();
		}
	}, [post, slug]);

	if (!post) {
		return <div></div>;
	}

	return (
		<article className='pt-6 my-6 mt-20 font-abel bg-accent1'>
			<div className='sm:mx-4 md:mx-32'>
				<section className='flex flex-row items-center font-abel sm:text-sm md:text-base'>
					<div className=''>
						{post.categories?.map(
							(category) => (
								<div
									key={
										post._id
									}
									className='inline-block '>
									<p className='bg-small'>
										<FiGrid />
										{
											category.title
										}
									</p>
								</div>
							),
						)}
					</div>

					<p className='sm:text-sm md:text-base bg-small'>
						<BsCalendarWeek />
						{new Date(
							post._createdAt,
						).toLocaleDateString("en-US", {
							day: "numeric",
							month: "short",
							year: "numeric",
						})}
					</p>

					<p className='bg-small'>
						{" "}
						<CiClock2 className='w-4' />
						{readTime} min read
					</p>
				</section>
				{/* TITLE*/}
				<section className='my-6 font-bold sm:text-xl md:text-6xl font-abel text-primary'>
					{post.title}
				</section>
				<section className='flex flex-row items-center font-abel text-secondary gap-x-2'>
					<Image
						className='rounded-full'
						src={urlFor(
							post.author.image,
						).url()}
						alt={post.author.name}
						height={40}
						width={40}
					/>

					<p className='md:text-base'>
						{post.author.name}
					</p>
				</section>
				{/* IMAGE AND DESCRIPTION*/}
				<section>
					{/* MD BREAKPOINT */}
					<div className='relative my-6 sm:hidden md:flex h-96'>
						<Image
							src={urlFor(
								post.mainImage,
							).url()}
							alt={post.author.name}
							fill
							className='object-cover object-center rounded-lg md:h-96'
						/>
					</div>
					{/* SM BREAKPOINT */}
					<div className='relative my-6 md:hidden h-52'>
						<Image
							src={urlFor(
								post.mainImage,
							).url()}
							alt={post.author.name}
							fill
							className='object-cover object-center rounded-lg'
						/>
					</div>

					<div>
						<h2 className='italic font-bold sm:text-base md:text-xl md:px-6 sm:px-2'>
							{post.description}
						</h2>
					</div>
				</section>

				<section className='text-secondary sm:text-xs sm:px-8 md:px-28 md:text-lg'>
					<PortableText
						value={post.body}
						components={RichTextComponents}
					/>
				</section>
				{/* SOCIAL MEDIA SHARE */}
				<section className='flex flex-col items-center justify-center my-4'>
					<div className='flex flex-row gap-2 p-2 bg-primary'>
						<Link
							href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
								post.slug
									.current,
							)}&p[title]=${encodeURIComponent(
								post.title,
							)}`}>
							<span className='cursor-pointer text-accent2 hover:text-accent'>
								<AiFillFacebook className='w-8 h-8' />
							</span>
						</Link>

						<Link
							href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
								post.slug
									.current,
							)}&text=${encodeURIComponent(
								post.title,
							)}`}>
							<span className='cursor-pointer text-accent2 hover:text-accent'>
								<AiOutlineTwitter className='w-8 h-8' />
							</span>
						</Link>
						<Link
							href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
								post.title,
							)}%20${encodeURIComponent(
								post.slug
									.current,
							)}`}>
							<span className='cursor-pointer text-accent2 hover:text-accent'>
								<FaWhatsapp className='w-8 h-8' />
							</span>
						</Link>
						<Link
							href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
								post.slug
									.current,
							)}&title=${encodeURIComponent(
								post.title,
							)}`}>
							<span className='cursor-pointer text-accent2 hover:text-accent'>
								<AiFillLinkedin className='w-8 h-8' />
							</span>
						</Link>
					</div>
				</section>

				<section className='sm:mx-4 md:mx-14'>
					{relatedPosts.length > 0 && (
						<div className=''>
							<h3 className='mt-8 mb-4 font-bold sm:text-lg md:text-3xl text-primary'>
								You might also
								like
							</h3>
							<ul className='flex flex-col gap-6'>
								{relatedPosts.map(
									(
										relatedPost,
									) => (
										<li
											key={
												relatedPost
													.slug
													.current
											}>
											{relatedPost
												.slug
												.current ? (
												<Link
													href={`/post/${relatedPost.slug.current}`}>
													<div className='grid p-4 shadow-md grid-row-2 sm:gap-2 md:gap-4 bg-accent'>
														<div className='row-span-1'>
															<p className='font-bold sm:text-sm md:text-2xl text-primary'>
																{
																	relatedPost.title
																}
															</p>
														</div>
														<div className='row-span-1'>
															<p className='flex flex-row items-center gap-1 sm:text-sm md:text-base md:flex-row font-abel'>
																<CiClock2 className='w-4' />
																{
																	readTime
																}{" "}
																min
																read
															</p>
														</div>
													</div>
												</Link>
											) : (
												<div></div>
											)}
										</li>
									),
								)}
							</ul>
						</div>
					)}
				</section>
			</div>
			<section className='mt-16 mb-16 sm:mx-4 md:mx-[168px]'>
				<Subscription />
			</section>
		</article>
	);
};

export default Post;
