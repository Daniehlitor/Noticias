import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

export default function Footer({ blok }) {
    return (
        <footer {...storyblokEditable(blok)} id='footer'>

            <section className='footer_content'>
                <div className='footer_logo'>
                    <a href={blok.logo_url.cached_url}><img src={blok.logo_img} alt="imagen"></img></a>
                </div>

                <div className='footer_navbar'>
                    <div>
                        {blok.nav_bar.map((blok) => {
                            return <StoryblokComponent blok={blok} key={blok._uid} />
                        })}
                    </div>
                </div>

                <div className='social_bar'>
                    <p>Siguenos</p>
                    <section>
                        {blok.social_bar.map((blok) => {
                            return <StoryblokComponent blok={blok} key={blok._uid} />
                        })}
                    </section>
                </div>

            </section>

            <section className='footer_info'>
                <p>{blok.direccion} {blok.correo}</p>
                <p>{blok.derechos}</p>
            </section>

        </footer>
    )
}
