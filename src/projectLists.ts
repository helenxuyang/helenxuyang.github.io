import badrpgPreview from './images/preview_badrpg.jpg';
import carriagePreview from './images/preview_carriage.png';
import exercisePreview from './images/preview_exercise_gen.png';
import insAndOutsPreview from './images/preview_ins_outs.png';
import questodoPreview from './images/preview_questodo.jpg';
import rummikubPreview from './images/preview_rummikub.jpg';
import sudokuPreview from './images/preview_sudoku.jpg';
import tetrisPreview from './images/preview_tetris.jpg';
import thirstyPreview from './images/preview_thirsty.png';
import blogsPreview from './images/preview_blogs.png';
import letquizPreview from './images/preview_letquiz.png';
import scribePreview from './images/preview_scribe.jpg';
import libePreview from './images/preview_libe.png';
import plumePreview from './images/preview_plume.png';
import linkedPreview from './images/preview_linked.png';
import shefPreview from './images/preview_shef.png';

import { Project } from './types';

export const currentProjects: Project[] = [
    {
      name: "Libe",
      description: "A website for Science Olympiad at Cornell tournament management and scoring that I'm developing with a partner. Very much a WIP but we're hoping to see it live by this fall!",
      date: "June 2022 - Present",
      image: libePreview,
      altText: "Homepage for a tournament showing teams and events",
    }
  ];
  
  export const collegeProjects: Project[] = [
    {
        name: "Plume",
        description: "Game Design Initiative at Cornell 2022 Showcase Most Innovative Winner: A wholesome 2D platformer where you play as Cupid, shooting arrows to climb and stun enemies to reunite two lovers. I created a level editor using Java Swing, implemented Cupid's animations, and created UI screens including the main menu and level selection screen.",
        date: "January 2022 - May 2022",
        image: plumePreview,
        altText: "Platformer where Cupid aims an arrow at a sheep enemy",
        otherLinks: new Map([
            ['Try it out!', 'https://gdiac.cs.cornell.edu/temp/showcase/gallery/plume/']
        ])
    },
    {
      name: "Carriage",
      description: "My project team while I was on the Cornell Design and Tech Initiative! Carrige is a set of Flutter and React mobile/web apps to support CULift, Cornell's paratransit service for students with disabilities. I primarily worked on the rider/driver apps, including testing for and ensuring screenreader accessibility using TalkBack.",
      date: "Spring 2020 - August 2021",
      image: carriagePreview,
      altText: "A schedule of CULift rides from the Carriage driver app",
      repoURL: "https://github.com/cornell-dti/carriage-driver/",
      otherLinks: new Map([
        ['DTI Project', 'https://www.cornelldti.org/projects/carriage/']
      ])
    },
    {
      name: "CUBlogs",
      description: "Trends in Web Dev partner project: A multi-user blog where users can create, upvote, and filter text posts by author, keywords, and tags",
      date: "December 2020",
      image: blogsPreview,
      altText: "Main CUBlogs page with posts filtered to posts with the author 'Jeremy'",
      repoURL: "https://github.com/triple-jay/trendsfinalproject",
    },
    {
      name: "LetQuiz",
      description: "Cornell AppDev Hack Challenge, Best App for the Remote Era: A flashcard app created with a partner from Intro to Backend Development, two iOS devs, and a UI/UX designer. I worked on designing and implementing the app's backend featuring authenticated requests and occasionally helped debug our iOS frontend.",
      date: "December 2020",
      image: letquizPreview,
      altText: "Code from backend routes for getting and deleting a flashcard",
      repoURL: "https://github.com/mly32/flashcard-app-hack-challenge",
    },
  ];
  
  export const hackathonProjects: Project[] = [
    {
      name: "Thirsty",
      description: "Big Red Hacks submission: A Flutter app to help Cornell students locate and rate waterbottle refill stations on campus",
      date: "October 2022",
      image: thirstyPreview,
      altText: "Map showing water fountain locations with info about the fountain in Caldwell Hall",
      otherLinks: new Map([
        ['DevPost', 'https://devpost.com/software/thirsty-xifz3h']
      ])
    },
    {
        name: "Scribe",
        description: "TechTogether Seattle submission: A web app that connects users with visual/hearing impairments to Microsoft Azure AI or sighted/hearing volunteers for describing or transcribing images, audio, and videos",
        date: "January 2021",
        image: scribePreview,
        altText: "Main page showing posts and buttons to create a post, analyze an image with AI, or transcribe a video",
        repoURL: "https://github.com/helenxuyang/tts_2021"
    },
    {
      name: "quesTodo",
      description: "Technica 2020, Best Product IoT Hack 2nd Place Winner: A React app that turns your to do list into boss battle quests.",
      date: "October 2020",
      image: questodoPreview,
      altText: "List of quests including 'Math HW' and 'Clean my room' with corresponding difficulties and book-shaped boss avatars",
      repoURL: "https://github.com/helenxuyang/technica_2020",
      otherLinks: new Map([
        ['DevPost', 'https://devpost.com/software/questodo'],
      ])
    },
    {
      name: "shef",
      description: "DTI Hackathon 2020, Peoples' Choice Winner: A Flutter app for helping college students find recipes based on the ingredients and utensils they have with a fun Tinder-style interface",
      date: "September 2020",
      image: shefPreview,
      altText: "Tinder-style card for a quesadilla recipe",
      repoURL: "https://github.com/helenxuyang/dti_hackathon_2020",
    },
    {
      name: "Linked",
      description: "Hack Our Campus 2020, Mental Health Category Winner: A Flutter app for creating virtual hangouts with automatically generated Google Meet calls to help students stay connected more easily during the remote semester",
      date: "August 2020",
      image: linkedPreview,
      altText: "Profile, Schedule, Discover, and Event pages from Linked",
      repoURL: "https://github.com/helenxuyang/linked",
    },
  ];
  
  export const personalProjects: Project[] = [
    {
      name: "Exercise Generator",
      description: "A Flutter app that generates a random workout from a list of exercises, made in hopes of forcing myself to exercise more (spoiler: it didn't work)",
      date: "Summer 2020",
      image: exercisePreview,
      altText: "'Ready to work out today?' header with a button that says Grind NEVER stops with copious amounts of emojis",
      repoURL: "https://github.com/helenxuyang/exercise_generator",
    },
    {
      name: "Ins & Outs",
      description: "A Flutter app for tracking food and symptoms to help with identifying possible food intolerances. Unfinished, but I hope to continue working on it!",
      date: "Summer 2020",
      image: insAndOutsPreview,
      altText: "Card showing a lunch of watermelon, ramen, and green beans",
      repoURL: "https://github.com/helenxuyang/ins-and-outs",
    }
  ]
  
  export const hsProjects: Project[] = [
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
      altText: "Sudoku game interface",
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
  