
import Logo from "../../assets/kosi-logo.png";
import { IoIosSearch, IoMdCart } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <header>
        <div className="container py-4 ">
          <div className="flex justify-between items-center">
            <div className="nav-logo max-w-32">
              <img className="w-full" src={Logo} alt="Kosi logo" />
            </div>
            <div className="nav-links">
              <ul className="hidden md:flex sm:space-x-4 lg:space-x-10 font-secondary font-bold text-primary">
                <li>
                  <a className="hover:text-secondary duration-200" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary duration-200" href="/">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary duration-200" href="/">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary duration-200" href="/">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary duration-200" href="/">
                    Pages
                  </a>
                </li>
                <li>
                  <a className="hover:text-secondary duration-200" href="/">
                    Contact
                  </a>
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
