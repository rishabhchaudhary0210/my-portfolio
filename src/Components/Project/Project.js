import './Project.css';
import ProjectCard from './Project-card';

export default function Project() {
    // let projectcont = document.querySelector('.project-cont');

    // const handlePrevBtn = () => {
    //     let width = projectcont.clientWidth;
    //     projectcont.scrollLeft = projectcont.scrollLeft - "250px";
    // }
    // const handleNextBtn = () => {
    //     let width = projectcont.clientWidth;
    //     projectcont.scrollLeft = projectcont.scrollLeft + width;
    // }

    return (
        <div className='project' id='projects'>
            <div className="heading">
                <span>P</span>ROJECTS
            </div>
            <div className="project-cont">
                {/* <button className="prevbtn" onClick={handlePrevBtn}>&lt;</button>
                <button className="nextbtn" onClick={handleNextBtn}>&gt;</button> */}
                <ProjectCard 
                    image="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1687537556~exp=1687538156~hmac=53ab2f572a80f79677c178dfe4b105a497364ff4350569ce0042d0c83d426ea2"
                    viewLink="https://the-daily-journal-blogs.vercel.app/"
                    codeLink="https://github.com/rishabhchaudhary0210/The-Daily-Journal"
                    head="The Daily Journal"
                    text="A Blogging App to journal your experiences and life stories. Frontend made using HTML, CSS, JS connecting to a Node and Express Backend and MongoDB as Database to store the Blogs."
                />

                <ProjectCard 
                    image="https://img.freepik.com/premium-vector/red-shopping-basket-with-groceries_24908-68369.jpg?w=740"
                    viewLink="https://github.com/rishabhchaudhary0210"
                    codeLink="https://github.com/rishabhchaudhary0210"
                    head="GROCO-Grocery Store"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, adipisci quae error hic ab quos vero atque eveniet earum esse?"
                />
                <ProjectCard 
                    image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg"
                    viewLink="https://github.com/rishabhchaudhary0210"
                    codeLink="https://github.com/rishabhchaudhary0210"
                    head="head-1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, adipisci quae error hic ab quos vero atque eveniet earum esse?"
                />
                <ProjectCard 
                    image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg"
                    viewLink="https://github.com/rishabhchaudhary0210"
                    codeLink="https://github.com/rishabhchaudhary0210"
                    head="head-1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, adipisci quae error hic ab quos vero atque eveniet earum esse?"
                />
                <ProjectCard 
                    image="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg"
                    viewLink="https://github.com/rishabhchaudhary0210"
                    codeLink="https://github.com/rishabhchaudhary0210"
                    head="head-1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, adipisci quae error hic ab quos vero atque eveniet earum esse?"
                />
               
            </div>
        </div>
    );
}