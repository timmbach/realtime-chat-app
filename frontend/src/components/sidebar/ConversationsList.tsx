import useGetConversations from "../../hooks/useGetConversations";
import { IConversation } from "../../types/conversation.model";
import Conversation from "./Conversation";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function ConversationsList({}: Props) {
  const { loading, conversations } = useGetConversations();

  console.log(conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation: IConversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default ConversationsList;
