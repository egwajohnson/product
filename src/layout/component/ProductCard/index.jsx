export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};
