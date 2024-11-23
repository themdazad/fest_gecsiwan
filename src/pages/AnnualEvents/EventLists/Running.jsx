import Template from "../EventPage";

const data = {
  BannerImage:
    "https://img.freepik.com/free-photo/close-up-paralympic-athlete-running_23-2150845450.jpg?t=st=1731954299~exp=1731957899~hmac=6b41c6e8dd3d667737c70cc8caf4697357fdacc2f52240b5405aee22234d1368&w=1800",
  Tittle: "Running",
  Description:
    "The track is ready, the stakes are high, and every step counts. Running is not just a test of speed; it’s a celebration of determination, discipline, and perseverance. From short sprints that challenge reflexes to long-distance runs that demand stamina, this event pushes participants to their limits and beyond. As the crowd cheers and the finish line draws near, every heartbeat echoes the rhythm of the race. Whether you’re a seasoned athlete or a spirited participant, running embodies the essence of focus and sheer willpower.",
  Date: "21-11-2024  3:00 PM",
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
