import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading"> Chefs</p>
                <h1 className="primary-heading"> Meet Our Talented Pizzeria Chefs </h1>
                <p className="primary-text">  Experience the culinary genius behind our pizzas. With unmatched skills and a passion for perfection, our chefs create pizza masterpieces that will leave you craving more.
                </p>
                <p className="primary-text">
                    From handcrafted dough to delectable toppings, their collective talent shines through in every bite. Prepare your taste buds for an extraordinary dining experience brought to you by our exceptional team of pizzeria chefs
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">{""} <BsFillPlayCircleFill /></button>
                </div>
            </div>
        </div>
    )
}

export default About
