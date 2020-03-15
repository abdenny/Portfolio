import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Austin Denny | Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Austin Denny.',
  subtitle: "I'm a web developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'techs.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'homepage.png',
    title: 'Book•Smart',
    info:
      'Book Smart is a front-end API-driven search engine for finding books and viewing both historical and current bestseller data from The New York Times.',
    info2: '',
    url: 'http://jayesolutions.net.s3-website.us-east-2.amazonaws.com/index.html',
    repo: 'https://github.com/abdenny/Book_Smart', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blackjack.png',
    title: 'Blackjack',
    info:
      'Book Smart is a front-end API-driven search engine for finding books and viewing both historical and current bestseller data from The New York Times.',
    info2: 'lorem ipsum dolor bkackjack',
    url: 'https://abdenny.github.io/Blackjack/',
    repo: 'https://github.com/abdenny/Blackjack', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'austinbdenny@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/abdenny',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/austin-denny-0b77a8197',
    },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
