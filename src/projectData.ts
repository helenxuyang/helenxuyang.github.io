import badrpgPreview from "./assets/images/preview_badrpg.jpg";
import carriagePreview from "./assets/images/preview_carriage.png";
import exercisePreview from "./assets/images/preview_exercise_gen.png";
import insAndOutsPreview from "./assets/images/preview_ins_outs.png";
import questodoPreview from "./assets/images/preview_questodo.jpg";
import rummikubPreview from "./assets/images/preview_rummikub.jpg";
import sudokuPreview from "./assets/images/preview_sudoku.jpg";
import tetrisPreview from "./assets/images/preview_tetris.jpg";
import thirstyPreview from "./assets/images/preview_thirsty.png";
import blogsPreview from "./assets/images/preview_blogs.png";
import letquizPreview from "./assets/images/preview_letquiz.png";
import scribePreview from "./assets/images/preview_scribe.jpg";
import plumePreview from "./assets/images/preview_plume.png";
import linkedPreview from "./assets/images/preview_linked.png";
import shefPreview from "./assets/images/preview_shef.png";
import exerciseBingoPreview from "./assets/images/preview_exercise_bingo.png";

import type { Project } from "./projectTypes";

export const recentPersonalProjects: Project[] = [
  {
    name: "Science Olympiad Event Matcher",
    description:
      "A React site I made for Science Olympiad at Cornell to match students to events more easily",
    date: "March 2023 - Sept 2024",
    imageSrc: "",
    altText: "",
    links: [
      {
        name: "GitHub",
        url: "",
      },
      {
        name: "Try it out!",
        url: "",
      },
    ],
  },
  {
    name: "Colossal Avian Telemetry GUI",
    description: "PyQT GUI for Colossal Avian, a 30lb combat robot",
    date: "April 2024",
    imageSrc: "",
    altText: "",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/avian_telemetry",
      },
    ],
  },
];

export const collegeProjects: Project[] = [
  {
    name: "Plume",
    description:
      "Game Design Initiative at Cornell 2022 Showcase Most Innovative Winner: A wholesome 2D platformer where you play as Cupid, shooting arrows to climb and stun enemies to reunite two lovers. I created a level editor using Java Swing, implemented Cupid's animations, and created UI screens including the main menu and level selection screen.",
    date: "January 2022 - May 2022",
    imageSrc: plumePreview,
    altText: "Platformer where Cupid aims an arrow at a sheep enemy",
    links: [
      {
        name: "Try it out!",
        url: "https://gdiac.cs.cornell.edu/temp/showcase/gallery/plume/",
      },
    ],
  },
  {
    name: "Carriage",
    description:
      "My project team while I was on the Cornell Design and Tech Initiative! Carrige is a set of Flutter and React mobile/web apps to support CULift, Cornell's paratransit service for students with disabilities. I primarily worked on the rider/driver apps, including testing for and ensuring screenreader accessibility using TalkBack.",
    date: "Spring 2020 - August 2021",
    imageSrc: carriagePreview,
    altText: "A schedule of CULift rides from the Carriage driver app",
    links: [
      {
        name: "Carriage Driver",
        url: "https://github.com/cornell-dti/carriage-driver/",
      },
      {
        name: "Carriage Rider",
        url: "https://github.com/cornell-dti/carriage-rider/",
      },
    ],
  },
  {
    name: "CUBlogs",
    description:
      "Trends in Web Dev partner project: A multi-user blog where users can create, upvote, and filter text posts by author, keywords, and tags",
    date: "December 2020",
    imageSrc: blogsPreview,
    altText:
      "Main CUBlogs page with posts filtered to posts with the author 'Jeremy'",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/triple-jay/trendsfinalproject",
      },
    ],
  },
  {
    name: "LetQuiz",
    description:
      "Cornell AppDev Hack Challenge, Best App for the Remote Era: A flashcard app created with a partner from Intro to Backend Development, two iOS devs, and a UI/UX designer. I worked on designing and implementing the app's backend featuring authenticated requests and occasionally helped debug our iOS frontend.",
    date: "December 2020",
    imageSrc: letquizPreview,
    altText: "Code from backend routes for getting and deleting a flashcard",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/mly32/flashcard-app-hack-challenge",
      },
    ],
  },
];

