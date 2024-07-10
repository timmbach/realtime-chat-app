import { FiLogOut } from "react-icons/fi";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function LogoutButton({}: Props) {
  return (
    <div className="mt-auto">
      <FiLogOut className="w-5 h-6 text-white cursor-pointer" />
    </div>
  );
}

export default LogoutButton;
