import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export const Layout = () => {
  return (
    <section className="relative bg-zinc-950 h-[90vh] place-content-center rounded-b-[600px]">
     
      <Hero_Section />
      <Image className="absolute lg:-top-80 max-sm:w-60 left-20 lg:left-[360%] saturate-0 "
        src="/images/Cricket.png"
        alt="hero"
        width={""}
        height={""}/>
      <Image className="absolute saturate-0"
        src="/images/cultural.png"
        alt="hero"
        width={200}
        height={200}/>
     
    </section>
  );
};

function Hero_Section() {
  return (
    <section className="grid place-content-center  text-center ">
      <p className="text-white text-lg md:text-2xl">GEC Siwan&apos;s</p>
      <div className="hero-content text-white text-5xl md:text-9xl font-custom">
        KRIDITAM <span className="text-amber-400">&apos;24</span>
      </div>
      <p className="text-white text-lg md:text-3xl">
        Annual Sports and Cultural Fest
      </p>
      <Button size="lg" className="place-self-center my-6">
        27-30 November 2024
      </Button>
    </section>
  );
}
