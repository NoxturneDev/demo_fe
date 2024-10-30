import React, { useState, useRef } from "react";
import YouTube from "react-youtube";

const skipTimestamps = [
  { label: "Skip to 00:10", time: 10 },
  { label: "Skip to 00:45", time: 45 },
  { label: "Skip to 01:15", time: 75 },
];

export default function VideoPlayer({ videoId }) {
  const [player, setPlayer] = useState(null);
  const currentIndex = useRef(0);
  
  const onReady = (event) => {
    setPlayer(event.target);
  };
  
  const handleSkip = () => {
    if (player && currentIndex.current < skipTimestamps.length) {
      const { time } = skipTimestamps[currentIndex.current];
      player.seekTo(time, true);
      currentIndex.current += 1;
    }
  };
  
  const handleReset = () => {
    currentIndex.current = 0;
    player.seekTo(0, true);
  };
  
  return (
    <div className="video-player">
      <YouTube
        videoId={videoId}
        onReady={onReady}
        opts={{ width: "100%", height: "700", playerVars: { autoplay: 1 } }}
      />
      {/*<div className="controls mt-4">*/}
      {/*  <button*/}
      {/*    onClick={handleSkip}*/}
      {/*    disabled={currentIndex.current >= skipTimestamps.length}*/}
      {/*    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"*/}
      {/*  >*/}
      {/*    {currentIndex.current < skipTimestamps.length*/}
      {/*      ? skipTimestamps[currentIndex.current].label*/}
      {/*      : "No more skips"}*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    onClick={handleReset}*/}
      {/*    className="px-4 py-2 bg-gray-500 text-white rounded"*/}
      {/*  >*/}
      {/*    Reset*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
}
