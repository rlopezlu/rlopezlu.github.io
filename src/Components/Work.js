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
        <p className="bolder">
          Work Experience
        </p>
        <div>
          <p className="jobLocation">Leeps Lab UCSC</p>
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
          <a href={this.getHref()}><button onClick={this.handleClick}>{this.buttonLabel()}</button></a>
          <div className={this.showOrHide()}>
            <div className="WriteupText">
              <p>I worked at Leeps Lab @ UCSC under Economics Professor Kristian Lopez Vargas
                the summer after my junior year.
                I collaborated with the lab staff to design and organize web surveys that changed based on
                the responses to previous questions. I took over an existing Angular project, where two participants anonymous
                to each other decided through digital communication how to distribute real money earned through the surveys.
                My contribution was adding features to this project based on the designs and interactions we expected from
                the participants. This included css styling, new pages with new questions and interactions, and redesigning the
                flow of the interaction. The data was controlled by RedWood, a framework designed for this type of real time interaction,
                where different app pages were presented dinamically. RedWood and Angular paired together well, and the majority of the app
                was coded in JS and ran as a single page application. Data was handled by Angular $scope, pushed to RedWood, and updated as needed after each app page was completed.
              </p>

              <p>Once the project was ready to be used by participants, I was tasked with recreating the project in another framework.
                Otree was powered by python and Django, and was perfect for the lab's social experiements. I was the first in the lab to
                create a project with Otree, which met all our expectations. The project needed a major redesign since Otree
                encouraged a more linear approach to the flow of the app pages. The experiment data was now managed by a postgresql
                database. Despite the differences, development was faster with oTree, and its compatibility with PyCharm IDE made debugging easier,
                since the database was always visible.
              </p>

              <p>I learned a lot about clear communication and the importance of design before
                any coding is done. Kristian and the other staff did not have a very technical
                background, so clear concise communication was required on both ends. I created multiple README pages that could be understood
                by non-programmers
                explaining how to clone, run, and test the project in his local computer. The documentation also served as a
                primer to Otree. In addition,
                I learned how to effectively use github for version control. Having separate production and
                development branches allowed me to become familiar with the code base without the fear of
                disrupting live code. I worked remotely from Oakland, and met with Kristian once a week through skype
                and once a week in the lab. Lab meetings usually resulted in a whiteboard full of digrams, flow charts for wireframes,
                multiple mockups for different components, and deadlines set by priority. It was important to know what questions to ask, ideas to propose, and
                progress to share ahead of time.
                I enjoyed the autonomy and responsibility, and ultimately how I
                approached the project was up to me.
              </p>
            </div>
            <a href={this.getHref()}><button onClick={this.handleClick}>{this.buttonLabel()}</button></a>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
