import create from 'zustand';

export type Id = 'contact' | 'about' | 'projects' | 'skills' | 'education';

type Store = {
  menuModal: boolean;
  setMenuModal: (menuModal: boolean) => void;
  scrollInto: (element: HTMLElement | null) => void;
  modalImage: string;
  setModalImage: (modalImage: string) => void;
};

const useStore = create<Store>(set => ({
  menuModal: false,
  setMenuModal: menuModal => set({ menuModal }),
  scrollInto: (element: HTMLElement | null) => {
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 58,
      behavior: 'smooth',
    });
  },
  modalImage: '',
  setModalImage: modalImage => set({ modalImage }),
}));

export default useStore;
