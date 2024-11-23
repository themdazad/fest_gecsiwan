import Template from "../EventPage";

const data = {
  BannerImage:
    "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/07/12bd8e3061aa30c9136889ddaa911392-6.jpg",
  Tittle: "Free Fire",
  Description:
    "Enter the battlegrounds of Free Fire, where only the fittest survive. In this fast-paced E-Sports tournament, players drop onto an island, scavenge for weapons, and fight to be the last one standing. Every match is a test of strategy, shooting skills, and survival instincts as the play zone shrinks, and the tension rises.",
  Date: "21-11-2024  3:00 PM",
  Prize: "Available Soon",
  Location: "Campus of GEC, Siwan",
  GoogleForm: "https://forms.gle/8z8GQQ5rF9FQNTLJ9",
};

const GameRules = [
  "Team Format: Squads (4 players), duos, or solos, based on tournament structure.",
  "Gameplay: Battle Royale with a shrinking safe zone.",
  "Objective: Be the last player/team alive; collect weapons and avoid the shrinking zone.",
  "Fair Play: No cheating or exploiting glitches; disqualification for violations.",
  "Device: Use your own device with Free Fire installed and stable internet.",
  "Winning: Points for eliminations and final rank; highest points win."
];


const CoordinatorsName = [
  {
    name: "Abhinav Kumar",
    role:"President",
    phone: "70614 55548",
  },
  {
    name: "Deepak Kumar",
    role:"Vice-President",
    phone: "9708581134",
  },
];
const FreeFire = () => {
  return (
    <Template
      Data={data}
      GameRules={GameRules}
      CoordinatorsName={CoordinatorsName}
    />
  );
};
export default FreeFire;
