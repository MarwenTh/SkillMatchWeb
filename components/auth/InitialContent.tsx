"use client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import AppStoreBadge from "@/assets/images/AppStoreBadge.png";
import GooglePlayBadge from "@/assets/images/GooglePlayBadge.png";

interface InitialContentProps {
  onGoogleSignIn: () => void;
  onGithubSignIn: () => void;
  onEmailContinue: () => void;
}

const InitialContent: React.FC<InitialContentProps> = ({
  onGoogleSignIn,
  onGithubSignIn,
  onEmailContinue,
}) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Image
          src={logo}
          alt="SkillMatch Logo"
          className="mx-auto"
          width={60}
          height={60}
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Get Started
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
            Join thousands of job seekers who found their dream job with
            SkillMatch
          </p>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="space-y-3">
        <button
          onClick={onGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 font-medium text-neutral-700 dark:text-neutral-200 cursor-pointer"
        >
          <FaGoogle size={18} className="text-red-500" />
          Continue with Google
        </button>

        <button
          onClick={onGithubSignIn}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 font-medium text-neutral-700 dark:text-neutral-200 cursor-pointer"
        >
          <FaGithub size={18} />
          Continue with Github
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-neutral-900 px-2 text-neutral-500 dark:text-neutral-400">
              or
            </span>
          </div>
        </div>

        <button
          onClick={onEmailContinue}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 font-medium cursor-pointer"
        >
          <MdEmail size={18} />
          Continue with Email
        </button>
      </div>

      {/* Terms */}
      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center leading-relaxed">
        By continuing, you agree to our{" "}
        <Link
          href={"/terms"}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href={"/privacy"}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Privacy Policy
        </Link>
      </p>

      {/* App Store Section */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            Get the App!
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Download our mobile app for the best experience
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="/appstore"
            className="hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={AppStoreBadge}
              alt="App Store Badge"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/playstore"
            className="hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={GooglePlayBadge}
              alt="Google Play Badge"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InitialContent;
