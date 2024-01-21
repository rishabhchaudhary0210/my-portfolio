import './Project.css';
import ProjectCard from './Project-card';
import projectData from './Project-data';
import Projectdisp from './Project-disp';
import {useRef, useEffect, useState} from 'react';
import {dailyJournal, marvelPedia, adminDash, groco, laptopFrame} from './../../Assets/Project-photos/Photo';

export default function Project() {
    const [projectVisible, setProjectVisible] = useState();
    const [index, setIndex] = useState(0);
    const [boundingWidth, setBoundingWidth] = useState(0);

    const photoArray = [dailyJournal,marvelPedia,adminDash,groco];
    
    const projectRef = useRef();
    const slideRef = useRef();

    const nextIndex = ()=>{
        slideRef.current.scroll(index*boundingWidth,0);
        
        console.log("next index =  "+index);
        // var trans = `transformX(${index*(100)}%)`;
        // console.log(trans);
        // slideRef.current.style.transform = trans;
        setIndex(index+1 === photoArray.length ? 0 : index+1);
    }
    const prevIndex = ()=>{
        console.log("prev index =  "+index);
        setIndex(index-1 < 0 ? photoArray.length-1 : index-1);
    }
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            if(entry.isIntersecting === true){
                setProjectVisible(true);
            }
        })
        observer.observe(projectRef.current);
        
        // console.log("width = " + slideRef.current.style.width);
        // console.log("width = " + slideRef.current.width);
        // console.log(slideRef.current.offsetHeight + "  == " + slideRef.current.offsetWidth);
        if(slideRef.current){
            setBoundingWidth(slideRef.current.offsetWidth);
        }
        document.addEventListener('wheel', (e)=>{
            console.log("wheel moveed",e)
        })
        const interval = setInterval(()=>nextIndex(),3000);
        return ()=>clearInterval(interval); 
    })
    return (
        <div ref={projectRef} className='project' id='projects'>
            <div className={`heading reveal-left ${projectVisible ? "animate" : ""}`}>
               Each <span>project</span> is a unique piece of developement.
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
            {/* <div>
                <Projectdisp />
            </div> */}
            <div className='frame-wrapper'>
                <img src={laptopFrame} alt="frame" id="laptop-frame" />
                <div  className="project-img-cont">
                    <button onClick={nextIndex}>Next</button>
                    <button onClick={prevIndex}>Prev</button>
                    <div ref={slideRef}>
                        {/* <img src={photoArray[index]} alt="img" /> */}
                        {
                            photoArray?.map((ele,index)=>
                                <img src={ele} key={index} alt="img" />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}