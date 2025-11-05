import styled from "styled-components";
import { Timeline, type TimelineItem } from "./Timeline";
import { IconPill } from "./IconPill";
import profile from "./assets/images/profile.png";
import linkedinIcon from "./assets/images/icon_linkedin.png";
import githubIcon from "./assets/images/icon_github.png";
import reactIcon from "./assets/images/icon_react.png";
import appleIcon from "./assets/images/icon_apple.png";
import flutterIcon from "./assets/images/icon_flutter.png";
import jetpackComposeIcon from "./assets/images/icon_jetpack_compose.png";
import lithoIcon from "./assets/images/icon_litho.png";
import expoIcon from "./assets/images/icon_expo.png";
import nextJSIcon from "./assets/images/icon_nextjs.png";
import hobby_puzzling from "./assets/images/hobby_puzzling_ca_2024.jpg";
import hobby_cards from "./assets/images/hobby_cards.png";
import hobby_cooking from "./assets/images/hobby_cooking.jpg";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "./colors";

const StyledContainer = styled.div`
  h2 {
    color: ${COLOR_PRIMARY};
    margin-bottom: 0;
    display: inline-block;
    position: relative;
    line-height: normal;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${COLOR_PRIMARY};
      transform-origin: bottom right;
      transition: transform 0.2s ease-in-out;
    }

    &:hover::after {
      height: 2px;
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  figure {
    max-width: 300px;
    border: 2px solid ${COLOR_SECONDARY};
    padding: 8px;
  }
`;

const StyledAbout = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledProfile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 24px;
  border: 4px solid ${COLOR_PRIMARY};
`;

const ProfileLinks = styled.ul`
  padding: 0;
  display: flex;
  gap: 12px;

  li {
    display: inline-block;

    a {
      font-size: 0;
      img {
        width: 18px;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

const ExperienceSection = styled.div`
  line-height: 1.5;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
  }
`;

const StyledImages = styled.div`
  display: flex;
  flex-wrap: wrap;

  figure {
    margin: 16px;
  }

  img {
    width: 300px;
  }
`;

const timelineItems: TimelineItem[] = [
  {
    name: "Work",
    date: "2023-Present",
    headline: "I'm a frontend software developer at Curriculum Associates.",
    description:
      "I work on the student dashboard for i-Ready, an online education platform. I also contribute to our iPad app, i-Ready Connect for Students.",
  },
  {
    name: "College",
    date: "2019-2023",
    headline:
      "I majored in Computer Science at Cornell University in Ithaca, New York.",
    description:
      "Outside of classes, I was a Flutter dev in Cornell Design & Tech Initiative (DTI) and co-president of Science Olympiad at Cornell. I spent my summers interning with a research lab to study the accessibility of 3D virtual worlds, learning Android development at Meta, and developing accessible educational technology at Curriculum Associates. Ultimately, I found my passion for creating accessible tech for social good and my interest in web+mobile development.",
  },
  {
    name: "High School",
    date: "2015-2019",
    headline: "I attended Centennial High School in Ellicott City, Maryland.",
    description:
      'My "hello" to the "world" of CS started when I built a bizarre RPG for AP Computer Science Principles where you played as a snail that shot lasers from its eyes. I also loved creating projects in AP Computer Science A and Advanced Object-Oriented Principles.',
  },
];

export const About = () => {
  return (
    <StyledContainer>
      <StyledAbout>
        <StyledProfile src={profile} alt="Headshot of Helen Yang" width="200" />
        <div>
          <h2>About Me</h2>
          <p>
            Hi, I'm Helen! I'm a frontend dev interested in creating useful,
            fun, and accessible tech.
          </p>
          <ProfileLinks>
            <li>
              <a href="https://www.linkedin.com/in/helenxuyang/">
                <img src={linkedinIcon} alt="LinkedIn profile" />
              </a>
            </li>
            <li>
              <a href="https://github.com/helenxuyang">
                <img src={githubIcon} alt="GitHub profile" />
              </a>
            </li>
          </ProfileLinks>
        </div>
      </StyledAbout>
      <ExperienceSection>
        <h2>Experience</h2>
        <h3>Used professionally:</h3>
        <ul>
          <li>
            <IconPill name="React (TypeScript)" iconSrc={reactIcon} />
          </li>
          <li>
            <IconPill name="iOS (UIKit, Swift)" iconSrc={appleIcon} />
          </li>
        </ul>
        <h3>Previously dabbled in:</h3>
        <ul>
          <li>
            <IconPill name="Flutter (Dart)" iconSrc={flutterIcon} />
          </li>
          <li>
            <IconPill
              name="Jetpack Compose (Kotlin)"
              iconSrc={jetpackComposeIcon}
            />
          </li>
          <li>
            <IconPill name="Litho (Kotlin)" iconSrc={lithoIcon} />
          </li>
          <li>
            <IconPill
              name="React Native (Expo, TypeScript)"
              iconSrc={expoIcon}
            />
          </li>
          <li>
            <IconPill name="NextJS (TypeScript)" iconSrc={nextJSIcon} />
          </li>
        </ul>
      </ExperienceSection>
      <Timeline title="History" titleHeadingLevel={2} items={timelineItems} />
      <h2>Hobbies</h2>
      <ul>
        <li>
          🤟 <strong>American Sign Language:</strong> I took ASL 1 and 2 in
          college (my favorite classes!) and am hoping to keep learning after
          graduating.
        </li>
        <li>
          🧩 <strong>Speed puzzling:</strong> I've always loved jigsaw puzzles,
          recently I've started trying to do them fast but am still very slow
        </li>
        <li>
          ✂️ <strong>Papercraft/cardmaking:</strong> I often make cards out of
          paper for holidays and birthdays!
        </li>
        <li>
          🍚 <strong>Cooking:</strong> I enjoy cooking and love to eat!
        </li>
      </ul>
      <StyledImages>
        <figure>
          <img
            alt="A completed jigsaw Puzzle of Glacier National Park"
            src={hobby_puzzling}
          />
          <figcaption>
            A 500 piece puzzle I completed at CA States 2024 in 1 hour, 42
            minutes, 37 seconds.
          </figcaption>
        </figure>
        <figure>
          <img alt="An assortment of handmade winter cards" src={hobby_cards} />
          <figcaption>
            i-Ready themed holiday cards I created for my coworkers (I had the
            perfect cardstock colors for Plory and Yoop!)
          </figcaption>
        </figure>
        <figure>
          <img alt="A bowl of braised pork belly" src={hobby_cooking} />
          <figcaption>
            Homemade 红烧肉 (braised pork belly)--I'm on a quest to make it as
            good as my mom's, but hers is definitely the best!
          </figcaption>
        </figure>
      </StyledImages>
    </StyledContainer>
  );
};
