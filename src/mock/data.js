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
    'Recent Grad. Lover of all things science & tech. Highly motivated to build beautiful and responsive web applications. As a former researcher, what I enjoy most about software development is how it rewards problem-solving and the application of scientific thinking, irrespective of material conditions.',
  paragraphTwo:
    "I'm driven to learn new technologies, broaden my knowledge of the tech industry, and make meaningful contributions to projects. Feel free to reach out! I'm open to exploring new opportunities that will challenge my current skill set, and offer long term growth potential.",

  resume: 'https://resumepdfad.s3.us-east-2.amazonaws.com/AustinDennyAtsResume2020.pdf', // if no resume, the button will not show up
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
    url: 'http://ec2-18-222-118-237.us-east-2.compute.amazonaws.com',
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
