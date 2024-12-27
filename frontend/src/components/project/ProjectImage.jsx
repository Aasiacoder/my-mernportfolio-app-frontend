import React from 'react';
import './Project.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWebAwesome } from "@fortawesome/free-brands-svg-icons";
import ActodoApp from '../../assets/ActodoApp.png';
import WeatherApp from '../../assets/WeatherApp.png';
import UdemyApp from '../../assets/UdemyApp.png';
import NostraApp from '../../assets/NostraApp.png';



const ProjectImage = () => {
    //Nostra Clone
    const handleNostraGitHub = () => {
        window.location.href = "https://github.com/Aasiacoder/Nostra-Website-clone";
    }

    const handleNostraClick = () => {
        window.location.href = "https://aasiacoder.github.io/Nostra-Website-clone/";
    }

    //Udemy Replica
    const handleUdemyGitHub = () => {
        window.location.href = "https://github.com/Aasiacoder/UdemyClone-react";
    }

    const handleUdemyClick = () => {
        window.location.href = "https://udemy-clone-react-omega.vercel.app/";
    }

    //AcTodo App
    const handleActodoGitHub = () => {
        window.location.href = "https://github.com/Aasiacoder/Actodo-List-react";
    }

    const handleActodoClick = () => {
        window.location.href = "https://actodo-list-react-black.vercel.app/";
    }

    //Weather App
    const handleWeatherGitHub = () => {
        window.location.href = "https://github.com/Aasiacoder/Weather-App-react";
    }

    const handleWeatherClick = () => {
        window.location.href = "https://weather-app-react-puce-rho.vercel.app/";
    }

    return (
        <section id='projectimg'>

            {/*AcTo-do List */}
            <div className="project-box">
                <h3>To-Do List App</h3>
                <div className="project-image">
                    <img src={ActodoApp} id="clickableImage1" alt="" />
                    <div className="project-content">
                        <p>Html | Tailwind CSS | React</p>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="project-icon size-8"
                            id="github"
                            onClick={handleActodoGitHub}
                        />
                        <FontAwesomeIcon
                            icon={faWebAwesome}
                            className="project-icon size-8"
                            id="laptop"
                            onClick={handleActodoClick}
                        />
                    </div>
                </div>
                <p>Simple and Secure Task Manager</p>
            </div>

            {/*Weather App */}
            <div className="project-box">
                <h3>Weather App</h3>
                <div className="project-image">
                    <img src={WeatherApp} id="clickableImage1" alt="" />
                    <div className="project-content">
                        <p>Html | Tailwind CSS | React(Axios)</p>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="project-icon size-8"
                            id="github"
                            onClick={handleWeatherGitHub}
                        />
                        <FontAwesomeIcon
                            icon={faWebAwesome}
                            className="project-icon size-8"
                            id="laptop"
                            onClick={handleWeatherClick}
                        />
                    </div>
                </div>
                <p>Interactive weather app with real-time data</p>
            </div>

            {/*Udemy Replica*/}
            <div className="project-box">
                <h3>Udemy Replica</h3>
                <div className="project-image">
                    <img src={UdemyApp} id="clickableImage1" alt="" />
                    <div className="project-content">
                        <p>Html | CSS | Tailwind CSS | React</p>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="project-icon size-8"
                            id="github"
                            onClick={handleUdemyGitHub}
                        />
                        <FontAwesomeIcon
                            icon={faWebAwesome}
                            className="project-icon size-8"
                            id="laptop"
                            onClick={handleUdemyClick}
                        />
                    </div>
                </div>
                <p>Interactive online learning platform clone</p>
            </div>

            {/*Nostra clone*/}
            <div className="project-box">
                <h3>Nostra Clone</h3>
                <div className="project-image">
                    <img src={NostraApp} id="clickableImage1" alt="" />
                    <div className="project-content">
                        <p>Html | CSS | JavaScript</p>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="project-icon size-8"
                            id="github"
                            onClick={handleNostraGitHub}
                        />
                        <FontAwesomeIcon
                            icon={faWebAwesome}
                            className="project-icon size-8"
                            id="laptop"
                            onClick={handleNostraClick}
                        />
                    </div>
                </div>
                <p>Feature-Rich Product Filtering System</p>
            </div>

        </section>

    )
}

export default ProjectImage