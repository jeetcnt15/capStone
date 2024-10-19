import create from 'zustand';

const useStore = create((set) => ({
  products: [],
  page: 1,
  setProducts: (products) => set({ products }),
  setPage: (page) => set({ page }),
}));

export default useStore;
