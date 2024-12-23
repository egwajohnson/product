export const ProductCard = ({ product, onAddToCart = () => {} }) => {
  console.log("Product received in ProductCard:", product);
  if (!product) {
    return <div>Error: Product not found</div>;
  }
  return (
    <>
      <div className="item">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "120px" }}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button className="btn" onClick={onAddToCart}>Add to Cart</button>
      </div>
    </>
  );
};
