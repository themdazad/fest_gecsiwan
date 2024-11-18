import Template from "../EventPage";

const data =  { 
  BannerImage: "https://img.freepik.com/premium-photo/businessmen-fight-concept-tug-war-ai-generated_957244-23857.jpg",
    Tittle: "Thug's of War",
    Description:"Step into the ultimate test of teamwork and raw power with Tug of War. Two teams, one rope, and a single goal: pulling the opposing team across the centerline. It’s a battle of strength, coordination, and strategy, where every ounce of effort counts.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "",
  }

  const GameRules = [
    "Team Size: Teams consist of 6-8 members (ensure balanced weight categories if applicable).", 
    "Objective: Pull the opposing team across the centerline marked on the ground.", 
    "Grip and Stance: Both hands must hold the rope; gloves are optional for grip and safety. ",
    "No Sitting or Twisting: Players cannot sit or twist the rope around their bodies for leverage. ",
    "Winning: A team wins by pulling the rope’s marker past their designated line. ",
    "Fair Play: Respect all participants and follow the referee's instructions. ",
  ];

  const CoordinatorsName =[
   
    {
      "name": "N/A",
      "phone": "0987654321"
    }
  ]

const TugOfWar = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default TugOfWar;