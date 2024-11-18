import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCURDs8aoM0yFCELP_QlTItMi4Q-gXEF20Tg&s",
    Tittle: "Carrom",
    Description:"Dive into the world of precision, strategy, and skill with our Carrom Tournament at GEC, Siwan.Join us to showcase your carrom skills, compete with the best, and make your mark.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/c2K7HXX5k8rvJxEr6",
  }

  const GameRules = [
    "Each player/team gets 8 coins (1 queen); aim to pocket coins using the striker.",
        "Players take turns to strike; no direct hitting of the opponent's coins.",
        "First to pocket all their coins, followed by the queen, wins."
  ];

  const CoordinatorsName =[
    {
      "name": "N/A",
      "role":" ",
"phone": "1234567890"
    },
    {
      "name": "N/A",
      "phone": "0987654321"
    },
    {
      "name": "N/A",
      "phone": "0987654321"
    }
  ]

const Carrom = () => {
  console.log(CoordinatorsName);
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
 
  )
}
export default Carrom;