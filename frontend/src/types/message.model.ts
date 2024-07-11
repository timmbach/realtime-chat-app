export interface IMessage {
  _id: string;
  senderId?: number;
  receiverId?: number;
  message: string;
  createdAt: Date;
}
