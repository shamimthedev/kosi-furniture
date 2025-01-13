import Products from "../Products";
import Product1 from '../../assets/product-1.png'
import Product2 from '../../assets/product-2.png'
import Product3 from '../../assets/product-3.png'
import Product4 from '../../assets/product-4.png'
import Product5 from '../../assets/product-5.png'
import Product6 from '../../assets/product-6.png'

const TopPicks = () => {

  return (
    <>
      <section className="mb-32">
        <div className="container pt-14 md:pt-20">
          <div className="title hidden md:block mb-10 md:mb-16">
            <h2 className="mb-7 font-bold font-primary text-center text-primary text-3xl lg:text-4xl">
              Top Picks For You
            </h2>
            <p className="max-w-3xl mx-auto text-center font-secondary text-xl">
              Find a bright ideal to suit your taste with out great selection of
              suspension, floor and table lights.
            </p>
          </div>
          {/* title section for mobile only */}
          <div className="title md:hidden mb-10">
            <h2 className="mb-7 font-bold font-primary text-center text-primary text-3xl lg:text-4xl">
              Top Picks
            </h2>
            <p className="max-w-3xl mx-auto text-center font-secondary text-xl">
              Find your best taste.
            </p>
          </div>
          {/* products parts */}
          <div className="mb-24 md:mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            <Products src={Product1} />
            <Products src={Product2} />
            <Products src={Product3} badgeText={'-20%'} className={'bg-[#4FBF59]'}/>
            <Products src={Product4} badgeText={'-20%'} className={'bg-[#4FBF59]'}/>
            <Products src={Product5} />
            <Products src={Product6} />
            <Products src={Product5} badgeText={'-20%'} className={'bg-[#4FBF59]'}/>
            <Products src={Product6} />
          </div>
          <div className="view-more-btn text-center">
            <button className="px-12 py-6 bg-primary text-white font-bold font-secondary rounded-[10px]">View All Products</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopPicks;
