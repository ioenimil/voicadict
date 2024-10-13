import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { PlayIcon, PauseIcon } from "lucide-react";

interface AudioPlayerProps {
  audioLink: string | undefined;
}

function AudioPlayer({ audioLink }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayClick = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      audioRef.current?.play();
    }
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [audioRef]);

  return (
    <div>
      <audio ref={audioRef} src={audioLink} />
      <Button
        variant={"default"}
        onClick={handlePlayClick}
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-primary/25 shadow-md hover:bg-primary sm:h-20 sm:w-20"
      >
        {isPlaying ? (
          <PauseIcon
            size={30}
            className="h-3 w-3 fill-current text-primary group-hover:text-secondary dark:group-hover:text-foreground sm:h-7 sm:w-7"
          />
        ) : (
          <PlayIcon
            size={30}
            className="h-4 w-4 fill-current text-primary group-hover:text-secondary dark:group-hover:text-foreground sm:h-7 sm:w-7"
          />
        )}
      </Button>
    </div>
  );
}

export default AudioPlayer;
