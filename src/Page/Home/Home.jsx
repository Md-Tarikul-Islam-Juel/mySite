import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../../Components/SideBar/SideBar';
import SocialMedia from '../../Components/socialMedia/SocialMedia';
import JUEL from '../../img/juel.png';
import './Home.css';

export default function Home() {
    return (
        <>
            <BrowserRouter>
                <SideBar />
            </BrowserRouter>
            <section className="home">
                <div className="container">
                    <div className="row row-1">
                        <div className="col-md-6 description">
                            <div className="border-left">
                                <h1 className="name">
                                    MD.TARIKUL ISLAM <span className="name-span">JUEL</span>
                                </h1>
                                <h2 className="title">Embedded System & IoT R&D Engineer</h2>
                                <h2 className="title">React developer</h2>
                            </div>
                            <div className="social-media">
                                <SocialMedia />
                            </div>
                            <Button variant="primary" className="about-me">
                                About me
                            </Button>
                        </div>
                        <div className="col-md-6">
                            <img src={JUEL} alt="juel cover" className="juel-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
