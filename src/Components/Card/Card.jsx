import React, { useState } from 'react';
import './Card.css';

const Card = ({ item, url }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="card">
            <img className="card-img" src={`${url}/images/` + item.image} alt={item.category} />
            <div className="card-content">
                <p className="card-number">Number : {item.number}</p>
                <p className="card-category">Category : {item.category}</p>
                <p className="card-description">
                    Desc : {isReadMore ? item.description : `${item.description.substring(0, 30)}...`}
                    <span className="read-more" onClick={toggleReadMore}>
                        {isReadMore ? ' Show Less' : ' Read More'}
                    </span>
                </p>
                <p className="card-price">Price : ₹{item.price}</p>
            </div>
        </div>
    );
};

export default Card;
