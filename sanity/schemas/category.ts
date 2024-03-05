import { defineField, defineType } from "sanity";

// type Category = {
// 	_id: string;
// 	title: string;
// 	description: string;
// 	_createdAt: string;
// 	_rev: string;
// 	_type: string;
// 	_updatedAt: string;
// };
export default defineType({
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
	],
});
