import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Heart,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useUI } from "../../context/UIContext";
import { useSettings } from "../../context/SettingsContext";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Impact", path: "/impact" },
  { name: "Support", path: "/support" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {

  const { settings } = useSettings();

const supportButtonText =
  settings.support_button_text ||
  "Support Women";

const businessName =
  settings.business_name ||
  "Aamdani";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { totalItems = 0 } = useCart();
  const { wishlistItems = [] } =
    useWishlist();

  const {
    toggleCart,
    toggleWishlist,
  } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#d7e3e7]"
            : "bg-[#fcfcfc]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-[82px] sm:h-[88px]">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center shrink-0"
            >
              <div className="flex items-center gap-3">
  <img
    src="/images/logo.png"
    alt={businessName}
    className="h-16 sm:h-20 w-auto object-contain"
  />


</div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#5A97A9]"
                        : "text-[#5A5A5A] hover:text-[#5A97A9]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </nav>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center gap-3">

              {/* WISHLIST */}
              <button
                onClick={toggleWishlist}
                className="
                  relative
                  w-11 h-11
                  rounded-full
                  border border-[#d7e3e7]
                  flex items-center justify-center
                  hover:border-[#5A97A9]
                  transition-all
                "
              >
                <Heart size={18} />

                {wishlistItems.length > 0 && (
                  <span
                    className="
                      absolute
                      -top-1
                      -right-1
                      min-w-[18px]
                      h-[18px]
                      px-1
                      rounded-full
                      bg-[#FF7A1A]
                      text-white
                      text-[10px]
                      flex items-center justify-center
                    "
                  >
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              {/* CART */}
              <button
                onClick={toggleCart}
                className="
                  relative
                  w-11 h-11
                  rounded-full
                  border border-[#d7e3e7]
                  flex items-center justify-center
                  hover:border-[#5A97A9]
                  transition-all
                "
              >
                <ShoppingBag size={18} />

                {totalItems > 0 && (
                  <span
                    className="
                      absolute
                      -top-1
                      -right-1
                      min-w-[18px]
                      h-[18px]
                      px-1
                      rounded-full
                      bg-[#5A97A9]
                      text-white
                      text-[10px]
                      flex items-center justify-center
                    "
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              <Link
                to="/support"
                className="
                  ml-2
                  bg-[#5A97A9]
                  text-white
                  px-5 py-3
                  rounded-full
                  text-sm
                  font-medium
                  hover:bg-[#4c8798]
                  transition-all duration-300
                "
              >
                Support Women
              </Link>

            </div>

            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="lg:hidden text-[#5A5A5A]"
            >
              {isOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#fcfcfc] z-40 transform transition-transform duration-300 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 px-6">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() =>
                setIsOpen(false)
              }
              className={({ isActive }) =>
                `text-2xl font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#5A97A9]"
                    : "text-[#5A5A5A] hover:text-[#5A97A9]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex items-center gap-4">

            <button
              onClick={() => {
                setIsOpen(false);
                toggleWishlist();
              }}
              className="
                relative
                w-12 h-12
                rounded-full
                border border-[#d7e3e7]
                flex items-center justify-center
              "
            >
              <Heart size={20} />

              {wishlistItems.length > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    w-5 h-5
                    rounded-full
                    bg-[#FF7A1A]
                    text-white
                    text-[10px]
                    flex items-center justify-center
                  "
                >
                  {wishlistItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                toggleCart();
              }}
              className="
                relative
                w-12 h-12
                rounded-full
                border border-[#d7e3e7]
                flex items-center justify-center
              "
            >
              <ShoppingBag size={20} />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    w-5 h-5
                    rounded-full
                    bg-[#5A97A9]
                    text-white
                    text-[10px]
                    flex items-center justify-center
                  "
                >
                  {totalItems}
                </span>
              )}
            </button>

          </div>

          <Link
            to="/support"
            onClick={() =>
              setIsOpen(false)
            }
            className="
              mt-2
              bg-[#5A97A9]
              text-white
              px-6 py-3
              rounded-full
              text-sm
              font-medium
            "
          >
            Support Women
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;