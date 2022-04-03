import React from 'react'
import girlPhoto from '../image/girl.png'

export default function About(){

    return(
         //Title for the webpage
    <><title> About Julia M Software QA Tester</title>
    <main className="bigFlexBox">
        {/* Image to the left on the top of the page  */}
    <img className="about-girl-photo" src={girlPhoto} alt="Github"></img>
    <div className="about-page-content">
    <h1 className="about-page-h1">About Me</h1>
    {/* About Me paragraph information  */}
    <p className="about-page-p">
    👋Thank you for visiting my page!  My name is Julia and I'm a Vermont-based Quality Assurance Tester. I am also interested in web development and accessibility. I have a diverse set of skills including QA testing, HTML, CSS, JavaScript, React, and MongoDB. Check out my hobbies page for more information about what I like to do outside of work!
    </p>
    </div>
    </main>
    </>
    )
    
}
