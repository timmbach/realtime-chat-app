import { createContext, ReactNode, useContext, useState } from "react";
import { IUser } from "../types/signup.model";

interface Props {
  children: ReactNode;
}
export interface AuthContextType {
  user: IUser | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  //   login: (username: string) => void;
  //   logout: () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(() => {
    const savedUser = localStorage.getItem("chat-user");
    return savedUser ? (JSON.parse(savedUser) as IUser) : null;
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
