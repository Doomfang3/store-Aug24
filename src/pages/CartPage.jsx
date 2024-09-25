import { useEffect, useState } from 'react'
import { fetchProduct } from '../helper/fetchProduct'

const CartPage = () => {
  const [products, setProducts] = useState([])
  // https://fakestoreapi.com/carts/2

  const fetchProductsFromCart = async () => {
    const response = await fetch('https://fakestoreapi.com/carts/2')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const productsPromises = data.products.map(currentProduct =>
        fetchProduct(currentProduct.productId)
      )
      const productsData = await Promise.all(productsPromises)
      setProducts(
        productsData.map((currentProduct, currentIndex) => ({
          ...currentProduct,
          quantity: data.products[currentIndex].quantity,
        }))
      )
    }
  }

  useEffect(() => {
    fetchProductsFromCart()
  }, [])

  return (
    <>
      <h1>Cart</h1>
      <ul>
        {products.map(currentProduct => (
          <li key={currentProduct.id}>
            <span>{currentProduct.title}</span> || <span>{currentProduct.price}</span> ||
            <span>Quantity: {currentProduct.quantity}</span> ||
            <span>Subtotal: {currentProduct.quantity * currentProduct.price}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CartPage
