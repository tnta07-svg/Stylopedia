window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.flexProperties = [
  {
    name: "display: flex",
    thumbClass: "thumb-flex",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description:
      "Flex コンテナとして要素を並べるための基本プロパティです。",
    htmlExample: `<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>`,
    cssExample: `.flex-container {
  display: flex;
  border: 1px solid #64748b;
  padding: 4px;
}

.flex-item {
  padding: 6px 10px;
  margin: 2px;
  background-color: #22c55e;
  color: #0f172a;
  border-radius: 8px;
}`,
    commonValues: ["display: flex;", "display: inline-flex;"],
  },
  {
    name: "justify-content",
    thumbClass: "thumb-justify",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description: "主軸（横並びなら左右）の揃え位置を指定します。",
    htmlExample: `<div class="justify demo-start">
  <div class="j-item">A</div>
  <div class="j-item">B</div>
  <div class="j-item">C</div>
</div>

<div class="justify demo-center">
  <div class="j-item">A</div>
  <div class="j-item">B</div>
  <div class="j-item">C</div>
</div>

<div class="justify demo-space-between">
  <div class="j-item">A</div>
  <div class="j-item">B</div>
  <div class="j-item">C</div>
</div>`,
    cssExample: `.justify {
  display: flex;
  border: 1px solid #64748b;
  padding: 4px;
  margin-bottom: 6px;
}

.j-item {
  padding: 4px 8px;
  background-color: #38bdf8;
  color: #0f172a;
  border-radius: 6px;
}

.demo-start {
  justify-content: flex-start;
}

.demo-center {
  justify-content: center;
}

.demo-space-between {
  justify-content: space-between;
}`,
    commonValues: [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
    ],
  },
  {
    name: "align-items",
    thumbClass: "thumb-align",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description: "交差軸（縦方向など）の揃え位置を指定します。",
    htmlExample: `<div class="align-container align-start">
  <div class="align-label">flex-start</div>
  <div class="align-box tall">A</div>
  <div class="align-box">B</div>
</div>

<div class="align-container align-center">
  <div class="align-label">center</div>
  <div class="align-box tall">A</div>
  <div class="align-box">B</div>
</div>`,
    cssExample: `.align-container {
  display: flex;
  border: 1px solid #64748b;
  padding: 4px;
  margin-bottom: 6px;
}

.align-label {
  width: 80px;
  font-size: 0.75rem;
  color: #9ca3af;
}

.align-box {
  padding: 4px 8px;
  margin-left: 4px;
  background-color: #f97316;
  color: #0f172a;
  border-radius: 6px;
}

.align-box.tall {
  height: 40px;
}

.align-start {
  align-items: flex-start;
}

.align-center {
  align-items: center;
}`,
    commonValues: ["stretch", "flex-start", "center", "flex-end"],
  },
  {
    name: "flex-direction",
    thumbClass: "thumb-flex-direction",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description: "Flex アイテムを横並び・縦並びどちらにするかを指定します。",
    htmlExample: `<div class="flexdir-demo row">
  <div>A</div><div>B</div><div>C</div>
</div>

<div class="flexdir-demo column">
  <div>A</div><div>B</div><div>C</div>
</div>`,
    cssExample: `.flexdir-demo {
  display: flex;
  gap: 4px;
  margin-bottom: 6px;
}

.flexdir-demo.row {
  flex-direction: row;
}

.flexdir-demo.column {
  flex-direction: column;
}

.flexdir-demo div {
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #22c55e;
  color: #0f172a;
}`,
    commonValues: ["row", "row-reverse", "column", "column-reverse"],
  },
  {
    name: "flex-wrap",
    thumbClass: "thumb-flex-wrap",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description: "Flex アイテムを折り返して複数行にするかどうかを指定します。",
    htmlExample: `<div class="flexwrap-demo nowrap">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>

<div class="flexwrap-demo wrap">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>`,
    cssExample: `.flexwrap-demo {
  display: flex;
  border: 1px solid #64748b;
  margin-bottom: 6px;
}

.flexwrap-demo div {
  width: 50px;
  padding: 4px 0;
  text-align: center;
  background-color: #0ea5e9;
  color: #0f172a;
  border-radius: 4px;
  margin: 2px;
}

.flexwrap-demo.nowrap {
  flex-wrap: nowrap;
}

.flexwrap-demo.wrap {
  flex-wrap: wrap;
}`,
    commonValues: ["nowrap", "wrap", "wrap-reverse"],
  },
  {
    name: "flex-grow",
    thumbClass: "thumb-flex-grow",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description:
      "余ったスペースをどのアイテムにどれだけ分配するかを指定します。",
    htmlExample: `<div class="flexgrow-demo">
  <div class="fg-1">1</div>
  <div class="fg-2">2</div>
</div>`,
    cssExample: `.flexgrow-demo {
  display: flex;
  border: 1px solid #64748b;
  padding: 4px;
}

.flexgrow-demo div {
  padding: 4px 0;
  text-align: center;
  border-radius: 6px;
  background-color: #4f46e5;
  color: #e5e7eb;
  margin: 2px;
}

.fg-1 { flex-grow: 1; }
.fg-2 { flex-grow: 2; }`,
    commonValues: ["0", "1", "2"],
  },
  {
    name: "order",
    thumbClass: "thumb-order",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description: "Flex アイテムの並び順を指定します。",
    htmlExample: `<div class="order-demo">
  <div class="order-item first">1 (order: 2)</div>
  <div class="order-item second">2 (order: 1)</div>
</div>`,
    cssExample: `.order-demo {
  display: flex;
  gap: 4px;
}

.order-item {
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #22c55e;
  color: #0f172a;
}

.order-item.first {
  order: 2;
}

.order-item.second {
  order: 1;
}`,
    commonValues: ["0", "1", "2", "-1"],
  },
  {
    name: "align-self",
    thumbClass: "thumb-align-self",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description:
      "特定の Flex アイテムだけ、交差軸方向の揃え位置を個別に指定します。",
    htmlExample: `<div class="as-demo">
  <div class="as-item">normal</div>
  <div class="as-item center">center</div>
  <div class="as-item end">flex-end</div>
</div>`,
    cssExample: `.as-demo {
  display: flex;
  align-items: flex-start;
  border: 1px solid #64748b;
  padding: 4px;
  height: 60px;
}

.as-item {
  padding: 4px 8px;
  margin-right: 4px;
  border-radius: 6px;
  background-color: #4f46e5;
  color: #e5e7eb;
}

.as-item.center {
  align-self: center;
}

.as-item.end {
  align-self: flex-end;
}`,
    commonValues: ["auto", "flex-start", "center", "flex-end", "stretch"],
  },
  {
    name: "align-content",
    thumbClass: "thumb-align-content",
    categoryId: "flex",
    categoryLabel: "Flex レイアウト",
    description:
      "複数行に折り返された Flex 行全体を、上下どこに寄せるか指定します。",
    htmlExample: `<div class="ac-demo ac-start">
  <div>A</div><div>B</div><div>C</div><div>D</div>
</div>

<div class="ac-demo ac-center">
  <div>A</div><div>B</div><div>C</div><div>D</div>
</div>`,
    cssExample: `.ac-demo {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid #64748b;
  height: 66px;
  margin-bottom: 6px;
}

.ac-demo div {
  width: 40px;
  height: 20px;
  margin: 2px;
  border-radius: 4px;
  background-color: #0ea5e9;
  color: #0f172a;
  font-size: 0.7rem;
  text-align: center;
  line-height: 20px;
}

.ac-demo.ac-center {
  align-content: center;
}`,
    commonValues: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "stretch",
    ],
  },
];
