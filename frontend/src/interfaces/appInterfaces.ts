interface User {
  username: string | null;
  id: string | null;
}

interface AuthProviderProps {
  user: User | null;
  logIn: ((username: string, id: string) => void) | null;
  logOut: (() => void) | null;
}

export type { User as UserType, AuthProviderProps as AuthProviderPropsType };
