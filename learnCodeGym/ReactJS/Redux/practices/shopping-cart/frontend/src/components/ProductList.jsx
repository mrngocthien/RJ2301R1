import React from 'react'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from "./ProductItem"
import { useSelector } from "react-redux"

const ProductsList = () => {
  const products = useSelector(state => getVisibleProducts(state.products))

  return (
  <div>
    <h3>Products</h3>
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => {}} />
    )}
  </div>
  )
}

export default ProductsList