// components/product/ProductCard.jsx
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Heart, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useSettings } from "../../context/SettingsContext";

const ProductCard = ({ product }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { cartItems = [], addToCart, updateQuantity, removeFromCart } = useCart();
  const { settings } = useSettings();

  if (!product) return null;

  const wished = isWishlisted(product.id);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = !!cartItem;
  const currencySymbol = settings.currency_symbol || "₹";

  const image =
    product.images?.[0] ||
    product.image ||
    "/images/placeholder.jpg";

  const price =
    typeof product.price === "string"
      ? Number(product.price.replace("₹", "").replace(currencySymbol, "").replace(",", ""))
      : product.price;

  const comparePrice =
    typeof product.comparePrice === "string"
      ? Number(
          product.comparePrice.replace("₹", "").replace(currencySymbol, "").replace(",", "")
        )
      : product.comparePrice;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col h-full bg-white rounded-[22px]"
    >
      <Link to={`/products/${product.slug || product.id}`} className="block flex-1">

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[22px] bg-[#f7f8f8] border border-[#edf1f2]">

          <img
            src={image}
            alt={product.name}
            className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* NEW BADGE */}
          {!!product.isNew && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#eef3ee] text-[#6c8c74] text-[11px] font-medium">
              New
            </span>
          )}

          {/* WISHLIST */}
          <button
           onClick={(e) => {
  e.preventDefault();

  const wasWishlisted =
    isWishlisted(product.id);

  toggleWishlist(product);

  if (wasWishlisted) {
    toast("Removed from wishlist");
  } else {
    toast.success(
      "Added to wishlist"
    );
  }
}}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 z-10"
          >
            <Heart
              size={17}
              className={`transition-all duration-300 ${
                wished
                  ? "fill-[#FF7A1A] text-[#FF7A1A]"
                  : "text-gray-500"
              }`}
            />
          </button>

        </div>

        {/* CONTENT */}
        <div className="pt-4 flex-1 flex flex-col justify-between">
          <div>
            {/* CATEGORY */}
            {product.category && (
              <p className="text-[12px] uppercase tracking-wide text-[#5A97A9] font-medium">
                {product.category}
              </p>
            )}

            {/* NAME */}
            <h3 className="mt-2 text-[15px] font-medium leading-6 text-[#3f3f3f] line-clamp-2 min-h-[48px]">
              {product.name}
            </h3>

            {/* PRICE */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[18px] font-semibold text-[#3f3f3f]">
                {currencySymbol}{price}
              </span>
              {!!comparePrice && (
                <span className="text-sm text-gray-400 line-through">
                  {currencySymbol}{comparePrice}
                </span>
              )}
            </div>
          </div>
        </div>

      </Link>

      {/* ACTIONS */}
      <div className="mt-3">
        {isInCart ? (
          <div className="flex items-center justify-between w-full h-[40px] border border-[#d7e3e7] rounded-full bg-white overflow-hidden px-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (cartItem.quantity === 1) {
                  removeFromCart(product.id);
                } else {
                  updateQuantity(product.id, cartItem.quantity - 1);
                }
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0"
            >
              <Minus size={14} className="text-[#3f3f3f]" />
            </button>
            <span className="text-sm font-semibold text-[#3f3f3f] select-none">
              {cartItem.quantity}
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                updateQuantity(product.id, cartItem.quantity + 1);
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0"
            >
              <Plus size={14} className="text-[#3f3f3f]" />
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1);
            }}
            className="
              w-full
              h-[40px]
              rounded-full
              bg-[#5A97A9]
              text-white
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-[#4c8798]
              flex
              items-center
              justify-center
              gap-1.5
            "
          >
            <ShoppingBag size={14} />
            Add To Cart
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;