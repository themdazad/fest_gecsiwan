/* eslint-disable react/prop-types */
const Coordinators = ({ CoordinatorsName }) => {
  return (
    <div className="cards snap-mandatory snap-x w-full overflow-x-auto my-4 gap-3 flex">
      {CoordinatorsName.map((value, index) => (
        <div
          key={index}
          className="snap-center  p-4 min-w-[300px] max-sm:w-full mx-auto bg-zinc-400/10 rounded-3xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
        >
          <img
            className="block aspect-square mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0"
            src="/images/profile.png"
            alt="the_mdazad github profile "
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-white font-semibold">{value.name}</p>
              <p className=" ">{value.role}</p> 
              <a
                className="text-slate-400 font-medium"
                href="tel:+911234567890"
              >
                +91 {value.phone}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Coordinators;
