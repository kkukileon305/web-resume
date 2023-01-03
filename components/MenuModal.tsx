'use client';

import { motion } from 'framer-motion';
import { MutableRefObject } from 'react';
import { Sections } from '../app/page';
import subtitles from '../lib/subtitles';
import useStore from '../store/useStore';

const MenuModal = ({ curMenu, subRefs }: { curMenu: Sections; subRefs: MutableRefObject<HTMLElement[]> }) => {
  const { scrollInto, setModal } = useStore();

  const handleClose = () => {
    setModal(false);
  };

  return (
    <motion.div //
      className='fixed w-full h-full px-4 flex justify-center items-center bg-black/50 z-20'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={handleClose}
    >
      <motion.div
        className='min-w-[200px] max-w-[500px] w-full bg-white dark:bg-slate-700 rounded-xl'
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 100,
          opacity: 0,
        }}
      >
        <ul className=''>
          {subtitles.map((sub, index) => (
            <li //
              className={`font-bold p-4 cursor-pointer transition border-b-2 ${Object.values(curMenu).findIndex(boo => boo) === index ? 'border-blue-300 text-blue-300' : 'border-transparent'}`}
              key={sub}
              onClick={() => scrollInto(subRefs.current[index])}
            >
              <p>{sub}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
export default MenuModal;
