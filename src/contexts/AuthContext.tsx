import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState(null);
  
  const getItemToLocalStorageAndParse = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  useEffect(() => {
    if(localStorage.getItem("user")) {
      isAuthenticated = true;
      console.log("Usuário logado")
      const user = getItemToLocalStorageAndParse("user");
      setUser(user);
    }
  },[])
  
  function signIn({ email, password }: SignInData) {
    signInResquest({ email, password })
    .then((response) => {
      const dataUser = response.scanResults[0];
      localStorage.setItem("user", JSON.stringify(dataUser));
      Router.push("/home");
    })
    .catch((error) => {
      console.log(error);
      Router.push("/404");
    });
  }
  console.log(user)
  
  function signUp({
    email,
    birth_date,
    name,
    password,
    phone,
    productor,
  }: SignUpData) {
    signUpResquest({
      email,
      birth_date,
      name,
      password,
      phone,
      productor,
    })
      .then((response) => {
        console.log("Acho que deu certo :P, ", response);
      })
      .catch((error) => {
        console.log("erro novamente...");
      });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
}
