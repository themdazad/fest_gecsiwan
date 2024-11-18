import Template from "../EventPage";


const data =  { 
  BannerImage: "https://static.vecteezy.com/system/resources/previews/024/576/416/large_2x/abundance-of-old-literature-on-wooden-shelves-generated-by-ai-photo.jpg",
    Tittle: "Literature",
    Description:"It’s a celebration of thought, expression, and creativity, where everyone is encouraged to not just read but to feel the words, to live in the moment of the narrative, and to engage with the audience in a way that only literature can.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "",
  }

  const GameRules = [
    "Poetry, short stories, or dramatic readings allowed.",
    "Content must be original and suitable for all audiences.",
    "Judging based on creativity, presentation, and audience engagement."
  ];

  const CoordinatorsName =[
        {
      "name": "N/A",
      "phone": "0987654321"
    }
  ]

const Literature = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Literature;