import React from 'react'
import '../Styles/ImageWithText.css'


export default function ImageWithText(props){
  return(
    <div className="ImageWithText">
      <img src={props.image} alt="ucsc" />
      <div className="imageText">
        <p className="bolder">Raul Lopez Luna</p>
        <p>UC Santa Cruz 2013 - 2017</p>
        <p>B.S. Computer Science</p>
        <p>Richmond, Ca</p>
        <p>raullopez2094@gmail.com</p>
      </div>
    </div>
  )
}
