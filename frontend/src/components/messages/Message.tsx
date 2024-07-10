
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function Message({}: Props) {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="rounded-full w-10">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-purple-500/60 `}>
        Hi whats uppppp
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
}

export default Message;
