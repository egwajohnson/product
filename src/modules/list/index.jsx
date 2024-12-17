import React, { useEffect, useState } from "react";
import { ProductCard } from "../Product";
import AppLayout from "../../layout";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <AppLayout>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f78536",
          }}
        >
          Product List
        </h1>
        {products.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </AppLayout>
  );
};

export default ProductList;
