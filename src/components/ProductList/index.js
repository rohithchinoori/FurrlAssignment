import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem";
import "./index.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.furrl.in/api/v2/listing/getListingProducts`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              input: {
                page: page,
                pageSize: 10,
                filters: [],
                id: "#HomeHunts",
                entity: "vibe",
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        setProducts((prevProducts) => [
          ...prevProducts,
          ...data.data.getListingProducts.products,
        ]);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 5
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product-list">
      {error && <div className="error">{error}</div>}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default ProductList;
