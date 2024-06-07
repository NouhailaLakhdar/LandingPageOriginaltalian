import React from 'react';
import Pepperoni from "../Assets/Pepperoni-image.png";
import Tuna from "../Assets/Tuna-image.png";
import Bolognese from "../Assets/Bolognese-image.png";

const Work = () => {
    const workInFoData = [
        {
            image: Pepperoni,
            title: "Pizza Pepperoni",
            text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
        },
        {
            image: Tuna,
            title: "Pizza Tuna",
            text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt. ",
        },
        {
            image: Bolognese,
            title: "Pizza Bolognese",
            text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt.",
        },
    ];
    return <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading"> Special Offers</p>
            <h1 className="primary-heading"> Our Popular Dishes</h1>
            <p className="primary-subheading-info2"> Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.</p>
        </div>
        <div className="work-section-bottom">
            {workInFoData.map((data) =>
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} />
                    </div>
                    <h2 className="primary-subheading-work">{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            )}
            <button className="secondary-button">View More</button>
        </div>
    </div>
}

export default Work
