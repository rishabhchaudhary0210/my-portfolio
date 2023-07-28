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
            setProjectVisible(entry.isIntersecting);
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
                // eslint-disable-next-line no-lone-blocks
                {/* <ProjectCard 
                    image="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1687537556~exp=1687538156~hmac=53ab2f572a80f79677c178dfe4b105a497364ff4350569ce0042d0c83d426ea2"
                    viewLink="https://the-daily-journal-blogs.vercel.app/"
                    codeLink="https://github.com/rishabhchaudhary0210/The-Daily-Journal"
                    head="The Daily Journal"
                    text="A fullstack blogging App to journal your experiences and life stories and help you share your ideas."
                    skills={["HTML", "CSS", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"]}
                />

                <ProjectCard 
                    image="https://img.freepik.com/free-vector/supermarket-food-shelves-eggplant-cabbage-carrot-peppers-onions-corn-bread-potatoes-shopping-fresh-vector-illustration_1284-46271.jpg?w=740&t=st=1687610989~exp=1687611589~hmac=04fc53c8e57b3eaf22ac68bf2f93c622bc257c2ec3c549c95faa63520dfa755c"
                    viewLink="https://rishabhchaudhary0210.github.io/Grocery-Website/"
                    codeLink="https://github.com/rishabhchaudhary0210/Grocery-Website"
                    head="GROCO-Grocery Store"
                    text="A website to fulfill your daily grocery needs. "
                    skills={["HTML", "CSS", "JavaScript", "SwiperJs"]}
                />
                <ProjectCard 
                    image="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740&t=st=1687604447~exp=1687605047~hmac=5024c2419663ca5df620320ffaa2c732fa678a4c3d78dda0f4bf11074860555d"
                    viewLink="https://rishabhchaudhary0210.github.io/Admin-Dashboard/"
                    codeLink="https://github.com/rishabhchaudhary0210/Admin-Dashboard"
                    head="Admin DashBoard"
                    text="A fully responsive and modern dashboard design to help you keep full track of your business analytics."
                    skills={["HTML", "CSS", "JavaScript"]}
                />
                <ProjectCard 
                    image="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=740&t=st=1687606077~exp=1687606677~hmac=f5a51e52bf6d13c57420ab49775b4d8d89c6f6b38d682c6f8c6f5b90405c1b54"
                    viewLink="https://github.com/rishabhchaudhary0210/to-do-list"
                    codeLink="https://github.com/rishabhchaudhary0210/to-do-list"
                    head="To-Do-List"
                    text="A basic to-do-list webApp with database connectivity to help you track your daily tasks."
                    skills={["HTML", "CSS", "JavaScript", "NodeJs", "ExpressJs", "MongoDB"]}
                />
                <ProjectCard 
                    image="https://img.freepik.com/free-vector/yellow-lined-notepaper-journal-sticker-vector_53876-168271.jpg?w=740&t=st=1687606313~exp=1687606913~hmac=e4b12528dcf51c91f11d49a410919b2729786af31c669d20d075aed1323ea91e"
                    viewLink="https://note-keeper-mu.vercel.app/"
                    codeLink="https://github.com/rishabhchaudhary0210https://github.com/rishabhchaudhary0210/NoteKeeper"
                    head="NoteKeeper"
                    text="A react based note making app so that you don't have to be scared of forgetting your imprompt ideas."
                    skills={["ReactJS","HTML","CSS","JavaScript"]}
                /> */}