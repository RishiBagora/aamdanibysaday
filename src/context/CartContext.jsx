import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("aamdani-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "aamdani-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  // UPDATE QUANTITY
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  // CLEAR CART
  const clearCart = () => {
    setCartItems([]);
  };

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const value = {
    cartItems,

    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    totalItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};