"use client";
import React, { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "../ui/stateful-button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";
import InitialContent from "./InitialContent";
import EmailContent from "./EmailContent";
import NameContent from "./NameContent";
import PasswordContent from "./PasswordContent";
import ProviderContent from "./ProviderContent";

type AuthState = "initial" | "email" | "name" | "password" | "provider";

const AuthMethod: FC = () => {
  const [authState, setAuthState] = useState<AuthState>("initial");

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

  // Back handlers for each step
  const handleBackToInitial = () => setAuthState("initial");
  const handleBackToEmail = () => setAuthState("email");
  const handleBackToName = () => setAuthState("name");

  const handleEmailSubmit = (email: string) => {
    // Capture email if needed, then go to Name step
    console.log("Email provided:", email);
    setAuthState("name");
  };

  const handleNameSubmit = (name: string) => {
    // Capture name if needed, then go to Password step
    console.log("Name provided:", name);
    setAuthState("password");
  };

  const handlePasswordSubmit = (password: string) => {
    // Finalize signup or proceed to your API/next step
    console.log("Password provided:", password);
    // TODO: Implement your signup flow here
  };

  return (
    <Modal>
      <ModalTrigger>
        <Button>Get Started</Button>
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="flex justify-center items-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "initial"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full absolute inset-0"
              }`}
            >
              <div className="p-8">
                <InitialContent
                  onGoogleSignIn={handleGoogleSignIn}
                  onGithubSignIn={handleGithubSignIn}
                  onEmailContinue={handleEmailContinue}
                />
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "email"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              <div className="p-8">
                <EmailContent
                  onBack={handleBackToInitial}
                  onSubmit={handleEmailSubmit}
                />
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "name"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              <div className="p-8">
                <NameContent
                  onBack={handleBackToEmail}
                  onSubmit={handleNameSubmit}
                />
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "password"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              <div className="p-8">
                <PasswordContent
                  onBack={handleBackToName}
                  onSubmit={handlePasswordSubmit}
                />
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                authState === "provider"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute inset-0"
              }`}
            >
              <div className="p-8">
                <ProviderContent onBack={handleBackToInitial} />
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default AuthMethod;
