import Template from "../EventPage";


const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDFbtubs26gFVj56XEWQzd2I0SCiBZ2eoBg&s  ",
    Tittle: "Dance",
    Description:"A captivating form of expression where movement and rhythm come together to convey emotion, tell stories, and entertain. Dancers use their bodies to interpret music, creating visually stunning performances that showcase grace, strength, and creativity. Whether it's classical ballet, energetic hip-hop, cultural folk dances, or contemporary styles, dance is a universal language that transcends boundaries, connecting people through its powerful visual and emotional impact. It’s an art form that requires practice, passion, and dedication, making every performance a unique and powerful experience.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/q7XjJaWeG8GuzGNNA",
  }

  const GameRules = [
    "Performances must be original; any genre of dance is allowed.",
        "No props allowed unless specified by organizers.",
        "Judging based on creativity, technique, and performance."
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

const Dance = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Dance;