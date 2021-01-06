import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagranIcon } from './instagran.svg';




function Footer(){

    return(
        <footer className='main-footer'>

            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className='footer-icons'>
                <a href='http://www.youtube.com/c/DevSuperior' target ='_new'>
                        <YouTubeIcon/>
                </a>

                <a href='http://www.youtube.com/c/DevSuperior' target ='_new'>
                        <LinkedinIcon/>
                </a>

                <a href='http://www.youtube.com/c/DevSuperior' target ="_new">
                        <InstagranIcon/>
                </a>


            </div>
        </footer>
    );
}
export default Footer;