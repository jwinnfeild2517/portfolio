// import MainPage from "./Containers/MainPage";
import SearchFormContainer from "./Components/BookSeachApp/SearchFormContainer";
import LandingPage from "./Components/LandingPage";
import ProjectsBrowse from "./Components/ProjectsGrid/ProjectsBrowse"
import Navigation from "./Components/Navigation";
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
          <Route path="/search" component={SearchFormContainer} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
