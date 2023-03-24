import { useState } from "react";
import cartIcon from "../../assets/icons/cart.png";
import searchIcon from "../../assets/icons/search.png";
import menuIcon from "../../assets/icons/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* large device */}
      <div className="mx-14 my-4 hidden lg:flex justify-around items-center">
        <div className="flex gap-10">
          <h2 className="font-bold text-base text-[#252B42] leading-8">
            <a href="/">BrandName</a>
          </h2>
          <ul className="flex gap-5 items-center">
            <li className="font-semibold text-sm text-[#737373]">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold text-sm text-[#737373]">
              <a href="#">Product</a>
            </li>
            <li className="font-semibold text-sm text-[#737373]">
              <a href="#">Pricing</a>
            </li>
            <li className="font-semibold text-sm text-[#737373]">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-11 items-center">
          <h4 className="font-bold text-sm text-[#23A6F0] cursor-pointer">Login</h4>
          <div className="bg-[#23A6F0] rounded-md px-6 py-4 text-white cursor-pointer">
            Become a member
            <img src="../../assets/icons/arrow.png" alt="" />
          </div>
        </div>
      </div>
      {/* small device */}
      <div className="block lg:hidden bg-[#F7F7F7]">
        <div className="p-9 flex gap-6 justify-around items-center">
          <h2 className="font-bold text-base leading-8 text-[#252B42]">
            BrandName
          </h2>
          <div className="flex items-center gap-6">
            <img src={searchIcon} alt="search" />
            <img src={cartIcon} alt="cart" />
            <img
              src={menuIcon}
              alt="menu"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
        {showMenu && (
          <div className="flex flex-col gap-7 justify-center items-center">
            <h1 className="text-3xl leading-[45px] text-[#737373]">
              <a href="#">Home</a>
            </h1>
            <h1 className="text-3xl leading-[45px] text-[#737373]">
              <a href="#">Product</a>
            </h1>
            <h1 className="text-3xl leading-[45px] text-[#737373]">
              <a href="#">Pricing</a>
            </h1>
            <h1 className="text-3xl leading-[45px] text-[#737373]">
              <a href="#">Contact</a>
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
