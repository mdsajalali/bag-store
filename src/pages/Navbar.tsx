import { FaSearch, FaUserCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-4 ">
      <div>
        <h1 className="text-3xl font-bold">
          <Link to="/">Bag Store .</Link>
        </h1>
      </div>
      <nav className="flex list-none gap-5 ">
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
      <div className="flex items-center gap-5">
        <FaSearch
          size={20}
          className="hover:text-[#515151] cursor-pointer transition-all"
        />
        <FaUserCircle
          size={20}
          className="hover:text-[#515151] cursor-pointer transition-all"
        />
        <FaBagShopping
          size={20}
          className="hover:text-[#515151] cursor-pointer transition-all"
        />
      </div>
    </div>
  );
};

export default Navbar;
