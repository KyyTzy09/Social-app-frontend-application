import { useEffect, useState } from "react";


interface IPostProgress {
    videoRef: React.RefObject<(HTMLVideoElement | null)>;
}

export function usePostProgress({
    videoRef
}: IPostProgress) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (!video.duration) return;
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent);
        };

        video.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [])

    return progress;
}