import Template from "../EventPage";


const data = {
  BannerImage: "https://img.freepik.com/free-photo/crowd-cheering-music-festival-hands-raised-air_587448-8132.jpg?t=st=1731956639~exp=1731960239~hmac=cd71a8943733431cfbb66a1dd52e8cfd86d714832d03f35e1cd70bb4fbce9a5b&w=1800",
  Tittle: "Dance",
  Description: "A captivating form of expression where movement and rhythm come together to convey emotion, tell stories, and entertain. Dancers use their bodies to interpret music, creating visually stunning performances that showcase grace, strength, and creativity. Whether it's classical ballet, energetic hip-hop, cultural folk dances, or contemporary styles, dance is a universal language that transcends boundaries, connecting people through its powerful visual and emotional impact. It’s an art form that requires practice, passion, and dedication, making every performance a unique and powerful experience.",
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

const CoordinatorsName = [
  { 
    "name": "Vivek Kumar",
    "role": "Precident",
    "phone": "1234567890"
  },
  {
    "name": "Aman Kumar",
    "role":"Vice-Precidet",
    "phone": "0987654321"
  },
  {
    "name": "Rajkumari ",
    "role":"",
    "phone": "0987654321"
  }
]

const Dance = () => {
  return (
    <Template Data={data} GameRules={GameRules} CoordinatorsName={CoordinatorsName} />
  )
}
export default Dance;