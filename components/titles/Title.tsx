import { ReactNode } from 'react';

const Title = ({ content }: { content: ReactNode }) => {
  return <h1 className='font-bold text-3xl py-8 break-keep'>{content}</h1>;
};
export default Title;
