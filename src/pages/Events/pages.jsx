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
      img: "https://media.istockphoto.com/id/857600254/vector/karaoke.jpg?s=612x612&w=0&k=20&c=OQRFZSDEkW9QFI84dQq2mzJXhxGHL-DYEEZrQCTV5WU=",
      
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
      title: "SingleBadminton",
      img: "https://imgs.search.brave.com/Yk_h94tWUnYYw_XxQu66-Iy-NVTSUCU8SgqWq6OPewc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ud3Nj/ZG4uY29tL21lZGlh/L3d5c2l3eWcvYnV5/ZXJzZ3VpZGUvV29v/ZGVuLWJhZG1pbnRv/bi1jb3VydF8xLmpw/Zw",
      
    },
    {
      title: "Double Badminton",
      img: "https://imgs.search.brave.com/Ekd-Rl3F9XayumdF1W3X0ibQS7Hk_3s-PLN7hPhmWoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzAxLzkwLzI2/LzM2MF9GXzIwMTkw/MjYzOV9nWmhjZDY5/NXFqTFVuVnRKUFhx/bFdweE5qNVR2Vkh3/Mi5qcGc",
      
    },
    {
      title: "Standup Comedy",
      img: "https://imgs.search.brave.com/mLOwS2bUVveoiOJjODEsIcu2C-Hb6A8veDi80Q-QxFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdGFu/ZC11cC1jb21lZHkt/c3RhZ2UtaGlnaC1x/dWFsaXR5LXJlYWxp/c3RpYy1yZW5kZXIt/Njc4NjY3MzkuanBn",
      
    },
    {
      title: "Literature",
      img: "https://media.istockphoto.com/id/1366264103/vector/scholarship-and-student-loan-concept-invest-in-knowledge.jpg?s=612x612&w=0&k=20&c=crj828Yz7I2OOoVNpKXtSbth9okt1r3k4dURQLJcTWs=",
      
    },
    {
      title: "Fun Cricket",
      img: "https://media.istockphoto.com/id/954769328/vector/creative-cricket-promotion-poster-deign.jpg?s=612x612&w=0&k=20&c=vMzr17bjSTIk4DiJKFQ3BqmxwhQl6nNpHvn43-UVFDk=",
      
    },
    {
      title: "Volleyball",
      img: "https://media.istockphoto.com/id/1398748252/vector/classic-volley-club-logo-tournament-volleyball-design-vector-on-white-background.jpg?s=612x612&w=0&k=20&c=JLgMqsZReDH2XzuO0IEubm58807P_8_62xeBfdlQTf8=",
      
    },
    {
      title: "Kabaddi",
      img: "https://media.istockphoto.com/id/1790754800/vector/kabaddi-players.jpg?s=612x612&w=0&k=20&c=6JG2nSY5gQCTQfX8ZfMMO_tLB29TziKFOCclT4TakrY=",
      
    },
    {
      title: "Carrom",
      img: "https://media.istockphoto.com/id/1460436222/vector/carom-or-carrom-indian-board-game-black-and-red-pattern-vector-illustration-isolated-on.jpg?s=612x612&w=0&k=20&c=4V1QiNDKKbsalvxJkUXMGiEXo5vWWXapZKrYDDI6fN8=",
      
    },
    {
      title: "Athletes",
      img: "https://media.istockphoto.com/id/1300985567/vector/run-colorful-vector-silhouettes.jpg?s=612x612&w=0&k=20&c=zxlxpaYlTDKa3WGlQtiy5lgltYvDiLc_4Fdp2SbWrT4=",
      
    },
    {
      title: "Kho Kho",
      img: "https://media.istockphoto.com/id/903598250/photo/group-of-cambodian-children-playing-jumping-rope-on-the-beach-cambodia.jpg?s=612x612&w=0&k=20&c=3Ay4gNI4yT82JqllzCX7xMoSonFjGbjW8n2m1sDhnO4=",
      
    },
    {
      title: "Tug of War",
      img: "https://media.istockphoto.com/id/1370499564/vector/set-of-stick-figures-tug-of-war-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=sV1i983dsyxx_21zcA_KTD729H1j71FUNBsxT6N03Mk=",
      
    },
    {
      title: "Table Tennis",
      img: "https://media.istockphoto.com/id/1306654846/vector/ping-pong-rackets.jpg?s=612x612&w=0&k=20&c=VdNZhOLm-xS3GVvGX770u2ScJGvPjOkqPgGwLYi5PRU=",
      
    },
    {
      title: "Skipping",
      img: "https://media.istockphoto.com/id/1018810862/vector/happy-boy-and-girl-jumping-up-over-skipping-ropes-joyful-kids-activity-flat-style-vector.jpg?s=612x612&w=0&k=20&c=KFIYABVVh3gi9o8zHSzz-LBC8kByIMER69QYDXSMHFY=",
      
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
