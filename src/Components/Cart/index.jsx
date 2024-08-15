import { PropTypes } from "prop-types";
import Button from "../Buttons";
const Cart = ({ cartItems, onCheckout }) => {
  console.log(cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  return (
    <div className="my-4 flex justify-center items-center gap-10 text-[#fff]">
      {cartItems.length === 0 ? "No items in cart" : null}
      <br />
      <span>Total Price: ${total.toFixed(2)}</span>
      <div className="w-[30%]">
        <Button
          title={`${cartItems.length === 0 ? "Order !" : "Checkout"}`}
          type={"edit"}
                  disable={cartItems.length === 0 ? true : false}
          onClick={onCheckout}
        />
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
  onCheckout: PropTypes.func,
};

export default Cart;
