import Template from "../EventPage";


const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDFbtubs26gFVj56XEWQzd2I0SCiBZ2eoBg&s  ",
    Tittle: "Carrom",
    Description:"A captivating form of expression where movement and rhythm come together to convey emotion, tell stories, and entertain. Dancers use their bodies to interpret music, creating visually stunning performances that showcase grace, strength, and creativity. Whether it's classical ballet, energetic hip-hop, cultural folk dances, or contemporary styles, dance is a universal language that transcends boundaries, connecting people through its powerful visual and emotional impact. It’s an art form that requires practice, passion, and dedication, making every performance a unique and powerful experience.",
    Date: "DD-MM-2024",
    Prize: "000.00",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/q7XjJaWeG8GuzGNNA",
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

const Dance = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Dance;