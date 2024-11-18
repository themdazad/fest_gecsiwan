import Events from "../AnnualEvents/EventCards";
import { Image } from "@nextui-org/react";
export const EventDetails = () => {
  return (
    <section>
      {/* Event banner section  */}
      <div
        className="bg-[url('https://dgu.ac/thumb/1400x560/images/header-images/life-at-dgu/college-fest/4.jpg')] bg-center aspect-video md:aspect-[3/1] bg-cover bg-no-repeat relative header w-full"
        >
        <div className="  absolute z-10 overflow-visible p-0 ">
          {/* background section for event  */}{" "}
          <Image src="https://dgu.ac/life-at-dgu/college-fest"/>
        </div>

        <div className="absolute flex max-md:flex-col justify-between items-center px-[5%] bottom-0 left-0 right-0 z-20 py-6 bg-gradient-to-t from-black to-transparent text-white">
          {/* some tittle will add here */}
          <h2 className="text-5xl text-amber-300 max-md:my-4 md:text-6xl font-semibold max-md:text-center">
           Participate in Events
          </h2>
          <div className="date flex items-center space-x-4">
            <p >Last Date: 24 November 2024</p>
          </div>
        </div>
      </div>
    <section>
      <Events />
    </section>
    </section>
  );
};
