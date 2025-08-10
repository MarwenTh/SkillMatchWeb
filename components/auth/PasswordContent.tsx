"use client";
import React, { useState } from "react";
import { MdArrowBack, MdPassword } from "react-icons/md";

interface PasswordContentProps {
  onBack: () => void;
  onSubmit: (password: string) => void;
}

const PasswordContent: React.FC<PasswordContentProps> = ({
  onBack,
  onSubmit,
}) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

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
            Sign up with Email
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Create your account to get started
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdPassword size={18} className="text-neutral-400" />
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
        >
          Continue
        </button>
      </form>

      {/* Additional Info */}
      <div className="text-center">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Enter a strong password to secure your account.
        </p>
      </div>
    </div>
  );
};

export default PasswordContent;
