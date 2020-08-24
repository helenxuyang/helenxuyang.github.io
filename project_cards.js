'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectCard = function (_React$Component) {
  _inherits(ProjectCard, _React$Component);

  function ProjectCard() {
    _classCallCheck(this, ProjectCard);

    return _possibleConstructorReturn(this, (ProjectCard.__proto__ || Object.getPrototypeOf(ProjectCard)).apply(this, arguments));
  }

  _createClass(ProjectCard, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'project-card' },
        React.createElement(
          'h2',
          null,
          this.props.title
        ),
        React.createElement(
          'p',
          null,
          this.props.desc
        ),
        React.createElement('img', {
          src: this.props.img,
          alt: this.props.alt }),
        React.createElement(
          'a',
          { href: this.props.repo, 'class': 'button' },
          'GitHub'
        )
      );
    }
  }]);

  return ProjectCard;
}(React.Component);

ReactDOM.render(React.createElement(ProjectCard, {
  title: 'Exercise Generator',
  desc: 'A Flutter app that generates a random workout from a list of exercises',
  img: 'images/preview_exercise_gen.png',
  alt: 'Exercise Generator app main page',
  repo: 'https://github.com/helenxuyang/exercise_generator',
  more: '#'
}), document.querySelector('#card_exercise'));

ReactDOM.render(React.createElement(ProjectCard, {
  title: 'Ins & Outs',
  desc: 'A Flutter app for tracking food and symptoms to help with identifying possible food intolerances',
  img: 'images/preview_ins_outs.png',
  alt: 'Ins & Outs app main page',
  repo: 'https://github.com/helenxuyang/ins-and-outs',
  more: '#'
}), document.querySelector('#card_stomach'));

ReactDOM.render(React.createElement(ProjectCard, {
  title: 'helenxuyang.github.io',
  desc: 'How\'s that for recursion? My first project for learning HTML/CSS on my long journey to learn about webdev :)',
  img: 'images/tech.png',
  alt: 'Pixel art of a computer, phone, and tablet',
  repo: 'https://github.com/helenxuyang/helenxuyang.github.io',
  more: '#'
}), document.querySelector('#card_website'));

ReactDOM.render(React.createElement(ProjectCard, {
  title: 'Sudoku',
  desc: 'AOOD group project (team lead of 7 students): a Sudoku game built with our teacher as the client',
  img: 'images/preview_sudoku.jpg',
  alt: 'Sudoku application',
  repo: 'https://github.com/helenxuyang/Sudoku'
}), document.querySelector('#card_sudoku'));

ReactDOM.render(React.createElement(ProjectCard, {
  title: 'BadRPG',
  desc: 'AOOD partner project: an RPG full of puns with a self-aware name',
  img: 'images/preview_badrpg.jpg',
  alt: 'BadRPG application',
  repo: 'https://github.com/helenxuyang/BadRPG'
}), document.querySelector('#card_badrpg'));

ReactDOM.render(React.createElement(ProjectCard, {
  title: 'Tetris',
  desc: 'CSA partner project: Tetris with single and two player modes',
  img: 'images/preview_tetris.jpg',
  alt: '2 player Tetris application',
  repo: 'https://github.com/helenxuyang/Tetris'
}), document.querySelector('#card_tetris'));

ReactDOM.render(React.createElement(ProjectCard, {
  title: 'Rummikub',
  desc: 'CSA picture project: Local multiplayer Rummikub board game',
  img: 'images/preview_rummikub.jpg',
  alt: 'Rummikub application',
  repo: 'https://github.com/helenxuyang/Rummikub'
}), document.querySelector('#card_rummikub'));