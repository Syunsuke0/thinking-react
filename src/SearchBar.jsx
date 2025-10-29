export const SearchBar = ({
  filterText,
  setFilterText,
  inStockOnly,
  setInStockOnly,
}) => {
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const toggleOnStockOnly = (e) => {
    setInStockOnly(e.target.checked);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        onChange={handleChange}
        value={filterText}
        type="text"
        placeholder="Search..."
      />
      <label style={{ display: "flex" }}>
        <input
          checked={inStockOnly}
          onChange={toggleOnStockOnly}
          type="checkbox"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};
