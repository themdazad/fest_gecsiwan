import Template from "../EventPage";


const data =  { 
  BannerImage: "https://sportxindia.com/wp-content/uploads/2024/03/image-15.jpg?w=1024",
    Tittle: "Kho-Kho",
    Description:"This traditional game is a test of speed, strategy, and quick reflexes. Two teams take turns chasing and dodging, with the aim to tag opponents while avoiding being caught. It’s a fast-paced, high-energy game where every second counts, requiring perfect timing and flawless coordination. Whether you're sprinting to tag or dodging with finesse, Kho Kho brings out the best in teamwork and agility, making it an unforgettable part of our event.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "",
  }

  const GameRules = [
    "Two teams of 9; one team runs while the other chases.",
    "Chasing team must tag members of the running team to score points.",
    "Each team gets one chance to run and chase."
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

const KhoKho = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default KhoKho;