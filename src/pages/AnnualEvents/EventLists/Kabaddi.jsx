import Template from "../EventPage";

const data =  { 
  BannerImage: "https://t3.ftcdn.net/jpg/05/62/89/18/360_F_562891800_dcIUi1Ovx2PCPWILcidOJEGzLGce5D43.jpg",
    Tittle: "Kabaddi",
    Description:"Dive into the world of precision, strategy, and skill with our Carrom Tournament at GEC, Siwan.Join us to showcase your carrom skills, compete with the best, and make your mark.",
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
const Kabaddi = () => {
  return (
    <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Kabaddi;