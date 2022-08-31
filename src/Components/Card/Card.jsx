import React from 'react';
import './Card.css';

export default function Card({ img }) {
    return (
        <>
            <div className="card-box">
                <img src={img} alt="gallary img" className="card-img" />
            </div>
        </>
    );
}
