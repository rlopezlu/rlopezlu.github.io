import React, { Component } from 'react';
import '../Styles/Work.css'

export default class Work extends Component{
  constructor(){
    super()
    this.state = {displayDetails: false}
  }

  handleClick = () =>{
    this.setState(
      {displayDetails: !this.state.displayDetails})
  }

  showOrHide(){
    if(this.state.displayDetails)
      return "writeup"
      return "hidden"
  }
  buttonLabel(){
    if(this.state.displayDetails)
      return "Hide Write Up"
      return "Detailed Write Up"
  }

  getHref(){
    if(this.state.displayDetails)
      return null
      return "#WorkAnchor"
  }

 render(){
  return(
    <div id="WorkAnchor" className="Work">
      <div className="WorkContent">
        <div className="bolder underline">
          Internship
        </div>
        <div>
          <p className="jobLocation">Leeps Lab</p>
          <div className="summary">
            <div className="summaryLeft">
              <p >Web Developer</p>
              <p >Summer 2016</p>
            </div>
            <div>
              <ul>
                <li>Angular</li>
                <li>Django</li>
                <li>Otree</li>
                <li>Redwood</li>
                <li>Postgresql</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <p className="jobDescription">Developed a project accross two real-time surveying frameworks.
            Designed mockups, wireframes, and flow of web application. Collaborated
            with non-technical staff, and helped them run the project locally.
          </p>
          {/* <a href={this.getHref()}> */}
          <button onClick={this.handleClick}>{this.buttonLabel()}</button>
          {/* </a> */}
          <div className={this.showOrHide()}>
            <div className="WriteupText">
              <p>I worked at Leeps econ research lab under Kristian Lopez Vargas the summer after my junior year. The goal of my project was to develop web powered behavioral experiments that changed based on the responses to previous questions. I took over an existing Angular project, where two anonymous participants decided how to distribute real money earned through their interactions in the experiments. The data was controlled by RedWood, a framework designed for synchronizing data across participants from real time interaction. RedWood and Angular paired together well, and the majority of the app was coded in JS and ran as a single page application. Data was handled by Angular $scope, pushed to RedWood, and updated as needed after each app page was completed. It was the first time I worked on a web project as large as this. My contributions include adding features to this project based on the designs by lab staff. This included css styling, new pages with new interactions, and redesigning the flow of the interactions.
              </p>

              <p>Once the Redwood and Angular project was ready to be used by participants, I was tasked with recreating the project in another framework. Otree was powered by Python and Django, and was perfect for the lab's behavioral experiments. I was the first in the lab to create a project with Otree. Its functionality met all our requirements. The project needed a major redesign since Otree encouraged a more linear approach to the flow of the app pages. Despite the differences, development was faster with oTree, and its compatibility with PyCharm IDE made debugging easier, since the database was always visible.

              </p>

              <p>I learned to communicate clearly with the staff and to complete design before any coding is done. The lab staff did not have a very technical background, so clear concise communication was required on both ends. I created README pages that could be understood by non-programmers explaining how to clone, run, and test the project. The documentation also served as a primer to Otree. In addition, I learned how to effectively use github for version control. Having separate production and development branches allowed me to become familiar with the code base without the fear of disrupting live code. When I wasn’t in the lab, I worked remotely from Oakland. Regardless of if a meeting took place through skype or in the lab, meetings usually resulted in a whiteboard full of diagrams, flow charts, wireframe mockups for different components, and deadlines set by priority. It was important to know what questions to ask, ideas to propose, and progress to share ahead of time. I enjoyed the autonomy and responsibility while working with Leeps.

              </p>
            </div>
            {/* <a href={this.getHref()}> */}
            <button onClick={this.handleClick}>{this.buttonLabel()}</button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
