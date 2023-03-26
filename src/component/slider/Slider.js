import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './slider.css';
import Sliderdiv from "react-slick";

const Slider = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        cssEase: "linear",
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
        <div className="banner-slider">
        <Sliderdiv {...settings}>
          <div className="inside-banner-slider">
            <img className="slider-image" src="assets/slider/1.jpg" alt="1"/>
          </div>
          <div className="inside-banner-slider">
            <img className="slider-image" src="assets/slider/2.jpg" alt="2"/>
          </div>
          <div className="inside-banner-slider">
            <img className="slider-image" src="assets/slider/3.jpg" alt="3"/>
          </div>
        </Sliderdiv>
      </div>
        </>
    );
};

export default Slider;