import { ProductRow } from "./ProductRow";

export const ProductCategoryList = ({ products }) => {
  const grouped = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) acc[category] = []; // 初めてのカテゴリなら空配列
    acc[category].push(product); // カテゴリごとに商品を追加
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(grouped).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {grouped[category].map((item) => (
            <ProductRow key={item.name} product={item} />
          ))}
        </div>
      ))}
      {/* <ProductRow data={data} /> */}
    </div>
  );
};
