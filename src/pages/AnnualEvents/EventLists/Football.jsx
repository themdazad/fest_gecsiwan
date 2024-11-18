import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5RRDF3doi647OnZE_LdFUcItZgC-fLNIf9XNtfAkSAj2mzU-W553q0ubiujcFbi5w3w&usqp=CAU",
    Tittle: "Football",
    Description:"Get ready for an action-packed football tournament at our college annual event! Teams will battle it out on the field, showcasing their speed, skill, and teamwork. It’s a game of strategy, agility, and passion, as players work together to score goals and defend their side. The excitement builds as students cheer for their teams, creating an unforgettable atmosphere of school spirit. Whether it’s a thrilling last-minute goal or flawless teamwork, football promises to be one of the most exciting highlights of the event.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "",
  }

  const GameRules = [
    "Matches played with 11 players per side.",
        "FIFA rules apply with a duration of 90 minutes, divided into two halves.",
        "No offside violations or dangerous play allowed."
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

const Football = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Football;