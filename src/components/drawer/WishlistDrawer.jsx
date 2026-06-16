import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";
import { useSettings } from "../../context/SettingsContext";

const WishlistDrawer = () => {
  const { settings } = useSettings();
  const currencySymbol = settings.currency_symbol || "₹";
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const {
    isWishlistOpen,
    closeWishlist,
    openCart,
  } = useUI();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);

    removeFromWishlist(product.id);

    openCart();
  };

  return (
    <AnimatePresence>

      {isWishlistOpen && (
        <>

          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWishlist}
            className="fixed inset-0 bg-black/40 z-[100]"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 260,
            }}
            className="
              fixed
              top-0
              right-0
              h-screen
              w-full
              sm:w-[420px]
              bg-white
              z-[110]
              flex
              flex-col
            "
          >

            {/* HEADER */}
            <div className="h-[78px] border-b border-[#edf1f2] px-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Heart size={20} />

                <h3 className="font-semibold text-lg">
                  Wishlist
                </h3>

              </div>

              <button
                onClick={closeWishlist}
                className="
                  w-10 h-10
                  rounded-full
                  border border-[#edf1f2]
                  flex items-center justify-center
                "
              >
                <X size={18} />
              </button>

            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto">

              {!wishlistItems.length ? (
                <div className="h-full flex items-center justify-center px-6">

                  <div className="text-center">

                    <Heart
                      size={48}
                      className="mx-auto text-[#c5cbd1]"
                    />

                    <h4 className="mt-5 text-xl font-semibold text-[#3f3f3f]">
                      Your Wishlist Is Empty
                    </h4>

                    <p className="mt-2 text-[#6b7280]">
                      Save products to view them later.
                    </p>

                  </div>

                </div>
              ) : (
                <div className="p-5 space-y-4">

                  {wishlistItems.map((item) => (

                    <div
                      key={item.id}
                      className="
                        border border-[#edf1f2]
                        rounded-[20px]
                        p-4
                      "
                    >

                      <div className="flex gap-4">

                        {/* IMAGE */}
                        <img
                          src={item.images?.[0]}
                          alt={item.name}
                          className="
                            w-20 h-20
                            rounded-xl
                            object-cover
                          "
                        />

                        {/* INFO */}
                        <div className="flex-1">

                          <h4 className="font-medium text-[#3f3f3f] line-clamp-2">
                            {item.name}
                          </h4>

                          <p className="mt-1 text-[#5A97A9] text-sm">
                            {item.category}
                          </p>

                          <p className="mt-2 font-semibold">
                            {currencySymbol}{item.price}
                          </p>

                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            removeFromWishlist(item.id)
                          }
                        >
                          <Trash2
                            size={18}
                            className="text-red-500"
                          />
                        </button>

                      </div>

                      {/* ACTION */}
                      <button
                        onClick={() =>
                          handleMoveToCart(item)
                        }
                        className="
                          w-full
                          mt-4
                          h-[48px]
                          rounded-full
                          bg-[#3f3f3f]
                          text-white
                          text-sm
                          font-medium
                          flex
                          items-center
                          justify-center
                          gap-2
                        "
                      >
                        <ShoppingCart size={16} />

                        Move To Cart
                      </button>

                    </div>

                  ))}

                </div>
              )}

            </div>

          </motion.div>

        </>
      )}

    </AnimatePresence>
  );
};

export default WishlistDrawer;