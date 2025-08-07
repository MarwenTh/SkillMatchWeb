"use client";
import React, { FC, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { MdEmail, MdArrowBack } from "react-icons/md";
import { Button } from "../ui/stateful-button";
import AppStoreBadge from "@/assets/images/AppStoreBadge.png";
import GooglePlayBadge from "@/assets/images/GooglePlayBadge.png";
import { signIn } from "next-auth/react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

type AuthState = "initial" | "email" | "provider";

const AuthMethod: FC = () => {
  const [authState, setAuthState] = useState<AuthState>("initial");
  const [email, setEmail] = useState("");

  const handleGoogleSignIn = () => {
    setAuthState("provider");
    signIn("google");
  };

  const handleGithubSignIn = () => {
    setAuthState("provider");
    signIn("github");
  };

  const handleEmailContinue = () => {
    setAuthState("email");
  };

  const handleBack = () => {
    setAuthState("initial");
    setEmail("");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    console.log("Email signup:", email);
  };

  const renderInitialContent = () => (
    <>
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
        <Link href={"/privacy"} className=" text-blue-500 font-bold underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href={"/cookie"} className=" text-blue-500 font-bold underline">
          Cookie Policy
        </Link>
        .
      </p>
      <div className=" flex flex-col gap-4 mt-6">
        <button
          onClick={handleGoogleSignIn}
          className=" flex flex-row items-center justify-center gap-x-3 font-medium bg-white border border-[#c1cddb] rounded-full py-2 px-4 shadow-sm hover:bg-[#e0e2e6] ease-in-out transition-colors duration-300 cursor-pointer ring-offset-2 hover:ring-2 hover:ring-gray-300 dark:ring-offset-black"
        >
          <FaGoogle size={20} />
          Continue with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className=" flex flex-row items-center justify-center gap-x-3 font-medium bg-white border border-[#c1cddb] rounded-full py-2 px-4 shadow-sm hover:bg-[#e0e2e6] ease-in-out transition-colors duration-300 cursor-pointer ring-offset-2 hover:ring-2 hover:ring-gray-300 dark:ring-offset-black"
        >
          <FaGithub size={20} />
          Continue with Github
        </button>
        <button
          onClick={handleEmailContinue}
          className=" flex flex-row items-center justify-center gap-x-3 font-medium bg-white border border-[#c1cddb] rounded-full py-2 px-4 shadow-sm hover:bg-[#e0e2e6] ease-in-out transition-colors duration-300 cursor-pointer ring-offset-2 hover:ring-2 hover:ring-gray-300 dark:ring-offset-black"
        >
          <MdEmail size={20} />
          Continue with Email
        </button>
      </div>
      <div className=" my-5 font-bold text-center text-xl">Get the App!</div>
      <div className=" flex flex-row justify-center items-center ">
        <Link href="/appstore">
          <Image
            src={AppStoreBadge}
            alt="App Store Badge"
            width={100}
            height={100}
            className=" cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Link href="/playstore">
          <Image
            src={GooglePlayBadge}
            alt="Google Play Badge"
            width={125}
            height={125}
            className=" cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    </>
  );

  const renderEmailContent = () => (
    <>
      <div className="flex items-center mb-4">
        <button
          onClick={handleBack}
          className="mr-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <MdArrowBack size={20} />
        </button>
        <h2 className="text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          Sign up with Email
        </h2>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">
        Enter your email address to create your account
      </p>
      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-[#c1cddb] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Continue
        </button>
      </form>
    </>
  );

  const renderProviderContent = () => (
    <>
      <div className="flex items-center mb-4">
        <button
          onClick={handleBack}
          className="mr-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <MdArrowBack size={20} />
        </button>
        <h2 className="text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          Signing you in...
        </h2>
      </div>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-neutral-600 dark:text-neutral-300">
          Please wait while we redirect you to complete your sign-in.
        </p>
      </div>
    </>
  );

  return (
    <Modal>
      <ModalTrigger>
        <Button>Get Started</Button>
      </ModalTrigger>
      <ModalBody>
        <ModalContent className=" flex justify-center items-center">
          <div className=" shadow-input mx-auto w-full max-w-md rounded-lg bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black relative overflow-hidden">
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "initial"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full absolute inset-0"
              }`}
            >
              {renderInitialContent()}
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "email"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              {renderEmailContent()}
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "provider"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              {renderProviderContent()}
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default AuthMethod;
