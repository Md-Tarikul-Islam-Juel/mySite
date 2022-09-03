import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Card.css';

export default function Card({ img }) {
    return (
        <>
            <div className="card-box">
                {/* <img src={img} alt="gallary img" className="card-img" /> */}
                <LazyLoadImage alt={img} effect="blur" src={img} className="card-img" />
            </div>
        </>
    );
}
