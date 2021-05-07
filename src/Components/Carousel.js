import BEMHelper from "react-bem-helper";
import CarouselCard from "./CarouselCard";
import Slider from "react-slick";
import Weather from "./WeatherCard"
import BookSearch from "./BookSearch"

const Carousel = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('carousel');
    // const projects = [0, 1, 2]
    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <div {...classes()}>
            <p {...classes('header')}>
                PROJECTS
            </p>
            <Slider {...classes('cards-container')} {...settings}>
                <Weather />
                <BookSearch />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
            </Slider>
        </div>
    )
}

export default Carousel;