import { Button } from "./ui/button";
import { FC } from "react";

const SubscribeCard: FC = () => {
  return (
    <section className="relative container w-[80%] h-96 py-10 bg-[#121E28] rounded-[30px] border-2 border-[#2A3744] bg-lights bg-cover bg-no-repeat">
      <div className="relative z-10 flex flex-col gap-16">
        <div className="flex flex-col gap-6 text-center">
          <h2>Weekly digest</h2>
          <h3 className="text-[#9AAFC3]">Latest news in DAOs and Web3</h3>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <input
            className="w-1/3 bg-bg border-2 border-[#2A3744] h-16 px-7 rounded-2xl"
            placeholder="Your email"
            type="email"
          />
          <Button
            size="lg"
            className="h-16 bg-purpleLight text-bg hover:opacity-75 text-xl font-semibold"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="absolute w-40 h-40 translate-x-1/2 top-1/3 right-1/2 bg-white blur-[100px] opacity-20 -z-1 rounded-full" />
    </section>
  );
};

export default SubscribeCard;
