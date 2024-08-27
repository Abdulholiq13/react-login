import React from "react";

const Products = ({ data, loading }) => {
  return (
    <div className="container grid grid-cols-4 gap-4">
      {data?.map((product) => {
        return (
          <div
            className="border border-gray-200 p-4 rounded-xl bg-gray-50"
            key={product.id}
          >
            <div className="w-full mb-3 bg-gray-100 rounded-lg border border-gray-300">
              <img
                className="object-contain w-[200px] h-[200px] mx-auto"
                src={product.images[0]}
                alt=""
              />
            </div>
            <p>{product.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
