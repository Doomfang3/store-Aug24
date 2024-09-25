export const fetchProduct = async productId => {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
  if (response.ok) {
    return response.json()
  }
}
