import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5s_nLd_RF2JYpuIhYAwBjF_d6GA761xkpokciBn-F0z6GkWrMKZbNIs8AtbAlnqjVPgI&usqp=CAU",
    Tittle: "Standup Comedy",
    Description:"With every punchline and perfectly timed pause, comedians connect with the audience, leaving them in splits. Whether it’s relatable humor, witty one-liners, or bold satire, this event is all about spreading joy and showcasing the art of humor.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/2bsqzJxNjTWunEieA",
  }

  const GameRules = [
    "Language: Performances should be in clean and appropriate language suitable for all audiences.", 
    "Props: Minimal props allowed; the focus should remain on the performer and their delivery.", 
    "Respect: Content must avoid offensive or disrespectful remarks about individuals, groups, or sensitive topics.", 
    "Judging Criteria: Participants will be judged on originality, delivery, timing, and audience engagement.", 
  ];

  const CoordinatorsName =[
    {
      "name": "Krishna Kumar",
      "phone": "9334779039"
    },
    {
      "name": "Dheeraj Kumar",
      "phone": "7362859326"
    },
   
  ]

const StandupComedy = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default StandupComedy;