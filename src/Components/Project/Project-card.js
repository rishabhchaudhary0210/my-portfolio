import './Project.css';
import { travelPartner } from '../../Assets/Project-photos/Photo';

const ProjectCard = () => {
  return (
    <div id="project-card">
        <div id='img'>
            <img  src={travelPartner}/>
        </div>
        <div>
            Second Box
        </div>
    </div>
  )
}

export default ProjectCard