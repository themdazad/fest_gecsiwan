import Events from "../../pages/Events/pages";

const EventTimeline = () => {
  return (
    <section>
      <h1 className="text-center mt-8 text-amber-400 font-bold text-5xl">
       Annual Events
      </h1>
      <div className="timeline">
        
       <Events/>
      </div>
    </section>
  );
};

export default EventTimeline;
