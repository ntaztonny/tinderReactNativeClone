import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "@firebase/auth";
import { auth } from "../firebase";

// Create environmental variables to add the config IDs
import {
  androidClientIdconfig,
  iosClientIdconfig,
} from "../autheticationServices/userAuthClientID";

export const statecontext = createContext({});

const config = {
  iosClientId: iosClientIdconfig,
  androidClientId: androidClientIdconfig,
  scopes: ["profile", "email"],
  permissions: ["public_pofile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //loggin the user
          setUser(user);
        } else {
          setUser(null);
        }
        setLoadingInitial(false);
      }),
    []
  );

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .catch((e) => setError(e))
      .finally(setLoading(false));
  };
  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === "success") {
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credential);
        } else return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signInWithGoogle,
      logOut,
    }),
    [user, loading, error]
  );
  return (
    <statecontext.Provider
      value={{ user, loading, error, signInWithGoogle, logOut }}
    >
      {!loadingInitial && children}
    </statecontext.Provider>
  );
};

export default function useAuth() {
  return useContext(statecontext);
}
