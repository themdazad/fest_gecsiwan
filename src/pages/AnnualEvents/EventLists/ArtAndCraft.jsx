import Template from "../EventPage";

const data = {
  BannerImage:
    "https://thumbs.dreamstime.com/b/art-craft-paint-tools-palette-pencil-scissors-cute-children-brush-tube-elements-painter-class-web-banner-design-poster-344638164.jpg",
  Tittle: "Art and Craft",
  Description:
    "Step into a vibrant showcase of creativity at the Art and Craft Exhibition! Immerse yourself in a world of colors, textures, and imagination, where stunning paintings and intricate handicrafts bring the artistic brilliance of our students to life.",
  Date: "21-11-2024  3:00 PM",
  Prize: "Available Soon",
  Location: "Campus of GEC, Siwan",
  GoogleForm: "https://forms.gle/NtY3Xr4rLqV1cKdE9",
};

const GameRules = [
  "Original work only; no plagiarized content.",
  "No size restrictions; materials must be provided by participants.",
  "Judging based on creativity, technique, and presentation."
];

const CoordinatorsName = [
  {
    name: "Rishu Kumar",
    phone: "9142363128",
  },
  {
    name: "Swati Singh",
    phone: "9135212317",
  },
];
const ArtAndCraft = () => {
  return (
    <Template
      Data={data}
      GameRules={GameRules}
      CoordinatorsName={CoordinatorsName}
    />
  );
};
export default ArtAndCraft;
