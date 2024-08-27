import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import { Pagination } from "antd";
import React, { useState } from "react";

const Home = () => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, loading } = useFetch(
    "/products",
    { limit, skip: (skip - 1) * limit },
    [skip, limit]
  );

  const hadleChange = (current, pageSize) => {
    setSkip(current);
    setLimit(pageSize);
  };

  return (
    <div>
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
    </div>
  );
};

export default Home;
