import Events from "../AnnualEvents/EventCards";
import { Image } from "@nextui-org/react";
export const EventDetails = () => {
  return (
    <section>
      {/* Event banner section  */}
      <div
        className="bg-[url('https://img.freepik.com/free-photo/crowd-people-raising-their-hands-air-music-festival_384344-5159.jpg?t=st=1731955547~exp=1731959147~hmac=2e5aee2f61250516783d99896eadb350e9b3daae3a6624c86e98549d793a8c90&w=1800')] bg-center aspect-video md:aspect-[3/1] bg-cover bg-no-repeat relative header w-full"
        >
        <div className="  absolute z-10 overflow-visible p-0 ">
          {/* background section for event  */}{" "}
          <Image src="https://dgu.ac/life-at-dgu/college-fest"/>
        </div>

        <div className="absolute flex max-md:flex-col justify-between items-center px-[5%] bottom-0 left-0 right-0 z-20  bg-gradient-to-t from-black to-transparent text-white">
          {/* some tittle will add here */}
          <h2 className="text-5xl  mt-6 md:text-6xl font-semibold max-md:text-center">
           Participate in Events
          </h2>
          <div className="date flex items-center space-x-4">
            <p >Last Date: Over</p>
          </div>
        </div>
      </div>
    <section>
      <Events />
    </section>
    </section>
  );
};
