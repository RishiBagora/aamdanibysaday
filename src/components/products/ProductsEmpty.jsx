const ProductsEmpty = () => {
  return (
    <div className="bg-white border border-[#e7ecee] rounded-[24px] p-12 text-center">

      <h3 className="text-2xl font-semibold text-[#3f3f3f]">
        No Products Found
      </h3>

      <p className="mt-3 text-[#6b7280] max-w-md mx-auto">
        We couldn't find products matching your filters.
        Try changing categories, price range, or search terms.
      </p>

    </div>
  );
};

export default ProductsEmpty;