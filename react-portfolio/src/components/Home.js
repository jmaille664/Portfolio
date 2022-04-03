import React from 'react'


export default function Home(){

    return(
    <>
    <title>Julia M Software QA Tester</title>
    <main>
        {/* Main section for the page to display welcome banner */}
    <section section id ="welcome-section" className="welcome-section" role="main">
<h1 id ="welcome-section-header">
    Welcome to my portfolio!
    </h1>
    {/* Welcome section paragraph  */}
    <p className="Welcome-Section-Paragraph">My name is Julia<br/><br/>
    I'm a Software QA Tester passionate about software quality and web development
    </p> 
    <div className="Welcome-section-whiteSpace">
    </div>
    </section>
    {/* White space added to the bottom, thinking of adding in skills with photos in the future here */}
    <section section id="welcome-white-space" className="welcome-white-space">
        <div>
            <p></p>
        </div>
    </section>
    </main>
    </>
    )
    
}
