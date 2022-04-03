import React from 'react';
import linkedInPhoto from '../image/linkedin.png'
import githubPhoto from '../image/github.png'
import gmailPhoto from '../image/gmail.png'
import instagramPhoto from '../image/instagram.png'
import '../App.css';


export default function Footer(){

    return(
<div>
          <footer>
            <div className="footer">
            <a
            /*Linkedin image and website link */
              className="footerLogo"
              href="https://www.linkedin.com/in/JuliaMaille "
              target="_blank"
            >
              <img className="footerLogo" src={linkedInPhoto} alt="LinkedIn"
              /*<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>*//>
            </a> 
            <a
            /*Github image and website link */
              className="footerLogo"
              href="https://github.com/jmaille664 "
              target="_blank"
            >
              <img className="footerLogo" src={githubPhoto} alt="Github"
              /*<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>*//>
            </a>
            <a
            /*Gmail image and email link */
              className="footerLogo"
              href="mailto:designsbyjuliam@gmail.com "
              target="_blank"
            >
              <img className="footerLogo" src={gmailPhoto} alt="Gmail"
              /*<<a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Pixel perfect - Flaticon</a>*//>
            </a>
            <a
            /*Instagram image and link */
              className="footerLogo"
              href="https://www.instagram.com/juliamcodes/ "
              target="_blank"
            >
              <img className="footerLogo" src={instagramPhoto} alt="Instagram"
              /*<a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Laisa Islam Ani - Flaticon</a>*//>
            </a>
            </div>
          </footer>
        </div>
      );
    }
