import React from 'react'
import phoneBillCalculator from '../image/PhoneBillCalculator.PNG'
import JavaAutomation from '../image/JavaAutomation.JPG'
import Jeopardy from '../image/Jeopardy.JPG'

export default function Projects(){

    return(
    <>
    <title> Projects Julia M Software QA Tester</title>
    <h1 className="projects-section-header">Projects</h1>
    {/* Start Project Grid */}
    <section id ="projects" className="projects-section" role="complementary">
    <div id="projects-grid" className="projects-grid">
    <a className="purple-text" 
    href="https://github.com/jmaille664/Learning-Java/blob/main/PhoneBillCalculator.java" 
    target="blank">
    <img class="project-image" src={phoneBillCalculator} alt="Phone Bill Calculator Java Image"/>
        <p class="project-tile">
            <span class="code"></span>
            Java Phone Bill Calculator
            <span class="code"></span>
        </p>
    </a>
    <a className="purple-text" 
    href="https://github.com/jmaille664/Java_Automation" 
    target="blank">
    <img class="project-image" src={JavaAutomation} alt="Java Automation ECommerce"/>
        <p class="project-tile">
            <span class="code"></span>
            Java Test Auomation
            <span class="code"></span>
        </p>
    </a>
    <a className="purple-text"
    /*link takes you to the private jeopardy github, will update once its public*/
    href="https://github.com/burlingtoncodeacademy-students/jeopardy-board-jmaille664" 
    target="blank">
    <img class="project-image" src={Jeopardy} alt="Jeopardy Game"/>
        <p class="project-tile">
            <span class="code"></span>
            Jeopardy Game  
            <span class="code"></span>
        </p>
    </a>
    </div>
    </section>
    </>
    )
}
