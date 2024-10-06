import React from 'react'
import AudioPlayer from './audio-player';


interface WordWithAudioProp{
    word:string
    pronouciaiton:string
    audioLink:string
}
function WordWithAudio({word, pronouciaiton, audioLink}:WordWithAudioProp) {
  return (
    <section className=" md:h-[116px] ">
      <div className=" w-full flex justify-between h-[114px] items-center">
        <div className='sm:space-y-4'>
          <h2 className="text-4xl sm:text-6xl leading-[5rem]  font-bold">{word}</h2>
          <p className=" text-2xl text-primary">{pronouciaiton}</p>
        </div>

        <AudioPlayer audioLink={audioLink}/>
      </div>
    </section>
  );
}

export default WordWithAudio