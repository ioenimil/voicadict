import { ApiResponse } from "@/types/types";

export const getTopDictionarySuggestions = async (
  word: string,
): Promise<{ id: number; name: string }[]> => {
  const BASE_URL = "https://api.datamuse.com/";

  try {
    const response = await fetch(`${BASE_URL}sug?s=${word}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch top dictionary suggestions: ${response.statusText}`,
      );
    }
    const data = await response.json();
    const topWords = data.slice(0, 5).map((item: { word: string }) => ({
      name: item.word,
    }));
    return topWords;
  } catch (error) {
    console.error("Error fetching top dictionary suggestions:", error);
    // Handle the error gracefully (e.g., return an empty array or default value)
    return []; // Example: return an empty array on error
  }
};

export const getDictionaryApiData = async (
  word: string,
): Promise<ApiResponse | Error> => {
  const BASE_URL =
    process.env.WORD_SEARCH_BASE_URL ||
    "http://127.0.0.1:8000/api/v1/word/word-search";

  try {
    const response = await fetch(`${BASE_URL}/?q=${word}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch dictionary API data: ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dictionary API data:", error);
    // Handle the error gracefully (e.g., display an error message to the user)
    return new Error("Failed to fetch dictionary data"); // Example: return an Error object
  }
};
