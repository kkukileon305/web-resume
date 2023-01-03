import create from 'zustand';

export type Id = 'contact' | 'about' | 'projects' | 'skills' | 'education';

type Store = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  scrollInto: (element: HTMLElement | null) => void;
};

const useStore = create<Store>(set => ({
  modal: false,
  setModal: modal => set({ modal }),
  scrollInto: (element: HTMLElement | null) => {
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 58,
      behavior: 'smooth',
    });
  },
}));

export default useStore;
