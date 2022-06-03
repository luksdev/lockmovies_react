import Router from "next/router";
import { createContext } from "react";
import { signInResquest, signUpResquest } from "../services/auth";

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  email: string;
  password: string;
  name: string;
  birth_date: string;
  phone: string;
  productor: string;
};

export const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  let isAuthenticated = false;

  function signIn({ email, password }: SignInData) {
    signInResquest({ email, password })
    .then(response => {
      isAuthenticated = true;
      Router.push("/home");
    })
    .catch(error => {
      console.log(error)
      Router.push("/404")
    })
  }

  async function signUp({
    email,
    birth_date,
    name,
    password,
    phone,
    productor,
  }: SignUpData) {
    const response: any = await signUpResquest({
      email,
      birth_date,
      name,
      password,
      phone,
      productor,
    });

    if (response.status === 200) {
      console.log("Registrado com sucesso");
    } else {
      console.log("Erro ao registrar");
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
