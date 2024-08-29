import { useDispatch, useSelector } from "react-redux";
import Products from "@/components/products/Products";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container py-5">
      <h2 className="text-xl mb-3 text-center font-sans font-semibold mt-3 z">
        Cart
      </h2>

      {<Products data={cart} />}

      <button
        className="fixed left-5 bottom-2 p-2 px-4 font-medium text-sm text-red-600 border border-gray-400 hover: bg-gray-200 rounded-md"
        onClick={() => dispatch({ type: "LOGOUT" })}
      >
        Log Out
      </button>
    </div>
  );
};

export default Cart;
