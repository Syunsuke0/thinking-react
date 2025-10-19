export const Practice = () => {
  const number = [100, 200, 300];
  const num = number.reduce((acc, currentValue) => acc + currentValue);
  console.log(num);

  return (
    <div>
      <h2>合計を表示</h2>
      <h2>文字列を１つに結合</h2>
      <h2>オブジェクトの合計値を計算</h2>
      <h2>カテゴリごとにグループ化</h2>
    </div>
  );
};

const staff = [
  { name: "yamada", lang: "js" },
  { name: "tanaka", lang: "php" },
  { name: "yoshida", lang: "js" },
  { name: "suzuki", lang: "php" },
];
const result = staff.reduce((arr, person) => {
  const lang = person.lang;
  if (arr[lang] == null) arr[lang] = [];
  arr[lang].push(person.name);
  return arr;
}, {});
console.log(result);
