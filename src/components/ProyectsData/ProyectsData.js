import bgUx from './img/bgUxUi.jpg';
import bgBranding from './img/bgBranding.jpg';
import bgCarteles from './img/bgCarteles.jpg';
import bgEtiquetas from './img/bgEtiquetas.jpg';

import moksUx from './img/centralUxUi.png';
import moksBrand from './img/centralBranding.png';
import moksEtiquetas from './img/centralEtiquetas.png';

import bannerUx from './img/bannerUxUi.jpg';
import bannerBrand from './img/bannerBranding.jpg';
import bannerCarteles from './img/bannerCarteles.jpg';
import bannerEtiquetas from './img/bannerEtiquetas.jpg';

import asideUx from './img/asideUxUi.png';
import asideBrand from './img/asideBranding.png';
import asideEtiquetas from './img/asideEtiquetas.png';


import imgGaleryCarteles1 from './img/cartelesSuplementeo1.jpg';
import imgGaleryCarteles2 from './img/cartelesorange2.jpg';
import imgGaleryCarteles3 from './img/cartelesTravel3.jpg';
import imgGaleryCarteles4 from './img/cartelesCoffe4.jpg';

import uxUi from './img/TOTO.png';
import carteles from './img/renaiss.png';
import etiquetas from './img/ETIQUETASp.png';
import branding from './img/BRANDINGp.png';


 export const proyectsData = [
        {name:'UX/UI',
             backGround: bgUx, 
             imgMoks: moksUx, 
             nameProyect:'Academico Ebac', 
             rol:'Diseñadora gráfica y UX/UI', 
             time:'6 meses - 2023', 
             imgBanner: bannerUx, 
             proyectLink:'https://www.behance.net/gallery/235626567/TOTO-UXIU', 
             imgAside: asideUx, 
             route: '/UxUi', 
             infoSolution: `La propuesta consistió en diseñar una plataforma que unificara la información, permitiendo a los usuarios realizar una búsqueda global de perros disponibles en su ciudad.
                Además, se implementó un sistema de registro seguro, pensado tanto para los adoptantes como para los refugios, garantizando una mejor trazabilidad y cuidado del perrito adoptado.
                El enfoque estuvo en crear una experiencia clara, confiable y accesible, con el objetivo de facilitar las adopciones responsables.\n\n
                El resultado fue una propuesta integral de branding y UX/UI que responde a una problemática social real, creando un puente entre refugios y personas que desean adoptar.`, 
            infoReto: 'México cuenta con entre 23 y 29 millones de perros callejeros, es decir, 7 de cada 10 no tienen hogar. Para entender mejor la problemática entrevisté a refugios y adoptantes. El principal desafío fue unificar en una sola plataforma la información de distintos refugios, ofreciendo una búsqueda accesible para el usuario y, al mismo tiempo, asegurar que el registro de usuarios ofreciera seguridad en la adopción.',
            imgProyect: uxUi,
            info: 'Desarrollé el branding y la experiencia digital de una plataforma enfocada en la adopción de perros callejeros, buscando crear una herramienta funcional que conectara a usuarios con refugios de forma sencilla.'
        },
            

        {name:'BRAND', 
            backGround: bgBranding, 
            imgMoks: moksBrand,  
            nameProyect:'Asano Leche de soja', 
            rol:'Diseñadora gráfica', 
            time:'3 meses - 2025', 
            imgBanner:bannerBrand, 
            proyectLink: 'https://www.behance.net/gallery/234571291/Branding-leche-de-soya', 
            imgAside: asideBrand, 
            route: '/Brand', 
            infoSolution: 'Para cada sabor diseñé personajes en 3D inspirados en sus ingredientes: la flor de vainilla, la raíz de taro, el polvo de matcha y la leche natural. Empecé con bocetos ilustrados tomando como referencia sus formas y luego, utilizando IA, les di un estilo animado en 3D. Así logré una línea de etiquetas con una identidad divertida y consistente que conecta con el público infantil.', 
            infoReto:'El desafío era diseñar etiquetas que fueran llamativas y divertidas para el público infantil, pero que también comunicaran de manera clara el sabor de cada leche de soya.',
            imgProyect: branding, 
            info:'Trabajé en la imagen de etiquetas de leche de soya dirigidas al público infantil, desarrollando personajes y una estética en 3D.'},
       
        {name:'CARTELES', 
            backGround: bgCarteles, 
            imgMoks: '', 
            galeriaImgs:[imgGaleryCarteles1, imgGaleryCarteles2, imgGaleryCarteles3, imgGaleryCarteles4,],   
            nameProyect:'Carteles en RedNatura', 
            rol:'Diseñadora gráfica', 
            time:'2022-2024', 
            imgBanner:bannerCarteles, 
            proyectLink: '', 
            imgAside:'', 
            route: '/Carteles', 
            infoSolution: 'Cada cartel fue diseñado para resaltar la información más relevante de forma jerárquica, facilitando la lectura rápida y la comprensión inmediata del beneficio del suplemento. Además, adapté los diseños para que funcionaran tanto en medios impresos como en redes sociales, ajustando composiciones y tamaños sin perder impacto visual.', 
            infoReto: 'El desafío consistía en explicar visualmente los beneficios de los suplementos de forma que fuera fácil de entender y atractiva para distintos públicos.',
            imgProyect: carteles,
            info: 'Durante mi trabajo en REDNATURA diseñé carteles para suplementos alimenticios, buscando que cada producto fuera claro, fácil de entender y visualmente atractivo, tanto en impresos como en redes sociales.'
        
        },
        
        {name:'ETIQUETAS', 
            backGround: bgEtiquetas, 
            imgMoks: moksEtiquetas,  
            nameProyect:'PIZCA', 
            imgBanner:bannerEtiquetas, 
            rol:'Diseñadora gráfica', 
            time:'1 mes - 2024', 
            proyectLink: '', 
            imgAside: asideEtiquetas, 
            route: '/Etiquetas', 
            infoSolution: 'Para resolver el reto, diseñé cada etiqueta pensando en cómo comunicar el sabor de manera visual y rápida, creando una narrativa muy mexicana inspirada en las botanas picosas. Cada sabor tiene su propio color y elementos gráficos que lo representan, haciéndolos fáciles de identificar. El logo refuerza la personalidad de la marca y se integra de manera armoniosa con las etiquetas. Todo el sistema visual fue pensado para atraer a un público joven, generar una conexión emocional y transmitir la diversión y el carácter de cada sabor.', 
            infoReto:'Crear una identidad visual clara y atractiva que permitiera reconocer rápidamente cada sabor y que se sintiera fresca y juvenil.',
            imgProyect: etiquetas,
            info:'Me encargué del diseño del logo y las etiquetas, buscando que cada sabor tuviera su propia personalidad y conectara con un público joven.'
        }
    ]










 