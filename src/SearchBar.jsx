export const SearchBar = ({ filterText, setFilterText }) => {
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };
  // const [inStockOnly, setInStockOnly] = useState(false);
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
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
};
