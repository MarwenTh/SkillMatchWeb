"use client";

import { motion } from "framer-motion";

interface WavyBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "top" | "bottom" | "both";
  color?: string;
}

export const WavyBackground = ({
  className,
  children,
  variant = "bottom",
  color = "#3B82F6",
}: WavyBackgroundProps) => {
  const wavePath = `
    M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
  `;

  const wavePathTop = `
    M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z
  `;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}

      {variant === "top" && (
        <motion.svg
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill={color} fillOpacity="0.1" d={wavePathTop} />
        </motion.svg>
      )}

      {variant === "bottom" && (
        <motion.svg
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-full h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill={color} fillOpacity="0.1" d={wavePath} />
        </motion.svg>
      )}

      {variant === "both" && (
        <>
          <motion.svg
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path fill={color} fillOpacity="0.1" d={wavePathTop} />
          </motion.svg>

          <motion.svg
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 left-0 w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path fill={color} fillOpacity="0.1" d={wavePath} />
          </motion.svg>
        </>
      )}
    </div>
  );
};

// Alternative: Animated wave background with multiple waves
export const AnimatedWavyBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}

      <div className="absolute inset-0">
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            fill="none"
            stroke="#3B82F6"
            strokeOpacity="0.1"
            strokeWidth="2"
            d="M0,450 Q360,350 720,450 T1440,450"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            fill="none"
            stroke="#3B82F6"
            strokeOpacity="0.05"
            strokeWidth="1"
            d="M0,500 Q360,400 720,500 T1440,500"
          />
        </motion.svg>
      </div>
    </div>
  );
};
