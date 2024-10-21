import { createContext } from "react";
import { AuthProviderPropsType } from "../interfaces";

export const AuthContext = createContext<AuthProviderPropsType>({
  user: null,
  logIn: null,
  logOut: null,
});
