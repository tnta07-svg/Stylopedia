// ====== カテゴリ定義 ======
const categories = [
  { id: "all",        label: "すべて",                   icon: "" },
  { id: "layout",     label: "レイアウト & ボックス",    icon: "" },
  { id: "spacing",    label: "余白・サイズ",             icon: "" },
  { id: "border",     label: "枠線・影",                 icon: "" },
  { id: "typography", label: "文字（タイポグラフィ）",   icon: "" },
  { id: "flex",       label: "Flex レイアウト",          icon: "" },
  { id: "grid",       label: "Grid レイアウト",          icon: "" },      
  { id: "color",      label: "色・背景",                 icon: "" },
  { id: "shorthand",  label: "ショートハンド",           icon: "" },     
  { id: "responsive", label: "レスポンシブ & メディア",  icon: "" },     
  { id: "animation",  label: "アニメーション・変形",      icon: "" },
];

// ====== ここで全データをまとめる ======
const cssProperties = [];
window.CSS_BOOK = window.CSS_BOOK || {};

Object.values(window.CSS_BOOK).forEach((arr) => {
  if (Array.isArray(arr)) {
    cssProperties.push(...arr);
  }
});

// ====== DOM取得 ======
const categoryListEl = document.getElementById("category-list");
const propertyListEl = document.getElementById("property-list");
const searchInputEl = document.getElementById("search-input");

const detailEmptyMessageEl = document.getElementById("detail-empty-message");
const detailContainerEl = document.getElementById("detail-container");
const detailNameEl = document.getElementById("detail-name");
const detailCategoryEl = document.getElementById("detail-category");
const detailDescriptionEl = document.getElementById("detail-description");
const detailHtmlEl = document.getElementById("detail-html");
const detailCssEl = document.getElementById("detail-css");
const detailPreviewEl = document.getElementById("detail-preview");
const detailValuesEl = document.getElementById("detail-values");
const themeToggleButton = document.getElementById("theme-toggle");

// ====== 状態管理 ======
let currentCategoryId = "all";
let currentSearchKeyword = "";
let currentSelectedName = null;

// ====== テーマ切替 ======
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  themeToggleButton.textContent = theme === "dark" ? "黒" : "白";
}

function loadInitialTheme() {
  const saved = localStorage.getItem("cssBookTheme");
  const theme = saved === "light" || saved === "dark" ? saved : "dark";
  applyTheme(theme);
}

themeToggleButton.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("cssBookTheme", next);
});

// ====== カテゴリボタン描画 ======
function renderCategories() {
  categoryListEl.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-button";
    btn.dataset.categoryId = cat.id;
    btn.innerHTML = `<span class="icon">${cat.icon}</span>${cat.label}`;

    if (cat.id === currentCategoryId) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      currentCategoryId = cat.id;
      renderCategories();
      renderPropertyList();
    });

    categoryListEl.appendChild(btn);
  });
}

// ====== プロパティ一覧描画 ======
function renderPropertyList() {
  propertyListEl.innerHTML = "";

  const keyword = currentSearchKeyword.toLowerCase();

  const filtered = cssProperties.filter((p) => {
    const byCategory =
      currentCategoryId === "all" || p.categoryId === currentCategoryId;
    const byKeyword =
      !keyword ||
      p.name.toLowerCase().includes(keyword) ||
      (p.description && p.description.toLowerCase().includes(keyword));
    return byCategory && byKeyword;
  });

  filtered.forEach((prop) => {
    const card = document.createElement("div");
    card.className = "property-card";
    if (prop.name === currentSelectedName) {
      card.classList.add("property-card-active");
    }

    card.addEventListener("click", () => {
      showDetail(prop);
    });

    card.innerHTML = `
      <div class="property-thumb ${prop.thumbClass || ""}"></div>
      <div class="property-meta">
        <div class="property-name">${prop.name}</div>
        <div class="property-category">${prop.categoryLabel}</div>
      </div>
    `;

    propertyListEl.appendChild(card);
  });

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "該当するプロパティがありません。";
    empty.style.fontSize = "0.85rem";
    empty.style.color = "#9ca3af";
    propertyListEl.appendChild(empty);
  }
}

// ====== 詳細表示 ======
function showDetail(prop) {
  currentSelectedName = prop.name;
  renderPropertyList();

  detailEmptyMessageEl.style.display = "none";
  detailContainerEl.classList.remove("hidden");

  detailNameEl.textContent = prop.name;
  detailCategoryEl.textContent = prop.categoryLabel;
  detailDescriptionEl.textContent = prop.description;

  detailHtmlEl.textContent = prop.htmlExample;
  detailCssEl.textContent = prop.cssExample;

  detailPreviewEl.innerHTML = prop.htmlExample;

  let oldStyle = document.getElementById("preview-style");
  if (oldStyle) {
    oldStyle.remove();
  }

  const styleEl = document.createElement("style");
  styleEl.id = "preview-style";
  styleEl.textContent = prop.cssExample;
  document.head.appendChild(styleEl);

  detailValuesEl.innerHTML = "";
  if (prop.commonValues && prop.commonValues.length > 0) {
    prop.commonValues.forEach((v) => {
      const chip = document.createElement("span");
      chip.className = "value-chip";
      chip.textContent = v;
      detailValuesEl.appendChild(chip);
    });
  }

  // スマホでは詳細セクションまで自動でスクロール
if (window.innerWidth <= 800) {
  const detailSection = detailContainerEl.closest(".detail-section");
  if (detailSection) {
    detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
}

// ====== イベント設定 ======
searchInputEl.addEventListener("input", (e) => {
  currentSearchKeyword = e.target.value;
  renderPropertyList();
});

// ====== 初期化 ======
loadInitialTheme();
renderCategories();
renderPropertyList();
