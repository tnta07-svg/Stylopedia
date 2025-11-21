window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.shorthandProperties = [
  {
    name: "margin (ショートハンド)",
    thumbClass: "thumb-shorthand-spacing",
    categoryId: "shorthand",
    categoryLabel: "ショートハンド",
    description:
      "上下左右それぞれの margin を、1〜4個の値でまとめて指定します。",
    htmlExample: `<div class="m-short demo1">margin: 16px;</div>
<div class="m-short demo2">margin: 8px 16px;</div>
<div class="m-short demo3">margin: 4px 8px 12px 16px;</div>`,
    cssExample: `.m-short {
  display: inline-block;
  background-color: #0f172a;
  color: #e5e7eb;
  border-radius: 6px;
}

.demo1 { margin: 16px; }
.demo2 { margin: 8px 16px; }
.demo3 { margin: 4px 8px 12px 16px; }`,
    commonValues: ["8px 16px", "0 auto", "4px 8px 4px 8px"],
  },
  {
    name: "padding (ショートハンド)",
    thumbClass: "thumb-shorthand-spacing",
    categoryId: "shorthand",
    categoryLabel: "ショートハンド",
    description:
      "上下左右それぞれの padding を、1〜4個の値でまとめて指定します。",
    htmlExample: `<button class="p-short">padding: 4px 12px;</button>`,
    cssExample: `.p-short {
  padding: 4px 12px;
  border-radius: 999px;
  border: none;
  background-color: #4f46e5;
  color: #e5e7eb;
}`,
    commonValues: ["4px 12px", "8px 16px", "1rem 2rem"],
  },
  {
    name: "border (ショートハンド)",
    thumbClass: "thumb-shorthand-border",
    categoryId: "shorthand",
    categoryLabel: "ショートハンド",
    description: "太さ・線種・色を 1 行でまとめて指定する書き方です。",
    htmlExample: `<div class="b-short solid">1px solid #fff</div>
<div class="b-short dashed">2px dashed #f97316</div>`,
    cssExample: `.b-short {
  display: inline-block;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #020617;
  color: #e5e7eb;
}

.b-short.solid {
  border: 1px solid #e5e7eb;
}

.b-short.dashed {
  border: 2px dashed #f97316;
}`,
    commonValues: ["1px solid #000", "2px dashed #999", "none"],
  },
  {
    name: "background (ショートハンド)",
    thumbClass: "thumb-shorthand-background",
    categoryId: "shorthand",
    categoryLabel: "ショートハンド",
    description:
      "背景色・画像・位置・繰り返しなどを一度に指定できる強力なショートハンドです。",
    htmlExample: `<div class="bg-short">background の一例</div>`,
    cssExample: `.bg-short {
  padding: 6px 12px;
  border-radius: 10px;
  color: #f9fafb;
  background: #1d4ed8 url("https://via.placeholder.com/40")
              no-repeat right 8px center / 40px 40px;
}`,
    commonValues: ["background: #000;", "background: url(...) center/cover no-repeat;"],
  },
  {
    name: "font (ショートハンド)",
    thumbClass: "thumb-shorthand-font",
    categoryId: "shorthand",
    categoryLabel: "ショートハンド",
    description:
      "font-style, font-weight, font-size, line-height, font-family をまとめて指定します。",
    htmlExample: `<p class="font-short">
font: italic 700 16px/1.6 system-ui;
</p>`,
    cssExample: `.font-short {
  font: italic 700 16px/1.6 system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
}`,
    commonValues: [
      'font: 400 16px/1.5 system-ui;',
      'font: bold 14px "Helvetica", sans-serif;',
    ],
  },
  {
    name: "flex (ショートハンド)",
    thumbClass: "thumb-shorthand-flex",
    categoryId: "shorthand",
    categoryLabel: "ショートハンド",
    description:
      "flex-grow, flex-shrink, flex-basis を 1 行でまとめて指定します。",
    htmlExample: `<div class="flex-short-row">
  <div class="f1">flex: 1</div>
  <div class="f2">flex: 2</div>
</div>`,
    cssExample: `.flex-short-row {
  display: flex;
  border: 1px solid #64748b;
  padding: 4px;
  gap: 4px;
}

.flex-short-row > div {
  border-radius: 6px;
  background-color: #22c55e;
  color: #0f172a;
  text-align: center;
}

.f1 { flex: 1; }
.f2 { flex: 2; }`,
    commonValues: ["0 1 auto", "1 1 auto", "1 0 auto"],
  },
];
