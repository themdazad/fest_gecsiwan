import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLxqkDA3CBPmAtr9KUkLbw4GqWwQbFt7nNH-wYg9Lkl2Mn458UPvDChZbQ17b_Loz2Xo&usqp=CAU",
    Tittle: "Volleyball",
    Description:"Hit the court for an electrifying game of Volleyball, a sport that blends teamwork, agility, and precision. With six players on each side, the objective is simple—score points by sending the ball over the net and landing it in the opposing team’s court. Whether it’s a powerful spike, a strategic set, or a diving save, every play showcases the thrill of the game.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/jQV4brofLCuABCEQ9",
  }

  const GameRules = [
        "Team Size: Six players per team on the court, with substitutions allowed.",
        "Scoring: Matches are played in sets (best of 3 or 5). A set is won by the first team to reach 25 points (win by 2).",
        "Service: Serve must be behind the baseline; it can be underhand or overhand.",
        "Hits per Side: A team can touch the ball up to three times before sending it over the net.",
        "Faults: Points are lost for net violations, lifting the ball, or letting the ball touch the ground.",
        "Winning: The team that wins the majority of sets takes the match.",
        "Rul",
  ];

  const CoordinatorsName =[
   
    {
      "name": "N/A",
      "phone": "0987654321"
    }
  ]

const Volleyball = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Volleyball;