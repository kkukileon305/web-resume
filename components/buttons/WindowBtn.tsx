'use client';

import { ReactNode } from 'react';

interface WindowBtnProps {
  url: string;
  children: ReactNode;
}

const WindowBtn = ({ url, children }: WindowBtnProps) => {
  const openInNewTab = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');
  return (
    <button className='transition border  border-slate-600 dark:border-slate-300 hover:bg-gray-400 flex gap-2 items-center p-2 rounded-xl' onClick={() => openInNewTab(url)}>
      {children}
    </button>
  );
};
export default WindowBtn;
