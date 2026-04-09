
import { useGetAllPost } from '@/data/hooks/PostHook'
import React, { useEffect, useRef } from 'react'
import type { Post } from '@/data/models/PostModel'
import { Bookmark, Bubbles, Heart, Plane, type IconNode, type LucideIcon } from 'lucide-react'

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

const PostSection = ({ post }: { post: Post }) => {
    return (
        <section className="h-full w-full flex items-center justify-center snap-start py-8 px-4 relative">
            <div className="relative min-h-[30vh] max-h-[90vh] aspect-[9/16] bg-[#171f33] rounded-xl overflow-hidden shadow-2xl group w-full max-w-lg">
                <video
                    autoPlay
                    loop
                    className="absolute inset-0 w-full h-full object-contain"
                    src={post.contentUrl}
                />

                {/* Interaction Sidebar */}
                <div className="absolute right-4 bottom-32 flex flex-col gap-6 z-20">
                    <ActionButton Icon={Heart} count="42.8k" highlight />
                    <ActionButton Icon={Bubbles} count="842" />
                    <ActionButton Icon={Bookmark} count="12.1k" />
                    <ActionButton Icon={Plane} count="Share" />
                </div>

                {/* Video Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0b1326]/90 to-transparent z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-full border-2 border-[#46eedd] overflow-hidden bg-gray-500">
                            <img
                                alt="Creator"
                                className="h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP5Ejq92-IIwY4357914K5PBMpFCVBB3RMDsA1gOReSbG96_ZPguIzc67CuelhL-ajMF3TQ1sZnV9tFNDHCeMu0M-EJ_ybOYf5Qs6pVBvR9Qp9vi8MO3Cbrb1k9tcJLl37sclogFowkhkL82nFWGOI7_N_si-CQ7gVMUmJv_pg4Dt_nh0TeVviGA3tG5uLyxt6yMjQ9B7_RwftmObqPCnR2vVH4KRcl_IZApSVpQF9ZPldtXDJHSNIEQE_MBPax4dCbPc6dCZvLkI"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-white font-['Manrope'] tracking-tight">
                                User Name
                            </h3>
                            <p className="text-xs text-[#46eedd] font-medium">Follow</p>
                        </div>
                    </div>
                    <p className="text-sm text-[#dae2fd] leading-relaxed mb-4 max-w-[80%]">
                        <strong className="block mb-1">{post.title}</strong>
                        {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#bacac6] text-xs bg-white/5 backdrop-blur-sm w-fit px-3 py-1 rounded-full">
                        <span className="material-symbols-outlined text-sm">
                            music_note
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                    <div className="h-full bg-[#46eedd] w-1/3"></div>
                </div>
            </div>
        </section>
    )
}

const ActionButton = ({
    Icon,
    count,
    highlight = false,
}: {
    Icon: LucideIcon,
    count: string
    highlight?: boolean
}) => (
    <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
        <div
            className={`h-12 w-12 rounded-full backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 ${highlight
                ? 'bg-[#2d3449]/40 group-hover/btn:bg-[#46eedd] group-hover/btn:text-[#003732]'
                : 'bg-[#2d3449]/40 group-hover/btn:bg-[#31394d]'
                }`}
        >
            <Icon className='w-6 h-6' />
        </div>
        <span className="text-[10px] font-bold text-white">{count}</span>
    </div>
)