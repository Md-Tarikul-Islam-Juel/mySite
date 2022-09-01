import React from 'react';
import Cards from '../../Components/Cards/Cards';
import gallaryImages from '../../gallaryImages';
import './Gallary.css';

export default function Gallary() {
    return (
        <>
            <section className="main-body ">
                <div>
                    <h1 className="gallery-text">Gallery</h1>
                </div>
                <Cards Images={gallaryImages} />
            </section>
        </>
    );
}
