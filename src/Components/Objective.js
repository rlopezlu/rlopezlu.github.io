import React from 'react'
import '../Styles/Objective.css'

export default function Objective(){
  return(
    <div className="Objective">
      <div className="ObjectiveContent">
        <p className="bolder">
          Objective
        </p>

        <div className="content">
          <p>
            I am a recent graduate looking for my first full time software
            development job. I have a strong background in CS and can quickly
            learn new tools, frameworks, and languages.
          </p>
          <p>
            As a software developer, I am looking for jobs under Web Development
            and Quality Assurance. My biggest interests lie in Front End but I
            am excited to learn about other roles and possibilities.
          </p>
          {/* <p >I am looking for my first full time software development job. I have
            experience working with multiple parts of the javascript web dev stack
            using Node.js and compatible npm repos. Angular, React, and Vue are very
            powerful frameworks that I have spent a lot of time with. I have worked with
            mongodb and postgresql.
            </p>
            <p>
            I love working in small teams, but am also very independent
            and value autonomy. I have participated in hackathons and project based
            classes where team organzation and colaboration were critical in order
            to meet deadlines and complete sprints.
          </p> */}
        </div>
      </div>
    </div>
  )
}
