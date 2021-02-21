import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';

import './slider.css';
import jammming from '../assets/jammming.png';
import chore from '../assets/chore-door.png';
import splitboardkw from '../assets/sb-k-w.png';
import mqtbackcountry from '../assets/mqt-backcountry.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = [jammming, chore, splitboardkw, mqtbackcountry]

function ProjectSlider() {
    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    };
    
    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    };
    
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
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
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "slide active-slide": "slide"}>
                        {/*The anchor tag below will need to be udpated to account for seperate sites*/}
                        <a href="https://manovak24.github.io/jammming/" rel="noopener noreferrer" target="_blank">
                            <img src={img} alt="alt" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProjectSlider;