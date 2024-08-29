import React from "react";

const Products = ({ data, loading }) => {
  return (
    <div className="container grid grid-cols-4 gap-4">
      {data?.map((product) => {
        return (
          <div
            className="group border border-gray-200 p-4 rounded-xl bg-gray-50 cursor-pointer"
            key={product.id}
          >
            <div className="w-full mb-3 bg-gray-100 rounded-lg border border-gray-300 relative overflow-hidden">
              <img
                className="group-hover:scale-[1.03] transition-all duration-200 ease-in-out object-contain w-[200px] h-[200px] mx-auto"
                src={product.images[0]}
                alt=""
              />
              <div className="group-hover:-z-[1] w-full h-full bg-[#00000005] z-30 absolute bottom-0 left-0"></div>
            </div>
            <p className="group-hover:text-blue-400 transition-all duration-200 ease-in-out">
              {product.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
