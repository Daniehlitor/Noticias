import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import React from "react";
import logo from './assets/logo.png';

function App() {

  // The slug of the story

  // const home = useStoryblok("home",
  //   { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
  // );

  let location = window.location.pathname.replace("/app/diaco/", "/");

  console.log(location);

  const exceptions = ["/", "/header", "/footer", "/nav-bar"];

  let slug = (exceptions.includes(location)) ? "portada" : location.replace("/", "");

  const header = useStoryblok("header",
    { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
  );

  const footer = useStoryblok("footer",
    { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
  );

  const actual = useStoryblok(slug,
    { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
  );

  if (
    (!header || !header.content) ||
    (!footer || !footer.content) ||
    (!actual || !actual.content)
  ) {
    return (
      <div id="loader_inicio">
        <img src={logo} alt='logo'></img>
      </div>
    );
  } else {
    // If story is there, use StoryblokComponent to render it (dynamically)
    return (
      <React.Fragment>
        <StoryblokComponent blok={header.content} />
        <StoryblokComponent blok={actual.content} />
        <StoryblokComponent blok={footer.content} />
      </React.Fragment>
    );
  }
}
export default App;