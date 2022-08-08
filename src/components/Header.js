import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { storyblokEditable } from '@storyblok/react';
import React from 'react';
import HeaderFix from './HeaderFix';

export default function Header({ blok }) {
    return (
        <React.Fragment>
            <HeaderFix blok={blok}/>
            <header>
                <div {...storyblokEditable(blok)} className="header_superior">
                    <div className='logo_div'>
                        <a href={blok.logo_link.cached_url}><img src={blok.logo} alt="imagen"></img></a>
                    </div>
                    <div className='dates_sup'>
                        <p>Miércoles 03 de Agosto de 2022</p>
                        <p>ÚLTIMA ACTUALIZACIÓN: 08/03/22 - 09:23 HRS COT</p>
                    </div>
                    <div className='nav_sup'>
                        <div className='menu_button'>
                            <FontAwesomeIcon icon={faBars} color="#5a5a5a" fontSize={25} />
                        </div>
                        <div className='search_button'>
                            <FontAwesomeIcon icon={faSearch} color="#D52531" fontSize={25} />
                        </div>
                        <div className='login_buttons'>
                            <a href='registro'>Registrarme <FontAwesomeIcon icon={faCircleUser} color="white" style={{ marginLeft: 10 }} fontSize={17} /></a>
                            <a href='login'>Iniciar Sesión <FontAwesomeIcon icon={faCircleUser} color="white" style={{ marginLeft: 10 }} fontSize={17} /></a>
                        </div>
                    </div>
                </div>
                <div className='dates_sup_responsive'>
                    <p>Miércoles 03 de Agosto de 2022</p>
                    <p>ÚLTIMA ACTUALIZACIÓN: 08/03/22 - 09:23 HRS COT</p>
                </div>
                <div className="header_info">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolores, omnis sit corporis, enim minus, tempore laudantium odit veritatis hic ratione eligendi sequi perspiciatis. Expedita aliquid laudantium minima nisi vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam, itaque harum nisi praesentium ipsam dolore hic atque veritatis ex aliquid, provident fugit nostrum id? Et, autem porro. Facilis, accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse beatae odio reiciendis quo dicta doloremque deleniti tempore et officiis impedit incidunt excepturi hic ea iure, nulla molestias quasi mollitia.</p>
                </div>
            </header>
        </React.Fragment>
    );
}
