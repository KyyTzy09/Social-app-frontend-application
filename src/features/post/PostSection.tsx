import VideoPlayer from '@/common/components/Player'
import type { PostResponse } from '@/data/models/PostModel'
import { Bookmark, Bubbles, Heart, Plane, type LucideIcon } from 'lucide-react'
import PostProgress from './PostProgress'
import { useEffect, useRef, useState } from 'react'
interface Props {
    post: PostResponse
}

export default function PostSection({ post }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [progress, setProgress] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // threshold 0.6 artinya video harus nongol 60% baru diputar
                setIsIntersecting(entry.isIntersecting)
            },
            { threshold: 0.6 }
        )

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="pl-20 w-full h-screen flex items-center justify-center snap-start p-5 relative max-h-screen">
            <div className="relative flex items-center justify-center h-full rounded-xl overflow-hidden shadow-2xl group max-w-screen gap-4">
                <div className='relative flex w-full h-full items-center justify-center rounded-t-md overflow-hidden'>
                    <div className='flex w-full h-full min-h-screen'>
                        <VideoPlayer
                            ref={videoRef}
                            url={post.contentUrl || ""}
                            setProgress={setProgress}
                            isIntersecting={isIntersecting}
                        />
                    </div>
                    {/* Profile Creator */}
                    <div className="absolute flex flex-col bottom-0 left-0 w-full p-8 bg-linear-to-t from-[#09090b]/90 to-transparent z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-12 w-12 rounded-full border-2 border-[#46eedd] overflow-hidden bg-gray-500">
                                <img
                                    alt="Creator"
                                    className="h-full w-full object-cover"
                                    src={post.sender.profile.avatar}
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-white font-['Manrope'] tracking-tight">
                                    {post.sender.profile.username}
                                </h3>
                                <p className="text-xs text-[#46eedd] font-medium">Follow</p>
                            </div>
                        </div>
                        <p className="text-sm text-[#dae2fd] leading-relaxed mb-4 max-w-[80%]">
                            <strong className="block font-bold text-lg">{post.title}</strong>
                            {post.description}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-xs bg-white/5 backdrop-blur-sm w-fit px-3 py-1 rounded-full">
                            <span className="material-symbols-outlined text-sm">
                                music_note
                            </span>
                        </div>
                    </div>
                </div>

                {/* Interaction Sidebar */}
                <div className="h-full flex flex-col gap-6 items-center justify-end pb-8">
                    <ActionButton Icon={Heart} count="42.8k" highlight />
                    <ActionButton Icon={Bubbles} count="842" />
                    <ActionButton Icon={Bookmark} count="12.1k" />
                    <ActionButton Icon={Plane} count="Share" />
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                    <PostProgress
                        videoRef={videoRef}
                        progress={progress}
                        isIntersecting={isIntersecting}
                    />
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
                ? 'bg-[#2d3449]/40 group-hover/btn:bg-primary group-hover/btn:text-[#003732]'
                : 'bg-[#2d3449]/40 group-hover/btn:bg-[#31394d]'
                }`}
        >
            <Icon className='w-6 h-6' />
        </div>
        <span className="text-[10px] font-bold text-white">{count}</span>
    </div>
)