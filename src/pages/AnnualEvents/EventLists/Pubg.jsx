import Template from "../EventPage";

const data = {
  BannerImage:
    "https://img.freepik.com/free-photo/man-racing-dirt-bike-fantasy-environment_23-2151500474.jpg?t=st=1731955714~exp=1731959314~hmac=e0cdf6a0bfb63b55d87e6a7c81003754cf0fb6373d6467960c2247e2c4657e53&w=1800",
  Tittle: "BGMI",
  Description:
    "Gear up for an adrenaline-pumping E-Sports event with BGMI Mobile, where strategy, precision, and quick reflexes determine who will claim the Chicken Dinner. Dive into the battleground, form squads, and navigate dynamic terrains while taking on opponents in real-time combat. The game tests your tactical planning, survival instincts, and teamwork as the safe zone shrinks and the intensity builds.",
  Date: "DD-MM-2024",
  Prize: "Available Soon",
  Location: "Campus of GEC, Siwan",
  GoogleForm: "https://forms.gle/8z8GQQ5rF9FQNTLJ9",
};

const GameRules = [
   "Follow the official tournament schedule and timings.",
    "Cheating or using unauthorized software will lead to disqualification.",
    "Only use the official game client and settings.",
    "Respectful communication is required; harassment or toxic behavior will result in penalties.",
    "No collusion between teams. Compete independently.",
    "Report technical issues or disputes to admins immediately.",
    "Disconnections due to technical issues will be reviewed case-by-case.",
    "Prize distribution is based on final rankings, with tie-breaking rules applied if needed.",
    "Admins have the final say on all decisions."
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
const Pubg = () => {
  return (
    <Template
      Data={data}
      GameRules={GameRules}
      CoordinatorsName={CoordinatorsName}
    />
  );
};
export default Pubg;
