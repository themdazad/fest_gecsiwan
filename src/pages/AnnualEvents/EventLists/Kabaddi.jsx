import Template from "../EventPage";

const data =  { 
  BannerImage: "https://t3.ftcdn.net/jpg/05/62/89/18/360_F_562891800_dcIUi1Ovx2PCPWILcidOJEGzLGce5D43.jpg",
    Tittle: "Kabaddi",
    Description:"Step onto the mat for an exhilarating game of Kabaddi at our college annual event. This fast-paced, contact sport challenges both physical strength and mental strategy. Played in teams, the goal is to tag opponents while holding your breath, making it a thrilling combination of agility, stamina, and quick thinking. Whether you're diving into a tackle or trying to outsmart your opponents with strategic raids, Kabaddi is all about teamwork and determination. Get ready for an action-packed experience that will have everyone on the edge of their seats.",
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
const Kabaddi = () => {
  return (
    <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Kabaddi;