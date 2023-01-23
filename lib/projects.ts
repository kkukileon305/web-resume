import { StaticImageData } from 'next/image';
import { boardImageList, ImageSrcAndAlt, kioskImageList, quizImageList } from './images';

type Project = {
  title: string;
  intruduce: string;
  deploy: string;
  github: string;
  duration: string;
  skills: string[];
  description: string[];
  type: '개인' | '팀';
  imageList: ImageSrcAndAlt[];
};

const projects: Project[] = [
  {
    title: '간단한 게시판',
    intruduce: '누구나 간단히 이메일을 이용하여 가입과 인증 후 사용할 수 있는 게시판 커뮤니티입니다.',
    deploy: 'https://board-nine.vercel.app/',
    github: 'https://github.com/kkukileon305/board',
    duration: '2022.12.07 - 12.10',
    skills: ['TypeScript', 'Next.js', 'Tailwindcss', 'Zustand', 'React-Query', 'Supabase'],
    description: [
      '불필요한 중복 요청을 방지하기 위하여 React-Query의 useInfiniteQuery을 사용하여 무한 스크롤 구현',
      'IntersectionObserver API를 활용하여 구현한 무한 스크롤의 로직이 길고 다른 페이지 컴포넌트에서도 사용될 것 같아 별도의 커스텀 훅으로 분리',
      'useMutation을 활용하여 로그인, 로그아웃 구현하고 게시판 업로드 및 삭제, 댓글 업로드 및 삭제 성공시(onSuccess) 해당하는 query key들을 invalidate하여 다시 fetch하도록 구현',
      '다크모드: Theme 상태관리를 쉽게 도와주는 next-themes와 Tailwindcss를 활용하여 구현',
      '로그인: supabase의 인증 기능을 활용하여 이메일 검증 구현, 성공 시 token정보를 서버에서 보내고 프론트에서 받은 token을 zustand의 store에 저장과 동시에 localStroage에 저장하도록 구현',
      '글쓰기 페이지: 제목과 내용을 react-hook-form을 이용해 form 상태 관리와 동시에 유효성 검사 구현, 업로드 버튼 클릭 시 저장된 상태들과 token을 post요청으로 보내고 서버에서 token 인증 후 데이터를 생성하도록 구현',
      '게시글/댓글 삭제: 해당 게시글/댓글의 id와 token을 post요청으로 보내고 서버에서 인증 후 published값을 false로 변경하도록 구현',
      'Modal 컴포넌트: modal 상태가 true일 경우에 렌더링되도록 구현, 나타날 경우 fixed된 어두운 배경이 최상단 z 축으로 나타나며 가운데 위치에 모달 컨테이너가 보이도록 구현, setModal을 props로 받아 어두운 배경을 클릭할 경우 닫히도록 구현, children을 props로 받아 컨테이너 내부에 렌더링되도록 구현하여 다양한 컴포넌트에서 사용할 수 있도록 구현',
    ],
    type: '개인',
    imageList: boardImageList,
  },
  {
    title: '상식 퀴즈 웹앱',
    intruduce: '재밌게 상식 테스트를 할 수 있는 퀴즈 웹앱입니다.',
    deploy: 'https://luminous-cannoli-18aa14.netlify.app/',
    github: 'https://github.com/kkukileon305/quiz-app',
    duration: '2022.08.22 - 08.24',
    skills: ['TypeScript', 'React', 'styled-components', 'Redux Toolkit'],
    description: [
      'Redux Toolkit을 활용하여 사용자가 선택한 옵션을 다른 페이지 컴포넌트에서도 가져와 관리 할 수 있도록 설정',
      '모바일 화면에서 카테고리 선택 화면에서 더 보기 버튼의 position을 absolute로 설정하여 부모 컨테이너의 하단에 고정시킨 후 버튼 클릭 시 부모 컨테이너의 height가 늘어나게 하여 더 보기 버튼을 구현',
      '퀴즈 데이터는 store에 저장된 옵션 상태에 맞춰 Trivia API를 활용하여 받아온 데이터를 활용',
      '몇 번째 문제인지에 따라 퀴즈 리스트의 translateX 값이 변경되도록 하여 슬라이드 구현',
    ],
    type: '개인',
    imageList: quizImageList,
  },
  {
    title: '카페 키오스크',
    intruduce: '카페에서 사용할 것이라고 가정하고 진행하게 된 키오스크 프로젝트 입니다.',
    deploy: 'https://my-tiny-cafe.vercel.app/',
    github: 'https://github.com/kkukileon305/My-tiny-cafe',
    duration: '2022.07.22 - 07.25',
    skills: ['TypeScript', 'Next.js', 'styled-components', 'Redux Toolkit'],
    description: ['검색시 setTimeout을 활용한 디바운싱 구현', '터치 이벤트를 활용하여 카트 슬라이드 구현'],
    type: '개인',
    imageList: kioskImageList,
  },
];

export default projects;
