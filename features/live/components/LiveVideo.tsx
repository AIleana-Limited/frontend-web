// components/LiveVideo.tsx
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";


export default function LiveVideo() {
   const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !muted;
    videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  const changeVolume = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.volume = value;
    setVolume(value);
    videoRef.current.muted = value === 0;
    setMuted(value === 0);
  };

  return (
  <div className="absolute inset-0">
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="none"
        poster="/demo/creator-3.jpg"
      >
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTROLS */}
      <div className="absolute bottom-35 right-5 z-20 flex items-center gap-3 rounded-full bg-black/60 px-3 py-2 backdrop-blur">
        <button onClick={toggleMute} className="cursor-pointer">
          {muted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
          className="h-1 w-20 accent-blue-500 cursor-pointer"
        />
      </div>
    </div>
  );
}
