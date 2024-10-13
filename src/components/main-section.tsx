import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import SearchBar from "./search-bar";
import { Separator } from "./ui/separator";
import WordWithAudio from "./word-with-audio";
import Link from "next/link";
import { useSearchStore } from "@/store/search-store";

function MainSection() {
  const { searchResults, searchQuery } = useSearchStore();
  let word;
  let phonetics;
  let meanings;  
  let sourceUrls;

  if (searchResults.length > 0) {
    word = searchResults[0].word;
    phonetics = searchResults[0].phonetics.filter((phonetic) => {
      const hasText = phonetic.text || null;
      const hasAudio = phonetic.audio || null;
      const hasSourceUrl = phonetic.sourceUrl || null;
      const hasLicense = phonetic.license || null;

      if (hasText && hasAudio && hasSourceUrl && hasLicense) {
        return true;
      }
      return false;
    });
    meanings = searchResults[0].meanings;
    
    sourceUrls = searchResults[0].sourceUrls;
  }

 
  return (
    <>
      <SearchBar />
      {searchResults && searchResults.length > 0 ? (
        <main>
          <WordWithAudio
            word={word ? word : ""}
            pronouciaiton={
              phonetics && phonetics[0]?.text ? phonetics[0].text : ""
            }
            audioLink={
              phonetics && phonetics[0]?.audio ? phonetics[0].audio : undefined
            }
          />
          <ScrollArea className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-8">
              {meanings?.map((meaning, index) => (
                <section key={index} className="space-y-8">
                  <div className="flex items-center justify-between gap-5">
                    <h1 className="text-2xl font-bold">
                      {meaning.partOfSpeech}
                    </h1>
                    <Separator />
                  </div>
                  <div className="text-mild-muted flex items-center gap-10 text-xl font-normal">
                    Meaning
                  </div>
                  <ul className="h-full space-y-4 pl-8">
                    {meaning.definitions.map((definitionObject, index) => (
                      <div className="" key={index}>
                        <div
                          key={index}
                          className="relative flex items-center gap-4 p-1"
                        >
                          {definitionObject.definition && (
                            <span className="flex flex-col gap-4 text-xl before:absolute before:-left-5 before:top-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary">
                              {definitionObject.definition}
                            </span>
                          )}
                        </div>

                        {definitionObject.example && (
                          <div className="pl-8 font-light italic">
                            Eg: {definitionObject.example}
                          </div>
                        )}
                      </div>
                    ))}
                  </ul>
                  {meaning.synonyms.length > 0 && (
                    <div className="text-mild-muted flex items-center gap-10 text-xl font-normal">
                      <span>Synonyms</span>
                      <div>
                        {meaning?.synonyms.map((synonym, index) => (
                          <Button
                            key={index}
                            className="text-xl font-bold"
                            variant={"link"}
                          >
                            {synonym}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  {meaning.antonyms.length > 0 && (
                    <div className="text-mild-muted flex items-center gap-10 text-xl font-normal">
                      <span>Antonyms</span>
                      <div>
                        {meaning?.antonyms.map((antonym, index) => (
                          <Button
                            key={index}
                            className="text-xl font-bold"
                            variant={"link"}
                          >
                            {antonym}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              ))}

              <Separator />
              <footer>
                <div className="text-mild-muted flex items-center gap-10 text-lg font-normal">
                  <span>Source</span>
                  <Link
                    target="_blank"
                    className="focus:outline-none"
                    href={sourceUrls ? sourceUrls[0] : "#"}
                  >
                    {" "}
                    <Button className="text-base" variant={"link"}>
                      {sourceUrls && sourceUrls[0]}
                    </Button>
                  </Link>
                </div>
              </footer>
            </div>
          </ScrollArea>
        </main>
      ) : (
        <h1>No result for {searchQuery}</h1>
      )}
    </>
  );
}

export default MainSection;
