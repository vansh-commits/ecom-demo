import { Link } from "react-router-dom"
import { useCart } from "../contexts/CartProvider"
import { useState } from "react"

function ProductCard({ product }) {
  const { addToCart, cartItems, updateQuantity } = useCart()
  const [imageError, setImageError] = useState(false)


  const cartItem = cartItems.find((item) => item.id === product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const handleIncrement = (e) => {
    e.preventDefault()
    e.stopPropagation()
    updateQuantity(product.id, cartItem.quantity + 1)
  }

  const handleDecrement = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (cartItem.quantity > 1) {
      updateQuantity(product.id, cartItem.quantity - 1)
    }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div className="card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
        
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>

            {cartItem ? (
              <div className="flex items-center" onClick={(e) => e.preventDefault()}>
                <button onClick={handleDecrement} className="bg-gray-200 px-2 py-1 rounded-l-md text-sm">
                  -
                </button>
                <span className="px-3 py-1 bg-blue-600 text-white text-sm">{cartItem.quantity}</span>
                <button onClick={handleIncrement} className="bg-gray-200 px-2 py-1 rounded-r-md text-sm">
                  +
                </button>
              </div>
            ) : (
              <button onClick={handleAddToCart} className="btn btn-primary text-sm">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
