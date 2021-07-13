import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eunjin Kim | Giniefolio',
  lang: 'en, kr',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Eunjin Kim',
  subtitle: "I'm a Front-end Developer.",
  cta: '',
};

// ABOUT DATA 'https://www.resumemaker.online/es.php'
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
  resume:
    'https://github.com/eunjin0212/Portfolio/blob/master/src/components/About/%EC%9D%B4%EB%A0%A5%EC%84%9C_20210713.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Cocktail Recipe Search Web',
    info: '칵테일 레시피 Api를 활용하여 만든 웹사이트 입니다.',
    info2: '✅ 특징',
    info3: '• 외부 Api에 있는 데이터를 활용하여 칵테일 검색 기능 구현',
    info4: '• React-Hooks 사용',
    info5: '• Modal 구현',
    info6: '• 반응형 스크린',
    info7: '',
    url: 'https://reactcocktailrecipe.netlify.app/#/',
    repo: 'https://github.com/eunjin0212/React-CocktailRecipe.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'ToDo List',
    info: '쓰기, 수정하기, 삭제하기, 목표치 달성 기능을 갖춘 Todo List ',
    info2: '✅ 특징',
    info3: '• 리스트에 할 일 추가하기',
    info4: '• 추가 된 리스트 수정하기',
    info5: '• 추가 된 리스트 완료하기, 완료 취소 기능 추가',
    info6: '• 완료된 할 일과 추가 된 리스트를 확인하여, 목표 달성 프로그래스 바 구현',
    info7: '• React-Hooks 사용 > TSX로 변환',
    info8: '',
    url: 'https://eunjintodolist.netlify.app/',
    repo: 'https://github.com/eunjin0212/React-ToDoList.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: '롤 이벤트 페이지 클론',
    info: '동영상 배경 이벤트 폼 페이지',
    info2: '✅ 특징',
    info3: '• SCSS로 스타일 구현',
    info4: '• 반응형 CSS',
    info5: '• Jquery와 JavaScript로 동적 기능 구현',
    info6: '• 모바일 환경에서 볼 수 있는 기능 구현',
    info7: '자세한 사항은 README.md를 확인해주세요',
    info8: '',
    url: 'https://mobilehellopet.netlify.app/',
    repo: 'https://github.com/eunjin0212/Academy/tree/master/m_hellopet', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'eunjin9639@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/eunjin0212',
    },
  ],
};
