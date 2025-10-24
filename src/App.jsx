import "./App.css";
// import { Practice } from "./Practice";
import { ProductCategoryList } from "./ProductCategoryRow";
import { SearchBar } from "./SearchBar";

const MOCK_DATA = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const App = () => {
  return (
    <div>
      <h1>Reactの流儀</h1>
      {/* <Practice /> */}
      <SearchBar />


      <ProductCategoryList products={MOCK_DATA} />
    </div>
  );
};

export default App;
