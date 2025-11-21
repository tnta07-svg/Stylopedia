window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.colorProperties = [
  {
    name: "color",
    thumbClass: "thumb-color",
    categoryId: "color",
    categoryLabel: "色・背景",
    description: "文字色を指定します。",
    htmlExample: `<p class="demo-color">この文字の色を変えてみましょう。</p>`,
    cssExample: `.demo-color {
  color: #f97316;
  font-weight: bold;
}`,
    commonValues: ["#333333", "red", "rgb(59,130,246)", "hsl(220, 80%, 60%)"],
  },
  {
    name: "background-color",
    thumbClass: "thumb-bg-color",
    categoryId: "color",
    categoryLabel: "色・背景",
    description: "要素の背景色を指定します。",
    htmlExample: `<div class="bg-box light">ライト背景</div>
<div class="bg-box dark">ダーク背景</div>`,
    cssExample: `.bg-box {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 8px;
  color: #0f172a;
}

.bg-box.light {
  background-color: #fde68a;
}

.bg-box.dark {
  background-color: #1d4ed8;
  color: #e5e7eb;
}`,
    commonValues: ["#fff", "#000", "transparent", "rgba(0,0,0,0.5)"],
  },
  {
    name: "opacity",
    thumbClass: "thumb-opacity",
    categoryId: "color",
    categoryLabel: "色・背景",
    description: "要素全体の透明度を指定します。",
    htmlExample: `<div class="opacity-demo op-100">1.0</div>
<div class="opacity-demo op-50">0.5</div>`,
    cssExample: `.opacity-demo {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  background-color: #f97316;
  color: #0f172a;
  border-radius: 8px;
}

.op-100 { opacity: 1; }
.op-50  { opacity: 0.5; }`,
    commonValues: ["1", "0.8", "0.5", "0"],
  },
  {
    name: "background-image",
    thumbClass: "thumb-background-image",
    categoryId: "color",
    categoryLabel: "色・背景",
    description: "画像やグラデーションを背景として指定します。",
    htmlExample: `<div class="bgimage-demo">背景画像の例</div>`,
    cssExample: `.bgimage-demo {
  padding: 10px 16px;
  border-radius: 10px;
  color: #f9fafb;
  background-image: linear-gradient(135deg, #ec4899, #8b5cf6);
}`,
    commonValues: ["url('...')", "linear-gradient(...)", "none"],
  },
  {
    name: "background-size",
    thumbClass: "thumb-background-size",
    categoryId: "color",
    categoryLabel: "色・背景",
    description: "背景画像の拡大・縮小方法を指定します。",
    htmlExample: `<div class="bgsize-demo cover">cover</div>
<div class="bgsize-demo contain">contain</div>`,
    cssExample: `.bgsize-demo {
  display: inline-block;
  width: 120px;
  height: 60px;
  margin: 4px;
  border-radius: 8px;
  color: #f9fafb;
  text-align: center;
  line-height: 60px;
  background-image: url("https://via.placeholder.com/200x100.png?text=BG");
  background-repeat: no-repeat;
  background-position: center;
}

.bgsize-demo.cover {
  background-size: cover;
}

.bgsize-demo.contain {
  background-size: contain;
}`,
    commonValues: ["auto", "cover", "contain", "100% 100%"],
  },
  {
    name: "background-repeat",
    thumbClass: "thumb-background-repeat",
    categoryId: "color",
    categoryLabel: "色・背景",
    description:
      "背景画像を繰り返すかどうか、どの方向に繰り返すかを指定します。",
    htmlExample: `<div class="bgrepeat demo-repeat">repeat</div>
<div class="bgrepeat demo-norepeat">no-repeat</div>`,
    cssExample: `.bgrepeat {
  display: inline-block;
  width: 100px;
  height: 40px;
  margin: 4px;
  border-radius: 8px;
  border: 1px solid #64748b;
  font-size: 0.7rem;
  text-align: center;
  line-height: 40px;
  color: #e5e7eb;
  background-image: linear-gradient(45deg, #22c55e 25%, transparent 25%, transparent 50%, #22c55e 50%, #22c55e 75%, transparent 75%, transparent);
  background-size: 10px 10px;
}

.demo-repeat {
  background-repeat: repeat;
}

.demo-norepeat {
  background-repeat: no-repeat;
}`,
    commonValues: ["repeat", "no-repeat", "repeat-x", "repeat-y", "space", "round"],
  },
  {
    name: "background-position",
    thumbClass: "thumb-background-position",
    categoryId: "color",
    categoryLabel: "色・背景",
    description: "背景画像をボックスのどの位置に配置するかを指定します。",
    htmlExample: `<div class="bgpos demo-left">left top</div>
<div class="bgpos demo-center">center</div>`,
    cssExample: `.bgpos {
  display: inline-block;
  width: 100px;
  height: 40px;
  margin: 4px;
  border-radius: 8px;
  border: 1px solid #64748b;
  font-size: 0.7rem;
  text-align: center;
  line-height: 40px;
  color: #e5e7eb;
  background-image: radial-gradient(circle at center, #f97316 0 6px, transparent 6px);
  background-repeat: no-repeat;
}

.demo-left {
  background-position: left top;
}

.demo-center {
  background-position: center;
}`,
    commonValues: ["left top", "center", "right bottom", "50% 50%"],
  },
  {
    name: "filter",
    thumbClass: "thumb-filter",
    categoryId: "color",
    categoryLabel: "色・背景",
    description:
      "ぼかし・明るさ・グレースケールなどのフィルター効果を適用します。",
    htmlExample: `<div class="filter-row">
  <div class="filter-box normal">normal</div>
  <div class="filter-box gray">grayscale</div>
</div>`,
    cssExample: `.filter-row {
  display: flex;
  gap: 6px;
}

.filter-box {
  flex: 1;
  height: 40px;
  border-radius: 8px;
  background-image: linear-gradient(135deg, #ec4899, #8b5cf6);
  color: #f9fafb;
  font-size: 0.75rem;
  text-align: center;
  line-height: 40px;
}

.filter-box.gray {
  filter: grayscale(100%);
}`,
    commonValues: [
      "blur(4px)",
      "brightness(1.2)",
      "contrast(1.1)",
      "grayscale(100%)",
      "drop-shadow(...)",
    ],
  },
];
