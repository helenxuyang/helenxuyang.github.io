import { Grid } from '@material-ui/core';
import './Home.css';
import './ProjectCard';
import ProjectCard from './ProjectCard';
import { Project } from './ProjectCard';
import badrpgPreview from './images/preview_badrpg.jpg';
import carriagePreview from './images/preview_carriage.png';
import exercisePreview from './images/preview_exercise_gen.png';
import insAndOutsPreview from './images/preview_ins_outs.png';
import questodoPreview from './images/preview_questodo.jpg';
import rummikubPreview from './images/preview_rummikub.jpg';
import sudokuPreview from './images/preview_sudoku.jpg';
import tetrisPreview from './images/preview_tetris.jpg';

const currentProjects: Project[] = [
  {
    name: "Carriage",
    description: "My team on DTI! Flutter and React mobile/web apps to support CULift, Cornell's paratransit service for students with disabilities. I primarily work on the rider/driver apps, but am hoping to learn more about frontend web and backend too!",
    date: "Spring 2020 - Present",
    image: carriagePreview,
    altText: "",
    repoURL: "https://github.com/cornell-dti/carriage-driver/",
    otherLinks: new Map([
      ['DTI Project', 'https://www.cornelldti.org/projects/carriage/']
    ])
  },
  {
    name: "helenxuyang.github.io",
    description: "How's that for recursion? My first project for learning HTML/CSS/React on my long journey to learn about webdev :)",
    date: "Summer 2020 - Present",
    image: carriagePreview,
    altText: "",
    repoURL: "https://github.com/helenxuyang/helenxuyang.github.io",
  }
];

const personalProjects: Project[] = [
  {
    name: "Exercise Generator",
    description: "A Flutter app that generates a random workout from a list of exercises, made in hopes of forcing myself to exercise more (spoiler: it didn't work)",
    date: "Summer 2020",
    image: exercisePreview,
    altText: "",
    repoURL: "https://github.com/helenxuyang/exercise_generator",
  },
  {
    name: "Ins & Outs",
    description: "A Flutter app for tracking food and symptoms to help with identifying possible food intolerances. Unfinished, but I hope to continue working on it!",
    date: "Started Summer 2020",
    image: insAndOutsPreview,
    altText: "",
    repoURL: "https://github.com/helenxuyang/ins-and-outs",
  }
]

const hackathonProjects: Project[] = [
  {
    name: "quesTodo",
    description: "Technica 2020, Best Product IoT Hack 2nd Place Winner: A React app that turns your to do list into boss battle quests.",
    date: "October 2020",
    image: questodoPreview,
    altText: "",
    repoURL: "https://github.com/helenxuyang/technica_2020",
    otherLinks: new Map([
      ['DevPost', 'https://devpost.com/software/questodo'],
    ])
  },
  {
    name: "shef",
    description: "DTI Hackathon 2020, Peoples' Choice Winner: A Flutter app for helping college students find recipes based on the ingredients and utensils they have with a fun Tinder-style interface",
    date: "September 2020",
    image: carriagePreview,
    altText: "",
    repoURL: "https://github.com/helenxuyang/ins-and-outs",
  },
  {
    name: "Linked",
    description: "Hack Our Campus 2020, Mental Health Category Winner: A Flutter app for creating virtual hangouts with automatically generated Google Meet calls to help students stay connected more easily during the remote semester",
    date: "August 2020",
    image: carriagePreview,
    altText: "",
    repoURL: "https://github.com/helenxuyang/ins-and-outs",
  },
];

const collegeProjects: Project[] = [
  {
    name: "CUBlogs",
    description: "Trends in Web Dev partner project: A multi-user blog where users can create, upvote, and filter text posts by author, keywords, and tags",
    date: "December 2020",
    image: carriagePreview,
    altText: "",
    repoURL: "https://github.com/triple-jay/trendsfinalproject",
    otherLinks: new Map([
      ['Try it out!', 'https://cu-blogs.herokuapp.com/'],
    ])
  },
  {
    name: "LetQuiz",
    description: "Cornell AppDev Hack Challenge, Best App for the Remote Era: A flashcard app created with a partner from Intro to Backend Development, two iOS devs, and a UI/UX designer. I worked on designing and implementing the app's backend featuring authenticated requests and occasionally helped debug our iOS frontend.",
    date: "December 2020",
    image: carriagePreview,
    altText: "",
    repoURL: "https://github.com/mly32/flashcard-app-hack-challenge",
  },
];

const hsProjects: Project[] = [
  {
    name: "BadRPG",
    description: "AOOD partner project: an RPG full of puns with a self-aware name and my questionable pixel art",
    date: "Spring 2019",
    image: badrpgPreview,
    altText: "A character standing in front of two houses",
    repoURL: "https://github.com/helenxuyang/BadRPG/",
  },
  {
    name: "Sudoku",
    description: "AOOD group project: a Sudoku game made for our teacher, who was our client as I lead a team of 7 students to walk through the professional software development process",
    date: "Winter-Spring 2019",
    image: sudokuPreview,
    altText: "Our Sudoku game interface",
    repoURL: "https://github.com/helenxuyang/Sudoku",
  },
  {
    name: "Tetris",
    description: "CSA partner project: a Tetris game with single-player sprint/marathon and 2-player race/battle modes",
    date: "Spring 2018",
    image: tetrisPreview,
    altText: "Two Tetris screens side by side",
    repoURL: "https://github.com/helenxuyang/Tetris",
  },
  {
    name: "Rummikub",
    description: "CSA picture project: a recreation of the board game Rummikub, created from a base project with mouse click position and image display features",
    date: "Fall-Winter 2018",
    image: rummikubPreview,
    altText: "A grid with number tiles",
    repoURL: "https://github.com/helenxuyang/Rummikub",
  },
];

type ProjectCardGridProps = {
  title: string,
  projects: Project[]
}
const ProjectCardGrid = (props: ProjectCardGridProps) => {
  return <div>
    <h2>{props.title}</h2>
    <Grid container>
      {props.projects.map((project) =>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard {...project} />
        </Grid>
      )}
    </Grid>
  </div>;
}

const Home = () => {
  return <div id="home">
    <div id="home-intro" className="home-section">
      <h1>Hi, I'm Helen!</h1>
      <p>I'm a CS student at Cornell University ('23). I'm hoping to learn more about creating impactful and accessible tech!</p>
    </div>
    <div id="projects" className="home-section">
      <h1>Projects</h1>
      <ProjectCardGrid title="Current Projects" projects={currentProjects} />
      <ProjectCardGrid title="Hackathon Projects" projects={hackathonProjects} />
      <ProjectCardGrid title="Personal Projects" projects={personalProjects} />
      <ProjectCardGrid title="School Projects" projects={collegeProjects} />
      <ProjectCardGrid title="High School Projects" projects={hsProjects} />
    </div>
  </div>
}

export default Home;