import { Divider } from "@nextui-org/react";

const EventTimeline = () => {
  return (
    <section className="space-y-12 w-full p-[5%] m-auto">
      <h1 className="text-center my-8 text-amber-400 font-bold text-3xl md:text-3xl lg:text-5xl">
        Event Timeline
      </h1>

      <div className="Timeline w-full m-auto space-y-6 ">
        {/* 1st day schedule  */}
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 text-zinc-900 bg-amber-400 rounded-[50px] p-10">
          <h2 className=" mt-8 font-bold lg:text-center text-5xl md:text-4xl lg:text-8xl">
              Day-1 <br />
            <span className="text-2xl md:text-4xl lg:text-6xl" >  21<sup>st</sup> November {" "} 2024</span>
          </h2>
          <div className="timeline my-6 grid justify-start md:justify-center ">
            {/* tittle  */}
            <ul className="flex justify-between gap-x-12 text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 ">
              <li className="EventName">Event</li>
              <li className="EventTime">Time</li>
            </ul>
            <Divider className="bg-zinc-950"/>
            {/* event name and time  */}
            <ul className="flex gap-x-12 text-2xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Cricket</li>
              <li className="EventTime text-right ">1:30 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Fun-Cricket</li>
              <li className="EventTime text-right ">01:30 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Carrom</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Badminton</li>
              <li className="EventTime text-right ">03:00 PM</li>
            </ul>
          </div>
        </div>
        {/* 2nd, 3rd day event  */}
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 text-zinc-900 bg-amber-400 rounded-[50px] p-10">
        <h2 className=" mt-8 font-bold lg:text-center text-5xl md:text-4xl lg:text-8xl">
              Day-2,3 <br />
            <span className="text-2xl md:text-4xl lg:text-6xl" > 22<sup>nd</sup>- 23<sup>rd</sup> November {" "} 2024</span>
          </h2>
          <div className="timeline my-6 grid justify-start md:justify-center ">
            {/* tittle  */}
            <ul className="flex justify-between gap-x-12 text-3xl md:text-5xl lg:text-6xl font-bold">
              <li className="EventName">Event</li>
              <li className="EventTime">Time</li>
            </ul>
            <Divider className="bg-zinc-950"/>
            {/* event name and time  */}
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Cricket</li>
              <li className="EventTime text-right ">1:30 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Fun-Cricket</li>
              <li className="EventTime text-right ">01:30 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Carrom</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Chess</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Badminton</li>
              <li className="EventTime text-right ">03:00 PM</li>
            </ul>
          </div>
        </div>
        {/* 4rd day event  */}
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 text-zinc-900 bg-amber-400 rounded-[50px] p-10">
        <h2 className=" mt-8 font-bold lg:text-center text-5xl md:text-4xl lg:text-8xl">
              Day-4 <br />
            <span className="text-2xl md:text-4xl lg:text-6xl" > 24<sup>nd</sup>November {" "} 2024</span>
          </h2>
          <div className="timeline my-6 grid justify-start md:justify-center ">
            {/* tittle  */}
            <ul className="flex justify-between gap-x-12 text-3xl md:text-5xl lg:text-6xl font-bold">
              <li className="EventName">Event</li>
              <li className="EventTime">Time</li>
            </ul>
            <Divider className="bg-zinc-950"/>
            {/* event name and time  */}
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Kabaddi</li>
              <li className="EventTime text-right ">1:30 PM</li>
            </ul>
          </div>
        </div>
        {/* 5th day event  */}
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 text-zinc-900 bg-amber-400 rounded-[50px] p-10">
        <h2 className=" mt-8 font-bold lg:text-center text-5xl md:text-4xl lg:text-8xl">
              Day-5 <br />
            <span className="text-2xl md:text-4xl lg:text-6xl" > 25<sup>nd</sup>November {" "} 2024</span>
          </h2>
          <div className="timeline my-6 grid justify-start md:justify-center ">
            {/* tittle  */}
            <ul className="flex justify-between gap-x-12 text-3xl md:text-5xl lg:text-6xl font-bold">
              <li className="EventName">Event</li>
              <li className="EventTime">Time</li>
            </ul>
            <Divider className="bg-zinc-950"/>
            {/* event name and time  */}
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">CHESS</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">TABLE TENNIS</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">KABADDI</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">TUG OF WAR</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">VOLLEYBALL</li>
              <li className="EventTime text-right ">04:00 PM</li>
            </ul>
          </div>
        </div>
        {/* 6th day event  */}
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 text-zinc-900 bg-amber-400 rounded-[50px] p-10">
        <h2 className=" mt-8 font-bold lg:text-center text-5xl md:text-4xl lg:text-8xl">
              Day-6<br />
            <span className="text-2xl md:text-4xl lg:text-6xl" > 26<sup>nd</sup>November {" "} 2024</span>
          </h2>
          <div className="timeline my-6 grid justify-start md:justify-center ">
            {/* tittle  */}
            <ul className="flex justify-between gap-x-12 text-3xl md:text-5xl lg:text-6xl font-bold">
              <li className="EventName">Event</li>
              <li className="EventTime">Time</li>
            </ul>
            <Divider className="bg-zinc-950"/>
            {/* event name and time  */}
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">TABLE TENNIS</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">KABADDI</li>
              <li className="EventTime text-right ">02:00 PM</li>
            </ul>
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">VOLLEYBALL</li>
              <li className="EventTime text-right ">04:00 PM</li>
            </ul>
          </div>
        </div>
        {/* Final day event  */}
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 text-zinc-900 bg-amber-400 rounded-[50px] p-10">
        <h2 className=" mt-8 font-bold lg:text-center text-5xl md:text-4xl lg:text-8xl">
              Kriditam&apos;s Day<br />
            <span className="text-2xl md:text-4xl lg:text-6xl" > 27<sup>th</sup>-30<sup>th</sup>November {" "} 2024</span>
          </h2>
          <div className="timeline my-6 grid justify-start md:justify-center ">
            {/* tittle  */}
            <ul className="flex justify-between gap-x-12 text-3xl md:text-5xl lg:text-6xl font-bold">
              <li className="EventName">Event</li>
              <li className="EventTime">Time</li>
            </ul>
            <Divider className="bg-zinc-950"/>
            {/* event name and time  */}
            <ul className="flex gap-x-12 text-xl md:text-3xl lg:text-4xl justify-between">
              <li className="EventName">Available Soon</li>
              <li className="EventTime text-right ">-- : --</li>
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
