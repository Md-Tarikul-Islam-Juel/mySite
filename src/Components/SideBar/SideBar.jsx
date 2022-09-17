import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';

import { Link } from 'react-router-dom';

import './SideBar.css';

export default function SideBar() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <nav className={toggle ? 'close sidebar' : 'sidebar'}>
                <header className="header">
                    <div className="image-text">
                        <Link to="/" className="logo">
                            <span className="image">TIJ</span>
                        </Link>

                        <div className="text logo-text">
                            <span className="name">Tarikul Islam Juel</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>

                    <AiOutlineRight
                        className="toggle"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    />
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <Link to="/" className="a">
                                    <AiOutlineHome className="icon" />
                                    <span className="text nav-text">Home</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/gallery" className="a">
                                    <BsFillImageFill className="icon" />
                                    <span className="text nav-text">Gallary</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/projects" className="a">
                                    <FaRobot className="icon" />
                                    <span className="text nav-text">Project</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/publications" className="a">
                                    <ImBook className="icon" />
                                    <span className="text nav-text">Publications</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
