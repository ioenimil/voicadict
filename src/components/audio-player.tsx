import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { PlayIcon, PauseIcon } from "lucide-react";

interface AudioPlayerProps {
  audioLink: string;
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

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [audioRef]);

  return (
    <div>
      <audio ref={audioRef} src={audioLink} />
      <Button
      variant={"default"}
        onClick={handlePlayClick}
        className=" h-11 w-11 group sm:h-20 hover:bg-primary bg-primary/25 shadow-md   sm:w-20 flex items-center justify-center rounded-full"
      >
        {isPlaying ? (
          <PauseIcon
            size={30}
            className=" text-primary group-hover:text-secondary dark:group-hover:text-foreground h-3 w-3 sm:h-7 sm:w-7 fill-current"
          />
        ) : (
          <PlayIcon
            size={30}
            className="  text-primary group-hover:text-secondary dark:group-hover:text-foreground h-3 w-3 sm:h-7 sm:w-7 fill-current"
          />
        )}
      </Button>
    </div>
  );
}

export default AudioPlayer;
