"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input, LabelInputContainer } from "../ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Github } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/stateful-button";
import AppStoreBadge from "@/assets/images/AppStoreBadge.png";
import GooglePlayBadge from "@/assets/images/GooglePlayBadge.png";
import { FaRegCircleXmark } from "react-icons/fa6";

const Signup = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className=" bg-gradient-to-br from-indigo-100 to-fuchsia-100 h-screen flex items-center justify-center">
      <div className="relative shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <Image
          src={logo}
          alt="SkillMatch Logo"
          className="mx-auto"
          width={70}
          height={70}
        />
        <h2 className="text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
          Get Started
        </h2>
        <p className="mt-2 max-w-md text-center font-semibold text-sm md:text-md text-neutral-600 dark:text-neutral-300">
          By tapping Log In or Continue, you agree to our{" "}
          <Link href={"/terms"} className=" text-blue-500 font-bold underline">
            Terms
          </Link>
          . Learn how we process your data in our{" "}
          <Link
            href={"/privacy"}
            className=" text-blue-500 font-bold underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href={"/cookie"} className=" text-blue-500 font-bold underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className=" flex flex-col gap-4 mt-6">
          <button className=" flex flex-row items-center justify-center gap-x-3 font-medium bg-white border border-[#c1cddb] rounded-full py-2 px-4 shadow-sm hover:bg-[#e0e2e6] ease-in-out transition-colors duration-300 cursor-pointer ring-offset-2 hover:ring-2 hover:ring-gray-300 dark:ring-offset-black">
            <FaGoogle size={20} />
            Continue with Google
          </button>
          <button className=" flex flex-row items-center justify-center gap-x-3 font-medium bg-white border border-[#c1cddb] rounded-full py-2 px-4 shadow-sm hover:bg-[#e0e2e6] ease-in-out transition-colors duration-300 cursor-pointer ring-offset-2 hover:ring-2 hover:ring-gray-300 dark:ring-offset-black">
            <FaGithub size={20} />
            Continue with Github
          </button>
          <button className=" flex flex-row items-center justify-center gap-x-3 font-medium bg-white border border-[#c1cddb] rounded-full py-2 px-4 shadow-sm hover:bg-[#e0e2e6] ease-in-out transition-colors duration-300 cursor-pointer ring-offset-2 hover:ring-2 hover:ring-gray-300 dark:ring-offset-black">
            <MdEmail size={20} />
            Login with Email
          </button>
        </div>
        <div className=" my-5 font-bold text-center text-xl">Get the App!</div>
        <div className=" flex flex-row justify-center items-center ">
          <Image
            src={AppStoreBadge}
            alt="App Store Badge"
            width={100}
            height={100}
            className=" cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <Image
            src={GooglePlayBadge}
            alt="Google Play Badge"
            width={125}
            height={125}
            className=" cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
        <FaRegCircleXmark
          size={20}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Signup;
