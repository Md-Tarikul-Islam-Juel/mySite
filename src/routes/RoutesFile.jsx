import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from '../Components/SideBar/SideBar';
import AboutMe from '../Page/AboutMe/AboutMe';
import Contact from '../Page/Contact/Contact';
import Error from '../Page/Error/Error';
import Gallary from '../Page/Gallary/Gallary';
import Home from '../Page/Home/Home';
import Projects from '../Page/Projects/Projects';
import Publications from '../Page/Publications/Publications';

function RoutesFile() {
    return (
        <>
            <BrowserRouter>
                <SideBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallary />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/aboutMe" element={<AboutMe />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default RoutesFile;
