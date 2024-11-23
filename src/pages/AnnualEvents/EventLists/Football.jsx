import Template from "../EventPage";

const data =  { 
  BannerImage: "https://img.freepik.com/free-photo/close-up-athlete-playing-soccer_23-2150845598.jpg?t=st=1731957000~exp=1731960600~hmac=82b8244bd093e53f76ad892ddf35ea750df5e39b09d5dc1bd61e4ddda4e713d7&w=1800",
    Tittle: "Football",
    Description:"Get ready for an action-packed football tournament at our college annual event! Teams will battle it out on the field, showcasing their speed, skill, and teamwork. It’s a game of strategy, agility, and passion, as players work together to score goals and defend their side. The excitement builds as students cheer for their teams, creating an unforgettable atmosphere of school spirit. Whether it’s a thrilling last-minute goal or flawless teamwork, football promises to be one of the most exciting highlights of the event.",
    Date: "21-11-2024  3:00 PM",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/CXQhUdCg6nD52CX86",
  }

  const GameRules = [
    "Matches played with 11 players per side.",
        "FIFA rules apply with a duration of 90 minutes, divided into two halves.",
        "No offside violations or dangerous play allowed."
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

const Football = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Football;