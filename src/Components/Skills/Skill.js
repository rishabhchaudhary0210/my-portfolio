import './Skill.css';
import {useRef, useEffect, useState} from 'react';

export default function Skill() {
    const skillRef = useRef();
    const [skillVisible, setSkillVisible] = useState();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            console.log(skillVisible);
            if(entry.isIntersecting === true){
                setSkillVisible(true);
            }
        })
        observer.observe(skillRef.current);
    },[]);

    return (
        <div ref={skillRef} id="about" className="skill" >
            <h1 className={`heading reveal-bottom ${skillVisible ? "animate" : ""}`}>
            Explore my <span>technological toolbox</span> below.
            </h1>
            {/* <p>
            As a passionate developer, I bring a diverse set of skills. With a keen eye for both design and functionality, I am committed to creating seamless and innovative digital experiences. Explore my technology toolbox below.
            </p> */}
            <div className={`skill-cont-box reveal-left ${skillVisible ? "animate" : ""}`}>
                <div className="skill-head">
                    <h1><span>FRONTEND</span> DEVELOPER</h1>
                    <div className='skill-info'>Enhancing User Experience by making engaging and interactive designs and user interfaces.</div>
                </div>
                <div className="skill-cont">

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='HTML' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JS' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react' />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='bootstrap' />



                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind"/>


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma' />


                    {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt='flutter' /> */}

                </div>
            </div>

            <div className={`skill-cont-box reveal-right ${skillVisible ? "animate" : ""}`}>
                <div className="skill-cont">


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="nodejs" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express' style={{ filter: 'invert(100%)' }} />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='sql' />



                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongodb" />



                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' style={{ filter: 'invert(100%)' }} />

                </div>
                <div className="skill-head"
                    style={{ 'text-align': "right", }}
                >
                    <h1><span>BACKEND</span> DEVELOPER</h1>
                    <div className="skill-info">
                        Constructing robust and secure backend services to safeguard critical information.
                    </div>
                </div>
            </div>

            <div className={`skill-cont-box reveal-left ${skillVisible ? "animate" : ""}`}>
                <div className="skill-head"
                    style={{ 'text-align': "left", }}>
                    <h1><span>MORE</span> LANGUAGES</h1>
                    <div className="skill-info">
                        Multipurpose Languages to help develop softwares and build logic using data structures and algorithms.
                    </div>
                </div>
                <div className="skill-cont">

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt='C' />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt='C++' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java"/>
          

                </div>
            </div>
        </div>
    );
}