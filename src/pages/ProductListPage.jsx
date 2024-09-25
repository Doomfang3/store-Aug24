import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([])
  // https://fakestoreapi.com/products
  // To fetch the list of products, set up an effect with the `useEffect` hook:

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ul className='ProductListPage'>
      {products.map(currentProduct => (
        <li key={currentProduct.id}>
          <Link to={`/products/${currentProduct.id}`}>{currentProduct.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductListPage
