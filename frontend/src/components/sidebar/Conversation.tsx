import useConversation from "../../store/useConversation";
import { IConversation } from "../../types/conversation.model";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  conversation: IConversation;
};

// eslint-disable-next-line no-empty-pattern
function Conversation({ conversation }: Props) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-3 items-center hover:bg-purple-950/50 cursor-pointer p-2 py-1 ${
          isSelected ? "bg-purple-950/50" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold  text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

export default Conversation;
