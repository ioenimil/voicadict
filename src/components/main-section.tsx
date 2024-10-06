import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import SearchBar from "./search-bar";
import { Separator } from "./ui/separator";
import WordWithAudio from "./word-with-audio";
import Link from "next/link";

function MainSection() {
  const data = [
    "(etc.) A set of keys used to operate a typewriter, computer etc.",
    "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
    "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
  ];

  const verbData = [
    "To type on a computer keyboard.",
    "Keyboarding is the part of this job I hate the most.",
    "To enter (data) by typing on a computer keyboard.",
  ];
  return (
    <>
      <SearchBar />
      <WordWithAudio
        word={"Keyboard"}
        pronouciaiton={"/ˈkiːbɔːd/"}
        audioLink={"/assets/sounds/what.mp3"}
      />
      <ScrollArea className=" h-full flex flex-col  justify-between ">
        <div className=" flex flex-col gap-8">
          <section className=" space-y-8 ">
            <div className=" flex justify-between items-center gap-5">
              <h1 className="text-2xl font-bold">noun</h1>
              <Separator />
            </div>
            <div className=" text-xl font-normal items-center flex gap-10 text-mild-muted">
              Meaning
            </div>
            <ul className="pl-8 h-full space-y-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className=" relative flex p-1 items-center gap-4"
                >
                  <span className="before:absolute  text-xl before:top-1/2 before:-left-5 before:h-2 before:w-2 before:rounded-full before:bg-primary before:-translate-x-1/2 before:-translate-y-1/2">
                    {item}
                  </span>
                </div>
              ))}
            </ul>
            <div className=" text-xl font-normal items-center flex gap-10 text-mild-muted">
              <span>Synonyms</span>
              <div>
                <Button className=" text-xl font-bold " variant={"link"}>
                  Ant
                </Button>
                <Button className=" text-xl font-bold " variant={"link"}>
                  Stant
                </Button>
                <Button className=" text-xl font-bold" variant={"link"}>
                  Pant
                </Button>
              </div>
            </div>
          </section>
          <section className=" space-y-8 ">
            <div className=" flex justify-between items-center gap-5">
              <h1 className="text-2xl font-bold">verb</h1>
              <Separator />
            </div>
            <div className=" text-xl font-normal items-center flex gap-10 text-mild-muted">
              Meaning
            </div>
            <ul className="pl-8 h-full space-y-4">
              {verbData.map((item, index) => (
                <div
                  key={index}
                  className=" relative flex p-1 items-center gap-4"
                >
                  <span className="before:absolute  text-xl before:top-1/2 before:-left-5 before:h-2 before:w-2 before:rounded-full before:bg-primary before:-translate-x-1/2 before:-translate-y-1/2">
                    {item}
                  </span>
                </div>
              ))}
            </ul>
            <div className=" text-xl font-normal items-center flex gap-10 text-mild-muted">
              <span>Synonyms</span>
              <div>
                <Button className=" text-xl font-bold " variant={"link"}>
                  Ant
                </Button>
                <Button className=" text-xl font-bold " variant={"link"}>
                  Stant
                </Button>
                <Button className=" text-xl font-bold" variant={"link"}>
                  Pant
                </Button>
              </div>
            </div>
          </section>
          <Separator />
          <footer>
            <div className=" text-lg font-normal items-center flex gap-10 text-mild-muted">
              <span>Source</span>
              <Link
              target="_blank"
                className=" focus:outline-none"
                href={"https://en.wiktionary.org/wiki/keyboard"}
              >
                {" "}
                <Button className=" text-base  " variant={"link"}>
                  https://en.wiktionary.org/wiki/keyboard
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </ScrollArea>
    </>
  );
}

export default MainSection;
