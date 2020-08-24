'use strict';

class ProjectCard extends React.Component {
  render() {
    return (
      <div class={'project-card'}>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
        <img
          src={this.props.img}
          alt={this.props.alt}>
        </img>
        <a href={this.props.repo} class={'button'}>GitHub</a>
      </div>
    );
  }
}

ReactDOM.render(
  <ProjectCard
    title={'Exercise Generator'}
    desc={'A Flutter app that generates a random workout from a list of exercises'}
    img={'images/preview_exercise_gen.png'}
    alt={'Exercise Generator app main page'}
    repo={'https://github.com/helenxuyang/exercise_generator'}
    more={'#'}
  />,
  document.querySelector('#card_exercise')
);

ReactDOM.render(
  <ProjectCard
    title={'Ins & Outs'}
    desc={'A Flutter app for tracking food and symptoms to help with identifying possible food intolerances'}
    img={'images/preview_ins_outs.png'}
    alt={'Ins & Outs app main page'}
    repo={'https://github.com/helenxuyang/ins-and-outs'}
    more={'#'}
  />,
  document.querySelector('#card_stomach')
);

ReactDOM.render(
  <ProjectCard
    title={'helenxuyang.github.io'}
    desc={'How\'s that for recursion? My first project for learning HTML/CSS on my long journey to learn about webdev :)'}
    img={'images/tech.png'}
    alt={'Pixel art of a computer, phone, and tablet'}
    repo={'https://github.com/helenxuyang/helenxuyang.github.io'}
    more={'#'}
  />,
  document.querySelector('#card_website')
);

ReactDOM.render(
  <ProjectCard
    title={'Sudoku'}
    desc={'AOOD group project (team lead of 7 students): a Sudoku game built with our teacher as the client'}
    img={'images/preview_sudoku.jpg'}
    alt={'Sudoku application'}
    repo={'https://github.com/helenxuyang/Sudoku'}
  />,
  document.querySelector('#card_sudoku')
);

ReactDOM.render(
  <ProjectCard
    title={'BadRPG'}
    desc={'AOOD partner project: an RPG full of puns with a self-aware name'}
    img={'images/preview_badrpg.jpg'}
    alt={'BadRPG application'}
    repo={'https://github.com/helenxuyang/BadRPG'}
  />,
  document.querySelector('#card_badrpg')
);

ReactDOM.render(
  <ProjectCard
    title={'Tetris'}
    desc={'CSA partner project: Tetris with single and two player modes'}
    img={'images/preview_tetris.jpg'}
    alt={'2 player Tetris application'}
    repo={'https://github.com/helenxuyang/Tetris'}
  />,
  document.querySelector('#card_tetris')
);

ReactDOM.render(
  <ProjectCard
    title={'Rummikub'}
    desc={'CSA picture project: Local multiplayer Rummikub board game'}
    img={'images/preview_rummikub.jpg'}
    alt={'Rummikub application'}
    repo={'https://github.com/helenxuyang/Rummikub'}
  />,
  document.querySelector('#card_rummikub')
);