export const hackathonProjects: Project[] = [
  {
    name: "Thirsty",
    description:
      "Big Red Hacks submission: A Flutter app to help Cornell students locate and rate waterbottle refill stations on campus",
    date: "October 2022",
    imageSrc: thirstyPreview,
    altText:
      "Map showing water fountain locations with info about the fountain in Caldwell Hall",
    links: [
      {
        name: "DevPost",
        url: "https://devpost.com/software/thirsty-xifz3h",
      },
    ],
  },
  {
    name: "Scribe",
    description:
      "TechTogether Seattle submission: A web app that connects users with visual/hearing impairments to Microsoft Azure AI or sighted/hearing volunteers for describing or transcribing images, audio, and videos",
    date: "January 2021",
    imageSrc: scribePreview,
    altText:
      "Main page showing posts and buttons to create a post, analyze an image with AI, or transcribe a video",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/tts_2021",
      },
    ],
  },
  {
    name: "quesTodo",
    description:
      "Technica 2020, Best Product IoT Hack 2nd Place Winner: A React app that turns your to do list into boss battle quests.",
    date: "October 2020",
    imageSrc: questodoPreview,
    altText:
      "List of quests including 'Math HW' and 'Clean my room' with corresponding difficulties and book-shaped boss avatars",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/technica_2020",
      },
      {
        name: "DevPost",
        url: "https://devpost.com/software/questodo",
      },
    ],
  },
  {
    name: "shef",
    description:
      "DTI Hackathon 2020, Peoples' Choice Winner: A Flutter app for helping college students find recipes based on the ingredients and utensils they have with a fun Tinder-style interface",
    date: "September 2020",
    imageSrc: shefPreview,
    altText: "Tinder-style card for a quesadilla recipe",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/dti_hackathon_2020",
      },
    ],
  },
  {
    name: "Linked",
    description:
      "Hack Our Campus 2020, Mental Health Category Winner: A Flutter app for creating virtual hangouts with automatically generated Google Meet calls to help students stay connected more easily during the remote semester",
    date: "August 2020",
    imageSrc: linkedPreview,
    altText: "Profile, Schedule, Discover, and Event pages from Linked",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/linked",
      },
    ],
  },
];

export const personalProjects: Project[] = [
  {
    name: "Scavenger Hunt Walk",
    description:
      "A React prototype for a little game where you search for randomized items along your walk",
    date: "July 2025",
    imageSrc: "",
    altText: "",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/scavenger-walk",
      },
      {
        name: "Try it out!",
        url: "https://scavenger-walk.vercel.app/",
      },
    ],
  },
  {
    name: "Exercise Bingo",
    description: "",
    date: "June 2025",
    imageSrc: exerciseBingoPreview,
    altText: "",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/bingo-workout",
      },
      {
        name: "Try it out!",
        url: "https://bingo-workout.vercel.app/",
      },
    ],
  },
  {
    name: "Exercise Generator",
    description:
      "A Flutter app that generates a random workout from a list of exercises, made in hopes of forcing myself to exercise more (spoiler: it didn't work)",
    date: "Summer 2020",
    imageSrc: exercisePreview,
    altText:
      "'Ready to work out today?' header with a button that says Grind NEVER stops with copious amounts of emojis",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/exercise_generator",
      },
    ],
  },
  {
    name: "Ins & Outs",
    description:
      "A Flutter app for tracking food and symptoms to help with identifying possible food intolerances. Unfinished, but I hope to continue working on it!",
    date: "Summer 2020",
    imageSrc: insAndOutsPreview,
    altText: "Card showing a lunch of watermelon, ramen, and green beans",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/ins-and-outs",
      },
    ],
  },
];

export const hsProjects: Project[] = [
  {
    name: "BadRPG",
    description:
      "AOOD partner project: an RPG full of puns with a self-aware name and my questionable pixel art",
    date: "Spring 2019",
    imageSrc: badrpgPreview,
    altText: "A character standing in front of two houses",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/BadRPG/",
      },
    ],
  },
  {
    name: "Sudoku",
    description:
      "AOOD group project: a Sudoku game made for our teacher, who was our client as I lead a team of 7 students to walk through the professional software development process",
    date: "Winter-Spring 2019",
    imageSrc: sudokuPreview,
    altText: "Sudoku game interface",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/Sudoku",
      },
    ],
  },
  {
    name: "Tetris",
    description:
      "CSA partner project: a Tetris game with single-player sprint/marathon and 2-player race/battle modes",
    date: "Spring 2018",
    imageSrc: tetrisPreview,
    altText: "Two Tetris screens side by side",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/Tetris",
      },
    ],
  },
  {
    name: "Rummikub",
    description:
      "CSA picture project: a recreation of the board game Rummikub, created from a base project with mouse click position and image display features",
    date: "Fall-Winter 2018",
    imageSrc: rummikubPreview,
    altText: "A grid with number tiles",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/helenxuyang/Rummikub",
      },
    ],
  },
];
