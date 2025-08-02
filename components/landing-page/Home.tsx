"use client";
import React from "react";
import Navbar from "./Navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />
      <WavyBackground variant="bottom" color="#3B82F6" className="min-h-screen">
        <div className="container mx-auto p-8 pt-20">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Land your dream job with just a swipe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Match with your perfect career opportunity through our innovative
              swipe-based job matching platform
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-200"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Home;
