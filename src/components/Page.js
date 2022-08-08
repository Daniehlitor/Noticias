import React from 'react';
import { StoryblokComponent, storyblokEditable, useStoryblok } from "@storyblok/react";
import logo from '../assets/logo.png';

export default function Page({ blok }) {
    const navbar = useStoryblok("nav-bar",
        { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
    );
    if (!navbar || !navbar.content) {
        return (
            <div id="loader_inicio">
                <img src={logo} alt='logo'></img>
            </div>
        );
    }
    return (
        <main {...storyblokEditable(blok)}>
            <StoryblokComponent blok={navbar.content} key={`nav${blok._uid}`}/>
            {blok.body
                ? blok.body.map((blok) => (
                    <StoryblokComponent blok={blok} key={blok._uid}/>
                ))
                : null}
        </main>
    )
}
