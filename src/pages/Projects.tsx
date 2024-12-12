import React from 'react';

const Projects: React.FC = () => (
    <section id="projects">
        <h1>My Projects</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <div>
                <h3 id="projects_1"> Project One </h3>
                <p>A brief description of project one.</p>
            </div>
            <div>
                <h3 id="projects_2" >Project Two</h3>
                <p>A brief description of project two.</p>
            </div>
        </div>
    </section>
);

export default Projects;
