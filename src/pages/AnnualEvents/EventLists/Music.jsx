import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtM7y4zpISUEeaWe46nRanVRi01GqD9kmTWw&s",
    Title: "Singing",
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
      "phone": "7547899882"
    },
    {
      "name": "Rikku Kumar",
      "phone": "9973066392"
    },
    
  ]

const Music = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Music;