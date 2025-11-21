window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.gridProperties = [
  {
    name: "display: grid",
    thumbClass: "thumb-grid",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description: "二次元レイアウト用のグリッドコンテナを定義します。",
    htmlExample: `<div class="grid-basic">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`,
    cssExample: `.grid-basic {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.grid-basic > div {
  padding: 4px 0;
  text-align: center;
  border-radius: 6px;
  background-color: #22c55e;
  color: #0f172a;
}`,
    commonValues: ["display: grid;", "display: inline-grid;"],
  },
  {
    name: "grid-template-columns",
    thumbClass: "thumb-grid-template",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description: "列の数と幅をまとめて定義します。",
    htmlExample: `<div class="gtc-demo gtc-2">
  <div>A</div><div>B</div><div>C</div>
</div>
<div class="gtc-demo gtc-auto">
  <div>A</div><div>B</div><div>C</div>
</div>`,
    cssExample: `.gtc-demo {
  display: grid;
  gap: 4px;
  margin-bottom: 6px;
}

.gtc-demo > div {
  padding: 4px 0;
  text-align: center;
  border-radius: 6px;
  background-color: #0ea5e9;
  color: #0f172a;
}

.gtc-2 {
  grid-template-columns: 1fr 1fr;
}

.gtc-auto {
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
}`,
    commonValues: [
      "repeat(3, 1fr)",
      "200px 1fr",
      "repeat(auto-fit, minmax(200px, 1fr))",
    ],
  },
  {
    name: "grid-template-rows",
    thumbClass: "thumb-grid-rows",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description: "行の数と高さをまとめて定義します。",
    htmlExample: `<div class="gtr-demo">
  <div>row1</div>
  <div>row2</div>
  <div>row3</div>
</div>`,
    cssExample: `.gtr-demo {
  display: grid;
  grid-template-rows: 30px 40px 30px;
  gap: 4px;
}

.gtr-demo > div {
  border-radius: 6px;
  background-color: #4f46e5;
  color: #e5e7eb;
  text-align: center;
  line-height: 30px;
}

.gtr-demo > div:nth-child(2) {
  line-height: 40px;
}`,
    commonValues: ["auto", "repeat(3, auto)", "100px 1fr auto"],
  },
  {
    name: "grid-template-areas",
    thumbClass: "thumb-grid-areas",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description:
      "名前付きエリアでレイアウトを定義します。テンプレートの「図」で覚えやすい書き方です。",
    htmlExample: `<div class="gta-layout">
  <header>header</header>
  <aside>side</aside>
  <main>main</main>
</div>`,
    cssExample: `.gta-layout {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: auto 60px;
  grid-template-areas:
    "header header"
    "side   main";
  gap: 4px;
}

.gta-layout > header { grid-area: header; }
.gta-layout > aside  { grid-area: side; }
.gta-layout > main   { grid-area: main; }

.gta-layout > * {
  border-radius: 8px;
  padding: 4px 8px;
  background-color: #0f172a;
  color: #e5e7eb;
}`,
    commonValues: [
      `"header header" "side main"`,
      `"a a" "b c"`,
      "none",
    ],
  },
  {
    name: "grid-auto-flow",
    thumbClass: "thumb-grid-auto",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description: "自動配置されるアイテムの並び方向を指定します。",
    htmlExample: `<div class="gaf-demo row">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>
<div class="gaf-demo column">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>`,
    cssExample: `.gaf-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  margin-bottom: 6px;
}

.gaf-demo > div {
  padding: 4px 0;
  border-radius: 6px;
  text-align: center;
  background-color: #22c55e;
  color: #0f172a;
}

.gaf-demo.row    { grid-auto-flow: row; }
.gaf-demo.column { grid-auto-flow: column; }`,
    commonValues: ["row", "column", "row dense", "column dense"],
  },
  {
    name: "grid-column / grid-row",
    thumbClass: "thumb-grid-line",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description:
      "アイテムがどの列/行のラインからどこまでを占めるかを指定します。",
    htmlExample: `<div class="grc-wrapper">
  <div class="item a">1</div>
  <div class="item b">2</div>
  <div class="item c">3</div>
</div>`,
    cssExample: `.grc-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.grc-wrapper .item {
  padding: 4px 0;
  text-align: center;
  border-radius: 6px;
  background-color: #0ea5e9;
  color: #0f172a;
}

.grc-wrapper .a {
  grid-column: 1 / 3; /* 1列目〜2列目まで */
}

.grc-wrapper .b {
  grid-row: 2 / 4; /* 2行目〜3行目まで */
}`,
    commonValues: ["1 / 3", "span 2", "1 / -1"],
  },
  {
    name: "place-items",
    thumbClass: "thumb-grid-place",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description:
      "align-items と justify-items をまとめて指定するショートハンドです。",
    htmlExample: `<div class="place-demo">
  <div>A</div><div>B</div><div>C</div>
</div>`,
    cssExample: `.place-demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70px;
  place-items: center; /* 縦横どちらも center */
}

.place-demo > div {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background-color: #f97316;
  color: #0f172a;
  text-align: center;
  line-height: 30px;
}`,
    commonValues: ["center", "start", "end", "stretch"],
  },
  {
    name: "aspect-ratio",
    thumbClass: "thumb-aspect-ratio",
    categoryId: "grid",
    categoryLabel: "Grid レイアウト",
    description:
      "要素の縦横比を指定します。画像やカードの比率を固定したいときに便利です。",
    htmlExample: `<div class="ar-demo box-16-9">16 : 9</div>
<div class="ar-demo box-1-1">1 : 1</div>`,
    cssExample: `.ar-demo {
  width: 120px;
  margin: 4px;
  border-radius: 8px;
  background-color: #1e293b;
  color: #e5e7eb;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-16-9 {
  aspect-ratio: 16 / 9;
}

.box-1-1 {
  aspect-ratio: 1 / 1;
}`,
    commonValues: ["16 / 9", "4 / 3", "1 / 1", "auto"],
  },
];
