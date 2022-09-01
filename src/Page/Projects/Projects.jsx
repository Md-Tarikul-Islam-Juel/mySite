import React from 'react';
import Cards from '../../Components/Cards/Cards';
import projectImages from '../../projectImages';

import './Projects.css';

export default function Projects() {
    return (
        <>
            <section className="main-body ">
                <Cards Images={projectImages} />
            </section>
        </>
    );
}
