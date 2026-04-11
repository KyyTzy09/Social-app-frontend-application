

interface Props {
    videoRef: React.RefObject<HTMLVideoElement | null>
    progress: number
    isIntersecting: boolean
}

export default function PostProgress({ progress, videoRef, isIntersecting }: Props) {
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left // Posisi klik
        const width = rect.width
        const percentage = x / width
        if (videoRef.current && isIntersecting) {
            videoRef.current.currentTime = percentage * videoRef.current.duration
        }
    }

    return (
        <section
            onClick={handleSeek}
            className="cursor-pointer flex items-center justify-center w-full gap-1">
            <div
                className="w-full flex-1 h-[3px] bg-white/30 rounded-md overflow-hidden transition-all ease-linear"
            >
                <div
                    className="h-full bg-[#46eedd] transition-all duration-100"
                    style={{
                        width: `${progress}%`
                    }}
                />
            </div>
        </section>
    )
}
