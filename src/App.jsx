import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Support from "./pages/Support";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { UIProvider } from "./context/UIContext";
import CartDrawer from "./components/drawer/CartDrawer";
import WishlistDrawer from "./components/drawer/WishlistDrawer";
import { SettingsProvider } from "./context/SettingsContext";
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <HelmetProvider>
    <BrowserRouter>
    <SettingsProvider>
      <UIProvider>

        <WishlistProvider>

          <CartProvider>

            <Navbar />

            <CartDrawer />
            <WishlistDrawer />
            <Toaster
  position="bottom-right"
  toastOptions={{
    duration: 2500,
    style: {
      background: "#ffffff",
      color: "#3f3f3f",
      border: "1px solid #e7ecee",
      borderRadius: "16px",
    },
  }}
/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/:slug"
                element={<ProductDetails />}
              />
              <Route path="/support" element={<Support />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />

          </CartProvider>

        </WishlistProvider>

      </UIProvider>
    </SettingsProvider>
    </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;