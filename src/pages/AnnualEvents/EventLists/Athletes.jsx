import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT42VAePOwEJIM_20EBi_2-Pc7qNOBl9p79huFId9_zLVnXFdtM_VJgjxs_5ljqrtNJeI&usqp=CAU",
    Tittle: "Athletes",
    Description:"Experience the thrill of competition and the spirit of sportsmanship at the Athletics Meet! Witness raw talent and determination as athletes push their limits in a series of exhilarating events, celebrating strength, speed, and skill.",
    Date: "DD-MM-2024",
    Prize: "Available Soon",
    Location: "Campus of GEC, Siwan",
    GoogleForm: "https://forms.gle/pm4otuCZKAfiTZy66",
  }

  const GameRules = [
    "Participants must follow event-specific rules for each athletic discipline.",
        "Wear appropriate sportswear; no unauthorized gear.",
        "Time limits and distances vary by event."
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

const Athletes = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Athletes;