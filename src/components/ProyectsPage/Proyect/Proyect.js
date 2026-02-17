import { useParams } from "react-router-dom";
import {proyectsData} from "../../ProyectsData/ProyectsData"
import {ProyectCard} from "../../ProyectsSection/ProyectCard/ProyectCard"
import './styles.css'
import { useEffect, useState } from "react";
import garabato from '../img/garabato.svg';



 export const Proyect = () => {
    const [focusProyect, setFocusProyect] = useState(0);
    const actualProyect = (index) => {
        setFocusProyect(index)
    }
    


    const { nombreProyecto } = useParams();
    const currentProyecto = proyectsData.find(proyecto =>  `/${nombreProyecto}` === proyecto.route) ;
    const otrosProyectos = proyectsData.filter(proyecto => proyecto !== currentProyecto);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlay, setIsPlay] = useState(true)
    const imgBanner = currentProyecto.imgBanner

    useEffect(() => {
        if(currentProyecto.galeriaImgs && isPlay) {
            const intervalo = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % currentProyecto.galeriaImgs.length); 
            },  3000) 
            
            return () => clearInterval(intervalo)

        }
    },[currentProyecto, isPlay])
    

    const handleNextGalery = () => {
        setIsPlay(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentProyecto.galeriaImgs.length)
        
    }
    const handlePrevGalery = () => {
        setIsPlay(false)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + currentProyecto.galeriaImgs.length)% currentProyecto.galeriaImgs.length)
        
    }
    
    return (
        
        

    <section  className="proyectContainer">
        <article className="titleContainer" style={{backgroundImage: `url(${imgBanner})`,backgroundSize: 'cover'}}>
            <h3 className="titleProyect">{currentProyecto.name} </h3>
        </article>
       
        <table className="tableContainer">
        <thead>
            <tr className="txtCpnmte">
            <th className="tableTitlePage">Proyecto</th>
            <th className="tableTitlePage">Duración</th>
            <th className="tableTitlePage">Rol</th>
            </tr>
        </thead>

        <tbody>
            <tr>
            <td className="tableInfoPage" data-label="Proyecto">
                {currentProyecto.nameProyect}
            </td>
            <td className="tableInfoPage" data-label="Duración">
                {currentProyecto.time}
            </td>
            <td className="tableInfoPage" data-label="Rol">
                {currentProyecto.rol}
            </td>
            </tr>
        </tbody>
        </table>

        <article className="centralSection">
            <aside className="asideContainerImg">
                {currentProyecto.imgAside ? 
                (<img alt="proyectImgAside" className="asideImgProduct" src={currentProyecto.imgAside} />)
                : currentProyecto.galeriaImgs ? (
                    <article className='containerGalery' >
                    <button className="buttonArrow" onClick={handlePrevGalery}>
                        <svg className="arrowIconGaley"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"  >
                        <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/>
                        </svg> 
                    </button>
                    
                    <img alt="galeryProyects" className="imgGalery" src= {currentProyecto.galeriaImgs[currentIndex]} />
                    <button className="buttonArrow" onClick={handleNextGalery}>
                        <svg  viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="arrowIconGaley">
                        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
                        </svg> 
                    </button>
                    </article>
                    ) : null}
                <div className="dotContainer">
                {currentProyecto.galeriaImgs && currentProyecto.galeriaImgs.map((dot, index) =>  {
                    return <button
                        key= {index}
                        className={index === currentIndex ? 'activeDot': 'dot'}
                        onClick={() => {setCurrentIndex(index); 
                            setIsPlay(false)} }
                        />
                    })}
                </div>

            </aside>
            <article className="texRetoSolutonContainer">
                <h3 className="titleRetoSolution">Reto:</h3>
                <p style={{whiteSpace: 'pre-line'}} className="textRetoSolution"> {currentProyecto.infoReto} </p>
                <h3 className="titleRetoSolution">Solución:</h3>
                <p style={{whiteSpace: 'pre-line'}} className="textRetoSolution"> {currentProyecto.infoSolution}</p>
                 {currentProyecto.proyectLink && <a target="_blank" rel="noopener noreferrer" className="casoCompleto" href={currentProyecto.proyectLink}> Ir al caso completo</a>}
            </article>
            
        </article>
        <article className="moksContainer">
            {currentProyecto.imgMoks && <img alt={currentProyecto.name}  className="moks" src={currentProyecto.imgMoks} />}
        </article>
        <article className="proyectsCarrousel">
            <article className="otrherProyectsContainer">
                
                <div className="otrosProyectosContainerSidle">
                    <h3 className="titleOtrosProyectosPage">OTROS<br/> <span> proyectos </span></h3>
                    <img alt="garabatoImg" src={garabato} className="garabatoContainerOtros" />
                </div>

                <div className="containerEfectSlider">
                {otrosProyectos.map((proyecto, index) => {
                    return <ProyectCard
                        index ={index}
                        key= {index}
                        name= {proyecto.name}
                        backGround= {proyecto.backGround}
                        route= {proyecto.route}
                        onMouseEnter ={() => actualProyect(index)}
                        onMouseLeave= {() => actualProyect(0)}
                        actualProyect = {actualProyect}
                        focusProyect = {focusProyect}
                            />
                    
                }) }

                </div>
            </article>
            
        </article>
       </section>
    )
 }
 
 
 
 
 
