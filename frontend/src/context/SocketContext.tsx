/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "./AuthContext";
import io, { Socket } from "socket.io-client";
// import { IUser } from "../types/signup.model";
// import { IConversation } from "../types/conversation.model";

interface Props {
  children: ReactNode;
}
interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[] | undefined;
}
export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export const SocketContextProvider = ({ children }: Props) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useAuthContext();

  // const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // socketRef.current = io("http://localhost:8000", {
    //   query: {
    //     userId: user?._id,
    //   },
    // });
    const socket = io("http://localhost:8000", {
      query: {
        userId: user?._id,
      },
    });

    setSocket(socket);

    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      // socketRef.current?.disconnect();
      socket.close();
    };
  }, []);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
