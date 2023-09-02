import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color: theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                    <br/><br/>
                    <p style={{color: theme.tertiary80}}>
                        <h4 style={{marginBottom: '10px'}}>Skills</h4>
                        <ul>
                            <li style={{color: theme.tertiary80}}>Strong skills and experience in Full Stack Development including MERN (MongoDB, Express, React, Node.js) Stack Development.</li>
                            <li style={{color: theme.tertiary80}}>Experience in designing and developing Blockchain application.</li>
                            <li style={{color: theme.tertiary80}}>Hands-on experience with smart contracts using Solidity.</li>
                            <li style={{color: theme.tertiary80}}>Proficient in programming languages such as JavaScript, HTML, and CSS.</li>
                            <li style={{color: theme.tertiary80}}>Strong knowledge of Data Structures, Algorithms, DBMS, and Git.</li>
                            <li style={{color: theme.tertiary80}}>Experience in RESTful API, GraphQL, and WebSockets.</li>
                            <li style={{color: theme.tertiary80}}>Excellent understanding of Agile Development Methodology.</li>
                            <li style={{color: theme.tertiary80}}>Experience working in a remote team.</li>
                        </ul>
                    </p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
