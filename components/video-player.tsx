"use client";
import React, { useRef, useState, useEffect } from "react";

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
    <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        src="/vid.mp4"
        className="w-full h-auto rounded-3xl bg-black"
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
        <button
          onClick={handlePlayPause}
          className="bg-black/60 text-white px-4 py-2 rounded-full flex items-center gap-2 text-lg shadow"
        >
          {playing ? (
            <span>&#10073;&#10073; Pause</span>
          ) : (
            <span>&#9654; Play</span>
          )}
        </button>
        <button
          onClick={handleMuteToggle}
          className="bg-black/60 text-white px-4 py-2 rounded-full flex items-center gap-2 text-lg shadow"
        >
          {muted ? (
            <span>&#128263; Unmute</span>
          ) : (
            <span>&#128266; Mute</span>
          )}
        </button>
      </div>
    </div>
  );
}
