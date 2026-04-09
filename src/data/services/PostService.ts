import { apiClient } from "@/common/lib/api-client"
import type { Post } from "../models/PostModel"

class PostService {
    async getAllPost(page: number, limit: number) {
        return await apiClient<{ data: Post[] }>({ url: `/post?page=${page}&limit=${limit}`, method: "GET" })
    }
}

export const postService = new PostService()