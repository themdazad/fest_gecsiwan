/* eslint-disable react/prop-types */
import {Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export const Events = () => {
  return (
    <div className="min-h-screen text-white">
        <div className="header px-[5%] h-[300px] sm: bg-[url('images/event_bg.png')] bg-no-repeat bg-cover grid place-content-center pt-16  object-cover ">
          <Image src="images/EVENTS_TEXT.svg" height={40}/>
        </div>
        <div className="card-section p-10 bg-black grid   grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center justify-center">
            <Cards link={"https://forms.gle/CXQhUdCg6nD52CX86"} tittle={"Footbal"} image={"https://thumbs.dreamstime.com/z/sport-template-soccer-football-ball-background-design-place-your-content-poster-print-39871220.jpg"}/>
            <Cards link={"https://docs.google.com/forms/d/e/1FAIpQLSckiFxeNKuolr6_091AFRPwUhElxi6G2YyjiX2yahyPdm0X1w/viewform?usp=sf_link"} tittle={"Badminton"} image={"https://imgcdn.stablediffusionweb.com/2024/4/9/16fa90ea-0cab-47cd-9563-965cd4135b28.jpg"}/>
            <Cards link={"/"} tittle={"Art & Craft"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogRiDSWchZ0TYk39AQK8nFc_BWOmG3O3PQA&s"}/>
            <Cards tittle={"Carrom"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQst87nT_h9_QDTQWoyVvTrZxQn90E_5z-_KGLs6d7glW5qEIxteZoBEn09vMjIcplb14I&usqp=CAU"}/>
            <Cards tittle={"Cricket"} image={"https://pics.craiyon.com/2024-09-23/FhlbFqCIS9yPYW_fntOnJQ.webp"}/>
            <Cards tittle={"Fun Cricket"} image={"https://wcc1-website-assets.s3.ap-southeast-1.amazonaws.com/s3fs-public/batattack.png"}/>
            <Cards tittle={"Volleyball"} image={"https://t3.ftcdn.net/jpg/01/71/81/70/360_F_171817041_DkMe5qd77ba9cUPs2cHqPFsWtIFVy0o1.jpg"}/>
            <Cards tittle={"Singing"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYD8swU5DabKYzdh_JINUuOhyXkkEDcCvVkYrUHtYUXxD11ojwI8ywztDFSxRirgzMoo&usqp=CAU"}/>
            <Cards tittle={"Dance"} image={"https://img.freepik.com/premium-photo/colorful-design-with-dancer_1274714-27143.jpg?w=360"}/>
            <Cards/>
        </div>
         </div>
  )
} 
const Cards = ({tittle,image,link}) => {
  return (
    <Card as={NavLink} to={link} className="py-4 bg-amber-400/10 hover:bg-amber-400 hover:text-black ">
      <CardBody className="overflow-visible ">
        <Image
          alt="Card background"
          className="object-cover aspect-square rounded-md "
          src={image}
          width={270}
        />
      </CardBody>
      <CardHeader className="text-center pb-0 pt-2 px-4 flex-col">
        <h4 className=" font-bold text-xl">{tittle}</h4>
      </CardHeader>
    </Card>
  );
}
