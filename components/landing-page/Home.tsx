"use client";
import React from "react";
import Navbar from "./Navbar";
import { PointerHighlight } from "../ui/pointer-highlight";
import {
  ArrowRight,
  Check,
  CloudDownload,
  Play,
  Rocket,
  Star,
  Briefcase,
  Users,
  Target,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { FaCloudDownloadAlt, FaPlay } from "react-icons/fa";
import { LoaderFive } from "../ui/loader";
import { motion } from "framer-motion";

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

  const stats = [
    {
      icon: <Check className="w-6 h-6" />,
      number: "500K+",
      label: "Job Seekers",
    },
    {
      icon: <CloudDownload className="w-6 h-6" />,
      number: "1M+",
      label: "Downloads",
    },
    {
      icon: <Play className="w-6 h-6" />,
      number: "100K+",
      label: "Demo Views",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      number: "99%",
      label: "Satisfaction Rate",
    },
  ];

  const proficiencyIcons = [
    { icon: <Briefcase className="w-8 h-8" />, label: "Professional" },
    { icon: <Users className="w-8 h-8" />, label: "Collaborative" },
    { icon: <Target className="w-8 h-8" />, label: "Focused" },
    { icon: <TrendingUp className="w-8 h-8" />, label: "Growth" },
    { icon: <Award className="w-8 h-8" />, label: "Excellence" },
    { icon: <Zap className="w-8 h-8" />, label: "Fast" },
    { icon: <Shield className="w-8 h-8" />, label: "Secure" },
    { icon: <Globe className="w-8 h-8" />, label: "Global" },
  ];

  return (
    <div className="w-screen h-[1000vh] px-4 sm:px-6 md:px-8 pt-8 md:pt-10 pb-8">
      <section className=" w-full relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-700 mb-8 shadow-lg"
            >
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Trusted by 500K+ job seekers worldwide
              </span>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-slate-900 dark:text-slate-100">
                Land your
              </span>
              <br />
              <PointerHighlight
                rectangleClassName="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 border-blue-300 dark:border-blue-600 leading-loose"
                pointerClassName="text-blue-500 h-3 w-3"
                containerClassName="inline-block mx-2"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10">
                  dream job
                </span>
              </PointerHighlight>
              <br />
              <span className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
                in minutes
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              AI-powered job matching that connects you with opportunities that
              fit your skills, experience, and career goals. No more endless
              scrolling.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link
                href="/signup"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
              >
                <span className="flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  Get Started Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>

              <Link
                href="/demo"
                className="group inline-flex items-center justify-center px-10 py-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-lg rounded-2xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 shadow-lg"
              >
                <Play className="w-6 h-6 mr-3" />
                Watch Demo
              </Link>
            </motion.div>

            {/* Professional Proficiency Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-6xl mx-auto"
            >
              {proficiencyIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-4 bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/20 group-hover:scale-110 transition-all duration-300 mb-3">
                      <div className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium opacity-70">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
