import React, {useRef, useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductListing from '../components/ProductListing';
import Cart from '../components/Cart';
import Modal from '../components/Modal';

const HomePage = () => {
    const products = useLoaderData();
    const modalControl = useRef(null); // Declare modalControl here
    
  return (
    <>
    <div className="h-full p-20 grid xl:grid-cols-[70%,28%]  gap-5 font-redhat">
      <div className="container m-auto">
        <h1 className="font-bold text-[40px] tracking-wide">Desserts</h1>
        {/* Product Listings */}
        <ProductListing products={products}/>
      </div>
      {/* Cart */}
      <Cart modalControl={modalControl}/>
    </div>

    {/* Modal */}
    <Modal modalControl={modalControl} />

    <script src="./dialog.js"></script>
  </>
  )
}

const productLoader = async () => {
    // const res = await fetch('/products');
    // For online data fetching since proxy not working on vercel
    const res = await fetch('/api/products');
    if(!res.ok)
        throw new Error(`There was a problem fetching the product list. Error code: ${res.status}`)
    return await res.json();
}

export { HomePage as default, productLoader }