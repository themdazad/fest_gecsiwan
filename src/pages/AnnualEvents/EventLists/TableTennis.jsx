import Template from "../EventPage";


const data =  { 
    Tittle: "Table Tennis",
    Image: "https://t4.ftcdn.net/jpg/08/24/35/33/240_F_824353352_KIbaUbV86xTLWlD2f6UIReJ9SaYtpUJZ.jpg",
    Form: "https://forms.gle/NtY3Xr4rLqV1cKdE9",
  }

const TableTennis = () => {
  return (
  <Template Data = {data}/>
  )
}
export default TableTennis;