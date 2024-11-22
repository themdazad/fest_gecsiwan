import { User, Link } from "@nextui-org/react";
import { Need_Assistance } from "../../layout";
// icons
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const AboutPage = () => {
  return (
    <div className="min-h-[100vh] px-[5%] md:px-[10%] space-y-12 py-16 grid place-content-center">
      <div className="text-center text-4xl font-bold text-amber-400 underline underline-offset-4">
        Developers
      </div>
      <div className="our_team  text-center flex max-sm:flex-col gap-6 justify-center ">
        <Developer />
      </div>
      <div className="text-center text-2xl font-bold text-amber-400 underline underline-offset-4">
        Development Support
      </div>
      <div className="our_team  text-center flex max-sm:flex-col gap-6 justify-center ">
        <Development_Support />
      </div>

      <Need_Assistance />
    </div>
  );
};

function Developer() {
  return (
    <>
      <User
        className=" min-w-fit"
        name="Md Azad"
        description={
          <div className="text-left">
            <p>MERN Developer | UX/UI Desinger</p>
            <Link
              className="m-1 "
              target="_blank"
              href="https://instagram.com/the_mdazad"
              size="md"
              isExternal
            >
              <BsInstagram />
            </Link>
            <Link
              className="m-1 "
              target="_blank"
              href="https://www.linkedin.com/in/modest-azad/"
              size="md"
              isExternal
            >
              <BsLinkedin />
            </Link>
            <Link
              className="m-1 "
              target="_blank"
              href="https://github.com/modest-azad"
              size="md"
              isExternal
            >
              <BsGithub />
            </Link>
          </div>
        }
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/81636077?v=4",
          size: "lg",
        }}
      />
     
    </>
  );
}

function Development_Support() {
  return (
    <>
      <User
        className=" min-w-fit"
        name="Prayag Kumar"
        description={
          <div className="text-left">
            <p>Frontend Developer</p>
            <Link
              className="m-1 "
              target="_blank"
              href="https://instagram.com/the_mdazad"
              size="md"
              isExternal
            >
              <BsInstagram />
            </Link>
            <Link
              className="m-1 "
              target="_blank"
              href="https://www.linkedin.com/in/modest-azad/"
              size="md"
              isExternal
            >
              <BsLinkedin />
            </Link>
            <Link
              className="m-1 "
              target="_blank"
              href="https://github.com/modest-azad"
              size="md"
              isExternal
            >
              <BsGithub />
            </Link>
          </div>
        }
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/144903683?v=4",
          size: "lg",
        }}
      />
    
    </>
  );
}
