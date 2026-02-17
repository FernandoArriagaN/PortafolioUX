
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles.css'
import { proyectsData } from '../ProyectsData/ProyectsData';

export const ProyectsPage = () => {
    

    const[ selectProyect, setSelectProyect] = useState(0)
    const currentProyecto = proyectsData[selectProyect];
    const[ isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirecion] = useState('next')
    const handleNavClick = () => {
        setDirecion('next')
        setIsAnimating(true);
        sethasAnimatedOnce(true);
    }
    const handlePrevClick = () => {
        setDirecion('prev')
        sethasAnimatedOnce(true);
        setIsAnimating(true)
    }

    const [hasAnimatedOnce, sethasAnimatedOnce ] = useState(false);    
    const [targetIndex, setTargetIndex] = useState(null)
    const handleSelectNav = (index) => {
        setTargetIndex(index)
        setIsAnimating(true);  
        sethasAnimatedOnce(true);
    }
    
    return(
        <section id="proyects" className="proyectsPageContaier">
            <article className="sliderNavContainer" key={currentProyecto.name}>
                {proyectsData.map((proyecto, index) => {
                    return <div key={index} 
                        onClick={() => handleSelectNav (index)} 
                        className={index === selectProyect ? 'proyectTextContSelect' : 'proyectTextCont'}>  {proyecto.name} </div>
                }) }
            </article>
            <article className="proyectsSilder">
                <button className='buttonArrowProyectSlider' onClick={handlePrevClick}> 
                    <svg className="arrowIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                    <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/>
                    </svg> 
                </button>
                <div className='imgContainer' key={currentProyecto} >

                    <img id='imageProyect' className={isAnimating 
                            ? direction === 'next'  
                            ? 'animating'
                            :'animatingPrev' 
                            : (hasAnimatedOnce 
                            ? direction === 'next'
                            ? 'enterAnimating' 
                            : 'enterAnimatingPrev' : '')}
                        onAnimationEnd={() => {
                        if (isAnimating) {
                            setIsAnimating(false);
                            if(targetIndex !== null) {
                                setSelectProyect(targetIndex);
                                setTargetIndex(null)
                            } else if (direction === 'next') {
                            setSelectProyect(prev => (prev + 1) % proyectsData.length);
                            } else {
                            setSelectProyect(prev => (prev - 1 + proyectsData.length) % proyectsData.length);
                            }
                        }
                        }}
                        src={currentProyecto.imgProyect} />
                </div >
                <div className={isAnimating 
                    ? 'easeOutText' 
                    : hasAnimatedOnce 
                    ? 'easeInText' 
                    : 'proyectInfoContainer'}>
                        
                    <h3 className="proyectTitle">{currentProyecto.name} </h3>
                    <p className="proyectInfo">{currentProyecto.info}</p>
                    <Link className='linkProyect' to={currentProyecto.route}>Ver más <svg className='arrowShowMore'
                        viewBox="0 0 24 24" 
                        fill="#fff" 
                        xmlns="http://www.w3.org/2000/svg">
                            
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></Link>
                </div>
                
                    
                <button className='buttonArrowProyectSlider' onClick={handleNavClick} >
                    <svg className="arrowIcon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                        </svg> 
                </button>
            </article>
        </section>
    )
}