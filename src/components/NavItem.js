import React from 'react'

export default function NavItem({ blok }) {
    let location = window.location.pathname.toLocaleLowerCase().replace("/", "");
    return (
        <a style={{ textTransform: 'uppercase' }} className={blok.nombre.toLocaleLowerCase() === location ? "selected" : ""} href={blok.link.cached_url}>{blok.nombre}</a>
    )
}
