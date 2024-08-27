import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Home = () => {
  const { data, loading } = useFetch("/products", { limit: 4 });

  return (
    <div>
      <h2 className="text-xl mb-3 text-center font-sans font-semibold mt-3">
        Home
      </h2>

      <Products data={data?.products} loading={loading} />
    </div>
  );
};

export default Home;
