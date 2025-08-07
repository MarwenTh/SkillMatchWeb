"use client";
import React from "react";
import { useTheme } from "@/lib/theme-context";
import { motion } from "motion/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="relative w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background circle for reveal animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"
        initial={{ scale: 0 }}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      />

      {/* Icon container */}
      <motion.div
        className="relative z-10"
        animate={{
          rotate: theme === "dark" ? 180 : 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {theme === "light" ? (
          <MdDarkMode
            size={20}
            className="text-neutral-700 dark:text-neutral-300"
          />
        ) : (
          <MdLightMode size={20} className="text-white" />
        )}
      </motion.div>

      {/* Ripple effect */}
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: 2,
            opacity: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
        />
      )}
    </motion.button>
  );
};
