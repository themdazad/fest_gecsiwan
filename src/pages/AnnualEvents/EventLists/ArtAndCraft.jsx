import Template from "../EventPage";

const data = {
  BannerImage:
    "https://thumbs.dreamstime.com/b/art-craft-paint-tools-palette-pencil-scissors-cute-children-brush-tube-elements-painter-class-web-banner-design-poster-344638164.jpg",
  Tittle: "Art and Craft",
  Description:
    "Step into a vibrant showcase of creativity at the Art and Craft Exhibition! Immerse yourself in a world of colors, textures, and imagination, where stunning paintings and intricate handicrafts bring the artistic brilliance of our students to life.",
  Date: "DD-MM-2024",
  Prize: "000.00",
  Location: "Campus of GEC, Siwan",
  GoogleForm: "https://forms.gle/q7XjJaWeG8GuzGNNA",
};

const GameRules = [
  "Rule 1: Add your rules here",
  "Rule 2: Add some more rules here",
];

const CoordinatorsName = [
  {
    name: "John Doe",
    phone: "1234567890",
  },
  {
    name: "Jane Doe",
    phone: "0987654321",
  },
  {
    name: "Jane Doe",
    phone: "0987654321",
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
