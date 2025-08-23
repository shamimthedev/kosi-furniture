import Logo from "../../assets/kosi-logo.png";
import { IoMdTrash } from "react-icons/io";
import { IoIosSearch, IoMdCart, IoMdClose } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../redux/slices/cartSlice";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/shop" },
  { name: "Products", to: "/products" },
  { name: "Blog", to: "/blog" },
  { name: "Pages", to: "/pages" },
  { name: "Contact", to: "/contact" }
];

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const cartRef = useRef(null);
  const dispatch = useDispatch();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleQuantityIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleQuantityDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white'
      }`}
    >
      <div className="container py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="nav-logo flex-shrink-0">
            <Link to="/" className="block transition-transform hover:scale-105 duration-200">
              <img 
                className="h-8 md:h-10 w-auto" 
                src={Logo} 
                alt="Kosi - Premium Furniture Store" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8 xl:space-x-12">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    className="relative font-secondary font-medium text-primary hover:text-secondary transition-colors duration-300 group"
                    to={link.to}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Search Icon */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <IoIosSearch className="text-primary text-xl" />
            </button>

            {/* Cart Icon with Dropdown */}
            <div className="relative" ref={cartRef}>
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)} 
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <IoMdCart className="text-primary text-xl" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-productPrice text-white text-xs font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center animate-pulse">
                    {totalQuantity}
                  </span>
                )}
              </button>

              {/* Enhanced Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 shadow-2xl rounded-xl p-0 z-50 overflow-hidden">
                  {/* Cart Header */}
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <h3 className="font-bold text-lg text-primary">Shopping Cart</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in cart
                    </p>
                  </div>

                  {/* Cart Items */}
                  <div className="max-h-80 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <div className="px-6 py-8 text-center">
                        <IoMdCart className="mx-auto text-4xl text-gray-300 mb-4" />
                        <p className="text-gray-500">Your cart is empty</p>
                        <p className="text-sm text-gray-400 mt-1">Add items to get started</p>
                      </div>
                    ) : (
                      <div className="px-4 py-4">
                        {cartItems.map((item, index) => (
                          <div key={item.id} className={`flex items-center gap-4 py-4 ${index !== cartItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                              />
                            </div>

                            {/* Product Details */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm text-primary truncate">{item.title}</h4>
                              <p className="text-productPrice font-bold text-sm mt-1">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                ${item.price} each
                              </p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex items-center border border-gray-200 rounded-lg">
                                <button
                                  className="p-1 hover:bg-gray-100 rounded-l-lg transition-colors duration-200"
                                  onClick={() => handleQuantityDecrease(item.id)}
                                >
                                  <span className="text-primary font-bold text-sm w-6 h-6 flex items-center justify-center">−</span>
                                </button>
                                <span className="px-3 py-1 text-sm font-medium bg-gray-50 min-w-[40px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  className="p-1 hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
                                  onClick={() => handleQuantityIncrease(item.id)}
                                >
                                  <span className="text-primary font-bold text-sm w-6 h-6 flex items-center justify-center">+</span>
                                </button>
                              </div>
                              
                              <button
                                className="p-1 hover:bg-red-50 rounded-lg text-red-500 hover:text-red-700 transition-colors duration-200"
                                onClick={() => handleRemoveItem(item.id)}
                                title="Remove item"
                              >
                                <IoMdTrash className="text-sm" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cart Footer */}
                  {cartItems.length > 0 && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-primary">Total:</span>
                        <span className="text-xl font-bold text-productPrice">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                          Checkout
                        </button>
                        <button 
                          className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-lg font-medium transition-colors duration-200"
                          onClick={() => setIsCartOpen(false)}
                        >
                          View Cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* User Icon */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <CiUser className="text-primary text-xl" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMenuAlt3 className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <img className="h-8 w-auto" src={Logo} alt="Kosi" />
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <IoMdClose className="text-2xl text-primary" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="px-6 py-8">
              <ul className="space-y-6">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="block text-lg font-medium text-primary hover:text-secondary transition-colors duration-200 py-2"
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                © 2024 Kosi. Premium Furniture Store
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;