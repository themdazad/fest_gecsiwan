import Template from "../EventPage";

const data =  { 
  BannerImage: "https://img.freepik.com/premium-photo/play-badminton-indoor-equipment-sports-equipment-stock-photo-sporty-black-background-minimalist-stock-photo-featuring-shuttlecocks-badminton-racket-black-background_1336356-17017.jpg",
    Tittle: "Badminton Singles",
    Description:"Step onto the court where agility meets precision in the exciting game of Badminton. With every swift serve, powerful smash, and strategic drop shot, players showcase their skill, speed, and focus. Whether it’s singles or doubles, badminton is a thrilling test of reflexes and teamwork, keeping both players and spectators on edge.",
    Date: "21-11-2024  3:00 PM",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdt_OLQHA81lwfwaLokgQPV_cUq2qMOk7-hvYfD7f2qt7qPGg/viewform?usp=sf_link",
  }

  const GameRules = [
    "Singles format; one player per side.",
        "Matches played to 21 points; best of 3 sets.",
        "No faults; server must serve diagonally."
  ];

  const CoordinatorsName =[
   
    {
      "name": "N/A",
      "phone": "0987654321"
    }
  ]

const SingleBadminton = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default SingleBadminton;