import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import Badge from "./Badge";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product = ({ id, categoryTxt, badgeText, titleTxt, priceTxt, oldPriceTxt, src, className }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title: titleTxt,
        price: priceTxt,
        oldPrice: oldPriceTxt,
        image: src,
        quantity: 1, // Default quantity when adding the item
      })
    );
  };

  return (
    <div className="product-content p-4 border border-productBorder relative">
      <img className="w-full h-[321px] object-contain" src={src} alt={titleTxt} />
      {badgeText && <Badge badgeText={badgeText} className={`${className} absolute top-6 right-6`} />}
      <div className="product-details font-secondary pt-4">
        <h4 className="text-[#767676]">{categoryTxt}</h4>
        <h3 className="mb-5 font-bold text-xl text-productTitle">{titleTxt}</h3>
        <div className="rating-cart flex justify-between items-center">
          <div className="rating">
            <span className="text-productPrice font-bold text-xl">${priceTxt}</span>
            {oldPriceTxt && (
              <span className="ml-1 text-[#767676] font-bold line-through">${oldPriceTxt}</span>
            )}
            <div className="flex gap-[1px] text-[#F9BF00]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <button onClick={handleAddToCart}>
            <div className="cart-icon h-10 w-10 flex justify-center items-center border border-[#51AA1B] text-[#51AA1B] rounded-[4px]">
              <HiOutlineShoppingBag />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
