import React from 'react'
import '../Styles/Nav.css'
import FontAwesome from 'react-fontawesome'

export default function Nav(){
  return(
    <div className="Nav">
      <span>Raul Lopez Luna</span>
      <div className="right">
        <a href="https://github.com/rlopezlu">
          <FontAwesome name='github'/>
        </a>
        <a href="https://www.linkedin.com/in/rlopezlu/"><FontAwesome name='linkedin'/> </a>
        <a href="https://drive.google.com/file/d/1zzXnHagnxWABtcPa8VJH7E4RVZBVldH0/view">Resume</a>
      </div>
    </div>
  )
}
