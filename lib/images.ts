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

export type ImageList = {
  src: StaticImageData;
  alt: string;
};

export const boardImageList: ImageList[] = [
  {
    src: board1,
    alt: 'first board image',
  },
  {
    src: board2,
    alt: 'second board image',
  },
  {
    src: board3,
    alt: 'third board image',
  },
  {
    src: board4,
    alt: 'fourth board image',
  },
  {
    src: board5,
    alt: 'fifth board image',
  },
];
export const quizImageList: ImageList[] = [
  {
    src: quiz1,
    alt: 'first quiz image',
  },
  {
    src: quiz2,
    alt: 'second quiz image',
  },
  {
    src: quiz3,
    alt: 'third quiz image',
  },
  {
    src: quiz4,
    alt: 'fourth quiz image',
  },
  {
    src: quiz5,
    alt: 'fifth quiz image',
  },
];
export const kioskImageList: ImageList[] = [
  {
    src: kiosk1,
    alt: 'first kiosk image',
  },
  {
    src: kiosk2,
    alt: 'second kiosk image',
  },
  {
    src: kiosk3,
    alt: 'third kiosk image',
  },
  {
    src: kiosk4,
    alt: 'fourth kiosk image',
  },
  {
    src: kiosk5,
    alt: 'fifth kiosk image',
  },
];
