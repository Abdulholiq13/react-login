import { useDispatch, useSelector } from "react-redux";
import { IoIosHeartEmpty, IoIosHeart, IoIosCart } from "react-icons/io";

const Products = ({ data, loading }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div className="container grid grid-cols-4 gap-4">
      {data?.map((product) => {
        return (
          <div className="group p-4 cursor-pointer" key={product.id}>
            <div className="w-full mb-3 bg-gray-100 rounded-lg relative overflow-hidden">
              <img
                className="group-hover:scale-[1.03] transition-all duration-200 ease-in-out object-contain w-[200px] h-[200px] mx-auto"
                src={product.images[0]}
                alt=""
              />
              <div className="group-hover:-z-[1] w-full h-full bg-[#00000005] z-30 absolute bottom-0 left-0"></div>

              <button
                className="absolute top-1 right-1 p-[4px] text-2xl bg-transparent rounded-md"
                onClick={() =>
                  dispatch({ type: "TOGGLE_WISHLIST", payload: product })
                }
              >
                {wishlist?.some((item) => item.id === product.id) ? (
                  <IoIosHeart className="text-red-400" />
                ) : (
                  <IoIosHeartEmpty />
                )}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="group-hover:text-blue-400 transition-all duration-200 ease-in-out">
                {product.title}
              </p>
              <button
                className=""
                onClick={() =>
                  dispatch({ type: "TOGGLE_CART", payload: product })
                }
              >
                <IoIosCart className="text-2xl text-green-" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
