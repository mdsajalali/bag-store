import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";

const Navbar: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="flex items-center justify-between my-4">
      <div>
        <h1 className="sm:text-3xl text-2xl font-bold pl-4 xl:pl-0">
          <Link to="/">Bag Store .</Link>
        </h1>
      </div>
      
      {/* navItems */}
      <NavItems isClick={isClick} />

      <div className="flex items-center sm:gap-7 gap-4 md:pr-4">
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
      <div onClick={handleClick} className="md:hidden pr-4 md:pr-0">
        {isClick ? (
          <IoClose
            size={30}
            className="hover:text-[#515151] cursor-pointer transition-all"
          />
        ) : (
          <GrMenu
            size={25}
            className="hover:text-[#515151] cursor-pointer transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
