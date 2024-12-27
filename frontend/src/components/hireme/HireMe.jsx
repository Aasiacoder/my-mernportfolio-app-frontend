import React from 'react';
import './HireMe.css';
import { useLocation } from 'react-router-dom';
import AasiaCV from '../../assets/AasiaMernStackDev.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

const HireMe = () => {

    const location = useLocation();

    const { email } = location.state || {};
    console.log(email)

    return (
        <section id="hireme">
            <div className="hireme-container">
                <h2 className='hireme-header'>Hire Me</h2>
                <p className='hireme-para'>If you're interested in hiring me, feel free to check out my CV and contact me!</p>

                <div className="hireme-cv-container">
                    {/* View CV Button */}
                    <a href={AasiaCV} target="_blank" rel="noopener noreferrer" className="view-cv-button">
                        View CV
                    </a>

                    {/* Download CV Button */}
                    <a href={AasiaCV} download className="download-cv-button">
                        Download CV
                    </a>
                </div>

                <div className="hireme-mail-container">
                    {/* Mail ID */}
                    <FontAwesomeIcon icon={faMailBulk} className='text-[#AA376B] size-8' />
                    <p className='email-para text-[#AA376B]'>
                        Email me at:
                        <a href={`mailto:${email}`} className="email-link">
                            {email}
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
}

export default HireMe;
