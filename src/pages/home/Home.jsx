import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import { Pagination, Alert, Button, Space } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(8);
  const dispatch = useDispatch();
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
    <div className="container py-5">
      <Alert
        className="w-[300px] fixed bottom-3 right-3 hidden"
        message="Info Text"
        description=""
        type="info"
        action={
          <Space direction="vertical">
            <Button size="small" type="primary">
              Accept
            </Button>
            <Button size="small" danger ghost>
              Decline
            </Button>
          </Space>
        }
        closable
      />
      <h2 className="text-xl mb-3 text-left font-sans font-semibold mt-3">
        Products
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
        className="fixed left-5 bottom-2 p-2 px-4 font-medium text-sm text-red-600 border border-gray-400 hover: bg-gray-200 rounded-md"
        onClick={() => dispatch({ type: "LOGOUT", payload: data?.token })}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
