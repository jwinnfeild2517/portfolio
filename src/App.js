// import MainPage from "./Containers/MainPage";
import SearchContainer from "./Containers/SearchContainer";
import LandingPage from "./Components/LandingPage";


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search" component={SearchContainer} />
      </Router>
    </div>
  
  );
}

export default App;
