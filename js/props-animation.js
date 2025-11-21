window.CSS_BOOK = window.CSS_BOOK || {};

window.CSS_BOOK.animationProperties = [
  {
    name: "transition",
    thumbClass: "thumb-transition",
    categoryId: "animation",
    categoryLabel: "アニメーション・変形",
    description: "プロパティが変化するときの動きを滑らかにします。",
    htmlExample: `<button class="transition-demo">ホバーしてみてください</button>`,
    cssExample: `.transition-demo {
  padding: 6px 12px;
  border-radius: 999px;
  border: none;
  background-color: #4f46e5;
  color: #e5e7eb;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.transition-demo:hover {
  background-color: #22c55e;
  transform: translateY(-2px);
}`,
    commonValues: [
      "transition: all 0.2s ease;",
      "transition: opacity 0.3s;",
      "transition: transform 150ms;",
    ],
  },
  {
    name: "transform",
    thumbClass: "thumb-transform",
    categoryId: "animation",
    categoryLabel: "アニメーション・変形",
    description: "要素を移動・拡大縮小・回転などで変形させます。",
    htmlExample: `<div class="transform-demo scale">scale(1.2)</div>
<div class="transform-demo rotate">rotate(10deg)</div>`,
    cssExample: `.transform-demo {
  display: inline-block;
  margin: 4px;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: #0ea5e9;
  color: #0f172a;
}

.transform-demo.scale {
  transform: scale(1.2);
}

.transform-demo.rotate {
  transform: rotate(10deg);
}`,
    commonValues: [
      "translateX(10px)",
      "scale(1.1)",
      "rotate(15deg)",
      "translate3d(...)",
    ],
  },
  {
    name: "animation",
    thumbClass: "thumb-animation",
    categoryId: "animation",
    categoryLabel: "アニメーション・変形",
    description: "キーフレームを使った CSS アニメーションをまとめて指定します。",
    htmlExample: `<div class="animation-box">ふわっとアニメーション</div>`,
    cssExample: `.animation-box {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background-color: #4f46e5;
  color: #e5e7eb;
  animation: popIn 1s ease-in-out infinite alternate;
}

@keyframes popIn {
  from {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  to {
    transform: translateY(-4px) scale(1.05);
    opacity: 1;
  }
}`,
    commonValues: [
      "animation: name 1s ease;",
      "animation: name 0.3s ease-in-out;",
      "animation: none;",
    ],
  },
  {
    name: "animation-timing-function",
    thumbClass: "thumb-animation-timing",
    categoryId: "animation",
    categoryLabel: "アニメーション・変形",
    description:
      "アニメーションの動き方（加速・減速など）のカーブを指定します。",
    htmlExample: `<div class="timing-row">
  <div class="timing-box ease">ease</div>
  <div class="timing-box linear">linear</div>
</div>`,
    cssExample: `.timing-row {
  display: flex;
  gap: 6px;
}

.timing-box {
  flex: 1;
  padding: 4px 0;
  text-align: center;
  border-radius: 999px;
  background-color: #22c55e;
  color: #0f172a;
  animation: moveX 1.5s infinite;
}

.timing-box.ease {
  animation-timing-function: ease;
}

.timing-box.linear {
  animation-timing-function: linear;
}

@keyframes moveX {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(8px); }
  100% { transform: translateX(0); }
}`,
    commonValues: [
      "ease",
      "linear",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "cubic-bezier(...)",
    ],
  },
];
