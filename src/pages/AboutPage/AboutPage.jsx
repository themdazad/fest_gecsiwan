import { User, Link } from "@nextui-org/react";
import { Need_Assistance } from "../../layout";
// icons
import { BsTwitter,BsGithub,BsLinkedin,BsInstagram } from "react-icons/bs";

export const AboutPage = () => {
  return (
    <div className="min-h-[100vh] px-[5%] md:px-[10%] space-y-12 py-16 grid place-content-center">
      <div className="text-center text-4xl font-bold text-sky-600 underline underline-offset-4">
        Developers
      </div>
      <div className="our_team  text-center flex max-sm:flex-col gap-6 justify-center ">
       
        <User
          className=" min-w-fit"
          name="Md Azad"
          description={
            <div className="text-left">
              <p>Developer | Graphic Desinger</p>
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

        <User
          className=" min-w-fit"
          name="Unknown"
          description={
            <div className="text-left">
              <p>Coming Soon</p>
            </div>
          }
          avatarProps={{
            src: "",
            size: "lg",
          }}
        />
      </div>

      <Need_Assistance />
    </div>
  );
};
