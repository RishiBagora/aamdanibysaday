import { useState } from "react";
import { Heart, Minus, Plus, Truck, RotateCcw } from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useUI } from "../../context/UIContext";
import { useSettings } from "../../context/SettingsContext";
import toast from "react-hot-toast";
const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { settings } = useSettings();
  const currencySymbol = settings.currency_symbol || "₹";

  const { cartItems = [], addToCart, updateQuantity, removeFromCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { openCart } = useUI();

  const wished = isWishlisted(product.id);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = !!cartItem;
  const currentQty = isInCart ? cartItem.quantity : quantity;

  const increaseQty = () => {
    if (isInCart) {
      updateQuantity(product.id, cartItem.quantity + 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (isInCart) {
      if (cartItem.quantity === 1) {
        removeFromCart(product.id);
      } else {
        updateQuantity(product.id, cartItem.quantity - 1);
      }
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
  addToCart(product, quantity);

  toast.success(
    `${product.name} added to cart`
  );
};

  const handleBuyNow = () => {
    const qty = isInCart ? cartItem.quantity : quantity;
    const message = `Hello,

I would like to purchase:

Product: ${product.name}

Price: ${currencySymbol}${product.price}

Quantity: ${qty}

Please share payment details.`;

    const whatsappUrl = `https://wa.me/${product.whatsappNumber || settings.whatsapp_number || "919999999999"}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="lg:sticky lg:top-24">

      {/* CATEGORY */}
      <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
        {product.category}
      </span>

      {/* TITLE */}
      <h1 className="mt-5 text-[30px] sm:text-[40px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
        {product.name}
      </h1>

      {/* PRICE */}
      <div className="flex items-center gap-3 mt-5">

        <span className="text-[32px] font-semibold text-[#3f3f3f]">
          {currencySymbol}{product.price}
        </span>

        {product.comparePrice > product.price && (
          <span className="text-lg text-gray-400 line-through">
            {currencySymbol}{product.comparePrice}
          </span>
        )}

      </div>

      {/* STOCK */}
      <div className="mt-4">

        {product.stock > 0 ? (
          <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-sm font-medium text-[#6c8c74]">
            In Stock
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
            Out Of Stock
          </span>
        )}

      </div>

      {/* DESCRIPTION */}
      <p className="mt-6 text-[15px] leading-7 text-[#6b7280]">
        {product.shortDescription}
      </p>

      {/* QUANTITY */}
      <div className="mt-8">

        <p className="text-sm font-medium text-[#3f3f3f] mb-3">
          Quantity
        </p>

        <div className="flex items-center w-fit border border-[#e7ecee] rounded-full overflow-hidden">

          <button
            onClick={decreaseQty}
            className="w-12 h-12 flex items-center justify-center"
          >
            <Minus size={16} />
          </button>

          <span className="w-12 text-center font-medium">
            {currentQty}
          </span>

          <button
            onClick={increaseQty}
            className="w-12 h-12 flex items-center justify-center"
          >
            <Plus size={16} />
          </button>

        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-3 mt-8">

        {isInCart ? (
          <button
            onClick={openCart}
            className="
              flex-1
              h-[54px]
              rounded-full
              bg-[#5A97A9]
              text-white
              font-medium
              transition-all
              hover:opacity-90
              flex
              items-center
              justify-center
              gap-2
            "
          >
            Added To Cart (View Cart)
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="
              flex-1
              h-[54px]
              rounded-full
              bg-[#3f3f3f]
              text-white
              font-medium
              transition-all
              hover:opacity-90
            "
          >
            Add To Cart
          </button>
        )}

        <button
          onClick={handleBuyNow}
          className="
            flex-1
            h-[54px]
            rounded-full
            bg-[#FF7A1A]
            text-white
            font-medium
            transition-all
            hover:opacity-90
          "
        >
          Buy Now
        </button>

      </div>

      {/* WISHLIST */}
      <button
        onClick={() => {
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
        className="
          mt-4
          flex items-center gap-2
          text-sm
          font-medium
          text-[#3f3f3f]
        "
      >
        <Heart
          size={18}
          className={
            wished
              ? "fill-[#FF7A1A] text-[#FF7A1A]"
              : ""
          }
        />

        {wished
          ? "Added To Wishlist"
          : "Add To Wishlist"}
      </button>

      {/* POLICIES */}
      <div className="mt-8 border-t border-[#edf1f2] pt-6 space-y-4">
        {settings.shipping_info && (
          <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
            <Truck size={18} className="text-[#5A97A9]" />
            <span>{settings.shipping_info}</span>
          </div>
        )}
        {settings.return_policy && (
          <div className="flex items-center gap-3 text-sm text-[#5A5A5A]">
            <RotateCcw size={18} className="text-[#FF7A1A]" />
            <span>{settings.return_policy}</span>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductInfo;