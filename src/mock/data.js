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
  name: 'Austin Denny',
  subtitle: "I'm a web developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'techs.png',
  paragraphOne:
    'Recent Grad. Passionate about all things science & tech. My background in biology has taught me many necessary skills of a successful developer. Working as a researcher and supplemental instructor, I learned the value of punctuality, communication, and the necessity of building meaningful rapport with coworkers. I have experience learning fast, and in turn, conveying intricate ideas succinctly. My responsibilities often required the comprehension of complex materials under short time constraints.',
  paragraphTwo:
    'At the start of my senior year, I began considering how the internet is changing the way we do science. The advantages we have now are incredible: instant collaboration, on-mass & automated data collection, the IoT, distributed networks for computational biology, and so much more. These ideas fascinated me, inspiring me to learn more about how web technologies worked. When I started learning the basics, I was hooked. What I enjoy most about software development is how it rewards the application of problem-solving and scientific thinking, irrespective of material condtions. Your test bench is always in your lap, and it gives instant feedback.',
  paragraphThree:
    "In fall 2019, I committed fully to pursuing web development. I attended a 16-week immersive full-stack coding boot camp at DigitalCrafts, in the PERN tech stack. I'm passionate about learning new technologies, broadening my knowledge of the tech industry, and making meaningful contributions to real-world products.",

  resume: 'https://resumepdfad.s3.us-east-2.amazonaws.com/AustinDennyAtsResume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  {
    id: uuidv1(),
    img: 'tribuo.png',
    title: 'Tribuo',
    info:
      'Tribuo is a full-stack web app for company-wide task management that tracks employees, departments, and tasks in a relational database.',
    info2: '',
    url: '',
    repo: 'https://github.com/abdenny/Tribuo', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'homepage.png',
    title: 'Book•Smart',
    info:
      'Book•Smart is a front-end API-driven search engine for finding books and viewing both historical and current bestseller data from The New York Times.',
    info2: '',
    url: 'http://jayesolutions.net.s3-website.us-east-2.amazonaws.com/index.html',
    repo: 'https://github.com/abdenny/Book_Smart', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blackjack.png',
    title: 'Blackjack',
    info:
      'Blackjack is a front-end app that allows users to play blackjack against the dealer, complete with full game logic.',
    info2: '',
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
