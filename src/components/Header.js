import { storyblokEditable } from '@storyblok/react';
import React from 'react';
import search_icon from '../assets/search-outline.svg';
import add_icon from '../assets/add-circle-outline.svg';

export default function Header({ blok }) {
    return (
        <React.Fragment>
            <div {...storyblokEditable(blok)} className="header_superior">
                <div className='logo_div'>
                    <a href={blok.logo_link.cached_url}><img src={blok.logo} height={blok.logo_height} alt="imagen"></img></a>
                </div>
                <div className='dates_sup'>
                    <p>Miércoles 03 de Agosto de 2022</p>
                    <p>ÚLTIMA ACTUALIZACIÓN: 08/03/22 - 09:23 HRS COT</p>
                </div>
                <div className='nav_sup'>
                    <div className='search_button'>
                        <img src={search_icon} alt="imagen" height="30"></img>
                    </div>
                    <div className='login_buttons'>
                        <a href='registro'>Registrarme <img src={add_icon} alt="imagen"></img></a>
                        <a href='login'>Iniciar Sesión <img src={add_icon} alt="imagen"></img></a>
                    </div>
                </div>
            </div>
            <div className="header_info">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolores, omnis sit corporis, enim minus, tempore laudantium odit veritatis hic ratione eligendi sequi perspiciatis. Expedita aliquid laudantium minima nisi vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam, itaque harum nisi praesentium ipsam dolore hic atque veritatis ex aliquid, provident fugit nostrum id? Et, autem porro. Facilis, accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse beatae odio reiciendis quo dicta doloremque deleniti tempore et officiis impedit incidunt excepturi hic ea iure, nulla molestias quasi mollitia.</p>
            </div>
        </React.Fragment>
    );
}
