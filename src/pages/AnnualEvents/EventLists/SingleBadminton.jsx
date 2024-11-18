import Template from "../EventPage";


const data =  { 
    Tittle: "Single Badminton",
    Image: "https://imgs.search.brave.com/Cg-bJoB7Y6-VbLsBswY9dVNFUnlyD3VtstV4XJwwqhs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWct/YXdzLmVob3djZG4u/Y29tLzc1MHg0Mjhw/L3Bob3Rvcy5kZW1h/bmRzdHVkaW9zLmNv/bS9nZXR0eS9hcnRp/Y2xlLzE0NC8yNDQv/MTc4MjgyODczLmpw/Zw",
    Form: "https://forms.gle/NtY3Xr4rLqV1cKdE9",
  }

const SingleBadminton = () => {
  return (
  <Template Data = {data}/>
  )
}
export default SingleBadminton;