import type { Author } from "./author";

export type Posts = {
    name: string;
    description: string;
    image: string;
    author: Author;
    likes: number;
}