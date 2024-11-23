import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64I_C32UAZPfx__I6zVYzkSjKIALGBYFdOA&s",
    Tittle: "Rope Skipping",
    Description:"Every skip, jump, and spin brings energy and excitement to the stage, blending athleticism with artistry. It’s not just a sport—it’s a performance that tests stamina while captivating the audience.",
    Date: "21-11-2024  3:00 PM",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/GjVGngFagZviWMB66",
  }

  const GameRules = [
    "Participants will jump rope continuously for a set duration.",
        "Maximum number of jumps counted in the given time wins.",
        "No other equipment except for the skipping rope allowed."
  ];

  const CoordinatorsName =[
        {
      "name": "N/A",
      "phone": "0987654321"
    }
  ]

const Skipping = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Skipping;