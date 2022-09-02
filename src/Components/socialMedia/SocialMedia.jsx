import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

import './SocialMedia.css';

export default function SocialMedia() {
    return (
        <>
            <ul className="UL">
                <li className="LI ">
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        className="red-tooltip"
                        overlay={<Tooltip id="tooltip-top">+8801985894285</Tooltip>}
                    >
                        <a href="tel:+8801985894285">
                            <ImPhone />
                        </a>
                    </OverlayTrigger>
                </li>
                <li className="LI">
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={<Tooltip id="tooltip-top">md.tarikulislamjuel@gmail.com</Tooltip>}
                    >
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=md.tarikulislamjuel@gmail.com">
                            <MdEmail />
                        </a>
                    </OverlayTrigger>
                </li>
                <li className="LI">
                    <a href="https://www.linkedin.com/in/tarikulislamjuel/">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className="LI">
                    <a href="https://github.com/Md-Tarikul-Islam-Juel">
                        <FaGithub />
                    </a>
                </li>
                <li className="LI">
                    <a href="https://www.facebook.com/juel.khan.735">
                        <FaFacebookF />
                    </a>
                </li>
            </ul>
        </>
    );
}
