import Template from "../EventPage";

const data =  { 
  BannerImage: "https://png.pngtree.com/background/20230525/original/pngtree-chess-board-is-broken-up-with-a-piece-on-top-picture-image_2730712.jpg",
    Tittle: "Chess",
    Description:"A timeless game of strategy and intellect, where two players engage in a battle of minds. Each move is carefully calculated, as players control an army of pieces—pawns, knights, bishops, rooks, queens, and kings—on a 64-square board. The objective is to checkmate the opponent's king, cornering it with no escape. Every move requires anticipation, planning, and foresight, making it a game of patience, precision, and skill. Whether in a friendly match or a fierce tournament, chess tests the limits of concentration and strategic thinking.",
    Date: "DD-MM-2024",
    Prize: "000.00",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/q7XjJaWeG8GuzGNNA",
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
const Chess = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Chess;