import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function SocialItem({ blok }) {
    const logos = {
        'facebook': faFacebookSquare,
        'instagram': faInstagram,
        'twitter': faTwitter,
        'pinterest': faPinterest,
        'youtube': faYoutube
    }
    return (
        <a href={blok.item_url.cached_url}><FontAwesomeIcon icon={logos[blok.item_name.toLowerCase()]} color="#fff" fontSize={30}/></a>
    )
}
