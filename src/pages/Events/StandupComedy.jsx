import Template from "./Template";


const data =  { 
    Tittle: "Stand-up Comedy",
    Image: "https://t4.ftcdn.net/jpg/08/24/35/33/240_F_824353352_KIbaUbV86xTLWlD2f6UIReJ9SaYtpUJZ.jpg",
    Form: "https://forms.gle/2bsqzJxNjTWunEieA",
  }

const StandupComedy = () => {
  return (
  <Template Data = {data}/>
  )
}
export default StandupComedy;