import { useState, useMemo } from "react"
import ProductCard from "../components/ProductCard.jsx"
import ProductFilter from "../components/ProductFilter.jsx"
import useFetchProducts from "../hooks/useFetchProducts.jsx"

function HomePage() {

  const { products, loading, error } = useFetchProducts("https://raw.githubusercontent.com/vansh-commits/ecom-demo/main/Data_for_call/data.json");


  const categories = products ? [...new Set(products.map((product) => product.category))] : [];


  const priceRanges = [
    { id: "all", label: "All Prices", min: 0, max: Number.POSITIVE_INFINITY },
    { id: "under-50", label: "Under $50", min: 0, max: 50 },
    { id: "50-100", label: "$50 - $100", min: 50, max: 100 },
    { id: "100-200", label: "$100 - $200", min: 100, max: 200 },
    { id: "over-200", label: "Over $200", min: 200, max: Number.POSITIVE_INFINITY },
  ]


  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [sortOption, setSortOption] = useState("featured")


  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }


  const handlePriceRangeChange = (rangeId) => {
    setSelectedPriceRange(rangeId)
  }

  const handleSortChange = (option) => {
    setSortOption(option)
  }


  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return []; 

    
    let result = [...products]


    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }


    const selectedRange = priceRanges.find((range) => range.id === selectedPriceRange)
    if (selectedRange) {
      result = result.filter((product) => product.price >= selectedRange.min && product.price <= selectedRange.max)
    }


    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        break
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return result
  }, [selectedCategories, selectedPriceRange, sortOption, products]) 

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="text-lg mt-4">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Failed to load products</h2>
        <p className="text-gray-600">There was an error fetching the products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Latest Tech Gadgets</h1>
        <p className="text-gray-600">Discover the newest and most innovative tech products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="md:col-span-1">
          <ProductFilter
            categories={categories}
            priceRange={priceRanges}
            selectedCategories={selectedCategories}
            selectedPriceRange={selectedPriceRange}
            onCategoryChange={handleCategoryChange}
            onPriceRangeChange={handlePriceRangeChange}
            onSortChange={handleSortChange}
            sortOption={sortOption}
          />
        </div>


        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">No products found</h2>
              <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
