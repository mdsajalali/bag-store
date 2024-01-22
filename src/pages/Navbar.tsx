import { useState } from "react";

import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";
import NavIcons from "../components/NavIcons";

const Navbar: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="flex items-center justify-between my-4">
      {/* Navbar Logo */}
      <div>
        <h1 className="sm:text-3xl text-2xl font-bold xl:pl-0 pl-4">
          <Link to="/">Bag Store .</Link>
        </h1>
      </div>

      {/* navItems */}
      <NavItems isClick={isClick} />

      {/* navIcons */}
      <NavIcons />

      {/* navBar Toggle */}
      <div onClick={handleClick} className="md:hidden pr-4">
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
