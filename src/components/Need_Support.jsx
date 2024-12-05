
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";

const Need_Support = () => {
    return (
        <>
          <section className="max-w-[1920px] text-center m-auto py-16 px-[5%] md:px-[10%] space-y-4">
            <h2 className="text-2xl font-semibold">
              Need{" "}
              <span className="text-amber-500 underline underline-offset-4">
                Support
              </span>
              ? We&apos;re Here to Help
            </h2>
            <p className="text-lg font">
              We&apos;re committed to ensuring that your experience with us is
              smooth and enriching. If you have any queries or need assistance at
              any step, please contact us
            </p>
    
            <Button 
            className="text-white"
              as={NavLink}
              size="lg"
              to="mailto:support.devconfig@gmail.com"
              variant="bordered"
              startContent={<MdMarkEmailUnread />}
            >
              fest.gecsiwan@gmail.com
            </Button>
          </section>
        </>
      );
}

export default Need_Support
