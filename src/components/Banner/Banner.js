import './styles.css'
import start from '../welcomeSection/img/Vector.svg'
import React from 'react';

  export const Banner = () => {
  const bannerInfo = ['BRAND', 'UX/UI', 'EDITORIAL', 'CARTELES', 'ETIQUETAS'];
    
  return(
        <section className='bannerContainer'>
        <article className="bannerTextContainer">
        <div className="bannerGroup">
          {bannerInfo.map((item, index) => (
            <React.Fragment key = {`first-${index}`}>
              <img src={start} alt='start'/>
              <p>{item}</p>
            </React.Fragment>
          ))}
        </div>

        <div className="bannerGroup">
          {bannerInfo.map((item, index) => (
            <React.Fragment key = {`first-${index}`}>
              <img src={start} alt='start'/>
              <p>{item}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="bannerGroup">
          {bannerInfo.map((item, index) => (
            <React.Fragment key = {`first-${index}`}>
              <img src={start} alt='start'/>
              <p>{item}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="bannerGroup">
          {bannerInfo.map((item, index) => (
            <React.Fragment key = {`first-${index}`}>
              <img src={start} alt='start'/>
              <p>{item}</p>
            </React.Fragment>
          ))}
        </div>
        
      </article>
    </section>
    )
}