/* eslint-disable react/prop-types */

import { BsFileRuledFill } from "react-icons/bs";
import { GiTargetPrize } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { SiGoogleforms } from "react-icons/si";
import Coordinators from "./EventCoordinators";
import { NavLink } from "react-router-dom";

const Template = ({ Data, GameRules, CoordinatorsName }) => {
  {console.log(CoordinatorsName)}
  return (
    <section >
      {/* Event banner section  */}
      <div
        className="bg-center aspect-video md:aspect-[4/1] bg-cover bg-no-repeat relative header w-full"
        style={{
          backgroundImage: `url(${Data.BannerImage})`,
          filter: 'grayscale(100%) sepia(50%)', // Desaturate and apply sepia filter
        }}
      >
        <div className=" w-full h-full absolute z-10 overflow-visible p-0">
          {/* background section for event  */}{""}
        
        </div>

        <div className="absolute flex max-md:flex-col justify-between items-center  px-[5%] bottom-0 left-0 right-0 z-20 py-6 bg-gradient-to-t from-black to-transparent text-white">
          {/* some tittle will add here */}
          <h2 className="text-5xl max-md:my-4 md:text-8xl font-semibold max-md:text-center">
            {Data.Tittle}
          </h2>
          <div className="date flex items-center space-x-4">
            <p className="text-amber-400">{Data.Date}</p>
          </div>
        </div>
      </div>

      {/* Event Details  */}
      <div className="px-[5%] space-y-16 event_details py-16 max-w-[1440px] m-auto">
        {/* Event Description  */}
        <div className="EventDescription space-y-2">
          <h1 className="text-amber-400 text-3xl  font-semibold">
            About {Data.Tittle}
          </h1>
          <p className="text-xl">{Data.Description}</p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 max-sm:space-y-8">
          {/* Event Rules  */}
          <div className="EventRule space-y-2">
            <h1 className="text-amber-400 text-3xl font-semibold flex">
              <BsFileRuledFill />
              Rules
            </h1>
            <ul>
              {GameRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="innerCol2 space-y-6 ">
            {/* Event Prize  */}
            <div className="EventRule space-y-2 flex item-center">
              <h1 className="text-amber-400 text-3xl font-semibold flex">
                <GiTargetPrize />
                Prize
              </h1>
              <p>: {Data.Prize}</p>
            </div>
            {/* Event Location  */}
            <div className="EventRule space-y-2 flex font-bold item-center">
              <h1 className="text-amber-400 text-3xl font-semibold flex">
                <FaLocationDot />
                Location
              </h1>
              <p>: {Data.Location}</p>
            </div>
            {/* Event Participation Button  */}
            <Button
              as={NavLink}
              to={Data.GoogleForm}
              variant="ghost"
              color="warning"
              size="lg"
              startContent={<SiGoogleforms />}
            >
              Google Form
            </Button>
          </div>
        </section>

        {/* Event Coordinators  */}
        <div className="EventRule space-y-2">
          <h1 className="text-amber-400 text-3xl font-semibold flex flex-col items-center">
            <FaPeopleGroup />
            Coordinators
          </h1>
          <Coordinators CoordinatorsName={CoordinatorsName} />
        </div>
      </div>
    </section>
  );
};
export default Template;
