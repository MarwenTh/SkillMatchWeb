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
import ProviderContent from "./ProviderContent";

type AuthState = "initial" | "email" | "provider";

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

  const handleBack = () => {
    setAuthState("initial");
  };

  const handleEmailSubmit = (email: string) => {
    // Handle email signup logic here
    console.log("Email signup:", email);
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
                  onBack={handleBack}
                  onSubmit={handleEmailSubmit}
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
                <ProviderContent onBack={handleBack} />
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default AuthMethod;
