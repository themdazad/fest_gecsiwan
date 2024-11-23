import Template from "../EventPage";

const data =  { 
  BannerImage: "https://img.freepik.com/free-photo/black-white-view-theatre-performer_23-2151184700.jpg?t=st=1731957230~exp=1731960830~hmac=e4b5a13787f65da16c3495e0fdec9ddab3de97f5e30d3b30aafd99e66ef471fb&w=1800",
    Tittle: "Standup Comedy",
    Description:"With every punchline and perfectly timed pause, comedians connect with the audience, leaving them in splits. Whether it’s relatable humor, witty one-liners, or bold satire, this event is all about spreading joy and showcasing the art of humor.",
    Date: "21-11-2024  3:00 PM",
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