'use client';

import { BsArrowUpShort } from 'react-icons/bs';

const TopBtn = () => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='fixed bottom-4 right-4 z-[15] bg-blue-500 rounded-full'>
      <BsArrowUpShort size={40} color='white' />
    </button>
  );
};
export default TopBtn;
