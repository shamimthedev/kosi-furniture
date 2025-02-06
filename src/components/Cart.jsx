import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(addToCart(item))}>+</button>
                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
