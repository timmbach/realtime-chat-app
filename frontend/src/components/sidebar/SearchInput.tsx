import { FiSearch } from "react-icons/fi";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function SearchInput({}: Props) {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-xl"
      />
      <button
        type="submit"
        className="btn btn-circle bg-purple-950/50 text-white"
      >
        <FiSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
