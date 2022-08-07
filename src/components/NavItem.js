import React from 'react'

export default function NavItem({ blok }) {
    return (
        <a style={ {textTransform: 'uppercase'} } href={blok.link}>{blok.nombre}</a>
    )
}
