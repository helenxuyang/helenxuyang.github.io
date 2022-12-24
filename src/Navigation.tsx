import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <h1>helen.xu.yang</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
