// icons
import { CgScrollH } from "react-icons/cg";

const Coordinators = () => {
  return (
    <section className="club_member text-white">
      {/* Heading  */}
      <div className="club_member_heading max-w-max">
        <hr
          className="h-[2px] w-full border-none rounded-[10px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
          style={{
            borderImage:
              "linear-gradient(to right, transparent, amber-400, transparent)",
            borderImageSlice: 1,
          }}
        />
      </div>
      {/* card  */}
      <div className="cards overflow-scroll snap-x snap-mandatory my-4 gap-3 flex" >
            {/* person 1 */}
        <div className="snap-center p-4 min-w-[300px] max-sm:w-full mx-auto bg-amber-400/10 rounded-3xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block aspect-square mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0"
            src="/images/profile.png"
            alt="the_mdazad github profile "
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-white font-semibold">Person 1</p>
              <p className="text-slate-400 font-medium">
                <a href="tel:+911234567890">
                  +91 1234567890
                </a>
              </p>
            </div>
          </div>
        </div>
            {/* person2 */}
        <div className="snap-center p-4 min-w-[300px] max-sm:w-full mx-auto bg-amber-400/10 rounded-3xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block aspect-square mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0"
            src="/images/profile.png"
            alt="the_mdazad github profile "
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-white font-semibold">Person 2</p>
              <p className="text-slate-400 font-medium">
                <a href="tel:+911234567890">
                  +91 1234567890
                </a>
              </p>
            </div>
          </div>
        </div>
            {/* person3 */}
        <div className="snap-center p-4 min-w-[300px] max-sm:w-full mx-auto bg-amber-400/10 rounded-3xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block aspect-square mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0"
            src="/images/profile.png"
            alt="the_mdazad github profile "
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-white font-semibold">Person-3</p>
              <p className="text-slate-400 font-medium">
                <a href="tel:+911234567890">
                  +91 1234567890
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
      <center className="text-3xl"><CgScrollH /></center>
    </section>
  );
};
export default Coordinators;