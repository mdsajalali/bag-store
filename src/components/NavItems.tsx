import { Link } from "react-router-dom";

interface isClickProps {
  isClick: boolean;
}

const NavItems = ({ isClick }: isClickProps) => {
  return (
    <nav
      className={`absolute top-[73px]  md:left-[40%] md:static    list-none gap-5  md:flex items-center  ${
        isClick
          ? "bg-[#ddd] w-full py-5 flex flex-col items-center justify-center md:block  border-b-2 "
          : "-left-[100px] md:left-0 "
      }`}
    >
      <li>
        <Link
          to="/"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          Faq
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-[18px] font-semibold hover:bg-[#121212] hover:text-white py-2 px-3 transition-all"
        >
          Contact
        </Link>
      </li>
    </nav>
  );
};

export default NavItems;
