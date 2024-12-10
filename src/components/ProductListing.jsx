import React from "react";
import Product from "./Product";
import LoadingSpinner from "./LoadingSpinner";
import { useState, useEffect } from "react";

const ProductListing = ({ products }) => {
  const [productsFetched, setProductsFetched] = useState(false);
  useEffect(() => {
    setProductsFetched(!!products && products.length > 0);
  }, [products]); // Runs whenever 'products' changes

  // This is for the online json server api version
  const processedProducts = products.map((product, index) => ({
    ...product,
    id: product.id || index,
  }));
  // This is for the online json server api version

  if (productsFetched) {
    return (
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {
          // products.map((product) => (
          //   <Product key={product.id} product={product}/>
          // ))

          // This is for the online json server api version
          processedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
          // This is for the online json server api version
        }
      </div>
    );
  }
  return (
    <div className="w-full h-52 grid place-items-center">
      <LoadingSpinner loading={!productsFetched} />
    </div>
  );
};

export default ProductListing;
