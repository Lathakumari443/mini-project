import React from "react";
import Slider from "react-slick";
import './Slider.css';

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="slider">
            <div className="slide-content">
                <div className="slide-img">
                    <img src='./src/assets/Chaitanya sir.jpeg' alt='Background' />
                </div>
                <div className="slide-text">
                    <h2>About me</h2>
                    <p> A Nesciunt eos impedit ducimus ipsam nostrum?</p>
                </div>
            </div>
            <div className="slide-content">
                <div className="slide-img">
                    <img src='./src/assets/another_image.jpeg' alt='Background' />
                </div>
                <div className="slide-text">
                    <h2>About me</h2>
                    <p>A Nesciunt eos impedit ducimus ipsam nostrum?</p>
                </div>
            </div>
            {/* Add more slides as needed */}
        </Slider>
    );
}
