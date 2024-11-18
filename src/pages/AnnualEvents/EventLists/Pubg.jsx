import Template from "../EventPage";

const data = {
  BannerImage:
    "https://www.thestatesman.com/wp-content/uploads/2020/11/PUBG_Mobile.jpg",
  Tittle: "Pubg",
  Description:
    "Gear up for an adrenaline-pumping E-Sports event with PUBG Mobile, where strategy, precision, and quick reflexes determine who will claim the Chicken Dinner. Dive into the battleground, form squads, and navigate dynamic terrains while taking on opponents in real-time combat. The game tests your tactical planning, survival instincts, and teamwork as the safe zone shrinks and the intensity builds.",
  Date: "DD-MM-2024",
  Prize: "Available Soon",
  Location: "Campus of GEC, Siwan",
  GoogleForm: "",
};

const GameRules = [
    "Rule",
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
