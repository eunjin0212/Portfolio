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
  resume: 'https://www.rocketpunch.com/@eunjin9639/jobhunt',
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
    info: '등록, 수정, 삭제, 목표치 달성 기능을 갖춘 Todo List 입니다.',
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
    img: 'project3.png',
    title: 'Nomflix',
    info: '영화 검색, 별점까지 보여주는 영화 목록 사이트 입니다.',
    info2: '✅ 특징',
    info3: '• 오픈API를 이용해 영화 리스트 불러오기',
    info4: '• 영화 검색 기능 추가',
    info5: '• 영화 클릭 시, 간단한 소개와 별점 보기',
    info6: '• React-Hooks 사용 > TSX로 변환',
    info7: '',
    url: 'https://eunjin-nomflix.netlify.app/#/',
    repo: 'https://github.com/eunjin0212/React-Nomflix', // if no repo, the button will not show up
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
      icon: 'fa-brands fa-github',
      url: 'https://github.com/eunjin0212',
    },
    {
      id: nanoid(),
      name: 'blog',
      icon: 'fa-solid fa-blog',
      url: 'https://eunjin0212.github.io/',
    },
  ],
};
