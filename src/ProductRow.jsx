export const ProductRow = ({ product }) => {
  return (
    <div style={{ color: product.stocked ? "black" : "red" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};
