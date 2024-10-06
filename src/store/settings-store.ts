import { create } from "zustand";

interface FontState {
  fontFamily: string; // Font family type
  setFontFamily: (fontFamily: string) => void; // Action to set font family
}

const useFontStore = create<FontState>((set) => ({
  fontFamily: "", // default font family
  setFontFamily: (fontFamily) => set({ fontFamily }),
}));

export default useFontStore;
