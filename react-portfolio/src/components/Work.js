import React from 'react'
import pdfFile from '../image/Julia Maille Resume-portfolio.pdf'

export default function Work(){

    return(
        <>
    <title> Work Julia M Software QA Tester</title> 
    <h1 className="work-page-h1">Resume</h1> 
    {/* iframe added to display my resume */}
    <iframe className="resume" 
    title="Julia Maille Resume"
    //source for my resume
    src={pdfFile} 
    />
    </>
    )
}
