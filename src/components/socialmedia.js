import React from 'react'
import { SocialIcon } from 'react-social-icons';

const socialStyle = {
    margin: '10px'
}

const Socialbar = () => {
    return (
        <div>
            <SocialIcon network="facebook" style={socialStyle} fgColor="#fff"  />
            <SocialIcon network="twitter" style={socialStyle} fgColor="#fff" />
            <SocialIcon network="instagram" style={socialStyle} fgColor="#fff" url='https://www.instagram.com/millies19/' />
            <SocialIcon network="youtube" style={socialStyle} fgColor="#fff" />
            <SocialIcon network="reddit" style={socialStyle} fgColor="#fff" />
        </div>
    )
}

export default Socialbar