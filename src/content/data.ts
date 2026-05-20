export interface Job {
  title: string;
  company: string;
  location: string;
  range: string;
  url: string;
  bullets: string[];
}

export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  cover: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  showInProjects?: boolean;
}

export const jobs: Job[] = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Northrop Grumman',
    location: 'Palmdale, CA',
    range: 'May 2021 - Current',
    url: 'https://www.northropgrumman.com/',
    bullets: [
      'Built web applications that streamlined processes by digitizing forms and inventory management, and improved workflow efficiency between cross-departmental communication',
      'Improved page load time by 92% by loading content on demand and optimizing how the data is retrieved',
      'Designed class diagrams and entity relationship diagrams to clearly identify customer requirements and outline how the backend communicates with the frontend',
      'Created automated test cases to assist testers in quickly analyzing issues with database stored procedures',
    ],
  },
  {
    title: 'Hackathon Volunteer',
    company: 'HackUCI',
    location: 'Irvine, CA',
    range: 'February 2018',
    url: 'https://www.hackuci.com/',
    bullets: [
      'Prepared the hall and rooms for the hackathon event',
      'Answered event questions',
      'Distributed food and souvenirs',
    ],
  },
  {
    title: 'Retreat Leader',
    company: 'St. Genevieve Parish',
    location: 'Panorama City, CA',
    range: 'February 2015',
    url: 'https://stgenchurch.org/',
    bullets: [
      'Led a group of young adults on a retreat away from the busy city life and the distractions of modern technology',
      'Planned and managed group activities to help in their character development as well as share life experiences with one another',
      'Conducted group discussions to cultivate curiosity and encourage social interaction',
    ],
  },
  {
    title: 'Summer School Teacher',
    company: 'St. Genevieve Elementary',
    location: 'Panorama City, CA',
    range: 'June - July 2010',
    url: 'https://www.spartansonline.org/',
    bullets: [
      'Conducted a class on film and sound production to prepare students for the audio/visual club',
      'Discussed basic use of Garageband and Final Cut Pro X, common software for editing videos and audio',
      'Demonstrated storyboarding, B-roll, and other filming techniques to provide students with a broader perspective of video production',
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Guster',
    description:
      'An image and nickname generator that displays the many faces and nicknames of Burton Guster from the show Psych.',
    tech: ['Python', 'Tkinter', 'Pillow', 'BeautifulSoup', 'GUI'],
    github: 'https://github.com/Montblac/Guster',
    external: '',
    cover: '/projects/guster-demo.png',
  },
  {
    title: 'Euphrosyne',
    description:
      'A Python bot that takes submissions from a list of specified subreddits and tweets a hot submission every hour.',
    tech: ['Python', 'Twitter API', 'Reddit API', 'Oauth2'],
    github: 'https://github.com/Montblac/euphrosyne',
    external: 'https://twitter.com/TheEuphrosyne',
    cover: '/projects/euphrosyne-demo.png',
  },
];

export const projects: Project[] = [
  {
    title: 'Euphrosyne',
    description:
      'A Python bot that takes submissions from a list of specified subreddits and tweets a hot submission every hour.',
    tech: ['Python', 'Twitter API', 'Reddit API', 'Oauth2'],
    github: 'https://github.com/Montblac/euphrosyne',
    external: 'https://twitter.com/TheEuphrosyne',
    showInProjects: true,
  },
  {
    title: 'Guster',
    description:
      'An image and nickname generator that displays the many faces and nicknames of Burton Guster from the show Psych.',
    tech: ['Python', 'Tkinter', 'Pillow', 'BeautifulSoup', 'GUI'],
    github: 'https://github.com/Montblac/Guster',
    showInProjects: true,
  },
  {
    title: 'Minim Calculator',
    description: 'A minimal calculator built as a clean UI exercise.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Montblac/minim-calculator',
    showInProjects: true,
  },
  {
    title: 'Othello',
    description: 'An implementation of the classic Othello board game.',
    tech: ['Python'],
    github: 'https://github.com/Montblac',
    showInProjects: true,
  },
];
