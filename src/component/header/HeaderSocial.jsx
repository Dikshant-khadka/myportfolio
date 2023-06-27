import React from 'react'

import {BsLinkedin, BsGithub} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/dikshant-khadka-b78944245/" ><BsLinkedin /></a>
        <a href="https://github.com/Dikshant-khadka" ><BsGithub/></a>
        
      </div>
    </div>
  )
}

export default HeaderSocial;
