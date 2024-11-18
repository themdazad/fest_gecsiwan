import Template from "../EventPage";

const data = {
  BannerImage:
    "https://img.freepik.com/premium-photo/illustration-runners-city_894766-920.jpg",
  Tittle: "Running",
  Description:
    "The track is ready, the stakes are high, and every step counts. Running is not just a test of speed; it’s a celebration of determination, discipline, and perseverance. From short sprints that challenge reflexes to long-distance runs that demand stamina, this event pushes participants to their limits and beyond. As the crowd cheers and the finish line draws near, every heartbeat echoes the rhythm of the race. Whether you’re a seasoned athlete or a spirited participant, running embodies the essence of focus and sheer willpower.",
  Date: "DD-MM-2024",
  Prize: "Available Soon",
  Location: "Campus of GEC, Siwan",
  GoogleForm: "",
};

const GameRules = [
  "Various distance categories; participants must follow the track layout.",
  "No external assistance; athletes must complete the race in the given time.",
  "Timing and distance are key to the final result.",
];

const CoordinatorsName = [
  {
    name: "Not Available",
    phone: "1234567890",
  },
];

const Running = () => {
  return (
    <Template
      Data={data}
      GameRules={GameRules}
      CoordinatorsName={CoordinatorsName}
    />
  );
};
export default Running;
