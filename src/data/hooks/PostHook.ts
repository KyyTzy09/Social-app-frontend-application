import { useInfiniteQuery } from "@tanstack/react-query"
import { postService } from "../services/PostService"

export const useGetAllPost = (limit: number) => {
    return useInfiniteQuery({
        queryKey: ['posts', limit],
        initialPageParam: 1,
        queryFn: async ({ pageParam = 1 }) => {
            const response = await postService.getAllPost(pageParam, limit)
            return response
        },
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage?.data.length === limit) {
                return allPages.length + 1
            } else {
                return undefined
            }
        }
    })

}