import './Project.css';
import ProjectCard from './Project-card';
import projectData from './Project-data';
import {useRef, useEffect, useState} from 'react';

export default function Project() {
    const [projectVisible, setProjectVisible] = useState();
    const projectRef = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            if(entry.isIntersecting === true){
                setProjectVisible(true);
            }
        })
        observer.observe(projectRef.current);
    })
    return (
        <div ref={projectRef} className='project' id='projects'>
            <div className={`heading reveal-left ${projectVisible ? "animate" : ""}`}>
                <span>P</span>ROJECTS
            </div>
            <div className={`project-cont reveal-bottom ${projectVisible ? "animate" : ""}`}>
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
                )
               }
            </div>
        </div>
    );
}