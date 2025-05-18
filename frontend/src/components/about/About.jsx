import MongoDB from '../../assets/mongodb.png';
import ExpressJS from '../../assets/expressjs.png';
import ReactJS from '../../assets/reactjs.png';
import NodeJS from '../../assets/nodejs.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import JS from '../../assets/js.png';
import TailwindCss from '../../assets/tailwind.png';
import Firebase from '../../assets/firebase.png';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <h2 className="about-head">About</h2>
                <p className="about-para">
                    Hi, I'm Aasia, a recent graduate of computer science. 
                    I'm skilled in developing MERN stack applications and have a solid background in front-end and back-end technologies. 
                    I am able to create cutting-edge, scalable online applications because to my proficiency with MongoDB, Express, React, and Node.js. 
                    Additionally, I have database management skills, which guarantee effective data storage and retrieval. 
                    I also have practical expertise using Firebase to handle data in real-time and authenticate users, creating responsive and smooth user experiences.
                </p>
            </div>
            <div className='about-images'>
                <img className='image' src={Html} alt="htmlLogo" />
                <img className='image' src={Css} alt="cssLogo" />
                <img className='image' src={JS} alt="jsLogo" />
                <img className='image' src={TailwindCss} alt="tailwindcssLogo" />
                <img className='image' src={MongoDB} alt="mongodbLogo" />
                <img className='image' src={ExpressJS} alt="expressLogo" />
                <img className='image' src={ReactJS} alt="reactLogo" />
                <img className='image' src={NodeJS} alt="nodejsLogo" />
                <img className='image' src={Firebase} alt="firebaseLogo" />
            </div>
        </section>
    )
}

export default About