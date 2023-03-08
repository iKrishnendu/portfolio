import React from 'react'
import "./Footer.css"

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className='footer'>
      
      <div className='footer--container'>
        <div className='right'><p>Designed and Developed by Krishnendu Sahoo</p></div>
        <div className='left'><p>Copyright © {year}</p></div>

      </div>
    </div>
  )
}

export default Footer