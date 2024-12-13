import React from 'react';
import './Project.css';
import ProjectImage from '../project/ProjectImage';
// import Img2 from '../../assets/img2.jpg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";

function Project() {

    return (
        <section id="project">
            <h2 className="project-head">My <span>Projects</span></h2>
            <div className="project-container"> {/*wrapper */}

                {/*ProjectImage page*/}
                <ProjectImage />

            </div>
        </section>
    )
}

export default Project