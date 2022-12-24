import "./AdventProjects.css";
import PomodoroTimer from "./PomodoroTimer";

function AdventProjects() {
  return (
    <div id="advent-projects">
      <h2>Winter Break React Practice</h2>
      <p>December 2022</p>
      <p>
        I wanted to get some practice with React over winter break, so here's
        some mini projects inspired by the{" "}
        <a href="https://www.adventofjs.com/">Advent of JS</a>!
      </p>
      <h3>Pomodoro Timer</h3>
      <PomodoroTimer />
    </div>
  );
}

export default AdventProjects;
