import { Play } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { usePostProgress } from '../hooks/UseProgress'

interface Props {
    url: string
    setProgress: React.Dispatch<React.SetStateAction<number>>
    isIntersecting: boolean
    ref?: React.RefObject<HTMLVideoElement | null>
}

export default function VideoPlayer({ ref, url, setProgress, isIntersecting }: Props) {
    const localVideo = useRef<HTMLVideoElement>(null)
    const videoRef = ref ? ref : localVideo
    const progress = usePostProgress({ videoRef })

    const [isPlaying, setIsPlaying] = React.useState(false)

    const handlePlay = () => {
        const isPaused = videoRef.current?.paused
        if (videoRef.current && isPaused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else if (videoRef.current && !isPaused) {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    useEffect(() => {
        setProgress(progress)
    }, [progress])

    useEffect(() => {
        const video = videoRef.current
        if (video && isIntersecting) {
            video.play()
            setIsPlaying(true)
        } else if (video && !isIntersecting) {
            video.pause()
            video.currentTime = 0
            setIsPlaying(false)
        }
    }, [url, isIntersecting])

    return (
        <div
            onClick={handlePlay}
            className='relative flex w-full h-full'>
            <video
                loop
                ref={videoRef}
                src={url}
                className='w-full h-full object-contain'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
                {!isPlaying && <Play className='fill-white/70' />}
            </div>
        </div>
    )
}
