import React from 'react'
import styles from '../../styles/experience.module.css'

function Index() {
    return (
        <section>
            <div className="section_header">
                <h2 className='sub_title'>experience</h2>
            </div>
            <div className={styles.text}>
                <p> 
                    My professional experience is lacking but I make that up with my positive and hungry mindset to help others reach their dreams. 
                    I have 5+ years of working closely with individuals in a sales environment and my technical skills include the basics and advance tools to create web pages. 
                    Front-end development is only the start, I'm always looking to learn new skills and move into more complex projects.
                    Let’s connect and get your webpage up and running! 
                </p>
                <h3>education</h3>
                <ul>
                    <li>
                        <h4>colorado technical university</h4>
                        <p>master's of science - computer science: software engineering</p>
                        <p>March 2021 - august 2022</p>
                    </li>
                    <li>
                        <h4>california state university, san bernardino</h4>
                        <p>bachelor's of art - computer systems: web programming</p>
                        <p>august 2016 - july 2020</p>
                    </li>
                    <li>
                        <h4>san joaquin valley college</h4>
                        <p>associates of science - business administration</p>
                        <p>august 2011 - october 2012</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Index
