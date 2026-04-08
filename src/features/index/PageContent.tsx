
import React from 'react'

export default function PageContent() {
    return (
        <main className="ml-64 flex-1 h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
            {/* Section 1 */}
            <section className="h-full w-full flex items-center justify-center snap-start py-8 px-4">
                <div className="relative h-full max-h-[850px] aspect-[9/16] bg-[#171f33] rounded-xl overflow-hidden shadow-2xl group">
                    <img
                        alt="Travel Scene"
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy7ZJFwOCI2eNVdQcxeqUZzvSzSlw15fNtndPmMVvpN72MH6Jmt0-qLwhOlljud2_eQBAOkGLxcwDybplVqxIgshbmAcctBoBq7rDVE0aw1d8c4vm0WnIrM6x-rH9-RD1CZDpWVaIdwlwXvQXi1vPmySdY-hOU6oUvmQYjgEGB5PTbfOFzuXyxXEVci8j8etvzQFsE1R8-z-2Uo7AkEj1E_JO7RzO1QlipCEwzx7mJxE9vTOYO73GuM4hlz3hf71OVyvWFznKhntM"
                    />

                    {/* Interaction Sidebar */}
                    <div className="absolute right-4 bottom-32 flex flex-col gap-6 z-20">
                        <ActionButton icon={"favorite"} count="42.8k" highlight />
                        <ActionButton icon="chat_bubble" count="842" />
                        <ActionButton icon="bookmark" count="12.1k" />
                        <ActionButton icon="share" count="Share" />
                    </div>

                    {/* Video Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0b1326]/90 to-transparent z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-12 w-12 rounded-full border-2 border-[#46eedd] overflow-hidden">
                                <img
                                    alt="Creator"
                                    className="h-full w-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP5Ejq92-IIwY4357914K5PBMpFCVBB3RMDsA1gOReSbG96_ZPguIzc67CuelhL-ajMF3TQ1sZnV9tFNDHCeMu0M-EJ_ybOYf5Qs6pVBvR9Qp9vi8MO3Cbrb1k9tcJLl37sclogFowkhkL82nFWGOI7_N_si-CQ7gVMUmJv_pg4Dt_nh0TeVviGA3tG5uLyxt6yMjQ9B7_RwftmObqPCnR2vVH4KRcl_IZApSVpQF9ZPldtXDJHSNIEQE_MBPax4dCbPc6dCZvLkI"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-white font-['Manrope'] tracking-tight">
                                    elara.voyage
                                </h3>
                                <p className="text-xs text-[#46eedd] font-medium">Follow</p>
                            </div>
                        </div>
                        <p className="text-sm text-[#dae2fd] leading-relaxed mb-4 max-w-[80%]">
                            Finding stillness in the Aegean. Minimalism isn't just an
                            aesthetic, it's a way of seeing. 🌊✨
                        </p>
                        <div className="flex items-center gap-2 text-[#bacac6] text-xs bg-white/5 backdrop-blur-sm w-fit px-3 py-1 rounded-full">
                            <span className="material-symbols-outlined text-sm">
                                music_note
                            </span>
                            <span className="truncate max-w-[150px]">
                                Original Audio - Ethereal Echoes
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                        <div className="h-full bg-[#46eedd] w-1/3"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

const ActionButton = ({
    icon,
    count,
    highlight = false,
}: {
    icon: string
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
            <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
            >
                {icon}
            </span>
        </div>
        <span className="text-[10px] font-bold text-white">{count}</span>
    </div>
)