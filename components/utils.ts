export const calculateReadTime = (post: any) => {
	const wordsPerMinute = 150;
	const wordCount = post.body?.reduce((count: number, block: any) => {
		if (block?.children?.[0]?.text) {
			return count + block.children[0].text.split(" ").length;
		}
		return count;
	}, 0);
	return Math.ceil(wordCount / wordsPerMinute);
};
