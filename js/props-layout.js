window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.layoutProperties = [
  // display
  {
    name: "display",
    thumbClass: "thumb-display",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素の表示形式（ブロック・インライン・flex など）を指定します。",
    htmlExample: `<div class="demo-container">
  <div class="demo-box">A</div>
  <div class="demo-box">B</div>
  <div class="demo-box">C</div>
</div>`,
    cssExample: `.demo-container {
  border: 1px solid #64748b;
  padding: 4px;
}

/* display の値を変えて違いを見てみましょう */
.demo-box {
  display: inline-block;
  padding: 6px 10px;
  margin: 2px;
  background-color: #4f46e5;
  color: #e5e7eb;
  border-radius: 8px;
}`,
    commonValues: ["block", "inline", "inline-block", "flex", "grid"],
  },

  // position
  {
    name: "position",
    thumbClass: "thumb-position",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素の配置方法（通常のフロー、絶対配置など）を指定します。",
    htmlExample: `<div class="position-container">
  <div class="position-box base">ベース</div>
  <div class="position-box overlay">重なった要素</div>
</div>`,
    cssExample: `.position-container {
  position: relative;
  border: 1px solid #64748b;
  padding: 16px;
  height: 100px;
}

.position-box {
  padding: 6px 10px;
  border-radius: 8px;
  color: #e5e7eb;
}

.position-box.base {
  background-color: #0ea5e9;
}

.position-box.overlay {
  position: absolute;
  top: 20px;
  left: 30px;
  background-color: #ec4899;
}`,
    commonValues: ["static", "relative", "absolute", "fixed", "sticky"],
  },

  // width
  {
    name: "width",
    thumbClass: "thumb-width",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素の幅を指定します。",
    htmlExample: `<div class="width-demo w-small">100px</div>
<div class="width-demo w-half">50%</div>
<div class="width-demo w-full">100%</div>`,
    cssExample: `.width-demo {
  margin-bottom: 4px;
  padding: 4px 8px;
  background-color: #1e293b;
  color: #e5e7eb;
  border-radius: 6px;
}

.w-small { width: 100px; }
.w-half  { width: 50%; }
.w-full  { width: 100%; }`,
    commonValues: ["100px", "50%", "100%", "auto"],
  },

  // height
  {
    name: "height",
    thumbClass: "thumb-height",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素の高さを指定します。",
    htmlExample: `<div class="height-demo h-small">高さ 40px</div>
<div class="height-demo h-large">高さ 80px</div>`,
    cssExample: `.height-demo {
  width: 120px;
  margin: 4px;
  background-color: #22c55e;
  color: #0f172a;
  border-radius: 6px;
  text-align: center;
  line-height: 40px;
}

.h-small { height: 40px; }
.h-large { height: 80px; line-height: 80px; }`,
    commonValues: ["40px", "100px", "auto", "100vh"],
  },

  // max-width
  {
    name: "max-width",
    thumbClass: "thumb-max-width",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素の最大幅を指定します。画面が広くてもこれ以上は広がりません。",
    htmlExample: `<div class="maxwidth-wrapper">
  <div class="maxwidth-box">
    ブラウザ幅を広げても max-width の値以上には広がりません。
  </div>
</div>`,
    cssExample: `.maxwidth-wrapper {
  border: 1px dashed #64748b;
  padding: 4px;
}

.maxwidth-box {
  max-width: 260px;
  margin: 0 auto;
  padding: 6px 10px;
  background-color: #0ea5e9;
  color: #0f172a;
  border-radius: 8px;
}`,
    commonValues: ["600px", "960px", "100%", "none"],
  },

  // box-sizing
  {
    name: "box-sizing",
    thumbClass: "thumb-box-sizing",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "幅・高さに padding や border を含めるかどうかを指定します。",
    htmlExample: `<div class="boxsizing-demo content-box">content-box</div>
<div class="boxsizing-demo border-box">border-box</div>`,
    cssExample: `.boxsizing-demo {
  width: 160px;
  margin: 4px;
  padding: 10px;
  border: 4px solid #38bdf8;
  border-radius: 8px;
  background-color: #020617;
  color: #e5e7eb;
  box-sizing: content-box;
}

.boxsizing-demo.border-box {
  box-sizing: border-box;
}`,
    commonValues: ["content-box", "border-box"],
  },

  // overflow
  {
    name: "overflow",
    thumbClass: "thumb-overflow",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "ボックスからはみ出した内容をどう見せるかを指定します。",
    htmlExample: `<div class="overflow-demo hidden">
  これはとても長いテキストです。overflow: hidden の例です。
</div>
<div class="overflow-demo scroll">
  これはとても長いテキストです。overflow: scroll の例です。
</div>`,
    cssExample: `.overflow-demo {
  width: 160px;
  height: 40px;
  margin: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  background-color: #1e293b;
  color: #e5e7eb;
  font-size: 0.8rem;
}

.overflow-demo.hidden {
  overflow: hidden;
}

.overflow-demo.scroll {
  overflow: scroll;
}`,
    commonValues: ["visible", "hidden", "scroll", "auto"],
  },

  // z-index
  {
    name: "z-index",
    thumbClass: "thumb-z-index",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "重なり順を指定します。値が大きいほど手前に表示されます。",
    htmlExample: `<div class="zindex-stack">
  <div class="z-box low">z-index: 1</div>
  <div class="z-box high">z-index: 10</div>
</div>`,
    cssExample: `.zindex-stack {
  position: relative;
  height: 70px;
}

.z-box {
  position: absolute;
  padding: 4px 8px;
  border-radius: 6px;
  color: #e5e7eb;
}

.z-box.low {
  top: 24px;
  left: 12px;
  background-color: #0ea5e9;
  z-index: 1;
}

.z-box.high {
  top: 16px;
  left: 32px;
  background-color: #ec4899;
  z-index: 10;
}`,
    commonValues: ["0", "1", "10", "auto"],
  },

  // object-fit
  {
    name: "object-fit",
    thumbClass: "thumb-object-fit",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "画像や動画を、枠の中にどう収めるかを指定します。",
    htmlExample: `<div class="of-row">
  <div class="of-item cover">
    <img src="https://via.placeholder.com/80x60" alt="">
    <span>cover</span>
  </div>
  <div class="of-item contain">
    <img src="https://via.placeholder.com/80x60" alt="">
    <span>contain</span>
  </div>
</div>`,
    cssExample: `.of-row {
  display: flex;
  gap: 6px;
}

.of-item {
  width: 80px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #64748b;
  position: relative;
}

.of-item img {
  width: 100%;
  height: 100%;
}

.of-item span {
  position: absolute;
  left: 4px;
  bottom: 2px;
  font-size: 0.65rem;
  background: rgba(15,23,42,0.8);
  color: #e5e7eb;
  padding: 1px 4px;
  border-radius: 4px;
}

.of-item.cover img {
  object-fit: cover;
}

.of-item.contain img {
  object-fit: contain;
}`,
    commonValues: ["fill", "cover", "contain", "none", "scale-down"],
  },

  // top / right / bottom / left
  {
    name: "top / right / bottom / left",
    thumbClass: "thumb-trbl",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description:
      "position と組み合わせて、要素を上下左右にどれだけずらすかを指定します。",
    htmlExample: `<div class="trbl-wrapper">
  <div class="trbl-base">ベース</div>
  <div class="trbl-floated">ずらした要素</div>
</div>`,
    cssExample: `.trbl-wrapper {
  position: relative;
  height: 80px;
  border: 1px solid #64748b;
}

.trbl-base {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #0ea5e9;
  color: #0f172a;
}

.trbl-floated {
  position: absolute;
  top: 8px;    /* top を変えると上下に */
  right: 12px; /* right を変えると左右に */
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #ec4899;
  color: #e5e7eb;
}`,
    commonValues: ["top: 0;", "bottom: 0;", "left: 50%;", "right: 16px;"],
  },

  // float
  {
    name: "float",
    thumbClass: "thumb-float",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素を左右に浮かせ、テキストを回り込ませます。",
    htmlExample: `<div class="float-box">左に float したボックス</div>
<p>テキストがボックスの右側に回り込みます。テキストがボックスの右側に回り込みます。</p>`,
    cssExample: `.float-box {
  float: left;
  width: 120px;
  margin: 0 8px 4px 0;
  padding: 4px 8px;
  background-color: #22c55e;
  color: #0f172a;
  border-radius: 6px;
}

p {
  font-size: 0.85rem;
}`,
    commonValues: ["none", "left", "right", "inline-start", "inline-end"],
  },

  // clear
  {
    name: "clear",
    thumbClass: "thumb-clear",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "float された要素の回り込みをどこで解除するかを指定します。",
    htmlExample: `<div class="float-sample">float: left;</div>
<div class="clear-sample">clear: both で下から配置</div>`,
    cssExample: `.float-sample {
  float: left;
  width: 100px;
  margin-right: 8px;
  padding: 4px 8px;
  background-color: #0ea5e9;
  color: #0f172a;
  border-radius: 6px;
}

.clear-sample {
  clear: both;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #1e293b;
  color: #e5e7eb;
}`,
    commonValues: ["none", "left", "right", "both"],
  },

  // min-width
  {
    name: "min-width",
    thumbClass: "thumb-min-width",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素がこれ以上小さくならない最小幅を指定します。",
    htmlExample: `<div class="minwidth-wrapper">
  <div class="minwidth-box">min-width: 160px;</div>
</div>`,
    cssExample: `.minwidth-wrapper {
  max-width: 200px;
  border: 1px dashed #64748b;
  padding: 4px;
}

.minwidth-box {
  min-width: 160px;
  padding: 4px 8px;
  background-color: #22c55e;
  border-radius: 6px;
  color: #0f172a;
}`,
    commonValues: ["0", "160px", "min-content", "max-content"],
  },

  // min-height
  {
    name: "min-height",
    thumbClass: "thumb-min-height",
    categoryId: "layout",
    categoryLabel: "レイアウト & ボックス",
    description: "要素がこれ以上低くならない最小高さを指定します。",
    htmlExample: `<div class="minheight-box">
  最小高さが決まっているボックスです。
</div>`,
    cssExample: `.minheight-box {
  min-height: 60px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #0f172a;
  color: #e5e7eb;
}`,
    commonValues: ["0", "100px", "100vh"],
  },
];
