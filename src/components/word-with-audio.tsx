import React from "react";
import AudioPlayer from "./audio-player";

interface WordWithAudioProp {
  word: string;
  pronouciaiton: string;
  audioLink: string | undefined;
}
function WordWithAudio({ word, pronouciaiton, audioLink }: WordWithAudioProp) {
  return (
    <section className="sticky top-0 z-[2] backdrop-blur-md md:h-[116px]">
      <div className="flex h-[114px] w-full items-center justify-between">
        <div className="sm:space-y-4">
          <h2 className="text-4xl font-bold leading-[5rem] sm:text-6xl">
            {word}
          </h2>
          <p className="text-2xl text-primary">{pronouciaiton}</p>
        </div>

       {
        audioLink&& <AudioPlayer audioLink={audioLink} />
       }
      </div>
    </section>
  );
}

export default WordWithAudio;
