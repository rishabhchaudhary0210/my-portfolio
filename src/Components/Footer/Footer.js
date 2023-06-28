import './Footer.css';

export default function Footer() {

    return (
        <footer>
            <div>
                Made by Rishabh Chaudhary
            </div>
            <div className="icons">
                <a href="chaudharyrishabh0210@gmail.com" className="icon-links" target="_blank" >
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/rishabhchaudhary0210" className="icon-links" target="_blank" >
                    <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/rishabh-chaudhary-108564154" className="icon-links" target="_blank" >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://instagram.com/_.rishabh.chaudhary._?igshid=MzNlNGNkZWQ4Mg==" className="icon-links" target="_blank"  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/ItsRishabh02?t=C_PAIivEq-r3hcAxAEURpg&s=08" className="icon-links" target="_blank" >
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    );
}