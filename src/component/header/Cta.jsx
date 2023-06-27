import React from 'react'
import CV from '../../assets/cv.pdf'

const Cta = () => {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      
    </div>
  )
}

export default Cta;
