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
    'Recent Grad. Passionate about learning, teaching, all things science & tech. My background in Biology has taught me many necessary skills of a successful developer. Working as a researcher and supplemental instructor, I learned the value of punctuality, communication, and the necessity of building meaningful rapport with coworkers. I have experience learning fast, and in turn, conveying complex ideas simply. My responsibilities often required digging deep into rigorous material under short time constraints.',
  paragraphTwo:
    'This experience opened my eyes to how outdated much of academia is becoming. I found myself using online resources, often with better outcomes. This brought about my budding interest in web development. The wide audience you can reach through the internet, irrespective of time and location, excited me. When I began learning about these technologies, I discovered a love and aptitude for them.',
  paragraphThree:
    "In fall 2019, I committed fully to pursuing web development. I attended a 16-week immersive full-stack coding boot camp at DigitalCrafts, in the PERN tech stack. I'm passionate about learning new technologies, broadening my knowledge of the tech industry, and making meaningful contributions to real-world products.",

  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
      'Tribuo is a full stack web app for company-wide task management that tracks employees, departments, and tasks in a relational database.',
    info2: '',
    url: '',
    repo: 'https://github.com/abdenny/Tribuo', // if no repo, the button will not show up
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
