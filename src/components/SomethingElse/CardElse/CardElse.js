import './CardElse.css'




export const CardElse = ({name, backGround, index,  focusProyect, onClick, infoElse }) => {

    const isActive = index === focusProyect
    const noActive = focusProyect !== null && index !== focusProyect


    return(
        <div onClick ={onClick} 
           className={`cardElseContainer ${isActive ? 'activeElseCard' : ''} ${noActive ? 'noActiveElse' : ''}`}  
            style={{ 
                backgroundImage: `url(${backGround})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',  
                transformOrigin: 'center center',
                zIndex: isActive ? 10 : 1,
                transition: 'all 0.3s ease' }} >
           {!noActive && <p className='titleElseCard'>{name}</p>}
           {isActive && <span className='infoElseText'>{infoElse} </span>} 
        </div>
    )
}