import { create } from 'zustand';

const useImageStore = create((set) => ({
  imageUrls: [],

  addImageUrl: (url) => set((state) => ({ imageUrls: [...state.imageUrls, url] })),

  clearImageUrls: () => set({ imageUrls: [] }),
}));

export default useImageStore;
