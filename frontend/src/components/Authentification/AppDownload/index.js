import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { AuthentificationLeftSection, AuthentificationLeftSectionLogo, AuthentificationLeftSectionBtnDownload, AuthentificationLeftSectionSocialNetworks, AuthentificationLeftSectionCopyright } from "./style";


const AppDownload = () => {

    const getYear = () => {
        const dt = new Date();
        return dt.getFullYear();
    }

    return (
        <AuthentificationLeftSection>
            <AuthentificationLeftSectionLogo>
                <img src="./assets/img/superheroes-logo.png" alt="Logo SuperHeroes" />
                <h2>SuperHeroes</h2>
                <p>Connect with your superheroes and the world <br/> around you with SuperHeroes.</p>
            </AuthentificationLeftSectionLogo>
            <AuthentificationLeftSectionBtnDownload>
                <button>
                    <img src="./assets/svgs/apple.svg" alt="Download on Apple" />
                </button>
                <button>
                    <img src="./assets/svgs/google.svg" alt="Download on Google" />
                </button>
            </AuthentificationLeftSectionBtnDownload>
            <AuthentificationLeftSectionSocialNetworks>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
            </AuthentificationLeftSectionSocialNetworks>
            <AuthentificationLeftSectionCopyright>
                &copy; {getYear()}. All rights reserved.
            </AuthentificationLeftSectionCopyright>
        </AuthentificationLeftSection>
    )
}

export default AppDownload;