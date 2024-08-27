import Products from "@/components/products/Products";
import sound from "@/../public/sound/mixkit-select-click-1109.wav";
import { useFetch } from "@/hooks/useFetch";
import { Pagination } from "antd";
import React, { useState } from "react";

const Home = () => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);
  const [buttonClick, setButtonClick] = useState(0);
  const { data, loading } = useFetch(
    "/products",
    { limit, skip: (skip - 1) * limit },
    [skip, limit]
  );

  const hadleChange = (current, pageSize) => {
    setSkip(current);
    setLimit(pageSize);
  };

  const handleButtonClick = () => {
    new Audio(sound).play();
  };

  return (
    <div className="container py-5">
      <h2 className="text-xl mb-3 text-center font-sans font-semibold mt-3">
        Home
      </h2>

      <Products data={data?.products} loading={loading} />

      <Pagination
        className="mt-5"
        onChange={hadleChange}
        align="center"
        defaultCurrent={1}
        defaultPageSize={limit}
        total={data?.total}
      />

      <button
        className="fixed right-5 top-2 p-2 px-4 font-medium text-sm text-red-600 border border-gray-400 hover: bg-gray-200 rounded-md"
        onClick={handleButtonClick}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
