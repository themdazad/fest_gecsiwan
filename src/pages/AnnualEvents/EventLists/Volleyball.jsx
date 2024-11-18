import Template from "../EventPage";

const data =  { 
  BannerImage: "https://img.freepik.com/free-photo/team-adult-men-playing-competitive-volleyball-indoors-generated-by-ai_188544-14006.jpg?t=st=1731957743~exp=1731961343~hmac=e62461e94e89e5f6d6d768b173989ceff957cd31d3eb59301e3918753f33ddc2&w=2000",
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