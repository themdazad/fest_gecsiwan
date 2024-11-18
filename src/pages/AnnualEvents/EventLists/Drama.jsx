import Template from "../EventPage";


const data =  { 
  BannerImage: "https://cdn.ishencai.com/gallery/publish/2024/04/29/7bb8ab1cdf5e47969f1fc3461735dc68.png?x-oss-process=image/resize,w_500,h_500",
    Tittle: "Drama",
    Description:"In India, drama is a rich tradition that blends storytelling with music, dance, and vibrant performances. Rooted in ancient art forms like Sanskrit theatre and folk drama, Indian drama often reflects cultural values, mythological stories, social issues, and emotions in a way that resonates deeply with audiences. Whether in classical performances like Natya Shastra or modern plays in regional languages, drama in India is an expression of creativity, passion, and social commentary. It combines elements of tradition and contemporary thought, offering both entertainment and a mirror to society, while engaging audiences with powerful storytelling.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "",
  }

  const GameRules = [
    "Original scripts or adaptations are allowed.",
    "Performances should not exceed 15 minutes.",
    "Props and costumes should be minimal but effective."
  ];

  const CoordinatorsName =[
    {
      "name": "N/A",
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