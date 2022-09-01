/* eslint array-callback-return: "error" */
import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

export default function Cards({ Images }) {
    return (
        <>
            <div className="container">
                <div className="row cards-row-1">
                    {Images.map((item) => (
                        <div className="CARD">
                            <Card img={item.image} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
