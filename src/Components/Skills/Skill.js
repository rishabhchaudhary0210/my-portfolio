import './Skill.css';
import { useRef, useEffect, useState } from 'react';
import softProg from "./../../Assets/soft-programmer.png";
import frontDev from "./../../Assets/frontend-dev.png";
import backDev from "./../../Assets/backend-dev.png";

export default function Skill() {
    const skillRef = useRef();
    const [skillVisible, setSkillVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // console.log(skillVisible);
            if (entry.isIntersecting === true) {
                setSkillVisible(true);
            }
        })
        observer.observe(skillRef.current);
    }, []);

    return (
        <div ref={skillRef} id="about" className="skill" >
            <h1 className={`heading reveal-bottom ${skillVisible ? "animate" : ""}`}>
                Explore my <span>technological toolbox</span> below.
            </h1>
            <div className="head-cont">
                <div className="sub-cont">
                    <img src={softProg} alt="Software Programmer" />
                    <h2>Software Programmer</h2>
                    <p>Contributing to help develop softwares and build logic using data structures and algorithms.</p>
                </div>
                <div className="sub-cont">
                    <img src={frontDev} alt="Frontend Developer" />
                    <h2>Frontend Developer</h2>
                    <p>Enhancing User Experience by making engaging and interactive designs and user interfaces.</p>
                </div>
                <div className="sub-cont">
                    <img src={backDev} alt="Backend Developer" />
                    <h2>Backend Developer</h2>
                    <p>Constructing robust and secure backend services to safeguard critical information.</p>
                </div>
            </div>
            <div className={`skill-cont-box reveal-left ${skillVisible ? "animate" : ""}`}>
                <div className="skill-head">
                    <h1 className={` reveal-bottom ${skillVisible ? "animate" : ""}`}>
                        Here's a comprehensive list of the <span>technology stack</span> in which I have gained valuable experience.
                    </h1>


                    {/* <div className="sub-box c-1">
                        <h1><span>Software</span> Programmer</h1>
                        <div className="skill-info">
                            Contributing to help develop softwares and build logic using data structures and algorithms.
                        </div>
                    </div>
                    <div className="sub-box c-2">
                        <h1><span>Frontend</span> Developer</h1>
                        <div className='skill-info'>Enhancing User Experience by making engaging and interactive designs and user interfaces.</div>
                    </div>
                    <div className="sub-box c-3">
                        <h1><span>Backend</span> Developer</h1>
                        <div className="skill-info">
                            Constructing robust and secure backend services to safeguard critical information.
                        </div>
                    </div> */}
                </div>
                <div className="skill-cont">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt='C' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt='C++' />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='python' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='HTML' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JS' />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react' />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='nextjs' />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='bootstrap' />



                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="nodejs" />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express' style={{ filter: 'invert(100%)' }} />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='sql' />



                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongodb" />



                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git' />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' style={{ filter: 'invert(100%)' }} />


                </div>
            </div>
        </div>
    );
}


// <div ref={skillRef} id="about" className="skill" >
//     <h1 className={`heading reveal-bottom ${skillVisible ? "animate" : ""}`}>
//         Explore my <span>technological toolbox</span> below.
//     </h1>
//     {/* <p>
//     As a passionate developer, I bring a diverse set of skills. With a keen eye for both design and functionality, I am committed to creating seamless and innovative digital experiences. Explore my technology toolbox below.
//     </p> */}
//     <div className={`skill-cont-box reveal-left ${skillVisible ? "animate" : ""}`}>
//         <div className="skill-head">
//             <h1><span>FRONTEND</span> DEVELOPER</h1>
//             <div className='skill-info'>Enhancing User Experience by making engaging and interactive designs and user interfaces.</div>
//         </div>
//         <div className="skill-cont">

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='HTML' />

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS' />

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JS' />

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='react' />


//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='nextjs' />


//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='bootstrap' />



//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind" />


//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma' />


//             {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt='flutter' /> */}

//         </div>
//     </div>

//     <div className={`skill-cont-box reveal-right ${skillVisible ? "animate" : ""}`}>
//         <div className="skill-cont">


//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="nodejs" />


//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express' style={{ filter: 'invert(100%)' }} />


//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='sql' />



//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongodb" />



//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git' />

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' style={{ filter: 'invert(100%)' }} />

//         </div>
//         <div className="skill-head"
//             style={{ 'text-align': "right", }}
//         >
//             <h1><span>BACKEND</span> DEVELOPER</h1>
//             <div className="skill-info">
//                 Constructing robust and secure backend services to safeguard critical information.
//             </div>
//         </div>
//     </div>

//     <div className={`skill-cont-box reveal-left ${skillVisible ? "animate" : ""}`}>
//         <div className="skill-head"
//             style={{ 'text-align': "left", }}>
//             <h1><span>MORE</span> LANGUAGES</h1>
//             <div className="skill-info">
//                 Multipurpose Languages to help develop softwares and build logic using data structures and algorithms.
//             </div>
//         </div>
//         <div className="skill-cont">

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt='C' />

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt='C++' />


//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='python' />

//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" />


//         </div>
//     </div>
// </div>