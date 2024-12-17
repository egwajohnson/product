export const ProductCard = ({ product, onAddToCart = () => {} }) => {
  console.log("Product received in ProductCard:", product);
  if (!product) {
    return <div>Error: Product not found</div>;
  }
  return (
    <>
      <div
        style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100px" }}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </>
  );
};
