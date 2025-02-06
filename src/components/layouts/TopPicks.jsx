import Product3 from '../../assets/product-3.png';
import Product4 from '../../assets/product-4.png';
import Product6 from '../../assets/product-6.png';
import Product from '../Product';

const products = [
  { id: 1, title: "Sport Jacket", price: 30, oldPrice: 45, src: Product3, category: "Sportswear", badgeText: "-20%", className: "bg-[#4FBF59]" },
  { id: 2, title: "Backpack", price: 25, oldPrice: 35, src: Product4, category: "Accessories", badgeText: "-20%", className: "bg-[#4FBF59]" },
  { id: 3, title: "Smart Watch", price: 120, oldPrice: 150, src: Product6, category: "Wearable Tech" },
  { id: 4, title: "Smart Watch", price: 120, oldPrice: 150, src: Product6, category: "Wearable Tech" },
  { id: 5, title: "Sport Jacket", price: 30, oldPrice: 45, src: Product3, category: "Sportswear", badgeText: "-20%", className: "bg-[#4FBF59]" },
  { id: 6, title: "Backpack", price: 25, oldPrice: 35, src: Product4, category: "Accessories", badgeText: "-20%", className: "bg-[#4FBF59]" },
  { id: 7, title: "Smart Watch", price: 120, oldPrice: 150, src: Product6, category: "Wearable Tech" },
  { id: 8, title: "Smart Watch", price: 120, oldPrice: 150, src: Product6, category: "Wearable Tech" },
];

const TopPicks = () => {
  return (
    <section className="mb-32">
      <div className="container pt-14 md:pt-20">
        <div className="title hidden md:block mb-10 md:mb-16">
          <h2 className="mb-7 font-bold font-primary text-center text-primary text-3xl lg:text-4xl">
            Top Picks For You
          </h2>
          <p className="max-w-3xl mx-auto text-center font-secondary text-xl">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>
        {/* Mobile title */}
        <div className="title md:hidden mb-10">
          <h2 className="mb-7 font-bold font-primary text-center text-primary text-3xl lg:text-4xl">
            Top Picks
          </h2>
          <p className="max-w-3xl mx-auto text-center font-secondary text-xl">
            Find your best taste.
          </p>
        </div>
        {/* Products Grid */}
        <div className="mb-24 md:mb-16 lg:mb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              titleTxt={product.title}
              priceTxt={product.price}
              oldPriceTxt={product.oldPrice}
              src={product.src}
              categoryTxt={product.category}
              badgeText={product.badgeText}
              className={product.className}
            />
          ))}
        </div>
        {/* View More Button */}
        <div className="view-more-btn text-center">
          <button className="px-12 py-6 bg-primary text-white font-bold font-secondary rounded-[10px]">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;

