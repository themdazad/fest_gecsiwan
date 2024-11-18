import Template from "../EventPage";

const data =  { 
  BannerImage: "https://img.freepik.com/free-photo/table-tennis-ping-pong_1232-2658.jpg?t=st=1731957627~exp=1731961227~hmac=80d36cb52307e0a028f7f7d618dd542e0703420caee56a67c22f693a590b5267&w=2000",
    Tittle: "Table Tennis",
    Description:"Take your place at the table and experience the thrill of this fast-paced, high-intensity game. Table Tennis, often called ping-pong, demands quick reflexes, precision shots, and strategic gameplay. Whether it’s singles or doubles, every rally is a battle of skill, agility, and focus.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/nhZe2aMuurtwKRKz8",
  }

  const GameRules = [
   "Game Format: Matches are played in singles or doubles, with each game up to 11 points (win by 2 points).",
   "Serve Rules: Alternate serves every 2 points. Serve must be behind the table and above the playing surface.",
   "Serve Rules: Alternate serves every 2 points. Serve must be behind the table and above the playing surface.",
   "Scoring: A point is scored when the opponent fails to return the ball, hits it out, or doesn’t follow serving rules.",
   "Fair Play: Respect your opponent and play with integrity.",
   "Winning: Best-of-three or best-of-five games, as decided by the organizers.",
  ];

  const CoordinatorsName =[
    {
      "name": "N/A",
      "phone": "0987654321"
    }
  ]

const TableTennis = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default TableTennis;