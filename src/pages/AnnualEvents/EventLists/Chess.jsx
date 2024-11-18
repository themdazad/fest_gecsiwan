import Template from "../EventPage";

const data =  { 
  BannerImage: "https://png.pngtree.com/background/20230525/original/pngtree-chess-board-is-broken-up-with-a-piece-on-top-picture-image_2730712.jpg",
    Tittle: "Chess",
    Description:"A timeless game of strategy and intellect, where two players engage in a battle of minds. Each move is carefully calculated, as players control an army of pieces—pawns, knights, bishops, rooks, queens, and kings—on a 64-square board. The objective is to checkmate the opponent's king, cornering it with no escape. Every move requires anticipation, planning, and foresight, making it a game of patience, precision, and skill. Whether in a friendly match or a fierce tournament, chess tests the limits of concentration and strategic thinking.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/4zifu3j3njf8tdcWA",
  }

  const GameRules = [
    "Standard chess rules apply; the player who checkmates the king wins.",
        "Each player has a set time limit; clock rule applies.",
        "No illegal moves allowed."
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
const Chess = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Chess;