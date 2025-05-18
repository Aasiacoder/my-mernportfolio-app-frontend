import React from 'react';
import './Project.css';
import ProjectImage from '../project/ProjectImage';

const Project = () => {

    return (
        <section id="project">
            <h2 className="project-head">Projects</h2>
            <div className="project-container"> {/*wrapper */}

                {/*ProjectImage page*/}
                <ProjectImage />

            </div>
        </section>
    )
}

export default Project