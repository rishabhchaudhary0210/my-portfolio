import './Project.css';
import ProjectCard from './Project-card';
import projectData from './Project-data';
import Projectdisp from './Project-disp';
import { useRef, useEffect, useState } from 'react';
import { dailyJournal, marvelPedia, adminDash, groco, laptopFrame, travelPartner } from './../../Assets/Project-photos/Photo';

export default function Project() {
    const [projectVisible, setProjectVisible] = useState();
    const [index, setIndex] = useState(0);
    const [boundingWidth, setBoundingWidth] = useState(0);

    const photoArray = [dailyJournal, travelPartner, marvelPedia, adminDash, groco];

    const projectRef = useRef();
    const slideRef = useRef();

    const nextIndex = () => {
        slideRef.current.scroll(index * boundingWidth, 0);

        console.log("next index =  " + index);
        // var trans = `transformX(${index*(100)}%)`;
        // console.log(trans);
        // slideRef.current.style.transform = trans;
        setIndex(index + 1 === photoArray.length ? 0 : index + 1);
    }
    const prevIndex = () => {
        slideRef.current.scroll(-1 * index * boundingWidth, 0);
        console.log("prev index =  " + index);
        setIndex(index - 1 < 0 ? photoArray.length - 1 : index - 1);
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting === true) {
                setProjectVisible(true);
            }
        })
        observer.observe(projectRef.current);

        // console.log("width = " + slideRef.current.style.width);
        // console.log("width = " + slideRef.current.width);
        // console.log(slideRef.current.offsetHeight + "  == " + slideRef.current.offsetWidth);
        if (slideRef.current) {
            setBoundingWidth(slideRef.current.offsetWidth);
        }
        document.addEventListener('wheel', (e) => {
            console.log("wheel moveed", e)
        })
        const interval = setInterval(() => nextIndex(), 3000);
        return () => clearInterval(interval);
    })
    return (
        <div ref={projectRef} className='project' id='projects'>
            <div className={`heading reveal-left ${projectVisible ? "animate" : ""}`}>
                Each <span>project</span> is a unique piece of developement.
            </div>
            <div className={`frame-wrapper reveal-bottom ${projectVisible ? "animate" : ""}`}>
                <img src={laptopFrame} alt="frame" id="laptop-frame" />
                <div className="project-img-cont">
                    <IconLeftArrow onClick={prevIndex} className="arrow left" />
                    <IconRightArrow onClick={nextIndex} className="arrow right" />
                    <div ref={slideRef}>
                        <img src={photoArray[index]} alt="img" />
                        {/* {
                            photoArray?.map((ele, index) =>
                                <img src={ele} key={index} alt="img" />
                            )
                        } */}
                    </div>
                </div>
            </div>
            {/* <div className={`project-cont reveal-bottom ${projectVisible ? "animate" : ""}`}>
                {
                    projectData.map(element =>
                        <ProjectCard
                            image={element.image}
                            viewLink={element.viewLink}
                            codeLink={element.codeLink}
                            head={element.head}
                            text={element.text}
                            skills={element.skills}
                        />
                        // <ProjectCard
                        //     image={element.image}
                        //     viewLink={element.viewLink}
                        //     codeLink={element.codeLink}
                        //     head={element.head}
                        //     text={element.text}
                        //     skills={element.skills}
                        // />
                    )
                }
            </div> */}
            <div className={`reveal-bottom ${projectVisible ? "animate" : ""}`}>
                {projectData.map(element =>
                    <Projectdisp
                        image={element.image}
                        viewLink={element.viewLink}
                        codeLink={element.codeLink}
                        head={element.head}
                        text={element.text}
                        skills={element.skills}
                    />)}
            </div>
            
        </div>
    );
}

function IconRightArrow(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
        </svg>
    );
}
function IconLeftArrow(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M4.431 12.822l13 9A1 1 0 0019 21V3a1 1 0 00-1.569-.823l-13 9a1.003 1.003 0 000 1.645z" />
        </svg>
    );
}