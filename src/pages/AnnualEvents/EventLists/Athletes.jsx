import Template from "../EventPage";

const data =  { 
  BannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT42VAePOwEJIM_20EBi_2-Pc7qNOBl9p79huFId9_zLVnXFdtM_VJgjxs_5ljqrtNJeI&usqp=CAU",
    Tittle: "Athletes",
    Description:"Experience the thrill of competition and the spirit of sportsmanship at the Athletics Meet! Witness raw talent and determination as athletes push their limits in a series of exhilarating events, celebrating strength, speed, and skill.",
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

const Athletes = () => {
  return (
  <Template Data = {data} GameRules={GameRules} CoordinatorsName={CoordinatorsName}/>
  )
}
export default Athletes;