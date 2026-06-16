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