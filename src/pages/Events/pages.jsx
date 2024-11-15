import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function Events() {
  const list = [
    {
      title: "Carrom",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppYOILObm8X95XX9jgrzH1stYvLaM-e_sWg&s",
      link: "/EventDetails",
    },
    {
      title: "Kabaddi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5crFxPhwmhZLYS3ECFNPUrnyMCONa7xmGCQ&s",
      link: "/EventDetails",
    },
    {
      title: "Cricket",
      img: "https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c7ca519b-a7e5-4a70-b046-f5fc6cdb0553/a95c015d-6b42-4e4f-8cbc-cff9edbb9644.png",
      link: "/EventDetails",
    },
    {
      title: "Football",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESodR9O2LBnvO8UlnQWOH2IINxs22emhmaFReFDANSZ1aBLGjU-yZqpV_fGzEqaPhq38&usqp=CAU",
      link: "/EventDetails",
    },
    {
      title: "Chess",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSroS1o8Sy7WcL0EWpej34JbmiajAx9oKOuQ&s",
      link: "/EventDetails",
    },
  ];

  return (
    <div className="max-w-[1980px] m-auto px-[5%] my-12 gap-6 grid grid-cols-2 sm:grid-cols-5">
      {list.map((item, index) => (
        <Card as={NavLink} to={item.link}
          className="relative hover:text-amber-400 aspect-square"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="absolute z-10 overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="absolute  bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black to-transparent text-white">
            <div className="w-full flex justify-between items-center">
              <b className="text-lg">{item.title}</b>
              <p className="text-default-500">{item.link}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
