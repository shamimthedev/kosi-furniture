import Product3 from '../../assets/product-3.png';
import Product4 from '../../assets/product-4.png';
import Product6 from '../../assets/product-6.png';
import Product from '../Product';
import { useState, useEffect } from 'react';
import { IoGridOutline, IoList, IoFunnel } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const products = [
  { 
    id: 1, 
    title: "Premium Sport Jacket", 
    price: 30, 
    oldPrice: 45, 
    src: Product3, 
    category: "Sportswear", 
    badgeText: "-33%", 
    className: "bg-red-500 text-white",
    rating: 4.8,
    reviews: 156,
    isNew: false,
    isBestSeller: true
  },
  { 
    id: 2, 
    title: "Luxury Travel Backpack", 
    price: 25, 
    oldPrice: 35, 
    src: Product4, 
    category: "Accessories", 
    badgeText: "-29%", 
    className: "bg-orange-500 text-white",
    rating: 4.6,
    reviews: 89,
    isNew: true,
    isBestSeller: false
  },
  { 
    id: 3, 
    title: "Smart Fitness Watch", 
    price: 120, 
    oldPrice: 150, 
    src: Product6, 
    category: "Wearable Tech",
    badgeText: "-20%", 
    className: "bg-blue-500 text-white",
    rating: 4.9,
    reviews: 203,
    isNew: false,
    isBestSeller: true
  },
  { 
    id: 4, 
    title: "Advanced Smart Watch Pro", 
    price: 180, 
    oldPrice: null, 
    src: Product6, 
    category: "Wearable Tech",
    rating: 4.7,
    reviews: 124,
    isNew: true,
    isBestSeller: false
  },
  { 
    id: 5, 
    title: "Elite Sport Jacket", 
    price: 45, 
    oldPrice: 60, 
    src: Product3, 
    category: "Sportswear", 
    badgeText: "-25%", 
    className: "bg-green-500 text-white",
    rating: 4.5,
    reviews: 67,
    isNew: false,
    isBestSeller: false
  },
  { 
    id: 6, 
    title: "Designer Leather Backpack", 
    price: 85, 
    oldPrice: 110, 
    src: Product4, 
    category: "Accessories", 
    badgeText: "-23%", 
    className: "bg-purple-500 text-white",
    rating: 4.4,
    reviews: 45,
    isNew: false,
    isBestSeller: false
  },
  { 
    id: 7, 
    title: "Health Monitor Watch", 
    price: 95, 
    oldPrice: 120, 
    src: Product6, 
    category: "Wearable Tech",
    badgeText: "-21%", 
    className: "bg-teal-500 text-white",
    rating: 4.3,
    reviews: 78,
    isNew: false,
    isBestSeller: false
  },
  { 
    id: 8, 
    title: "Ultimate Smart Watch", 
    price: 220, 
    oldPrice: null, 
    src: Product6, 
    category: "Wearable Tech",
    rating: 4.9,
    reviews: 312,
    isNew: true,
    isBestSeller: true
  },
];

const categories = ["All", "Sportswear", "Accessories", "Wearable Tech"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" }
];

const TopPicks = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showFilters, setShowFilters] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter and sort products
  useEffect(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order with bestsellers first
        filtered = [...filtered].sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (category) => {
    setIsAnimating(true);
    setSelectedCategory(category);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleLoadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 4, filteredProducts.length));
  };

  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-48 translate-y-48"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              CURATED SELECTION
            </span>
          </div>
          
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            <span className="hidden md:inline">Top Picks For You</span>
            <span className="md:hidden">Top Picks</span>
          </h2>
          
          <p className="max-w-2xl mx-auto font-secondary text-lg md:text-xl text-gray-600 leading-relaxed">
            <span className="hidden md:inline">
              Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
            </span>
            <span className="md:hidden">
              Find your perfect style with our curated collection.
            </span>
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-primary border border-gray-200 hover:border-primary/30'
                  }`}
                >
                  {category}
                  {category !== "All" && (
                    <span className="ml-2 text-xs opacity-70">
                      ({products.filter(p => p.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid" ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <IoGridOutline className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list" ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <IoList className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Toggle - Mobile */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden p-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50"
              >
                <IoFunnel className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center lg:text-left">
            <p className="text-gray-600">
              Showing {displayedProducts.length} of {filteredProducts.length} products
              {selectedCategory !== "All" && (
                <span className="ml-1">in &quot;{selectedCategory}&quot;</span>
              )}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-50 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          <div className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1 md:grid-cols-2"
          }`}>
            {displayedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Product
                  id={product.id}
                  titleTxt={product.title}
                  priceTxt={product.price}
                  oldPriceTxt={product.oldPrice}
                  src={product.src}
                  categoryTxt={product.category}
                  badgeText={product.badgeText}
                  className={product.className}
                  rating={product.rating}
                  reviews={product.reviews}
                  isNew={product.isNew}
                  isBestSeller={product.isBestSeller}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Load More / View All */}
        <div className="text-center mt-16">
          {visibleProducts < filteredProducts.length ? (
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl mr-4"
            >
              Load More Products ({filteredProducts.length - visibleProducts} remaining)
            </button>
          ) : null}
          
          <Link
            to="/products"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">500+</h4>
              <p className="text-gray-600">Premium Products</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">10K+</h4>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">4.8★</h4>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TopPicks;