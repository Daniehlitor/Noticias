import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Grid = ({ blok }) => {
  const dis = "display"
  return (
    <div style={{ [dis]: "flex", justifyContent: "space-around" }} {...storyblokEditable(blok)} className="grid">
      {blok.columns.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;