import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";

// Create environmental variables to add the keys
export const statecontext = createContext({});
const config = {
  iosClientId: "",
  androidClientId: "",
  scopes: ["profile", "email"],
  permissions: ["public_pofile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    await Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === "success") {
        //login
      }
    });
  };

  return (
    <statecontext.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </statecontext.Provider>
  );
};

export default function useAuth() {
  return useContext(statecontext);
}
