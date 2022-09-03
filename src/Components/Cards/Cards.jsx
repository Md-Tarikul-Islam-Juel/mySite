/* eslint array-callback-return: "error" */
import React from 'react';
import Card from '../Card/Card';

import './Cards.css';

function Cards({ Images }) {
    return (
        <>
            <div className="container">
                <div className="row cards-row-1">
                    {Images.map((item) => (
                        <div className="CARD card-box">
                            <Card img={item.image} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Cards;
