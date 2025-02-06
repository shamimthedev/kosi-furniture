import Logo from "../../assets/kosi-logo.png";
import { IoMdTrash } from "react-icons/io"; // Importing the trash icon
import { IoIosSearch, IoMdCart } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/slices/cartSlice"; // Actions

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/" },
  { name: "Products", to: "/" },
  { name: "Blog", to: "/" },
  { name: "Pages", to: "/" },
  { name: "Contact", to: "/" }
];

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartOpenMobile, setIsCartOpenMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const cartRef = useRef(null);
  const dispatch = useDispatch();

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
        setIsCartOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div className="container py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="nav-logo max-w-32">
              <Link to={'/'}><img className="w-full" src={Logo} alt="logo" /></Link>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
              <ul className="hidden md:flex sm:space-x-4 lg:space-x-10 font-secondary font-bold text-primary">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link className="hover:text-secondary duration-200" to={link.to}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons Section (Visible for all screen sizes) */}
            <div className="nav-icons flex space-x-3 relative">
              {/* Show on all screen sizes (including small screens) */}
              <div className="flex gap-2 sm:gap-3 items-center">
                <IoIosSearch className="text-[#2B303A] text-xl" />

                {/* Cart Icon with Clickable Dropdown */}
                <div className="relative" ref={cartRef}>
                  <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative">
                    <IoMdCart className="text-[#2B303A] text-xl" />
                    {totalQuantity > 0 && (
                      <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {totalQuantity}
                      </span>
                    )}
                  </button>

                  {/* Cart Dropdown */}
                  {isCartOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg p-4 rounded-md z-50 max-h-80 overflow-y-auto">
                      <h3 className="font-bold text-lg mb-3">Your Cart</h3>

                      {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-sm">Your cart is empty.</p>
                      ) : (
                        <ul className="cart-item-list">
                          {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between items-center py-2 border-b">
                              <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                              <div className="flex-1 px-2">
                                <p className="text-sm font-semibold">{item.title}</p>
                                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                              </div>
                              <p className="mr-1 text-sm font-bold text-gray-800">${item.price * item.quantity}</p>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <button
                                  className="text-primary text-sm"
                                  onClick={() => dispatch(increaseQuantity(item.id))}
                                >
                                  +
                                </button>
                                <button
                                  className="text-primary text-sm"
                                  onClick={() => dispatch(decreaseQuantity(item.id))}
                                >
                                  -
                                </button>
                                <button
                                  className="text-red-500 text-sm"
                                  onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                  <IoMdTrash className="text-lg" /> {/* Dustbin icon */}
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Total Price Section */}
                      {cartItems.length > 0 && (
                        <div className="mt-4 flex justify-between items-center">
                          <span className="font-bold text-sm">Total Price:</span>
                          <span className="text-primary font-semibold text-lg">
                            ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                          </span>
                        </div>
                      )}

                      {/* Checkout Button */}
                      {cartItems.length > 0 && (
                        <div className="mt-4">
                          <button className="w-full bg-primary text-white py-2 rounded-md text-sm font-bold">
                            Go to Checkout
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </div>

                <CiUser className="text-[#2B303A] text-xl" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu md:hidden h-8 w-8 rounded-[4px] bg-primary text-white text-2xl flex justify-center items-center" onClick={() => setIsMobileMenuOpen(true)}>
              &equiv;
            </div>

            {/* Mobile Navigation Links (Full Screen Overlay) */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex items-center justify-center">
                <div className="bg-white w-full max-w-md p-6 rounded-md relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-2xl font-bold text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    &times;
                  </button>

                  <div className="flex flex-col items-center space-y-6">
                    {navLinks.map((link, index) => (
                      <Link
                        key={index}
                        className="text-primary font-bold hover:text-secondary text-xl"
                        to={link.to}
                        onClick={() => setIsMobileMenuOpen(false)} // Close menu when a link is clicked
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
