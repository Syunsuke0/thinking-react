import { ProductRow } from "./ProductRow";
import { ProductTable } from "./ProductTable";

export const ProductCategoryList = ({ products, filterText }) => {
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(filterText.toLowerCase());
  });
  const grouped = filteredProducts.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) acc[category] = []; // 初めてのカテゴリなら空配列
    acc[category].push(product); // カテゴリごとに商品を追加
    return acc;
  }, {});

  return (
    <div>
      <ProductTable />
      {Object.keys(grouped).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {grouped[category].map((item) => (
            <ProductRow key={item.name} product={item} />
          ))}
        </div>
      ))}
    </div>
  );
};
