import board1 from '../assets/board/1.png';
import board2 from '../assets/board/2.png';
import board3 from '../assets/board/3.png';
import board4 from '../assets/board/4.png';
import board5 from '../assets/board/5.png';

import quiz1 from '../assets/quiz/1.png';
import quiz2 from '../assets/quiz/2.png';
import quiz3 from '../assets/quiz/3.png';
import quiz4 from '../assets/quiz/4.png';
import quiz5 from '../assets/quiz/5.png';

import kiosk1 from '../assets/kiosk/1.png';
import kiosk2 from '../assets/kiosk/2.png';
import kiosk3 from '../assets/kiosk/3.png';
import kiosk4 from '../assets/kiosk/4.png';
import kiosk5 from '../assets/kiosk/5.png';

import { StaticImageData } from 'next/image';

export type ImageSrcAndAlt = {
  src: StaticImageData;
  alt: string;
  isMobile: boolean;
};

export const boardImageList: ImageSrcAndAlt[] = [
  {
    src: board1,
    alt: 'first board image',
    isMobile: false,
  },
  {
    src: board2,
    alt: 'second board image',
    isMobile: false,
  },
  {
    src: board3,
    alt: 'third board image',
    isMobile: false,
  },
  {
    src: board4,
    alt: 'fourth board image',
    isMobile: false,
  },
  {
    src: board5,
    alt: 'fifth board image',
    isMobile: true,
  },
];

export const quizImageList: ImageSrcAndAlt[] = [
  {
    src: quiz1,
    alt: 'first quiz image',
    isMobile: false,
  },
  {
    src: quiz2,
    alt: 'second quiz image',
    isMobile: false,
  },
  {
    src: quiz3,
    alt: 'third quiz image',
    isMobile: false,
  },
  {
    src: quiz4,
    alt: 'fourth quiz image',
    isMobile: false,
  },
  {
    src: quiz5,
    alt: 'fifth quiz image',
    isMobile: true,
  },
];

export const kioskImageList: ImageSrcAndAlt[] = [
  {
    src: kiosk1,
    alt: 'first kiosk image',
    isMobile: false,
  },
  {
    src: kiosk2,
    alt: 'second kiosk image',
    isMobile: true,
  },
  {
    src: kiosk3,
    alt: 'third kiosk image',
    isMobile: true,
  },
  {
    src: kiosk4,
    alt: 'fourth kiosk image',
    isMobile: true,
  },
  {
    src: kiosk5,
    alt: 'fifth kiosk image',
    isMobile: true,
  },
];
