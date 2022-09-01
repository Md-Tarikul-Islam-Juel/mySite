import React from 'react';
import Cards from '../../Components/Cards/Cards';
import projectImages from '../../projectImages';
import './Projects.css';

export default function Projects() {
    return (
        <>
            <section className="main-body ">
                <div>
                    <h1 className="project-text">Projects</h1>
                </div>
                <Cards Images={projectImages} />
            </section>
        </>
    );
}
