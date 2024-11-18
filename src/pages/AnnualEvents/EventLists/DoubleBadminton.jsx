import Template from "../EventPage";

const data =  { 
  BannerImage: "https://s10896.pcdn.co/wp-content/uploads/2024/01/Pembroke-Generic-Badminton-Tournament-Web-Event-Header.jpg",
    Tittle: "Badminton Doubles",
    Description:"A fast-paced and exciting competition where players or teams battle for supremacy on the court. In badminton, athletes use lightweight rackets to hit a shuttlecock over a net, aiming to score points by making the shuttlecock land in the opponent’s side of the court. The tournament can feature singles or doubles matches, with players showcasing speed, agility, precision, and strategy. Whether it’s a friendly competition or a high-stakes event, badminton tournaments test reflexes and endurance, providing thrilling moments for both participants and spectators.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://docs.google.com/forms/d/e/1FAIpQLSckiFxeNKuolr6_091AFRPwUhElxi6G2YyjiX2yahyPdm0X1w/viewform?usp=sf_link",
  }

  const GameRules = [
    "Played in doubles format; 2 players per team.",
    "Matches played to 21 points; best of 3 sets.",
    "No faults; server must serve diagonally."
  ];

  const CoordinatorsName =[
    {
      "name": "N/A",
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

const DoubleBadminton = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default DoubleBadminton;