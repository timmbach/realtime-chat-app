import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import useConversation from "../store/useConversation";

const useListenMessages = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
