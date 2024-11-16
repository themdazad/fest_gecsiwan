
import { BsFileRuledFill } from "react-icons/bs";
import { GiTargetPrize } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from '@nextui-org/react';
import { SiGoogleforms } from "react-icons/si";
import Coordinators from './EventCoordinators';
import { NavLink } from "react-router-dom";


const data =  { 
    Tittle: "Music",
    img:"https://t3.ftcdn.net/jpg/08/20/36/66/240_F_820366648_fPX1Y1N1N3aWdbDo2R4yOJy16hglBk7I.jpg",
    GoogleForm: "https://forms.gle/tqFpvXNPhua8uphGA",
    HeaderImage: "https://forms.gle/tqFpvXNPhua8uphGA",

  }

const Music = () => {
  return (
    <section>
      {/* Event banner section  */}
      <div className={`bg-[url('https://t3.ftcdn.net/jpg/08/20/36/66/240_F_820366648_fPX1Y1N1N3aWdbDo2R4yOJy16hglBk7I.jpg')] bg-center bg-cover bg-no-repeat relative header w-full h-[400px]`}>
        <div className="  absolute z-10 overflow-visible p-0">
          {/* background section for event  */}
        </div>
        
        <div className="absolute flex max-md:flex-col  justify-between items-center  px-[5%] bottom-0 left-0 right-0 z-20 py-6 bg-gradient-to-t from-black to-transparent text-white">
          {/* some tittle will add here */}
          <h2 className='text-5xl max-md:my-4 md:text-6xl font-semibold max-md:text-center'>{data.Tittle}</h2>
          <div className="date flex items-center space-x-4">
            <p className='text-amber-400'>DD-MM-YYYY</p>
            <Button variant='warning' size='md' endContent={<SiGoogleforms />}>JOIN</Button>
          </div>
        </div>
      </div>


      {/* Event Details  */}
      <div className="px-[5%] space-y-16 event_details py-6">
        {/* Event Description  */}
        <div className="EventDescription space-y-2">
          <h1 className='text-amber-400 text-3xl  font-semibold'>About E-Sport</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, quam perspiciatis ipsa accusantium tempore inventore soluta dolore ratione commodi voluptate consectetur ipsam aut quod.</p>
        </div>

        <section className='grid grid-cols-1 md:grid-cols-2 max-sm:space-y-8'>

          {/* Event Rules  */}
          <div className="EventRule space-y-2">
            <h1 className='text-amber-400 text-3xl font-semibold flex'><BsFileRuledFill />Rules</h1>
            <ol>
              <li>Rule 1: Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Rule 2: Lorem ipsum dolor sit amet.</li>
              <li>Rule 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Rule 4: Lorem ipsum dolor sit amet consectetur.</li>
            </ol>
          </div>

          <div className="innerCol2 space-y-2 ">
            {/* Event Prize  */}
            <div className="EventRule space-y-2 flex item-center">
              <h1 className='text-amber-400 text-3xl font-semibold flex'><GiTargetPrize />Prize</h1>
              <p>: 7 Crore</p>
            </div>
            {/* Event Location  */}
            <div className="EventRule space-y-2 flex font-bold item-center">
              <h1 className='text-amber-400 text-3xl font-semibold flex'><FaLocationDot />Location</h1>
              <p> :At Purani Haweli, IIT Siwan</p>
            </div>
            {/* Event Participation Button  */}
            <Button as={NavLink} to={data.GoogleForm} variant='ghost' size='lg' startContent={<SiGoogleforms />}>Google Form</Button>
          </div>
        </section>

        {/* Event Coordinators  */}
        <div className="EventRule space-y-2">
          <h1 className='text-amber-400 text-3xl font-semibold flex flex-col items-center'><FaPeopleGroup />Coordinators</h1>
          <Coordinators />
        </div>

      </div>

    </section>
  )
}
export default Music;