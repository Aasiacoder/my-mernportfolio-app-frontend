import React, { useState } from "react";
import './Home.css';

function Home() {
    const [hireMe, setHireMe] = useState(false);

    function handleHireMe() {
        setHireMe(!hireMe)
    }

    return(
        <section id="home">
            <div className="home-container">
                <h2 className="home-myname">Hi, I'm Aasia</h2>
                <h3 className="home-profile">MERN Stack Developer | Web Developer | Passionate Coder</h3>
                <button onClick={handleHireMe} className="hire-me-button">Hire Me</button>
            </div>
        </section>
    )
}

export default Home