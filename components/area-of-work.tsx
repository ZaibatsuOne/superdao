"use client";

import { FC, useEffect, useState } from "react";

import { listWorkArea } from "@/data/data";
import { useCycle } from "framer-motion";

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
    <section className="container flex flex-col gap-7 text-center">
      <h2>Designed for the full journey</h2>
      <ul className="flex flex-col gap-5">
        {listWorkArea.map((area, index) => (
          <li>
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
