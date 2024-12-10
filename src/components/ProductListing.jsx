import React from 'react'
import Product from './Product'
import LoadingSpinner from './LoadingSpinner'
import { useState, useEffect } from "react";

const ProductListing = ({products}) => {
  const [productsFetched, setProductsFetched] = useState(false);
  useEffect(() => {
    setProductsFetched(!!products && products.length > 0);
  }, [products]); // Runs whenever 'products' changes

  if(productsFetched){
    return (
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
      {
        products.map((product) => (
          <Product key={product.id} product={product}/>
        ))
      }
    </div>
    )
  }
  return(
    <div className="w-full h-52 grid place-items-center">
        <LoadingSpinner loading={!productsFetched} />
      </div>
  )
}

export default ProductListing