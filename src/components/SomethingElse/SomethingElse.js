import { CardElse } from "./CardElse/CardElse"
import aDisenoBg from './img/adiseñomokup.jpg'
import magazineBg from './img/magazineMokup.jpg'
import workShopBg from './img/illustrationmokup.jpg'
import './SomethingElse.css'
import { useState } from "react"



const elseData = [
    {
        name: 'Finalista A! Diseño',
        backGround: aDisenoBg,
        infoElse: 'Participé con el proyecto TOTO en el concurso nacional de la revista A! Diseño, dentro de la categoría de branding. El proyecto fue seleccionado como finalista en 2024.'
    },
    {
        name: 'Diseño Revista Gto.',
        backGround: magazineBg,
        infoElse: 'Diseñé la revista del estado de Guanajuato durante varias ediciones, colaborando de forma continua de 2021 a 2024 en su diseño editorial y visual.'
    },
    {
        name: 'Workshop online · UAM',
        backGround: workShopBg,
        infoElse:'Impartí el workshop Principios de la ilustración a través de UAMEDIA en 2022, enfocado en fundamentos visuales y procesos creativos.'
    }
]

export const SomethingElse = () => {
    const [focusProyect, setFocusProyect] = useState(null);
    const actualProyect = (index) => {
        setFocusProyect(focusProyect === index ? null : index)
    }

    return(
        <section className="somethingContainer">
            <h3 className="titleSomethingElse">Algunas cosas más</h3>
            <article className="proyectElseContainer">
                {elseData.map((proyect, index) => {
                return (
                    <CardElse
                    index={index}
                    key={index}
                    name={proyect.name}
                    backGround={proyect.backGround}
                    infoElse={proyect.infoElse}
                    onClick={() => actualProyect(index)}
                    focusProyect={focusProyect}
                />
                )
                })}
        </article>
    </section>
    )

    
    
    }  