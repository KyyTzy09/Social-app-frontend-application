
import { useGetAllPost } from '@/data/hooks/PostHook'
import React, { useEffect, useRef } from 'react'
import type { Post } from '@/data/models/PostModel'
import { Bookmark, Bubbles, Heart, Plane, type IconNode, type LucideIcon } from 'lucide-react'
import PostSection from './PostSection'

export default function PageContent() {
    const { data, isLoading, isError, fetchNextPage, hasNextPage } = useGetAllPost(10)

    // Intersection Observer for infinite scrolling
    const observerTarget = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage()
                }
            },
            { threshold: 0.1 }
        )

        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }

        return () => observer.disconnect()
    }, [hasNextPage, fetchNextPage])

    return (
        <main className="ml-64 flex-1 h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
            {isLoading && <div className="text-white text-center py-8">Loading...</div>}
            {isError && <div className="text-red-500 text-center py-8">Error loading posts</div>}

            {data?.pages.map((page, i) => (
                <React.Fragment key={i}>
                    {page?.data.map((post: Post) => (
                        <PostSection key={post.postId} post={post} />
                    ))}
                </React.Fragment>
            ))}

            <div ref={observerTarget} className="h-10 w-full snap-start" />
        </main>
    )
}
