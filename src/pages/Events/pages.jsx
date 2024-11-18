import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function Events() {
  const list = [
    {
      title: "Carrom",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppYOILObm8X95XX9jgrzH1stYvLaM-e_sWg&s",
      
    },
    {
      title: "Kabaddi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5crFxPhwmhZLYS3ECFNPUrnyMCONa7xmGCQ&s",
      
    },
    {
      title: "Cricket",
      img: "https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c7ca519b-a7e5-4a70-b046-f5fc6cdb0553/a95c015d-6b42-4e4f-8cbc-cff9edbb9644.png",
      
    },
    {
      title: "Football",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESodR9O2LBnvO8UlnQWOH2IINxs22emhmaFReFDANSZ1aBLGjU-yZqpV_fGzEqaPhq38&usqp=CAU",
      
    },
    {
      title: "Chess",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSroS1o8Sy7WcL0EWpej34JbmiajAx9oKOuQ&s",
      
    },
    {
      title: "Music",
      img: "https://v2.amp-cdn.net/wp-content/uploads/2023/04/bruno-cervera-Gi6-m_t_W-E-unsplash-2600x1736.jpg",
      
    },
    {
      title: "Dance",
      img: "https://t3.ftcdn.net/jpg/10/67/02/58/240_F_1067025883_gwP81fGpCNFQavd8xMyhRA5AUSam9YDz.jpg",
      
    },
    {
      title: "Drama",
      img: "https://t4.ftcdn.net/jpg/02/36/47/59/240_F_236475915_FgKg2nLaElJGQnfkDSgregb21JltWfcc.jpg",
      
    },
    {
      title: "ArtAndCraft",
      img: "https://as1.ftcdn.net/v2/jpg/08/35/04/54/1000_F_835045442_crFp13w5H9IG7cVNTQzyTLt8MzjqmKNb.jpg",
      
    },
    {
      title: "StandupComedy",
      img: "https://t4.ftcdn.net/jpg/09/68/11/69/240_F_968116952_WhbjxSgwX2puXOWDTBJGCK4RqdyJZTGo.jpg",
      
    },
    {
      title: "Running",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNugVB68_Ig4J0GgkKihUSriGvPuLxXHY6Q&sg",
      
    },
  ];

  return (
    <div className="max-w-[1980px] m-auto px-[5%] my-12 gap-6 grid grid-cols-2 sm:grid-cols-5">
      {list.map((item, index) => (
        <Card as={NavLink} to={`Events/${item.title}`}
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
          <CardFooter className="absolute  bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-black to-transparent text-white">
            <div className="w-full flex justify-between items-center">
              <b className="text-lg">{item.title}</b>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
