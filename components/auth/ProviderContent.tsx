"use client";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { LoaderFive } from "../ui/loader";

interface ProviderContentProps {
  onBack: () => void;
}

const ProviderContent: React.FC<ProviderContentProps> = ({ onBack }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          <MdArrowBack
            size={20}
            className="text-neutral-600 dark:text-neutral-400"
          />
        </button>
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Signing you in...
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Please wait while we redirect you
          </p>
        </div>
      </div>

      {/* Loading Content */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <LoaderFive text="Authenticating..." />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Redirecting to complete your sign-in process
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            This may take a few moments
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderContent;
