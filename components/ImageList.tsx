import Image from 'next/image';
import { ImageList } from '../lib/images';

interface ImageListProps {
  imageList: ImageList[];
}

const ImageList = ({ imageList }: ImageListProps) => {
  return (
    <div className={`grid grid-cols-4 grid-rows-8 gap-2`}>
      <div key={imageList[0].src.src} className='relative col-start-1 col-end-5 row-start-1 row-end-4 border'>
        <Image src={imageList[0].src} alt={imageList[0].alt} />
      </div>
      {imageList.slice(1).map((image, index) => (
        <div key={image.src.src} className={`${index % 2 ? 'col-start-3 col-end-5' : 'col-start-1 col-end-3'} flex justify-center items-center border`}>
          <Image src={image.src} alt={image.alt} height={300} />
        </div>
      ))}
    </div>
  );
};
export default ImageList;
