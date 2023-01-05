import create from 'zustand';
import { ImageSrcAndAlt } from '../lib/images';

export type Id = 'contact' | 'about' | 'projects' | 'skills' | 'education';

type Store = {
  menuModal: boolean;
  setMenuModal: (menuModal: boolean) => void;
  imageModal: boolean;
  setImageModal: (imageModal: boolean) => void;
  imageModalSrc: ImageSrcAndAlt | null;
  setImageModalSrc: (imageModalSrc: ImageSrcAndAlt) => void;
};

const useStore = create<Store>(set => ({
  menuModal: false,
  setMenuModal: menuModal => set({ menuModal }),
  imageModal: false,
  setImageModal: imageModal => set({ imageModal }),
  imageModalSrc: null,
  setImageModalSrc: imageModalSrc => set({ imageModalSrc }),
}));

export default useStore;
