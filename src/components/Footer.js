import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import resume from '../Resume.pdf'

const Footer = () => {
    return (
        <div className="container d-flex justify-content-around mx-auto my-2">
            <a href={resume} target="_blank"><FontAwesomeIcon icon={faFileAlt} size="2x" /></a>
            <a href="https://www.linkedin.com/in/luigilantin/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://github.com/mushymane" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
            <a href="https://www.instagram.com/yeahdazright/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            {/* <p><FontAwesomeIcon icon={faEnvelope} size="2x" /> lantinluigi@gmail.com</p> */}
        </div>
    )
}

export default Footer;