import "./Home.css";
import Projects from "./Projects";

const Home = () => {
  return (
    <div id="home">
      <div id="home-intro" className="home-section">
        <div id="home-intro-text">
          <p className="intro-title">Hi, I'm Helen!</p>
          <p>
            Hello! My name is Helen. I graduated from Cornell University in 2023 and am now a frontend software developer with an interest in web/app development and accessibility. I primarily have experience with React and Flutter. I'm interested in creating useful, fun, and accessible
            tech!
          </p>
          <p>
            Outside of work, I enjoy learning American Sign Language, cooking,
            and being terrible at video games.
          </p>
          <a href="https://www.linkedin.com/in/helenxuyang/">LinkedIn</a>
          {" | "}
          <a href="https://github.com/helenxuyang">GitHub</a>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Home;
