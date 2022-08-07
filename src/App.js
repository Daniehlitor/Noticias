import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import React from "react";

function App() {

  // The slug of the story

  // const home = useStoryblok("home",
  //   { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
  // );

  const header = useStoryblok("header",
    { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
  );

  const navbar = useStoryblok("nav-bar",
    { version: 'draft' }, { customParent: 'http://localhost:3000' } // Or published
  );

  if (!header || !header.content || !navbar || !navbar.content) {
    return <div></div>;
  } 
  // If story is there, use StoryblokComponent to render it (dynamically)
  return (
    <React.Fragment>
      <StoryblokComponent blok={header.content} />
      <StoryblokComponent blok={navbar.content} />
    </React.Fragment>
  );
}
export default App;