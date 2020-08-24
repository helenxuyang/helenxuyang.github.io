'use strict';

class NavBar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <h1>helen.xu.yang</h1>
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li><a href="about.html">ABOUT ME</a></li>
          <li><a href="resume.html">RESUME</a></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <NavBar />,
  document.querySelector('#navbar')
);