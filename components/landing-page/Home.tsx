"use client";
import React from "react";
import Navbar from "./Navbar";
import { PointerHighlight } from "../ui/pointer-highlight";
import { Check, CloudDownload } from "lucide-react";
import Link from "next/link";
import { FaCloudDownloadAlt, FaPlay } from "react-icons/fa";

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
        <div className=" text-center font-medium text-lg md:text-xl text-gray-700 mt-5">
          Swipe right on opportunities, connect with top companies, <br />
          and land your dream job faster than ever.
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

        <div className=" flex flex-row space-x-8 ">
          <Link
            href="/download"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="flex flex-row items-center text-sm  gap-x-3 ">
              <FaCloudDownloadAlt size={20} />
              Download now
            </span>
          </Link>
          <Link
            href="/signup"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-400 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-300 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="flex flex-row items-center text-sm  gap-x-3 ">
              <FaPlay size={20} />
              Watch Demo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
