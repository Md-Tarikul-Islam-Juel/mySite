import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

import './SocialMedia.css';

export default function SocialMedia() {
    return (
        <>
            <ul className="UL">
                <li className="LI">
                    <ImPhone />
                </li>
                <li className="LI">
                    <MdEmail />
                </li>
                <li className="LI">
                    <FaLinkedinIn />
                </li>
                <li className="LI">
                    <FaGithub />
                </li>
                <li className="LI">
                    <FaFacebookF />
                </li>
            </ul>
        </>
    );
}
