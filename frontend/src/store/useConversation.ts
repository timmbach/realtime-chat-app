/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
// import { IConversation } from "../types/conversation.model";

const useConversation = create<any>((set: any) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: any) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: any) => set({ messages }),
}));

export default useConversation;
