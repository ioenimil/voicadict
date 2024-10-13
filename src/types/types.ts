interface Phonetic {
  text: string;
  audio: string;
  sourceUrl?: string; // Optional property
  license: {
    name: string;
    url: string;
  };
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms?: string[]; // Optional property
  example?: string; // Optional property
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[]; // Optional property
}

interface ApiResponseItem {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

export type ApiResponse = ApiResponseItem[];
