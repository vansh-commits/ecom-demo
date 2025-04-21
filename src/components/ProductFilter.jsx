function ProductFilter({
    categories,
    priceRange,
    selectedCategories,
    selectedPriceRange,
    onCategoryChange,
    onPriceRangeChange,
    onSortChange,
    sortOption,
  }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-blue-600 rounded"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
  

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="space-y-2">
            {priceRange.map((range) => (
              <label key={range.id} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2 h-4 w-4 text-blue-600"
                  checked={selectedPriceRange === range.id}
                  onChange={() => onPriceRangeChange(range.id)}
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>
  

        <div>
          <h3 className="font-semibold mb-2">Sort By</h3>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    )
  }
  
  export default ProductFilter
  