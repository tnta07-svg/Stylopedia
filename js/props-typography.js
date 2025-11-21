window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.typographyProperties = [
  {
    name: "font-size",
    thumbClass: "thumb-font-size",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "文字の大きさを指定します。",
    htmlExample: `<p class="font-size-small">小さい文字</p>
<p class="font-size-base">普通の文字</p>
<p class="font-size-large">大きい文字</p>`,
    cssExample: `.font-size-small {
  font-size: 12px;
}

.font-size-base {
  font-size: 16px;
}

.font-size-large {
  font-size: 24px;
}`,
    commonValues: ["14px", "16px", "1.5rem"],
  },
  {
    name: "font-weight",
    thumbClass: "thumb-font-weight",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "文字の太さを指定します。",
    htmlExample: `<p class="font-weight-light">light（細め）</p>
<p class="font-weight-normal">normal（普通）</p>
<p class="font-weight-bold">bold（太め）</p>`,
    cssExample: `.font-weight-light {
  font-weight: 300;
}

.font-weight-normal {
  font-weight: 400;
}

.font-weight-bold {
  font-weight: 700;
}`,
    commonValues: ["400 (normal)", "500", "700 (bold)"],
  },
  {
    name: "text-align",
    thumbClass: "thumb-text-align",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "行内のテキストの揃え位置を指定します。",
    htmlExample: `<p class="text-align-left">左寄せ</p>
<p class="text-align-center">中央寄せ</p>
<p class="text-align-right">右寄せ</p>`,
    cssExample: `.text-align-left {
  text-align: left;
}

.text-align-center {
  text-align: center;
}

.text-align-right {
  text-align: right;
}`,
    commonValues: ["left", "center", "right", "justify"],
  },
  {
    name: "line-height",
    thumbClass: "thumb-line-height",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "行と行の間隔（行間）を指定します。",
    htmlExample: `<p class="lh-tight">line-height: 1.0 のテキストです。行間が狭くなります。</p>
<p class="lh-relaxed">line-height: 1.8 のテキストです。行間がゆったりします。</p>`,
    cssExample: `.lh-tight {
  line-height: 1.0;
}

.lh-relaxed {
  line-height: 1.8;
}`,
    commonValues: ["1.0", "1.5", "2.0", "normal"],
  },
  {
    name: "letter-spacing",
    thumbClass: "thumb-letter-spacing",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "文字と文字のあいだのすき間（字間）を指定します。",
    htmlExample: `<p class="ls-tight">字間が狭いテキスト</p>
<p class="ls-wide">字間が広いテキスト</p>`,
    cssExample: `.ls-tight {
  letter-spacing: -0.05em;
}

.ls-wide {
  letter-spacing: 0.2em;
}`,
    commonValues: ["-0.05em", "0.05em", "0.1em"],
  },
  {
    name: "text-decoration",
    thumbClass: "thumb-text-decoration",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "下線や取り消し線などの装飾を指定します。",
    htmlExample: `<p class="td-underline">下線付きのテキスト</p>
<p class="td-line-through">取り消し線付きのテキスト</p>`,
    cssExample: `.td-underline {
  text-decoration: underline;
}

.td-line-through {
  text-decoration: line-through;
}`,
    commonValues: ["none", "underline", "line-through", "overline"],
  },
  {
    name: "text-transform",
    thumbClass: "thumb-text-transform",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "英字の大文字・小文字の変換を指定します。",
    htmlExample: `<p class="tt-upper">uppercase に変換</p>
<p class="tt-lower">LOWERCASE に変換</p>`,
    cssExample: `.tt-upper {
  text-transform: uppercase;
}

.tt-lower {
  text-transform: lowercase;
}`,
    commonValues: ["none", "uppercase", "lowercase", "capitalize"],
  },
  {
    name: "font-family",
    thumbClass: "thumb-font-family",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "使用するフォントの種類を指定します。",
    htmlExample: `<p class="ff-sans">サンセリフ系の文字</p>
<p class="ff-mono">等幅フォントの文字</p>`,
    cssExample: `.ff-sans {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.ff-mono {
  font-family: "JetBrains Mono", Consolas, monospace;
}`,
    commonValues: [
      `"Helvetica, Arial, sans-serif"`,
      `"Georgia, serif"`,
      `"monospace"`,
    ],
  },
  {
    name: "white-space",
    thumbClass: "thumb-white-space",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "改行や半角スペースをどのように扱うかを指定します。",
    htmlExample: `<p class="ws-normal">
normal は   連続スペースが  1個になります。
</p>
<p class="ws-pre">
pre は    スペースと改行をそのまま保持します。
</p>`,
    cssExample: `.ws-normal {
  white-space: normal;
}

.ws-pre {
  white-space: pre;
  background-color: #020617;
  padding: 4px;
  border-radius: 6px;
}`,
    commonValues: ["normal", "nowrap", "pre", "pre-wrap"],
  },
  {
    name: "font-style",
    thumbClass: "thumb-font-style",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "イタリック（斜体）などのスタイルを指定します。",
    htmlExample: `<p class="fs-normal">通常のテキスト</p>
<p class="fs-italic">italic なテキスト</p>`,
    cssExample: `.fs-normal {
  font-style: normal;
}

.fs-italic {
  font-style: italic;
}`,
    commonValues: ["normal", "italic", "oblique"],
  },
  {
    name: "word-break",
    thumbClass: "thumb-word-break",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description: "単語の途中で折り返してよいかどうかを指定します。",
    htmlExample: `<div class="wb-demo normal">
SuperLongWordSuperLongWordSuperLongWord
</div>
<div class="wb-demo break">
SuperLongWordSuperLongWordSuperLongWord
</div>`,
    cssExample: `.wb-demo {
  width: 140px;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  background-color: #0f172a;
  color: #e5e7eb;
  font-size: 0.75rem;
}

.wb-demo.normal {
  word-break: normal;
}

.wb-demo.break {
  word-break: break-all;
}`,
    commonValues: ["normal", "break-all", "keep-all"],
  },
  {
    name: "overflow-wrap",
    thumbClass: "thumb-overflow-wrap",
    categoryId: "typography",
    categoryLabel: "文字（タイポグラフィ）",
    description:
      "単語がはみ出しそうなときに、途中で折り返すかどうかを指定します。（昔の word-wrap）",
    htmlExample: `<div class="ow-demo normal">
非常に長いURL https://example.com/this_is_a_very_long_path_name
</div>
<div class="ow-demo break">
非常に長いURL https://example.com/this_is_a_very_long_path_name
</div>`,
    cssExample: `.ow-demo {
  width: 180px;
  margin-bottom: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  background-color: #020617;
  color: #e5e7eb;
  font-size: 0.75rem;
}

.ow-demo.normal {
  overflow-wrap: normal;
}

.ow-demo.break {
  overflow-wrap: break-word;
}`,
    commonValues: ["normal", "break-word", "anywhere"],
  },
];
