import './About.css';
import { useState, useRef } from 'react';

const About = () => {
    const [aboutVisible, setAboutVisible] = useState(true);
    const aboutRef = useRef();

    return (
        <div className="about" id="">
            <h1 className={`heading reveal-bottom ${aboutVisible ? "animate" : ""}`}>
                ABOUT <span>ME</span>
            </h1>

            <div>
                <div>
                    <p>
                        I am a passionate and detail-oriented web developer on a journey to transform ideas into interactive and visually appealing digital experiences. Currently studying Computer Science Engineering, my skills span HTML, CSS, JavaScript, ReactJS, NodeJS, and Flutter.

                        As a dedicated team player, I thrive in collaborative environments, contributing effectively to projects with a keen eye for both design and functionality. Continuous learning fuels my enthusiasm, driving me to stay abreast of the latest technologies in the ever-evolving world of web development.

                        What sets me apart is not just my technical proficiency but also my commitment to creating user-centric solutions. I believe in the power of technology to enhance lives and am excited to be part of the innovation that shapes the digital landscape.

                        Outside of coding, I find joy in exploring new technologies, tackling coding challenges, and staying curious about the possibilities that lie ahead. Let's embark on a journey of creativity and innovation together!

                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default About