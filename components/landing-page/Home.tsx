"use client";
import React from "react";
import Navbar from "./Navbar";
import { PointerHighlight } from "../ui/pointer-highlight";
import { Check, CloudDownload } from "lucide-react";
import Link from "next/link";
import { FaCloudDownloadAlt, FaPlay } from "react-icons/fa";
import { LoaderFive } from "../ui/loader";

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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-10 pb-8">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xs sm:text-sm text-purple-500 uppercase font-semibold">
          Trusted by OVER 500K JOB SEEKERS!
        </p>
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Land your
          <PointerHighlight
            rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="text-blue-500 relative z-10"> dream job.</span>
          </PointerHighlight>
          <br /> With just a swipe.
        </div>
        <div className="text-sm sm:text-base md:text-lg text-gray-700 mt-4 md:mt-5">
          Swipe right on opportunities, connect with top companies,{" "}
          and land your dream job faster than ever.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 my-8 md:my-10">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-row items-center space-x-2">
              <div className="p-1 rounded-full border-[1.9px] bg-blue-200/80 border-blue-400 flex-shrink-0">
                <Check size={15} />
              </div>
              <p className="text-sm sm:text-base md:text-xl font-medium text-black">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-md sm:max-w-none">
          <Link
            href="/download"
            className="box-border w-full sm:w-auto relative z-30 inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="flex flex-row items-center text-xs sm:text-sm gap-x-2 sm:gap-x-3">
              <FaCloudDownloadAlt size={18} />
              Download now
            </span>
          </Link>
          <Link
            href="/signup"
            className="box-border w-full sm:w-auto relative z-30 inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-400 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-300 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="flex flex-row items-center text-xs sm:text-sm gap-x-2 sm:gap-x-3">
              <FaPlay size={18} />
              Watch Demo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
