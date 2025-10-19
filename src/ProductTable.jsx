const TABLE_LIST = ["name", "price"];

export const ProductTable = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {TABLE_LIST.map((table) => (
        <h3 key={table}>{table}</h3>
      ))}
    </div>
  );
};
