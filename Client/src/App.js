// import MainPage from "./Containers/MainPage";
import SearchContainer from "./Components/BookSeachApp/SearchContainer";
import LandingPage from "./Components/LandingPage";
import ProjectsBrowse from "./Components/ProjectsGrid/ProjectsBrowse"
import Navigation from "./Components/Navigation";
import MagazineCutout from "./Components/MagazineCutout"
import About from "./Components/AboutPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/projects" component={ProjectsBrowse} />
          <Route exact path="/search" component={SearchContainer} />
          <Route exact path="/collage" component={MagazineCutout} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
