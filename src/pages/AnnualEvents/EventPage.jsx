/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { BsFileRuledFill } from "react-icons/bs";
import { GiTargetPrize } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { SiGoogleforms } from "react-icons/si";
import Coordinators from "./EventCoordinators";
import { NavLink } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

const Template = ({ Data, GameRules, CoordinatorsName }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  {console.log(CoordinatorsName)}
  return (
    <section >
      {/* Event banner section  */}
      <div
        className="aspect-video md:aspect-[3/1] bg-cover bg-no-repeat relative header "
        style={{
          backgroundImage: `url(${Data.BannerImage})`,
        }}
      >
        <div className=" w-full h-full absolute z-10 overflow-visible p-0"/>
        <div className="absolute flex max-md:flex-col justify-between items-center  px-[5%] bottom-0 left-0 right-0 z-20 py-6 bg-gradient-to-t from-black to-transparent text-white">
          {/* some tittle will add here */}
          <h2 className="text-5xl max-md:my-4 md:text-8xl text-center font-semibold max-md:text-center">
            {Data.Tittle}
          </h2>
          <div className="date text-2xl flex items-center space-x-4">
            <p className="text-yellow-400">{Data.Date}</p>
          </div>
        </div>
      </div>

      {/* Event Details  */}
      <div className="px-[5%] space-y-16 event_details py-16 max-w-[1440px] m-auto">
        {/* Event Description  */}
        <div className="EventDescription space-y-2">
          <h1 className="text-yellow-400 text-3xl text-center font-semibold">
            Description
          </h1>
          <p className="text-xl text-center">{Data.Description}</p>
        </div>

        <section className="grid grid-cols-1 md:gap-8 md:grid-cols-2 max-sm:space-y-8">
          {/* Event Rules  */}
          <div className="EventRule space-y-2 grid md:justify-items-end  md:text-right">
            <h1 className="text-yellow-400 text-3xl font-semibold flex">
              <BsFileRuledFill />
              Rules
            </h1>
            <ul className="space-y-3">
              {GameRules.map((rule, index) => (
                <li key={index}>{index+1}. {rule}</li>
              ))}
            </ul>
          </div>

          <div className="innerCol2 space-y-6 ">
            {/* Event Prize  */}
            <div className="EventRule space-y-2 flex item-center">
              <h1 className="text-yellow-400 text-2xl font-semibold flex">
                <GiTargetPrize />
                Prize
              </h1>
              <p>: {Data.Prize}</p>
            </div>
            {/* Event Prize  */}
            <div className="EventRule space-y-2 flex item-center">
              <h1 className="text-yellow-400 text-2xl font-semibold flex">
                <MdDateRange />
                Date
              </h1>
              <p>: {Data.Date}</p>
            </div>
            {/* Event Location  */}
            <div className="EventRule space-y-2 flex font-bold item-center">
              <h1 className="text-yellow-400 text-2xl font-semibold flex">
                <FaLocationDot />
                Location
              </h1>
              <p>: {Data.Location}</p>
            </div>
            
          </div>
        </section>

        {/* Event Coordinators  */}
        <div className="EventRule grid  space-y-6 justify-items-center justify-center"> 
          {/* Event Participation Button  */}
          <Button 
          className="py-8 text-xl"
              as={NavLink}
              to={Data.GoogleForm}
              variant="ghost"
              color="warning"
              size="lg" 
              startContent={<SiGoogleforms />}
            >
              Google Form
            </Button> 
            
          <h1 className="text-yellow-400 pt-12 text-3xl font-semibold flex flex-col items-center">
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
