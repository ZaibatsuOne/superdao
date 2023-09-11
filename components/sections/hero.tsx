import { Button } from "../ui/button";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="container pt-[130px] flex flex-col gap-14 items-center text-center px-72">
      <div className="relative flex flex-col gap-4">
        <h1>The easiest way to start a DAO</h1>
        <div className="absolute w-full h-10 bg-hero-brush bg-no-repeat top-1/2 left-16 -z-10 translate-x-1/2 transform" />
        <p className="px-10">
          An all-in-one platform to start, manage and grow a decentralized
          autonomous organization
        </p>
        <div className="absolute h-1/2 w-1/2 transform translate-x-1/2 opacity-70  bg-white -z-10 blur-[140px]" />
      </div>
      <div className="relative">
        <div className="absolute bg-yellow w-full h-full rounded-2xl -z-10 blur-2xl animate-pulse" />
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
