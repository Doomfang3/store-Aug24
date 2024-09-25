import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../helper/fetchProduct'

function ProductDetailsPage() {
  const { productId } = useParams()
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({})

  // https://fakestoreapi.com/products/:id
  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:

  const fetchCurrentProduct = async () => {
    setProduct(await fetchProduct(productId))
  }

  useEffect(() => {
    fetchCurrentProduct()
  }, [])

  return (
    <div className='ProductDetailsPage'>
      <img src={product.image} /> <h1>{product.title}</h1>
    </div>
  )
}

export default ProductDetailsPage
