import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import PreviewSuspense from "next-sanity/preview";
import Bloglist from "@/components/Bloglist";
import Subscription from "@/components/Subscription";
const query = groq`
*[_type=='post'] {
	...,
	author->, 
	categories[]->
} | order(_createdAt desc)
`;
export const revalidate = 60;

async function HomePage() {
	const posts = await client.fetch(query);
	return (
		<div>
			<Bloglist posts={posts} />
			<div className='md:mx-28'>
				<Subscription />
			</div>
		</div>
	);
}

export default HomePage;
