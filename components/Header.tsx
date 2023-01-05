'use client';

import { useTheme } from 'next-themes';
import { MutableRefObject } from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { IoMdMenu } from 'react-icons/io';
import { Sections } from '../app/page';
import subtitles from '../lib/subtitles';
import useStore from '../store/useStore';

interface HeaderProps {
  curMenu: Sections;
  subRefs: MutableRefObject<HTMLElement[]>;
}

const Header = ({ curMenu, subRefs }: HeaderProps) => {
  const { scrollInto, setMenuModal } = useStore();

  const { setTheme, theme } = useTheme();
  const toggleTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <>
      <header className='sticky top-0 z-10 h-[59px] bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-b dark:border-b-white'>
        <div className='w-full max-w-[1060px] h-full mx-auto flex justify-end md:justify-between items-center gap-4 px-4'>
          <ul className='hidden select-none md:flex'>
            {subtitles.map((sub, index) => (
              <li //
                className={`font-bold p-4 cursor-pointer transition border-b-2  ${Object.values(curMenu).findIndex(boo => boo) === index ? ' border-blue-300 text-blue-300' : 'hover:bg-slate-400/50 border-transparent hover:border-slate-300/50'}`}
                key={sub}
                onClick={() => scrollInto(subRefs.current[index])}
              >
                {sub}
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className='border-2 w-8 aspect-square rounded border-black dark:border-white flex justify-center items-center'>
            <BsLightningFill width={24} />
          </button>
          <button onClick={() => setMenuModal(true)} className='md:hidden border-2 w-8 aspect-square rounded border-black dark:border-white flex justify-center items-center'>
            <IoMdMenu />
          </button>
        </div>
      </header>
    </>
  );
};

Header.displayName = 'header';
export default Header;
