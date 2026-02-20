import { Link } from 'react-router-dom'
import './styles.css'
import arrowPoryect from '../img/FLECHA.svg'


export const ProyectCard = ({name, backGround, index, route, focusProyect, onMouseEnter, onMouseLeave }) => {

    const isActive = index === focusProyect
    

    return(
        <Link onMouseEnter ={onMouseEnter} 
            to={route}
            onMouseLeave ={onMouseLeave} 
            className={`cardContainer ${isActive ? 'activeCard' : ''}`}  
            style={{ 
                backgroundImage: `url(${backGround})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',  
                transformOrigin: 'center center',
                zIndex: isActive ? 10 : 1,
                transition: 'all 0.3s ease' }} >
            <span  className='buttonProyect'> <img alt='arrowIconImage' src={arrowPoryect} /></span>
            <p className='titleCard'>{name}</p>
        </Link>
    )
}