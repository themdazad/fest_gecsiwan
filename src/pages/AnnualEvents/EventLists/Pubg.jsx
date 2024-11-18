import Template from "../EventPage";

const data = {
  BannerImage:
    "/images/pubg_banner.jpg",
  Tittle: "Pubg",
  Description:
    "Gear up for an adrenaline-pumping E-Sports event with PUBG Mobile, where strategy, precision, and quick reflexes determine who will claim the Chicken Dinner. Dive into the battleground, form squads, and navigate dynamic terrains while taking on opponents in real-time combat. The game tests your tactical planning, survival instincts, and teamwork as the safe zone shrinks and the intensity builds.",
  Date: "DD-MM-2024",
  Prize: "Available Soon",
  Location: "Campus of GEC, Siwan",
  GoogleForm: "",
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
    name: "N/A",
    phone: "0987654321",
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
