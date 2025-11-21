window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.borderProperties = [
  {
    name: "border",
    thumbClass: "thumb-border",
    categoryId: "border",
    categoryLabel: "枠線・影",
    description: "要素の枠線の太さ・線種・色をまとめて指定します。",
    htmlExample: `<div class="border-box solid">solid</div>
<div class="border-box dashed">dashed</div>
<div class="border-box dotted">dotted</div>`,
    cssExample: `.border-box {
  display: inline-block;
  margin: 4px;
  padding: 6px 10px;
  border-radius: 6px;
  background-color: #020617;
  color: #e5e7eb;
}

.border-box.solid {
  border: 2px solid #60a5fa;
}

.border-box.dashed {
  border: 2px dashed #f97316;
}

.border-box.dotted {
  border: 2px dotted #22c55e;
}`,
    commonValues: ["1px solid #000;", "2px dashed #999;", "none"],
  },
  {
    name: "border-radius",
    thumbClass: "thumb-radius",
    categoryId: "border",
    categoryLabel: "枠線・影",
    description: "角の丸み（角丸）の半径を指定します。",
    htmlExample: `<div class="radius-box small">4px</div>
<div class="radius-box medium">16px</div>
<div class="radius-box full">9999px</div>`,
    cssExample: `.radius-box {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  background-color: #4f46e5;
  color: #e5e7eb;
}

.radius-box.small {
  border-radius: 4px;
}

.radius-box.medium {
  border-radius: 16px;
}

.radius-box.full {
  border-radius: 9999px;
}`,
    commonValues: ["4px", "8px", "9999px (丸型)"],
  },
  {
    name: "box-shadow",
    thumbClass: "thumb-shadow",
    categoryId: "border",
    categoryLabel: "枠線・影",
    description: "要素の周りに影をつけます。",
    htmlExample: `<div class="shadow-box">ふんわり影付き</div>`,
    cssExample: `.shadow-box {
  display: inline-block;
  padding: 10px 16px;
  background-color: #0f172a;
  color: #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.7);
}`,
    commonValues: ["0 1px 2px rgba(...)", "0 4px 12px rgba(...)", "none"],
  },
  {
    name: "border-color",
    thumbClass: "thumb-border-color",
    categoryId: "border",
    categoryLabel: "枠線・影",
    description: "枠線の色だけを指定します。",
    htmlExample: `<div class="bordercolor-demo red">赤い枠</div>
<div class="bordercolor-demo blue">青い枠</div>`,
    cssExample: `.bordercolor-demo {
  display: inline-block;
  margin: 4px;
  padding: 4px 10px;
  border-radius: 6px;
  border: 2px solid #e5e7eb;
  background-color: #020617;
  color: #e5e7eb;
}

.bordercolor-demo.red {
  border-color: #ef4444;
}

.bordercolor-demo.blue {
  border-color: #3b82f6;
}`,
    commonValues: ["#000", "transparent", "currentColor"],
  },
  {
    name: "outline",
    thumbClass: "thumb-outline",
    categoryId: "border",
    categoryLabel: "枠線・影",
    description:
      "要素の外側に描画されるアウトライン（レイアウトに影響しない枠）を指定します。",
    htmlExample: `<button class="outline-demo">フォーカスしてみてください</button>`,
    cssExample: `.outline-demo {
  padding: 6px 12px;
  border-radius: 999px;
  border: none;
  background-color: #4f46e5;
  color: #e5e7eb;
}

.outline-demo:focus {
  outline: 2px solid #f97316;
  outline-offset: 3px;
}`,
    commonValues: ["none", "2px solid #000", "outline-offset と一緒に使う"],
  },
  {
    name: "border-width",
    thumbClass: "thumb-border-width",
    categoryId: "border",
    categoryLabel: "枠線・影",
    description: "枠線の太さだけを指定します。",
    htmlExample: `<div class="bw-demo thin">1px</div>
<div class="bw-demo thick">4px</div>`,
    cssExample: `.bw-demo {
  display: inline-block;
  margin: 4px;
  padding: 4px 10px;
  border-radius: 6px;
  border-style: solid;
  border-color: #60a5fa;
  background-color: #020617;
  color: #e5e7eb;
}

.bw-demo.thin {
  border-width: 1px;
}

.bw-demo.thick {
  border-width: 4px;
}`,
    commonValues: ["1px", "2px", "4px", "0"],
  },
  {
    name: "border-style",
    thumbClass: "thumb-border-style",
    categoryId: "border",
    categoryLabel: "枠線・影",
    description: "枠線の線種（実線・点線など）を指定します。",
    htmlExample: `<div class="bs-demo solid">solid</div>
<div class="bs-demo dashed">dashed</div>
<div class="bs-demo dotted">dotted</div>`,
    cssExample: `.bs-demo {
  display: inline-block;
  margin: 4px;
  padding: 4px 10px;
  border-radius: 6px;
  border-width: 2px;
  border-color: #e5e7eb;
  background-color: #020617;
  color: #e5e7eb;
}

.bs-demo.solid { border-style: solid; }
.bs-demo.dashed { border-style: dashed; }
.bs-demo.dotted { border-style: dotted; }`,
    commonValues: ["solid", "dashed", "dotted", "none"],
  },
];
