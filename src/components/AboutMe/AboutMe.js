import './styles.css'
import profileImg from './img/foto.png'
import garabato from './img/garabato.svg'


export const AboutMe = () => {
    return(
    <section  id='AboutMe' className='aboutMeContainer'>
    <article className='imgProfilecontainer'>
        <img alt='profilePhoto' className='profileImg' src={profileImg} />
    </article>
    <article className='aboutMeInfoContainer'>
        <h2 className='titleAboutMe'>¡HOLA!</h2>
        <img alt='trazo' className='garabatoImg' src={garabato} />
        <p className='aboutMeText'>Soy diseñadora gráfica y UX/Ul, con formación en Design Thinking. Me encanta todo lo que tiene que ver con la estética y crear diseños que no solo se vean bien, sino que le den vida y personalidad a las marcas para que cuenten su propia historia. Siempre estoy lista para sumarme a proyectos que me inspiren y desafíen.</p>
        <a className='buttonDownloadCv' 
            href="/assets/CurriculumDanielaGama.pdf"
            download="CurriculumDanielaGama.pdf" >Mi curriculim <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M10.0001 0C14.7131 0 17.0701 0 18.5351 1.464C19.2921 2.222 19.6581 3.218 19.8351 4.656V8H0.164062V4.656C0.340062 3.218 0.705063 2.222 1.46306 1.464C2.92806 0 5.28506 0 9.99906 0" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 9.2 5.96046e-08 7.8 0.545 6.73C1.02436 5.78923 1.78923 5.02436 2.73 4.545C3.8 4 5.2 4 8 4H12C14.8 4 16.2 4 17.27 4.545C18.2108 5.02436 18.9756 5.78923 19.455 6.73C20 7.8 20 9.2 20 12C20 14.8 20 16.2 19.455 17.27C18.9756 18.2108 18.2108 18.9756 17.27 19.455C16.2 20 14.8 20 12 20H8C5.2 20 3.8 20 2.73 19.455C1.78923 18.9756 1.02436 18.2108 0.545 17.27C5.96046e-08 16.2 0 14.8 0 12ZM10.75 9C10.75 8.80109 10.671 8.61032 10.5303 8.46967C10.3897 8.32902 10.1989 8.25 10 8.25C9.80109 8.25 9.61032 8.32902 9.46967 8.46967C9.32902 8.61032 9.25 8.80109 9.25 9V13.19L8.03 11.97C7.96134 11.8963 7.87854 11.8372 7.78654 11.7962C7.69454 11.7552 7.59522 11.7332 7.49452 11.7314C7.39382 11.7296 7.29379 11.7482 7.2004 11.7859C7.10701 11.8236 7.02218 11.8797 6.95096 11.951C6.87974 12.0222 6.8236 12.107 6.78588 12.2004C6.74816 12.2938 6.72963 12.3938 6.73141 12.4945C6.73318 12.5952 6.75523 12.6945 6.79622 12.7865C6.83721 12.8785 6.89631 12.9613 6.97 13.03L9.47 15.53C9.61063 15.6705 9.80125 15.7493 10 15.7493C10.1988 15.7493 10.3894 15.6705 10.53 15.53L13.03 13.03C13.1037 12.9613 13.1628 12.8785 13.2038 12.7865C13.2448 12.6945 13.2668 12.5952 13.2686 12.4945C13.2704 12.3938 13.2518 12.2938 13.2141 12.2004C13.1764 12.107 13.1203 12.0222 13.049 11.951C12.9778 11.8797 12.893 11.8236 12.7996 11.7859C12.7062 11.7482 12.6062 11.7296 12.5055 11.7314C12.4048 11.7332 12.3055 11.7552 12.2135 11.7962C12.1215 11.8372 12.0387 11.8963 11.97 11.97L10.75 13.19V9Z" fill="white"/>
                </svg>
            </a>

    </article>
    </section>
    )
}