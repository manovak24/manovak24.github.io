import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';

import './slider.css';
import MUSICforYOU from '../assets/MUSICforYOU.png';
import chore from '../assets/chore-door.png';
import splitboardkw from '../assets/sb-k-w.png';
import mqtbackcountry from '../assets/mqt-backcountry.png';
import creditCardValidator from '../assets/credit-card-validator.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = [
    {
        id: 1,
        title: 'Credit Card Validator',
        source: 'https://manovak24.github.io/credit_card_validator/',
        image: creditCardValidator
    },
    {
        id: 2,
        title: 'MUSICforYOU',
        source: 'https://manovak24.github.io/jammming/',
        image: MUSICforYOU
    },
    {
        id: 3,
        title: 'Chore Door',
        source: 'https://manovak24.github.io/chore_door/',
        image: chore
    },
    {
        id: 4,
        title: 'Splitboard Knowledge Warehouse',
        source: 'https://manovak24.github.io/splitboard_knowledge_warehouse/',
        image: splitboardkw
    },
    {
        id: 5,
        title: 'MQT Backcountry',
        source: 'https://manovak24.github.io/mqt_backcountry/',
        image: mqtbackcountry
    }
]

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
        dots: true,
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
              breakpoint: 900,
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
                slidesToScroll: 1,
                dots: true
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
                        <p>{img.title}</p>
                        <a href={img.source} rel="noopener noreferrer" target="_blank">
                            <img src={img.image} alt="alt" />
                        </a>
                        <a className="slide-link" href={img.source} rel="noopener noreferrer" target="_blank">Click here to launch site</a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProjectSlider;