import React from 'react';
import Slider from 'react-slick';
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic2 from "../Assets/john-doe-image2.png";
import ProfilePic3 from "../Assets/john-doe-image3.png";
import { AiFillStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
    {
        image: ProfilePic,
        feedback: "The pizza here is simply outstanding! The flavors are unparalleled and the crust is perfection. I can't get enough of it!",
        name: "Lilya",
    },
    {
        image: ProfilePic2,
        feedback: "Absolutely loved the experience! The service was amazing and the pizza was out of this world. Highly recommend!",
        name: "Khalid",
    },
    {
        image: ProfilePic3,
        feedback: "A delightful experience from start to finish. The ambiance is perfect for a family dinner, and the pizza is to die for!",
        name: "Samia",
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonials</p>
                <h1 className="primary-heading">What They Are Saying</h1>
            </div>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-section-bottom">
                        <img src={testimonial.image} alt={`Profile of ${testimonial.name}`} />
                        <p>{testimonial.feedback}</p>
                        <div className="testimonials-stars-container">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <h2 className="primary-subheading">{testimonial.name}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
