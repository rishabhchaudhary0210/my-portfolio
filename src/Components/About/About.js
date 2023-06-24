import './About.css';

export default function About() {
    return (
        <div className="about" id="about">
            <h1 className="heading">
                ABOUT <span>ME</span>
            </h1>
            <div className="about-cont reveal-left animate">
                <div className="skill-head">
                    <h1><span>FRONTEND</span> DEVELOPER</h1>
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

            <div className="about-cont reveal-right animate">
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
                </div>
            </div>

            <div className="about-cont reveal-left animate">
                <div className="skill-head">
                    <h1><span>MORE</span> TECH</h1>
                </div>
                <div className="skill-cont">

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt='C' />


                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt='C++' />


                </div>
            </div>
        </div>
    );
}