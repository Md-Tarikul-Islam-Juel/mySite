import React from 'react';
import X from '../../img/1.jpeg';
import Card from '../Card/Card';
import './Cards.css';

export default function Cards() {
    return (
        <>
            <div className="container">
                <div className="row cards-row-1">
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                    <div className="CARD">
                        <Card img={X} />
                    </div>
                </div>
            </div>
        </>
    );
}
