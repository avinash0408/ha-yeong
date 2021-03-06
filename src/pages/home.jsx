import React from 'react'
import './home.css'
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Home() {
    return (
        <div className="home_main">
            <div className="intro">
            <h1>안녕 ~</h1>
            <h2>I'm Ha-Yeong</h2>
            </div>  
            <div className="space"></div>
            <div className="social">
                <a href=""><PhoneIcon className="soc"/> </a>
                <a href="https://www.instagram.com/hayeong031/"><InstagramIcon className="soc"/></a>
                <a href=""><MailOutlineIcon className="soc"/></a>
                <a href=""><GitHubIcon className="soc"/></a>
                <a href=""><LinkedInIcon className="soc"/></a>
            </div>
            
        </div>
    )
}

export default Home
