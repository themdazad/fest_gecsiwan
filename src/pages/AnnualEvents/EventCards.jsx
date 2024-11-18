import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function Events() {
  const list = [
    {
      CardTittle: "Carrom",
      route: "Carrom",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGibKHotGCarOdSdWU-OH7CHUIZB6YHqbug&s",
    },

    {
      CardTittle: "Cricket",
      route: "Cricket",
      img: "https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c7ca519b-a7e5-4a70-b046-f5fc6cdb0553/a95c015d-6b42-4e4f-8cbc-cff9edbb9644.png",
    },
    {
      CardTittle: "Football",
      route: "Football",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESodR9O2LBnvO8UlnQWOH2IINxs22emhmaFReFDANSZ1aBLGjU-yZqpV_fGzEqaPhq38&usqp=CAU",
    },
    {
      CardTittle: "Chess",
      route: "Chess",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSroS1o8Sy7WcL0EWpej34JbmiajAx9oKOuQ&s",
    },
    {
      CardTittle: "Singing",
      route: "Music",
      img: "https://media.istockphoto.com/id/857600254/vector/karaoke.jpg?s=612x612&w=0&k=20&c=OQRFZSDEkW9QFI84dQq2mzJXhxGHL-DYEEZrQCTV5WU=",
    },
    {
      CardTittle: "Dance",
      route: "Dance",
      img: "https://t3.ftcdn.net/jpg/10/67/02/58/240_F_1067025883_gwP81fGpCNFQavd8xMyhRA5AUSam9YDz.jpg",
    },
    {
      CardTittle: "Drama",
      route: "Drama",
      img: "https://t4.ftcdn.net/jpg/02/36/47/59/240_F_236475915_FgKg2nLaElJGQnfkDSgregb21JltWfcc.jpg",
    },
    {
      CardTittle: "Art And Craft",
      route: "ArtAndCraft",
      img: "https://as1.ftcdn.net/v2/jpg/08/35/04/54/1000_F_835045442_crFp13w5H9IG7cVNTQzyTLt8MzjqmKNb.jpg",
    },
    {
      CardTittle: "Single Badminton",
      route: "SingleBadminton",
      img: "data:image/jpeg;base64,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",
    },
    {
      CardTittle: "Double Badminton",
      route: "DoubleBadminton",
      img: "https://imgs.search.brave.com/Ekd-Rl3F9XayumdF1W3X0ibQS7Hk_3s-PLN7hPhmWoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzAxLzkwLzI2/LzM2MF9GXzIwMTkw/MjYzOV9nWmhjZDY5/NXFqTFVuVnRKUFhx/bFdweE5qNVR2Vkh3/Mi5qcGc",
    },
    {
      CardTittle: "Standup Comedy",
      route: "StandupComedy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPJhF0q6-OfGitHTwfDjMghuKqSPmQjCirkD1p7HbU1eD8GaPjfFXCt6vM9R35EuUlec&usqp=CAU",
    },
    {
      CardTittle: "Literature",
      route: "Literature",
      img: "https://media.istockphoto.com/id/1366264103/vector/scholarship-and-student-loan-concept-invest-in-knowledge.jpg?s=612x612&w=0&k=20&c=crj828Yz7I2OOoVNpKXtSbth9okt1r3k4dURQLJcTWs=",
    },
    {
      CardTittle: "Fun Cricket",
      route: "FunCricket",
      img: "https://media.istockphoto.com/id/954769328/vector/creative-cricket-promotion-poster-deign.jpg?s=612x612&w=0&k=20&c=vMzr17bjSTIk4DiJKFQ3BqmxwhQl6nNpHvn43-UVFDk=",
    },
    {
      CardTittle: "Volleyball",
      route: "Volleyball",
      img: "https://img.freepik.com/premium-photo/volleyball-with-blue-white-volleyball-middle-it_1087825-21480.jpg",
    },
    {
      CardTittle: "Kabaddi",
      route: "Kabaddi",
      img: "https://media.istockphoto.com/id/1790754800/vector/kabaddi-players.jpg?s=612x612&w=0&k=20&c=6JG2nSY5gQCTQfX8ZfMMO_tLB29TziKFOCclT4TakrY=",
    },
    {
      CardTittle: "Athletes",
      route: "Athletes",
      img: "https://media.istockphoto.com/id/1300985567/vector/run-colorful-vector-silhouettes.jpg?s=612x612&w=0&k=20&c=zxlxpaYlTDKa3WGlQtiy5lgltYvDiLc_4Fdp2SbWrT4=",
    },
    {
      CardTittle: "Kho-Kho",
      route: "KhoKho",
      img: "https://media.istockphoto.com/id/903598250/photo/group-of-cambodian-children-playing-jumping-rope-on-the-beach-cambodia.jpg?s=612x612&w=0&k=20&c=3Ay4gNI4yT82JqllzCX7xMoSonFjGbjW8n2m1sDhnO4=",
    },
    {
      CardTittle: "Tug Of War",
      route: "TugOfWar",
      img: "https://media.istockphoto.com/id/1370499564/vector/set-of-stick-figures-tug-of-war-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=sV1i983dsyxx_21zcA_KTD729H1j71FUNBsxT6N03Mk=",
    },
    {
      CardTittle: "Table Tennis",
      route: "TableTennis",
      img: "https://img.freepik.com/premium-photo/table-tennis_919955-36175.jpg",
    },
    {
      CardTittle: "Skipping",
      route: "Skipping",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBO8pX9naE2alnm4k4e42p-lWVnoxggx5jWJktBvGcdav3ZYvPSiROBHwGjWvWkKD-Dc&usqp=CAU",
    },
    {
      CardTittle: "Running",
      route: "Running",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNugVB68_Ig4J0GgkKihUSriGvPuLxXHY6Q&sg",
    },
    {
      CardTittle: "Pubg",
      route: "Pubg",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/PlayerUnknown%27s_Battlegrounds_Mobile.webp/180px-PlayerUnknown%27s_Battlegrounds_Mobile.webp.png",
    },
    {
      CardTittle: "Free Fire",
      route: "FreeFire",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPg3qj-nH4xgQlZauhf3BAo3eHNAyYn55w0g&s",
    },
  ];

  // Sort the list array alphabetically by the CardTittle
  const sortedList = list.sort((a, b) =>
    a.CardTittle.localeCompare(b.CardTittle)
  );

  return (
    <div className="max-w-[1980px] m-auto px-[5%] my-12 gap-4 md:gap-8 md:gap-y-16 grid grid-cols-2 sm:grid-cols-6 ">
      {sortedList.map((item, index) => (
        <Card
          as={NavLink}
          to={`/Events/${item.route}`}
          className="relative hover:text-amber-400 aspect-square outline-1 hover:outline-amber-400"
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
              alt={item.route}
              className="w-full object-cover"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="absolute  bottom-0 left-0 right-0 z-20 h-16 bg-gradient-to-t from-black to-transparent text-white">
            <div className="w-full flex justify-between items-center">
              <b className="text-lg">{item.CardTittle}</b>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
