
export interface PostCategory {
    categoryId: string;
    postId: string;
}

export interface Category {
    categoryId: string;
    name: string;
    postCategories: PostCategory[];
}