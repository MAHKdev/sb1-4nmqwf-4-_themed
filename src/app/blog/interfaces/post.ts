import { type Author } from "./author";

export type Post = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    keywords: string[]; // Keywords should be an array of strings
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
};