import Template from "../EventPage";


const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFUUF9av2REh08OyOX671EEkBGnSi2pd7izKyUOtHsjRZAMqnO-3JPtpJdP__n7I4y60&usqp=CAU",
    Tittle: "Cricket",
    Description:"A thrilling team sport played with a bat and ball, where two teams compete to score runs and dismiss opponents. The game is played on a large oval field with a pitch at the center, and the objective is to score more runs than the opposing team. The batting team aims to hit the ball and run between wickets, while the bowling team tries to get the batsmen out through various methods like bowling them out, catching them, or running them out. Cricket is a game of skill, strategy, and teamwork, with formats ranging from fast-paced T20 matches to the longer and more strategic Test matches.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/q7XjJaWeG8GuzGNNA",
  }

  const GameRules = [
    "Standard cricket rules apply; 11 players per team.",
        "Matches played in overs format with a set number of overs.",
        "No external assistance or substitutions during the match."
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

const Cricket = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Cricket;