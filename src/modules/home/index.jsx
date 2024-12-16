import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import AppLayout from "../../layout";
import { ProductCard } from "../../layout/component/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("Fetched products:", response.data); // Debugging
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  console.log("Grouped Products:", groupedProducts); // Debugging

  return (
    <AppLayout>
      <div>
        {Object.entries(groupedProducts).map(([category, items]) => (
          <div key={category} className="main">
            <h2>{category}</h2>
            <div className="childmain">
              {items.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAddToCart={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: { ...item, quantity: 1 },
                    })
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Home;
