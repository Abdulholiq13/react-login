import Products from "@/components/products/Products";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="container py-5">
      <h2 className="text-xl mb-3 text-center font-sans font-semibold mt-3">
        Wishlist
      </h2>
      {<Products data={wishlist} />}
      <button
        className="fixed left-5 bottom-2 p-2 px-4 font-medium text-sm text-red-600 border border-gray-400 hover: bg-gray-200 rounded-md"
        onClick={() => dispatch({ type: "LOGOUT", payload: data?.token })}
      >
        Log Out
      </button>
    </div>
  );
};

export default Wishlist;
