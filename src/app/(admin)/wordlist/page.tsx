import { Button } from "@/components/ui/button";
import React from "react";
import { DataTable } from "./data-table";
import { columns, WordList } from "./columns";

async function getData(): Promise<WordList[]> {
  // Fetch data from your API here.
  return [
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
    {
      word: "Keyboard",
      partOfSpeech: "Noun",
      synonyms: "Typewriter",
      source: "Oxford Dictionary",
    },
    {
      word: "Mouse",
      partOfSpeech: "Noun",
      synonyms: "Rodent",
      source: "Oxford Dictionary",
    },
  ];
}

type Props = { "" };

async function WordListPage({}: Props) {
  const data = await getData();
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Wordlist</h1>
      </div>

      <div className="w-full mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}

export default WordListPage;
