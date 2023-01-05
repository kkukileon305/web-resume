import { motion } from 'framer-motion';
import Image from 'next/image';
import useStore from '../store/useStore';

const ImageModal = () => {
  const { setImageModal, imageModalSrc } = useStore(({ setImageModal, imageModalSrc }) => ({ setImageModal, imageModalSrc }));
  const handleClose = () => setImageModal(false);

  return (
    <motion.div //
      className='fixed w-full h-full px-4 flex justify-center items-center bg-black/50 z-20 cursor-pointer'
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
        className={`min-w-[200px] ${imageModalSrc?.isMobile ? 'max-w-[440px]' : 'max-w-[1060px]'} flex justify-center w-full rounded-xl shadow-xl`}
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
        {imageModalSrc && <Image alt={imageModalSrc.alt} src={imageModalSrc.src} />}
      </motion.div>
    </motion.div>
  );
};
export default ImageModal;
