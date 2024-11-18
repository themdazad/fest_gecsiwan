import Template from "../EventPage";


const data =  { 
  BannerImage: "https://sportxindia.com/wp-content/uploads/2024/03/image-15.jpg?w=1024",
    Tittle: "Kho-Kho",
    Description:"This traditional game is a test of speed, strategy, and quick reflexes. Two teams take turns chasing and dodging, with the aim to tag opponents while avoiding being caught. It’s a fast-paced, high-energy game where every second counts, requiring perfect timing and flawless coordination. Whether you're sprinting to tag or dodging with finesse, Kho Kho brings out the best in teamwork and agility, making it an unforgettable part of our event.",
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

const KhoKho = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default KhoKho;