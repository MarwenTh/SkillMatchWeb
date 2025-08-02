"use client";
import React from "react";
import Navbar from "./Navbar";
import { PointerHighlight } from "../ui/pointer-highlight";
import { Check } from "lucide-react";

const Home = () => {
  const benefits = [
    {
      title: "AI Resume Builder",
    },
    {
      title: "Automated Job Tracking",
    },
    {
      title: "Optimize Your Professional Profile",
    },
    {
      title: "And Much More...",
    },
  ];
  return (
    <div className="container mx-auto p-8 pt-10 ">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-sm text-purple-500 uppercase font-semibold">
          Trusted by OVER 500K JOB SEEKERS!
        </p>
        <div className="text-4xl md:text-6xl font-bold text-center">
          Land your{" "}
          <PointerHighlight
            rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="text-blue-500 relative z-10"> dream job.</span>
          </PointerHighlight>
          <br /> With just a swipe.
        </div>
        <div className=" flex flex-row space-x-5 my-10">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-row items-center space-x-1.5">
              <div className="p-1 rounded-full border-[1.9px] bg-blue-200/80 border-blue-400">
                <Check size={15} />
              </div>
              <p className="text-xl font-medium text-black">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
