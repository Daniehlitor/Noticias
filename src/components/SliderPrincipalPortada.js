
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import YouTube from 'react-youtube';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

export default function SliderPrincipalPortada({ blok }) {
    const noticiaPrincipal = blok.noticias[0];
    let dots = [];
    let destacados = [];
    const opts = {
        height: '240',
        width: '426',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    for (let i = 0; i < blok.cantidad; i++) {
        dots.push(
            <a href='/'><FontAwesomeIcon icon={faCircle} color={i === 1 ? "#D52531" : "gray"} fontSize={i === 1 ? 12 : 10} key={`icon${i}`} /></a>
        )
    }
    for (let i = 0; i < 3; i++) {
        destacados.push(
            <article className='item_destacado' key={`destacado${i}`}>
                <img src={noticiaPrincipal.imagen} alt="imagen"></img>
                <div>
                    <h2>{noticiaPrincipal.categoria}</h2>
                    <h5>{noticiaPrincipal.titulo}</h5>
                    <p>Por: {noticiaPrincipal.autor} - {noticiaPrincipal.fecha}</p>
                </div>
            </article>
        )
    }
    return (
        <React.Fragment>
            <section className='page'>
                <div className='slider_principal'>
                    <h1>{noticiaPrincipal.titulo}</h1>
                    <div className='subheader'>
                        <h3>{noticiaPrincipal.categoria}</h3> <p>Por {noticiaPrincipal.autor} - {noticiaPrincipal.fecha}</p>
                    </div>

                    <img src={noticiaPrincipal.imagen} alt='imagen'></img>
                    <p>{noticiaPrincipal.contenido.content[0].content[0].text} <a href='noticia'>Ampliar noticia</a></p>
                    <div className='dots'>
                        {dots}
                    </div>
                </div>
                <div className='destacados'>
                    <h1>Destacados</h1>

                    {destacados}
                </div>

                <div className='clear'></div>
                <br /><hr />
            </section>
            <div className='images_fake'>
                <img src={img1} alt="imagen" width="93%" className='firstimg'></img>
                <YouTube videoId="UVhFtXIvtQQ" opts={opts}/>
                <img src={img2} alt="imagen" width="100%"></img>
                <img src={img3} alt="imagen" width="100%"></img>
            </div>
        </React.Fragment>
    )
}