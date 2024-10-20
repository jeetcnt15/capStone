import {create } from 'zustand';

interface StoreState {
  page: number;
  setPage: (page: number) => void;
}

// Create the Zustand store
const useStore = create<StoreState>((set) => ({
  page: 1, // initial page
  setPage: (page) => set({ page }), // action to update the page
}));

export default useStore;
