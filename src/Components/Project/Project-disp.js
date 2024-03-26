import './Project-disp.css';
// import img from './../../Assets/Project-photos/groco.jpg';

const Projectdisp = (props) => {
    return (
        <div className='project-disp'>
            <div className='img-cont'>
                <img src={props.image} alt="img" className='project-img' />
            </div>
            <div className='project-info'>
                <h2>{props.head}</h2>
                <div className='img-cont-mobile'>
                    <img src={props.image} alt="img" className='project-img' />
                </div>
                <p>
                    {props.text}
                </p>
                <div className='project-skills'>
                    {
                        props?.skills?.map(ele => <span>{ele}</span>)
                    }
                </div>
                <div className='link-container'>
                    <a href={props.viewLink} className='link preview'>Preview <IconBxLinkExternal/></a>
                    <a href={props.codeLink} className='link code'>Code <IconCodeSlash/></a>
                </div>
            </div>
        </div>
    )
}

export default Projectdisp;


function IconCodeSlash(props) {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
      </svg>
    );
  }

  function IconBxLinkExternal(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
        <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
      </svg>
    );
  }