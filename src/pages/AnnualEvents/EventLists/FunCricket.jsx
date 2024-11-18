import Template from "../EventPage";


const data =  { 
  BannerImage: "https://img.freepik.com/premium-photo/cricket-game-background_181203-29734.jpg",
    Tittle: "Fun Cricket",
    Description:"Join us for a casual yet exciting game of Fun Cricket at our college annual event. This version of the game is designed to be all about enjoyment and camaraderie. With flexible rules and quick matches, it’s perfect for players of all skill levels. Whether you’re in it for the friendly competition or just to have some fun with friends, this game creates a relaxed, high-spirited atmosphere. It’s cricket like you’ve never experienced before, where the goal is simply to have fun and make lasting memories.",
    Date: "DD-MM-2024",
    Prize: "000.00",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "",
  }

  const GameRules = [
    "Rule 1: Add your rules here", 
    "Rule 2: Add some more rules here",
  ];

  const CoordinatorsName =[
    {
      "name": "John Doe",
      "phone": "1234567890"
    },
    {
      "name": "Jane Doe",
      "phone": "0987654321"
    },
    {
      "name": "Jane Doe",
      "phone": "0987654321"
    }
  ]

const FunCricket = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default FunCricket;