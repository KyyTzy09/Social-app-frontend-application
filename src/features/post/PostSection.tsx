import type { Post } from '@/data/models/PostModel'
import { Bookmark, Bubbles, Heart, Plane, type LucideIcon } from 'lucide-react'
import React from 'react'

interface Props {
    post: Post
}

export default function PostSection({ post }: Props) {
    return (
        <section className="pl-20 w-full h-screen flex items-center justify-center snap-start p-5 relative max-h-screen">
            <div className="relative flex items-center justify-center h-full rounded-xl overflow-hidden shadow-2xl group max-w-screen gap-4">
                <div className='relative flex w-full h-full items-center justify-center rounded-t-md overflow-hidden'>
                    <video
                        controls
                        autoPlay
                        loop
                        className=" w-full h-full min-h-screen object-contain rounded-md"
                        src={post.contentUrl}
                    />
                    {/* Profile Creator */}
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-[#09090b]/90 to-transparent z-10">
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
                </div>

                {/* Interaction Sidebar */}
                <div className="h-full flex flex-col gap-6 items-center justify-end pb-8">
                    <ActionButton Icon={Heart} count="42.8k" highlight />
                    <ActionButton Icon={Bubbles} count="842" />
                    <ActionButton Icon={Bookmark} count="12.1k" />
                    <ActionButton Icon={Plane} count="Share" />
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
                ? 'bg-[#2d3449]/40 group-hover/btn:bg-primary group-hover/btn:text-[#003732]'
                : 'bg-[#2d3449]/40 group-hover/btn:bg-[#31394d]'
                }`}
        >
            <Icon className='w-6 h-6' />
        </div>
        <span className="text-[10px] font-bold text-white">{count}</span>
    </div>
)