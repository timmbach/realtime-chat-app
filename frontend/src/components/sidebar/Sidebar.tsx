import SearchInput from "./SearchInput";
import ConversationsList from "./ConversationsList";
import LogoutButton from "./LogoutButton";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function Sidebar({}: Props) {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      {/* search */}
      <SearchInput />
      <div className="divider px-3"></div>

      {/* convo list */}
      <ConversationsList />

      {/* logout */}
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
