/* eslint array-callback-return: "error" */
import React from 'react';
// import Card from '../Card/Card';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import './Cards.css';

function Cards({ Images, scrollPosition }) {
    return (
        <>
            <div className="container">
                <div className="row cards-row-1">
                    {Images.map((item) => (
                        <div className="CARD card-box">
                            {/* <Card img={item.image} /> */}
                            <LazyLoadImage
                                key={item.image.key}
                                alt={item.image.alt}
                                height={item.image.height}
                                // Make sure to pass down the scrollPosition,
                                // this will be used by the component to know
                                // whether it must track the scroll position or not
                                scrollPosition={scrollPosition}
                                src={item.image}
                                width={item.image.width}
                                className="card-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default trackWindowScroll(Cards);
