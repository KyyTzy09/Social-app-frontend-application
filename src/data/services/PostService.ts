import { apiClient } from "@/common/lib/api-client"
import type { PostResponse } from "../models/PostModel"

class PostService {
    async getAllPost(page: number, limit: number) {
        return await apiClient<{ data: PostResponse[] }>({ url: `/post?page=${page}&limit=${limit}`, method: "GET" })
    }
}

export const postService = new PostService()