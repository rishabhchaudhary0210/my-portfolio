import './Project.css';
import projectData from './Project-data';
import Projectdisp from './Project-disp';
import Navbar from '../NavBar/Navbar';
import { useRef, useEffect, useState } from 'react';

const ProjectAll = () => {
    const [projectVisible, setProjectVisible] = useState();
    const projectRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting === true) {
                setProjectVisible(true);
            }
        })
        observer.observe(projectRef.current);
    })

  return (
    <div ref={projectRef} className='project' id='projects'>
        <Navbar />
        <div className={`heading reveal-left ${projectVisible ? "animate" : ""}`}>
               <span>PRO</span>JECTS
            </div>
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
  )
}

export default ProjectAll