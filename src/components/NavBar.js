import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import React from 'react'

export default function NavBar({ blok }) {
    return (
        <div {...storyblokEditable(blok)} className='header_inferior'>
            <div>
                {blok.nav_links.map((blok) => {
                    return <StoryblokComponent blok={blok} key={blok._uid} />
                })}
            </div>
        </div>
    )
}
