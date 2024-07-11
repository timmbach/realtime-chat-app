import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { IMessage } from "../../types/message.model";
import { extractTime } from "../../utils/extractTime";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  message: IMessage;
};

// eslint-disable-next-line no-empty-pattern
function Message({ message }: Props) {
  const { user } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === user?._id;

  const profilePic = fromMe
    ? user?.profilePic
    : selectedConversation.profilePic;
  const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="rounded-full w-10">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${
          fromMe ? "bg-purple-400/60" : ""
        }  `}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
}

export default Message;
