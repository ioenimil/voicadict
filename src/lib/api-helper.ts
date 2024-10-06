
export const getTopDictionarySuggestions = async (
  word: string
): Promise<{ id: number; name: string }[]> => {
  const BASE_URL = "https://api.datamuse.com/";
  const response = await fetch(`${BASE_URL}sug?s=${word}`);
  const data = await response.json();
  const topWords = data.slice(0, 5).map((item: { word: string }) => ({
    
    name: item.word,
  }));
  return topWords;
};
export const getDictionaryApiData = async (word: string): Promise<object> => {
  const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const response = await fetch(`${BASE_URL}${word}`);
  const data = await response.json();
  return data;
};
