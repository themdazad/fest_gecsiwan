import Template from "../EventPage";

const data =  { 
  BannerImage: "https://img.freepik.com/free-photo/glowing-microphone-shines-stage-captivating-audience-generated-by-artificial-intelligence_188544-124623.jpg?t=st=1731956554~exp=1731960154~hmac=ebe1249d095b14a089041104db23702ae3cd8d591f1ee05d745d31b7d67e8983&w=2000",
    Tittle: "Singing",
    Description:"The microphone is your wand, and the stage is your canvas. Let your voice soar, touching every corner of the auditorium and every soul in the audience. From classical renditions to modern hits, this is your chance to let your talent shine and make the atmosphere unforgettable.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/tqFpvXNPhua8uphGA",
  }

  const GameRules = [
    "Performances can be solo or group.",
        "No pre-recorded tracks unless specified.",
        "Judging based on voice quality, rhythm, and stage presence."
  ];

  const CoordinatorsName =[
    {
      "name": "Shahnoor Instiyaque",
      "role": "President",
      "phone": "7547899882"
    },
    {
      "name": "Rikku Kumar",
      "role": "Vice President",
      "phone": "9973066392"
    },
    
  ]

const Singing = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Singing;