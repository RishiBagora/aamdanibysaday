import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem(
      "aamdani-wishlist"
    );

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "aamdani-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  // TOGGLE WISHLIST
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prev, product];
    });
  };

  // CHECK PRODUCT IN WISHLIST
  const isWishlisted = (productId) => {
    return wishlistItems.some(
      (item) => item.id === productId
    );
  };

  // REMOVE PRODUCT
  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) =>
      prev.filter(
        (item) => item.id !== productId
      )
    );
  };

  // CLEAR ALL
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const value = {
    wishlistItems,

    toggleWishlist,
    isWishlisted,

    removeFromWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};