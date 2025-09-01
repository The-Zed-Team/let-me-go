"use client";
import React, { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon, VolumeXIcon, Volume2Icon } from "lucide-react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    // Ensure video autoplays when component mounts
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setPlaying(true);
      }).catch((error) => {
        console.log("Autoplay failed:", error);
        // Autoplay failed, user will need to click play
      });
    }
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative w-full md:max-w-6xl md:aspect-video rounded-3xl overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        src="/vid.mp4"
        className="w-full h-auto max-sm:h-[800px] object-cover"
        onClick={handlePlayPause}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute left-6 bottom-6 flex gap-3 z-10">
        
        <div className="blur-in bg-white/30 rounded-full">
        <button
          onClick={handlePlayPause}
          className=" text-white px-2 py-1 rounded-full flex items-center gap-2 text-sm "
        >
          {playing ? (
            <>
              <PauseIcon className="w-4 h-4" aria-hidden />
              <span className="sr-only">Pause</span>
            </>
          ) : (
            <>
              <PlayIcon className="w-4 h-4" aria-hidden />
              <span className="sr-only">Play</span>
            </>
          )}
        </button>
        </div>
        <div className="blur-in bg-white/30 rounded-full">
          <button
            onClick={handleMuteToggle}
            aria-pressed={muted}
            className=" text-white px-2 py-1 rounded-full flex items-center gap-2 text-sm "
          >
            {muted ? (
              <>
                <VolumeXIcon className="w-4 h-4" aria-hidden />
                <span className="sr-only">Unmute</span>
              </>
            ) : (
              <>
                <Volume2Icon className="w-4 h-4" aria-hidden />
                <span className="sr-only">Mute</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
