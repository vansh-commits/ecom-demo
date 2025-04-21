import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useCart } from "../contexts/CartProvider.jsx"
import useFetchProducts from "../hooks/useFetchProducts.jsx"

function ProductDetailPage() {
  const { products, _, error } = useFetchProducts("https://raw.githubusercontent.com/vansh-commits/ecom-demo/main/Data_for_call/data.json")
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === Number.parseInt(id)) 
      setProduct(foundProduct || null)  
      setLoading(false)
    }
  }, [products, id]) 

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    if (product) {

      for (let i = 0; i < quantity; i++) {
        addToCart(product)
      }
    }
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto object-cover" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {product.category}
            </span>
            {product.featured && (
              <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                Featured
              </span>
            )}
          </div>

          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Availability</h2>
            <p className={`${product.inStock ? "text-green-600" : "text-red-600"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          <div className="mb-6">
            <label htmlFor="quantity" className="block text-lg font-semibold mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                className="bg-gray-200 px-3 py-1 rounded-l-md"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border-t border-b border-gray-300 py-1"
              />
              <button className="bg-gray-200 px-3 py-1 rounded-r-md" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full py-3 text-lg" onClick={handleAddToCart} disabled={!product.inStock}>
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
