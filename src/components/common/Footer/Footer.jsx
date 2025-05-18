import './Footer.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    const handleGitHubClick = () => {
        window.location.href = "https://github.com/Aasiacoder";
    }

    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/in/aasia-frontenddeveloper/";
    }

    return (
        <section id="footer">
            <footer className="footer-container">
                <div className="footer-content">
                    <ul className="social-links">
                        <li>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="fa-icon size-8"
                                id="linkedin"
                                onClick={handleLinkedInClick}
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="fa-icon size-8"
                                id="github"
                                onClick={handleGitHubClick}
                            />
                        </li>
                    </ul>
                    <ul className="footer-links">
                        <li><a href="#home" className="footer-items">Home</a></li>
                        <li><a href="#about" className="footer-items">About</a></li>
                        <li><a href="#project" className="footer-items">Project</a></li>
                        <li><a href="#contact" className="footer-items">Contact</a></li>
                    </ul>
                    <p>&copy; 2025 Aasia | All Rights Reserved</p>
                </div>
            </footer>
        </section>
    )
}

export default Footer
