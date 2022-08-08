import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';

export default function Noticia({ blok }) {
    return (
        <article className='noticia'>
            <h1>{blok.titulo}</h1>
            <div>
                <h5>{blok.categoria}</h5>
                <p className='autor'>Por: {blok.autor} - {blok.fecha}</p>
            </div>
            <img src={blok.imagen} alt="imagen"></img>
            {render(blok.contenido)}
        </article>
    )
}