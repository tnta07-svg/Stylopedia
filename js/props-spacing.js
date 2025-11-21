window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.spacingProperties = [
  {
    name: "margin",
    thumbClass: "thumb-margin",
    categoryId: "spacing",
    categoryLabel: "余白・サイズ",
    description: "要素の外側の余白を指定します。",
    htmlExample: `<div class="margin-wrapper">
  <div class="margin-box">margin付きボックス</div>
</div>`,
    cssExample: `.margin-wrapper {
  border: 1px solid #64748b;
  padding: 4px;
}

.margin-box {
  margin: 12px;
  padding: 6px 10px;
  background-color: #16a34a;
  color: #e5e7eb;
  border-radius: 6px;
}`,
    commonValues: ["margin: 0;", "margin: 16px;", "margin: 0 auto;"],
  },
  {
    name: "padding",
    thumbClass: "thumb-padding",
    categoryId: "spacing",
    categoryLabel: "余白・サイズ",
    description:
      "要素の内側（内容と枠のあいだ）の余白を指定します。",
    htmlExample: `<div class="padding-box">padding の量で見た目が変わります。</div>`,
    cssExample: `.padding-box {
  border: 1px solid #64748b;
  padding: 16px;
  background-color: #1e293b;
  color: #e5e7eb;
  border-radius: 8px;
}`,
    commonValues: ["padding: 0;", "padding: 8px;", "padding: 8px 16px;"],
  },
  {
    name: "gap",
    thumbClass: "thumb-gap",
    categoryId: "spacing",
    categoryLabel: "余白・サイズ",
    description:
      "Flex や Grid で、要素同士のすき間をまとめて指定します。",
    htmlExample: `<div class="gap-demo gap-small">
  <div class="gap-item">A</div><div class="gap-item">B</div><div class="gap-item">C</div>
</div>

<div class="gap-demo gap-large">
  <div class="gap-item">A</div><div class="gap-item">B</div><div class="gap-item">C</div>
</div>`,
    cssExample: `.gap-demo {
  display: flex;
  border: 1px solid #64748b;
  padding: 4px;
  margin-bottom: 6px;
}

.gap-item {
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #4f46e5;
  color: #e5e7eb;
}

.gap-small { gap: 4px; }
.gap-large { gap: 16px; }`,
    commonValues: ["4px", "8px", "16px", "1rem"],
  },
];
