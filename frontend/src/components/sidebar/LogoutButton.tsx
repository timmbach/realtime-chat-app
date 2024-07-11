import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function LogoutButton({}: Props) {
  const { logout, loading } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <FiLogOut
          className="w-5 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;
