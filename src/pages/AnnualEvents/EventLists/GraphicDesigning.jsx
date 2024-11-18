import Template from "../EventPage";


const data =  { 
  BannerImage: "https://img.freepik.com/free-photo/contemporary-room-workplace-office-supplies-concept_53876-31810.jpg?t=st=1731951156~exp=1731954756~hmac=21b78d1e3490266f07e44f313b03b59d8f3bcc4ae3b255ba050232de3f6c87f1&w=1800",
    Tittle: "Graphic Designing",
    Description:"This is your moment to shine! Whether you're a professional or just starting out, our Graphic Design Contest gives you the platform to showcase your creativity and win incredible prizes. Show us your unique design perspective and compete with talented designers from around the world.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "",
  }

  const GameRules = [
  
    "Software: Canva, Adobe Photoshop, Figma",
    "Original Work: Submissions must be 100% original. No plagiarism allowed.",
    "Theme: Designs must follow the contest theme. Off-theme submissions will be disqualified.",
    "File Format: Submit designs in the specified format (e.g., .jpg, .png, .ai, .psd).",
    "Content Guidelines: Designs must be appropriate and free of offensive content.",
    "Prizes: Winners will receive [describe prizes]. Prizes cannot be exchanged for cash.",
    "Judging: Winners will be selected based on creativity, originality, and theme adherence.",
    "Disqualification: Entries that do not follow the rules or are incomplete will be disqualified."
  ];

  const CoordinatorsName =[
    
    {
      "name": "Bittu Kumar (SCE IoT)",
      "phone": "8292649687"
    }
  ]

const GraphicDesigning = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default GraphicDesigning;