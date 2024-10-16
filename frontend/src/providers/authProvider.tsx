import { useState, ReactNode } from "react";
import { AuthContext } from "../contexts";
import { UserType } from "../interfaces";


export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<UserType>({ username: null, id: null });
  function logIn(username: string, id: string): void {
    setUser({ username, id });
  }
  function logOut(): void {
    setUser({ username: null, id: null });
  }

  return (
    <AuthContext.Provider value={{user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
