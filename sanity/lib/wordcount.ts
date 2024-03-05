import { groq } from "next-sanity";
import { client } from "./client";

export default async function getPosts() {
	const query = groq`
    *[_type == "post"]{
      title,
      "estimatedWordCount": round(length(pt::text(body[].children[].text)) / 20),
      "estimatedReadingTime": round(length(pt::text(body[].children[].text)) / 500)
    }`;

	const results = await client.fetch(query);
	return results;
}
