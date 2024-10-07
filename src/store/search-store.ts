import { getDictionaryApiData } from "@/lib/api-helper";
import { create } from "zustand";
interface SearchStore {
  // State properties
  isSearching: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  searchQuery: string;
  searchResults: object; // Replace 'any' with the specific type of your search results
  suggestedWords: string[];
  isAudioPlaying: boolean;
  selectedResultIndex: number;

  // Action methods
  setSearchQuery: (query: string) => void;
  setIsSearching: (isSearching: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean, errorMessage?: string) => void;
  setSearchResults: (results: object) => void; // Replace 'any' with the specific type if needed
  setSuggestedWords: (words: string[]) => void;
  toggleAudio: () => void;
  setSelectedResultIndex: (index: number) => void;

  // Additional actions for handling searches
  performSearch: (query: string) => Promise<void>;
}

// Example usage in a component
export const useSearchStore = create<SearchStore>((set) => ({
  isSearching: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
  searchQuery: "",
  searchResults: [],
  suggestedWords: [],
  isAudioPlaying: false,
  selectedResultIndex: 0,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setIsSearching: (isSearching) => set({ isSearching }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsError: (isError, errorMessage = "") => set({ isError, errorMessage }),
  setSearchResults: (results) => set({ searchResults: results }),
  setSuggestedWords: (words) => set({ suggestedWords: words }),
  toggleAudio: () =>
    set((state) => ({ isAudioPlaying: !state.isAudioPlaying })),
  setSelectedResultIndex: (index) => set({ selectedResultIndex: index }),

  performSearch: async (query) => {
    set({
      isSearching: true,
      isLoading: true,
      errorMessage: "",
      isError: false,
    });
    try {
      // Simulate an API call
      const results = await getDictionaryApiData(query);
      set({ searchResults: results, isSearching: false, isLoading: false });
    } catch (error) {
      let errorMessage: string | Error = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message; // Ensure we get a string
      }
      set({
        isError: true,
        errorMessage,
        isSearching: false,
        isLoading: false,
      });
    }
  },
}));

export type { SearchStore };
