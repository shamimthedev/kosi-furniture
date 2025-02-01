import Logo from "../../assets/kosi-logo.png";
import { IoIosSearch, IoMdCart } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container py-4 ">
          <div className="flex justify-between items-center">
            <div className="nav-logo max-w-32">
              <img className="w-full" src={Logo} alt="logo" />
            </div>
            <div className="nav-links">
              <ul className="hidden md:flex sm:space-x-4 lg:space-x-10 font-secondary font-bold text-primary">
                <li>
                  <Link className="hover:text-secondary duration-200" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary duration-200" to="/">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary duration-200" to="/">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary duration-200" to="/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary duration-200" to="/">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-secondary duration-200" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-icons flex space-x-3">
              <div className="hidden sm:flex sm:space-x-2 md:space-x-4 items-center">
                <IoIosSearch className="text-[#2B303A] text-xl" />
                <IoMdCart className="text-[#2B303A] text-xl" />
                <CiUser className="text-[#2B303A] text-xl" />
              </div>
              <div className="mobile-menu md:hidden h-8 w-8 rounded-[4px] bg-primary text-white text-2xl flex justify-center items-center">
                &equiv;
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
