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
    </article>
    </section>
    )
}