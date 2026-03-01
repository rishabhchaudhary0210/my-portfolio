import './Home.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const [homeVisible, setHomeVisible] = useState();
    const homeRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting === true) {
                setHomeVisible(true);
            }
        })
        observer.observe(homeRef.current);
    }, []);

    return (
        <div ref={homeRef} className="home" id='home'>
            <div className="bg-cont">
                <div className="blob-wrapper">
                    <div className="blob-1"></div>
                    <div className="blob-2"></div>
                    <div className="bg-overlap"></div>
                </div>
            </div>
            <div className="sub-home">
                <div className={`name-box box reveal-left ${homeVisible ? "animate" : ""}`}>
                    <span className='hello'>👋</span>
                    <div>
                        <span className="name">
                            Hi, I'm
                        </span>
                        <h1>
                            Rishabh Chaudhary
                        </h1>
                    </div>
                </div>
                <div className={`title-box box reveal-right ${homeVisible ? "animate" : ""}`}>
                    <h3>
                        Software Developer
                    </h3>
                    <h3>
                        Cloud & DevOps
                    </h3>
                    <h3>
                        Full Stack Engineer
                    </h3>
                </div>
                <div className={`info-box box reveal-bottom ${homeVisible ? "animate" : ""}`}>
                    Software Development Engineer with strong experience in full-stack development and cloud computing, having worked on production-grade public cloud platforms. Proven ability to own features end-to-end, modernize legacy systems, and contribute to scalable, user-focused software.
                </div>
                <a href="https://drive.google.com/file/d/16TO8NOgS9KT4Js9OhhIf0ugD9KZ2tUZy/view?usp=sharing" target='_blank' rel="noreferrer" download className={`download reveal-bottom ${homeVisible ? "animate" : ""}`}>
                    <span className="material-symbols-outlined">download</span>
                    Download Resume
                </a>
            </div>
        </div>
    );
}