import Image from 'next/image';
import { ImageSrcAndAlt } from '../lib/images';
import useStore from '../store/useStore';

interface ImageListProps {
  imageList: ImageSrcAndAlt[];
}

const ImageList = ({ imageList }: ImageListProps) => {
  const { setImageModal, setImageModalSrc } = useStore(({ setImageModal, setImageModalSrc }) => ({ setImageModal, setImageModalSrc }));

  const openImageModal = (image: ImageSrcAndAlt) => {
    setImageModal(true);
    setImageModalSrc(image);
  };

  return (
    <div className='grid grid-cols-4 grid-rows-8 gap-2 my-4'>
      <div onClick={() => openImageModal(imageList[0])} key={imageList[0].src.src} className='relative col-start-1 col-end-5 row-start-1 row-end-4 border cursor-pointer md:hover:translate-y-[-8px] md:hover:shadow-lg transition'>
        <Image src={imageList[0].src} alt={imageList[0].alt} />
      </div>
      {imageList.slice(1).map((image, index) => (
        <div
          key={image.src.src}
          onClick={() => openImageModal(image)}
          className={`${index % 2 ? 'col-start-3 col-end-5' : 'col-start-1 col-end-3'} flex justify-center items-center border cursor-pointer md:hover:translate-y-[-8px] md:hover:shadow-lg transition`}
        >
          <Image src={image.src} alt={image.alt} height={300} />
        </div>
      ))}
    </div>
  );
};
export default ImageList;
