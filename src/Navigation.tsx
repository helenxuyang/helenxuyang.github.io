import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (

    <nav className="navbar">
      <h1>helen.xu.yang</h1>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT ME</Link></li>
        <li><Link to="/resume">RESUME</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
