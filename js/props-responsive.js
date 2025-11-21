window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.responsiveProperties = [
  {
    name: "@media (min-width: ...)",
    thumbClass: "thumb-responsive-media",
    categoryId: "responsive",
    categoryLabel: "レスポンシブ & メディア",
    description:
      "画面幅などの条件によって、適用するスタイルを切り替えるメディアクエリです。",
    htmlExample: `<p class="media-demo">
画面幅 600px 以上では背景色が変わります。
</p>`,
    cssExample: `.media-demo {
  padding: 6px 10px;
  border-radius: 8px;
  background-color: #0f172a;
  color: #e5e7eb;
}

/* 画面が広いときだけ適用 */
@media (min-width: 600px) {
  .media-demo {
    background-color: #22c55e;
    color: #0f172a;
  }
}`,
    commonValues: [
      "@media (min-width: 768px) { ... }",
      "@media (max-width: 600px) { ... }",
      "@media (prefers-color-scheme: dark) { ... }",
    ],
  },
  {
    name: "vw / vh（ビューポート単位）",
    thumbClass: "thumb-responsive-vw",
    categoryId: "responsive",
    categoryLabel: "レスポンシブ & メディア",
    description:
      "画面幅・高さに対する割合でサイズを指定します。レスポンシブな文字サイズなどに便利です。",
    htmlExample: `<p class="vw-title">画面幅に応じて大きさが変わるタイトル</p>`,
    cssExample: `.vw-title {
  font-size: 5vw; /* 画面幅の 5% */
  font-weight: 700;
}`,
    commonValues: ["font-size: 5vw;", "height: 100vh;", "padding: 2vw;"],
  },
  {
    name: "clamp()",
    thumbClass: "thumb-responsive-clamp",
    categoryId: "responsive",
    categoryLabel: "レスポンシブ & メディア",
    description:
      "最小・理想・最大値を一度に指定し、その範囲内で自動的にスケールさせる関数です。",
    htmlExample: `<p class="clamp-text">
clamp を使ったレスポンシブな文字サイズ
</p>`,
    cssExample: `.clamp-text {
  /* 最小 16px、理想は画面幅に応じて、最大 24px */
  font-size: clamp(16px, 4vw, 24px);
  font-weight: 600;
}`,
    commonValues: [
      "width: clamp(200px, 50vw, 800px);",
      "font-size: clamp(14px, 2vw, 20px);",
    ],
  },
  {
    name: "min() / max()",
    thumbClass: "thumb-responsive-minmax",
    categoryId: "responsive",
    categoryLabel: "レスポンシブ & メディア",
    description:
      "複数の値のうち、小さい方 / 大きい方を採用する関数です。細かいレスポンシブ調整に使えます。",
    htmlExample: `<div class="minmax-box">
横幅が画面に応じて変化します
</div>`,
    cssExample: `.minmax-box {
  width: min(90vw, 320px); /* 画面が狭いときは 90vw、広いときは 320px まで */
  padding: 6px 10px;
  border-radius: 8px;
  background-color: #1e293b;
  color: #e5e7eb;
}`,
    commonValues: ["width: min(100%, 960px);", "height: max(50vh, 400px);"],
  },
  {
    name: "breakpoint 設計の例",
    thumbClass: "thumb-responsive-breakpoint",
    categoryId: "responsive",
    categoryLabel: "レスポンシブ & メディア",
    description:
      "小・中・大の画面幅ごとにクラスの振る舞いを変える、典型的なブレークポイントの考え方です。",
    htmlExample: `<div class="bp-card">
このカードは画面幅によって padding が変わります。
</div>`,
    cssExample: `.bp-card {
  padding: 8px;
  border-radius: 10px;
  background-color: #0f172a;
  color: #e5e7eb;
}

/* 中サイズ以上 */
@media (min-width: 640px) {
  .bp-card {
    padding: 12px 16px;
  }
}

/* 大サイズ以上 */
@media (min-width: 1024px) {
  .bp-card {
    padding: 16px 24px;
  }
}`,
    commonValues: [
      "@media (min-width: 640px)",
      "@media (min-width: 768px)",
      "@media (min-width: 1024px)",
    ],
  },
  {
    name: "prefers-reduced-motion",
    thumbClass: "thumb-responsive-motion",
    categoryId: "responsive",
    categoryLabel: "レスポンシブ & メディア",
    description:
      "ユーザーが OS 設定で「動きを減らす」を有効にしているかどうかで、アニメーションを抑えるメディアクエリです。",
    htmlExample: `<div class="motion-box">
OSの設定によってアニメーションが無効化されます。
</div>`,
    cssExample: `.motion-box {
  padding: 6px 10px;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #e5e7eb;
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to   { transform: translateY(-4px); }
}

/* 動きを減らす設定のユーザーにはアニメーションを止める */
@media (prefers-reduced-motion: reduce) {
  .motion-box {
    animation: none;
  }
}`,
    commonValues: [
      "@media (prefers-reduced-motion: reduce)",
      "@media (prefers-color-scheme: dark)",
    ],
  },
];
