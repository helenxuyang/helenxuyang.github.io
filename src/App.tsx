import "./App.css";
import Navigation from "./Navigation";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
// import Blog from "./Blog";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          {/* <Route path="/blog">
            <Blog />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
