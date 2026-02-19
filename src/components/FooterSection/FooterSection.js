import insta from '../welcomeSection/img/insta.svg';
import behance from '../welcomeSection/img/behance.svg';
import linkedin from '../welcomeSection/img/linkedin.svg';
import './styles.css'

export const FooterSection = () => {
    return(
        <section className='footerContainer'>
            <h3 className='titleFooter'>Conectemos 👋</h3>
            <nav className='navContainerFooter'>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/web.gama/'> <img alt='imageOfIconInstagram' className='iconNav' src={insta} /></a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/celestegama/'><img alt='imageOfIconLinkedin' className='iconNav' src={linkedin}/></a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.behance.net/celestegama'><img alt='imageOfIconBehace' className='iconNav'  src={behance}/></a>
            </nav>
        </section>
    )
}