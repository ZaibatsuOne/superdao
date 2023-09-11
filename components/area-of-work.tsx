"use client";

import { FC, useEffect, useState } from "react";

import { listWorkArea } from "@/data/data";

const AreaOfWork: FC = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((currentWord) => (currentWord + 1) % listWorkArea.length);
    }, 850);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="container relative w-full h-full flex flex-col gap-7 text-center">
      <div className="bg-areaWork-stars w-full h-full absolute bg-no-repeat top-0 bg-right" />
      <div className="relative">
        <h2>Designed for the full journey</h2>
        <div className="absolute h-full w-full bg-areaWork-brush bg-no-repeat top-7 translate-x-1/4 -left-40 -z-10" />
      </div>
      <ul className="flex flex-col gap-5">
        {listWorkArea.map((area, index) => (
          <li key={index}>
            <h3 className={index === currentWord ? "text-blue" : "text-gray"}>
              {area}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AreaOfWork;
