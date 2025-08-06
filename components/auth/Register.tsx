"use client";
import React, { useState } from "react";

import AuthMethod from "./AuthMethod";
import ProviderMethod from "./ProviderMethod";
import EmailMethod from "./EmailMethod";

const Register = () => {
  const [authMethod, setAuthMethod] = useState<string>("AuthMethod");
  return (
    <>
      {authMethod === "AuthMethod" ? (
        <AuthMethod authMethod={authMethod} setAuthMethod={setAuthMethod} />
      ) : authMethod === "ProviderMethod" ? (
        <ProviderMethod />
      ) : (
        <EmailMethod />
      )}
    </>
  );
};

export default Register;
