import { Link } from "react-router-dom";

export default function Commanbtn({ text, type, path }) {
  return (
    <div>
      <Link
        className={`${
          type
            ? "bg-[#01F5B5] text-black"
            : "border-[#01F5B5] border-2"
        } rounded-md py-1 px-4 hover:scale-95 transition-all duration-300`}
        to={path}
      >
        {text}
      </Link>
    </div>
  );
}
