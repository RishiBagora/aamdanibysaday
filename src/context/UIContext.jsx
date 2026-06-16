import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isWishlistOpen, setIsWishlistOpen] =
    useState(false);

  const openCart = () => setIsCartOpen(true);

  const closeCart = () => setIsCartOpen(false);

  const toggleCart = () =>
    setIsCartOpen((prev) => !prev);

  const openWishlist = () =>
    setIsWishlistOpen(true);

  const closeWishlist = () =>
    setIsWishlistOpen(false);

  const toggleWishlist = () =>
    setIsWishlistOpen((prev) => !prev);

  return (
    <UIContext.Provider
      value={{
        isCartOpen,
        isWishlistOpen,

        openCart,
        closeCart,
        toggleCart,

        openWishlist,
        closeWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  return useContext(UIContext);
};