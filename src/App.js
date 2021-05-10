// import MainPage from "./Containers/MainPage";
import SearchContainer from "./Containers/SearchContainer";
import LandingPage from "./Components/LandingPage";
import ProjectsBrowse from "./Containers/ProjectsBrowse"
import Navigation from "./Components/Navigation";
import MagazineCutout from "./Components/MagazineCutout"
import About from "./Components/About"


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Navigation />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={ProjectsBrowse} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/collage" component={MagazineCutout} />
        <Route exact path="/about" component={About} />

      </Router>
    </div>

  );
}

export default App;
