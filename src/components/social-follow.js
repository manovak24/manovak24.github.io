import React from 'react';

import './social-follow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

function SocialFollow(props) {
    return (
        <div className="social-container">
            <a href="https://www.facebook.com/mark.william.948" className="facebook social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/therealbrovak/" className="instagram social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/mark-novak-56679949/" className="linkedin social" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    )
}

export default SocialFollow;