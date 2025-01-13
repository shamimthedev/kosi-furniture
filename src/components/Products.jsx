import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import Badge from "./Badge";

const Products = ({ categoryTxt, badgeText, titleTxt, priceTxt, src, className }) => {
  return (
    <>
      <div className="product-content p-4 border border-productBorder relative">
        <img className="w-full h-[321px] object-contain" src={src} alt="" />
        <Badge badgeText={badgeText} className={`${className} absolute top-6 right-6`}/>
        <div className="product-details font-secondary pt-4">
          <h4 className="text-[#767676]">Run, Dress</h4>
          <h3 className="mb-5 font-bold text-xl text-productTitle">Round neck T-shirt</h3>
          <div className="rating-cart flex justify-between items-center">
            <div className="rating">
              <span className="text-productPrice font-bold text-xl">$7.00</span>
              <span className="ml-1 text-[#767676] font-bold line-through">$12.00</span>
              <div className="flex gap-[1px] text-[#F9BF00]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="cart-icon h-10 w-10 flex justify-center items-center border border-[#51AA1B] text-[#51AA1B] rounded-[4px]">
              <HiOutlineShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
