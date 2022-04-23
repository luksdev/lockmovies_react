import Router from "next/router";
import { createContext } from "react";
import { signInResquest } from "../services/auth";

type SignInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  let isAuthenticated = false;

  async function signIn({ email, password }: SignInData) {
    const response: any = await signInResquest({ email, password });

    if (response.status === 200) {
      console.log(response.data);
      isAuthenticated = true;
      Router.push("/home");
    } else {
      Router.push("/");
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
