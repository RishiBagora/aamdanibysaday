import { AnimatePresence, motion } from "framer-motion";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useUI } from "../../context/UIContext";
import { useSettings } from "../../context/SettingsContext";

const CartDrawer = () => {
  const {
    cartItems,
    totalPrice,

    removeFromCart,
    updateQuantity,
  } = useCart();

  const {
    isCartOpen,
    closeCart,
  } = useUI();

  const { settings } = useSettings();
  const currencySymbol = settings.currency_symbol || "₹";

  const handleCheckout = () => {
    if (!cartItems.length) return;

    const items = cartItems
      .map(
        (item) =>
          `${item.quantity} x ${item.name} - ${currencySymbol}${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `Hello,

I would like to place an order:

${items}

Total: ${currencySymbol}${totalPrice}

Please share payment details.`;

    const whatsappNumber =
      cartItems[0]?.whatsappNumber ||
      settings.whatsapp_number ||
      "919876543210";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>

      {isCartOpen && (
        <>

          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
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

                <ShoppingCart size={20} />

                <h3 className="font-semibold text-lg">
                  Cart
                </h3>

              </div>

              <button
                onClick={closeCart}
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

              {!cartItems.length ? (
                <div className="h-full flex items-center justify-center px-6">

                  <div className="text-center">

                    <ShoppingCart
                      size={48}
                      className="mx-auto text-[#c5cbd1]"
                    />

                    <h4 className="mt-5 text-xl font-semibold text-[#3f3f3f]">
                      Your Cart Is Empty
                    </h4>

                    <p className="mt-2 text-[#6b7280]">
                      Add products to continue shopping.
                    </p>

                  </div>

                </div>
              ) : (
                <div className="p-5 space-y-4">

                  {cartItems.map((item) => (

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

                          <h4 className="font-medium text-[#3f3f3f]">
                            {item.name}
                          </h4>

                          <p className="mt-1 text-[#5A97A9] text-sm">
                            {item.category}
                          </p>

                          <p className="mt-2 font-semibold">
                            {currencySymbol}{item.price}
                          </p>

                        </div>

                        {/* DELETE */}
                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                        >
                          <Trash2
                            size={18}
                            className="text-red-500"
                          />
                        </button>

                      </div>

                      {/* QTY */}
                      <div className="mt-4 flex items-center justify-between">

                        <div
                          className="
                            flex items-center
                            border border-[#edf1f2]
                            rounded-full
                          "
                        >

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                            className="w-10 h-10 flex items-center justify-center"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="w-10 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                            className="w-10 h-10 flex items-center justify-center"
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                        <span className="font-semibold">
                          {currencySymbol}
                          {item.price *
                            item.quantity}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>
              )}

            </div>

            {/* FOOTER */}
            {!!cartItems.length && (
              <div className="border-t border-[#edf1f2] p-5">

                <div className="flex items-center justify-between mb-5">

                  <span className="text-[#6b7280]">
                    Total
                  </span>

                  <span className="text-2xl font-semibold">
                    {currencySymbol}{totalPrice}
                  </span>

                </div>

                <button
                  onClick={handleCheckout}
                  className="
                    w-full
                    h-[54px]
                    rounded-full
                    bg-[#FF7A1A]
                    text-white
                    font-medium
                  "
                >
                  Checkout On WhatsApp
                </button>

              </div>
            )}

          </motion.div>

        </>
      )}

    </AnimatePresence>
  );
};

export default CartDrawer;