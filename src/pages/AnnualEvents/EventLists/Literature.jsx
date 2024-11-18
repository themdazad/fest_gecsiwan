import Template from "../EventPage";


const data =  { 
  BannerImage: "https://static.vecteezy.com/system/resources/previews/024/576/416/large_2x/abundance-of-old-literature-on-wooden-shelves-generated-by-ai-photo.jpg",
    Tittle: "Literature",
    Description:"It’s a celebration of thought, expression, and creativity, where everyone is encouraged to not just read but to feel the words, to live in the moment of the narrative, and to engage with the audience in a way that only literature can.",
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

const Literature = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Literature;