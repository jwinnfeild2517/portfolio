import Navigation from "../Components/Navigation";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components/Footer";
import About from "../Components/About"
import Carousel from "../Components/Carousel";

const MainPage = () => {
    return(
        <div className="wrapper">
            <Navigation/>
            <Jumbotron/>
            <Carousel/>
            <About/>
            <Footer/>
        </div>
    )
}

export default MainPage;