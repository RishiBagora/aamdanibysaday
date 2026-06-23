// pages/Products.jsx

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import ProductsHero from "../components/products/ProductsHero";
import ProductsSidebar from "../components/products/ProductsSidebar";
import ProductsToolbar from "../components/products/ProductsToolbar";
import ProductsMobileFilters from "../components/products/ProductsMobileFilters";
import ProductsGrid from "../components/products/ProductsGrid";
import ProductsEmpty from "../components/products/ProductsEmpty";
import SEO from "../components/common/SEO";
import { useSettings } from "../context/SettingsContext";

import { getProducts } from "../services/api";

const Products = () => {
  const { settings } = useSettings();
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const [selectedPrice, setSelectedPrice] =
    useState("");

  const [inStockOnly, setInStockOnly] =
    useState(false);

  const [newOnly, setNewOnly] =
    useState(false);

  const [sortBy, setSortBy] =
    useState("default");

  const [
    showMobileFilters,
    setShowMobileFilters,
  ] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      const data =
        await getProducts();

      const activeProducts =
        data.filter(
          (item) =>
            String(
              item.status
            ).toLowerCase() ===
            "active"
        );

      setProducts(activeProducts);

      setLoading(false);
    };

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // SEARCH
    if (searchTerm.trim()) {
      const search =
        searchTerm.toLowerCase();

      filtered = filtered.filter(
        (product) =>
          [
            product.name,
            product.category,
            product.shortDescription,
            ...(product.tags || []),
          ]
            .join(" ")
            .toLowerCase()
            .includes(search)
      );
    }

    // CATEGORY
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) =>
          product.category ===
          selectedCategory
      );
    }

    // PRICE
    if (selectedPrice === "0-500") {
      filtered = filtered.filter(
        (product) =>
          product.price <= 500
      );
    }

    if (
      selectedPrice === "500-1000"
    ) {
      filtered = filtered.filter(
        (product) =>
          product.price > 500 &&
          product.price <= 1000
      );
    }

    if (selectedPrice === "1000+") {
      filtered = filtered.filter(
        (product) =>
          product.price > 1000
      );
    }

    // STOCK
    if (inStockOnly) {
      filtered = filtered.filter(
        (product) =>
          product.stock > 0
      );
    }

    // NEW
    if (newOnly) {
      filtered = filtered.filter(
        (product) =>
          product.isNew
      );
    }

    // SORTING
    switch (sortBy) {
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(
              b.createdAt
            ) -
            new Date(
              a.createdAt
            )
        );
        break;

      case "price-low":
        filtered.sort(
          (a, b) =>
            a.price - b.price
        );
        break;

      case "price-high":
        filtered.sort(
          (a, b) =>
            b.price - a.price
        );
        break;

      case "name-asc":
        filtered.sort((a, b) =>
          a.name.localeCompare(
            b.name
          )
        );
        break;

      case "name-desc":
        filtered.sort((a, b) =>
          b.name.localeCompare(
            a.name
          )
        );
        break;

      default:
        filtered.sort(
          (a, b) =>
            Number(
              a.sortOrder
            ) -
            Number(
              b.sortOrder
            )
        );
    }

    return filtered;
  }, [
    products,
    searchTerm,
    selectedCategory,
    selectedPrice,
    inStockOnly,
    newOnly,
    sortBy,
  ]);

  if (loading) {
    return (
      <>
        <ProductsHero
          totalProducts={0}
        />

        <section className="py-20 text-center">
          Loading products...
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={settings.products_page_title || "Handmade Products"}
        description={settings.products_page_description || ""}
      />
      <ProductsHero
        totalProducts={
          products.length
        }
      />

      <section className="py-10 md:py-14 bg-[#fcfcfc]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* PRODUCT LISTING INTRO */}
          <div className="mb-10 max-w-3xl border-l-4 border-[#5A97A9] pl-5 py-1">
            <p className="text-[15px] sm:text-base leading-7 text-[#6b7280]">
              Explore handmade products created with care, creativity, and dedication. Each item reflects the skill and effort of women working toward financial independence.
            </p>
          </div>

          <ProductsToolbar
            totalProducts={
              filteredProducts.length
            }
            searchTerm={searchTerm}
            setSearchTerm={
              setSearchTerm
            }
            sortBy={sortBy}
            setSortBy={setSortBy}
            setShowMobileFilters={
              setShowMobileFilters
            }
          />

          <div className="flex gap-8 mt-8">

            <ProductsSidebar
              selectedCategory={
                selectedCategory
              }
              setSelectedCategory={
                setSelectedCategory
              }
              selectedPrice={
                selectedPrice
              }
              setSelectedPrice={
                setSelectedPrice
              }
              inStockOnly={
                inStockOnly
              }
              setInStockOnly={
                setInStockOnly
              }
              newOnly={newOnly}
              setNewOnly={
                setNewOnly
              }
            />

            <div className="flex-1">

              {filteredProducts.length >
              0 ? (
                <ProductsGrid
                  products={
                    filteredProducts
                  }
                />
              ) : (
                <ProductsEmpty />
              )}

            </div>

          </div>

        </div>
      </section>

      {/* BULK & CUSTOM ORDERS SECTION */}
      <section className="py-14 bg-[#f5f7f8] border-t border-[#d7e3e7]/60">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#d7e3e7] bg-white p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              {/* LEFT */}
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-semibold tracking-wide text-[#FF7A1A] uppercase">
                  Bulk Orders
                </span>
                
                <h2 className="mt-5 text-[28px] sm:text-[36px] leading-[1.15] font-bold tracking-tight text-[#3f3f3f]">
                  Bulk & Custom Orders
                </h2>

                <p className="mt-4 text-sm sm:text-base text-[#6b7280] leading-6 sm:leading-7">
                  We accept bulk and customized orders for:
                </p>

                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-[#6b7280] font-medium pl-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF7A1A] text-lg">•</span> Corporate gifting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF7A1A] text-lg">•</span> Events and exhibitions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF7A1A] text-lg">•</span> Festive gifting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF7A1A] text-lg">•</span> Institutional collaborations
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <span className="text-[#FF7A1A] text-lg">•</span> CSR and social impact partnerships
                  </li>
                </ul>

                <p className="mt-5 text-sm text-[#4a4a4a] font-semibold italic border-l-2 border-[#FF7A1A] pl-3">
                  Every order directly contributes toward creating sustainable livelihood opportunities for women.
                </p>
              </div>

              {/* RIGHT */}
              <div className="shrink-0">
                <a
                  href={`https://wa.me/${settings.whatsapp_number || '919643424286'}?text=${encodeURIComponent("Hello Aamdani, I am interested in placing Bulk / Custom Orders.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#5A97A9] text-white text-sm font-semibold hover:bg-[#4c8798] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.835-2.016c1.649.978 3.26 1.488 4.884 1.489 5.485.002 9.945-4.457 9.948-9.947.002-2.66-1.033-5.161-2.909-7.038C16.942 4.612 14.442 3.58 11.785 3.58 6.3 3.58 1.84 8.04 1.838 13.53c-.001 1.761.485 3.42 1.42 4.905l-1.036 3.793 3.835-1.007zM17.15 14.88c-.282-.142-1.67-.824-1.928-.918-.258-.094-.446-.142-.634.142-.188.283-.728.918-.893 1.107-.165.188-.329.212-.612.071-.282-.142-1.192-.44-2.27-1.402-.839-.748-1.405-1.671-1.569-1.954-.165-.283-.018-.436.124-.576.127-.126.282-.33.424-.495.142-.165.188-.283.282-.472.094-.188.047-.353-.024-.495-.071-.142-.634-1.53-.87-2.099-.23-.554-.462-.48-.635-.489-.165-.008-.353-.01-.541-.01s-.494.07-.753.353c-.259.282-.988.966-.988 2.358 0 1.39.1 2.731.141 2.919.047.189 2.007 3.066 4.863 4.298 2.378 1.026 2.937.828 3.993.729.839-.079 1.67-.68 1.905-1.343.235-.662.235-1.229.165-1.343-.071-.115-.259-.188-.541-.329z" />
                  </svg>
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsMobileFilters
        isOpen={
          showMobileFilters
        }
        setIsOpen={
          setShowMobileFilters
        }
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
        selectedPrice={
          selectedPrice
        }
        setSelectedPrice={
          setSelectedPrice
        }
        inStockOnly={
          inStockOnly
        }
        setInStockOnly={
          setInStockOnly
        }
        newOnly={newOnly}
        setNewOnly={setNewOnly}
      />
    </>
  );
};

export default Products;