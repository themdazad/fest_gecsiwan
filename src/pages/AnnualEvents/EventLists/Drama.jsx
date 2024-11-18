import Template from "../EventPage";


const data =  { 
  BannerImage: "https://img.freepik.com/free-photo/retro-world-theatre-day-scenes_23-2151211437.jpg?t=st=1731954998~exp=1731958598~hmac=866b1c22b7b5e2d35a15751eb6c16ec2097c118a34e5321c35ead249cb0f16ca&w=2000",
    Tittle: "Drama",
    Description:"In India, drama is a rich tradition that blends storytelling with music, dance, and vibrant performances. Rooted in ancient art forms like Sanskrit theatre and folk drama, Indian drama often reflects cultural values, mythological stories, social issues, and emotions in a way that resonates deeply with audiences. Whether in classical performances like Natya Shastra or modern plays in regional languages, drama in India is an expression of creativity, passion, and social commentary. It combines elements of tradition and contemporary thought, offering both entertainment and a mirror to society, while engaging audiences with powerful storytelling.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdfmC5F8R88LpA4Pmng98zeU0u4wZaR_JUtH2HI1f29vnSGmQ/viewform?usp=sf_link",
  }

  const GameRules = [
    "Original scripts or adaptations are allowed.",
    "Performances should not exceed 15 minutes.",
    "Props and costumes should be minimal but effective."
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

const Drama = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Drama;