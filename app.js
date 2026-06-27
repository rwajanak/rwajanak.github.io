/* ===========================================================
   Verdant — plant storefront
   Pure client-side: product catalog, cart (localStorage),
   filtering, and an email-based demo checkout.
   =========================================================== */

// --- Catalog ---------------------------------------------------------------
// `img` uses stable Unsplash CDN URLs; if one fails to load we fall back to
// the emoji placeholder so the grid never shows a broken image.
const PRODUCTS = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    sci: "Monstera deliciosa",
    price: 38,
    emoji: "🌿",
    category: "statement",
    light: "Bright indirect",
    care: "Easy",
    petSafe: false,
    desc: "The iconic split-leaf beauty. Fast-growing and forgiving — a perfect first statement plant.",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "snake",
    name: "Snake Plant",
    sci: "Dracaena trifasciata",
    price: 24,
    emoji: "🪴",
    category: "easy",
    light: "Low to bright",
    care: "Very easy",
    petSafe: false,
    desc: "Nearly indestructible architectural leaves. Thrives on neglect and purifies the air.",
    img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    sci: "Epipremnum aureum",
    price: 18,
    emoji: "🍃",
    category: "easy",
    light: "Low to bright",
    care: "Very easy",
    petSafe: false,
    desc: "Trailing heart-shaped leaves that drape beautifully from a shelf. Roots in water, grows anywhere.",
    img: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "fiddle",
    name: "Fiddle Leaf Fig",
    sci: "Ficus lyrata",
    price: 56,
    emoji: "🌳",
    category: "statement",
    light: "Bright indirect",
    care: "Moderate",
    petSafe: false,
    desc: "A floor-standing showstopper with broad violin-shaped leaves. Loves a consistent sunny spot.",
    img: "https://images.unsplash.com/photo-1597055181300-e3633a917c2b?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "zz",
    name: "ZZ Plant",
    sci: "Zamioculcas zamiifolia",
    price: 28,
    emoji: "🌱",
    category: "easy",
    light: "Low to medium",
    care: "Very easy",
    petSafe: false,
    desc: "Glossy waxy leaves and drought-tolerant roots. The ideal plant for dim offices and busy people.",
    img: "https://images.unsplash.com/photo-1632207171349-3741f6b7e0e7?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "calathea",
    name: "Calathea Orbifolia",
    sci: "Goeppertia orbifolia",
    price: 32,
    emoji: "🍃",
    category: "pet",
    light: "Medium indirect",
    care: "Moderate",
    petSafe: true,
    desc: "Silver-striped round leaves that fold up at night. Pet-safe and stunning in a humid spot.",
    img: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "spider",
    name: "Spider Plant",
    sci: "Chlorophytum comosum",
    price: 16,
    emoji: "🕷️",
    category: "pet",
    light: "Bright indirect",
    care: "Very easy",
    petSafe: true,
    desc: "Arching variegated leaves that send out baby 'pups' you can replant or gift. Pet-safe.",
    img: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    sci: "Spathiphyllum",
    price: 26,
    emoji: "🌸",
    category: "statement",
    light: "Low to medium",
    care: "Easy",
    petSafe: false,
    desc: "Elegant white blooms above deep green leaves. Droops to tell you exactly when it's thirsty.",
    img: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "aloe",
    name: "Aloe Vera",
    sci: "Aloe barbadensis",
    price: 19,
    emoji: "🌵",
    category: "easy",
    light: "Bright direct",
    care: "Very easy",
    petSafe: false,
    desc: "A sunny-windowsill succulent with soothing gel inside. Water sparingly and it'll flourish.",
    img: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "rubber",
    name: "Rubber Plant",
    sci: "Ficus elastica",
    price: 34,
    emoji: "🌿",
    category: "statement",
    light: "Bright indirect",
    care: "Easy",
    petSafe: false,
    desc: "Burgundy-tinged, glossy leaves on an upright trunk. Grows into a dramatic indoor tree.",
    img: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "string-pearls",
    name: "String of Pearls",
    sci: "Curio rowleyanus",
    price: 22,
    emoji: "🟢",
    category: "easy",
    light: "Bright indirect",
    care: "Moderate",
    petSafe: false,
    desc: "Cascading strands of bead-like leaves. Perfect for a high shelf or hanging planter.",
    img: "https://images.unsplash.com/photo-1632321600623-31c8d9c3a3c0?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "parlor-palm",
    name: "Parlor Palm",
    sci: "Chamaedorea elegans",
    price: 29,
    emoji: "🌴",
    category: "pet",
    light: "Low to medium",
    care: "Easy",
    petSafe: true,
    desc: "Feathery fronds that bring a tropical, low-light corner to life. Completely pet-safe.",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&q=80&auto=format&fit=crop",
  },
];

const CATEGORIES = [
  { id: "all", label: "All plants" },
  { id: "easy", label: "Easy-care" },
  { id: "statement", label: "Statement" },
  { id: "pet", label: "Pet-friendly" },
];

const FREE_SHIP_THRESHOLD = 75;
const SHIPPING_FEE = 9;
const STORE_EMAIL = "orders@verdant.example";
const CURRENCY = (n) => "$" + n.toFixed(2);

// --- State -----------------------------------------------------------------
const STORAGE_KEY = "verdant-cart";
let cart = loadCart();
let activeFilter = "all";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveCart() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch {}
}
const productById = (id) => PRODUCTS.find((p) => p.id === id);

// --- DOM refs --------------------------------------------------------------
const $ = (sel) => document.querySelector(sel);
const grid = $("#productGrid");
const filtersEl = $("#filters");
const cartItemsEl = $("#cartItems");
const cartCountEl = $("#cartCount");
const cartSubtotalEl = $("#cartSubtotal");
const shipNoteEl = $("#shipNote");
const drawer = $("#cartDrawer");
const overlay = $("#overlay");

// --- Render: filters -------------------------------------------------------
function renderFilters() {
  filtersEl.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "filter-chip" + (c.id === activeFilter ? " active" : "");
    btn.textContent = c.label;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", c.id === activeFilter);
    btn.addEventListener("click", () => {
      activeFilter = c.id;
      renderFilters();
      renderProducts();
    });
    filtersEl.appendChild(btn);
  });
}

// --- Render: product grid --------------------------------------------------
function renderProducts() {
  const list =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  grid.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.petSafe ? '<span class="tag">Pet-safe</span>' : ""}
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="card-sci">${p.sci}</p>
        <p class="card-desc">${p.desc}</p>
        <div class="card-meta">
          <span>☀️ ${p.light}</span>
          <span>🌱 ${p.care}</span>
        </div>
        <div class="card-foot">
          <span class="price">${CURRENCY(p.price)}</span>
          <button class="add-btn" data-add="${p.id}">Add to cart</button>
        </div>
      </div>`;

    // Graceful image fallback -> emoji tile
    const img = card.querySelector("img");
    img.addEventListener("error", () => {
      const box = card.querySelector(".card-img");
      box.classList.add("fallback");
      box.textContent = p.emoji;
      if (p.petSafe) {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = "Pet-safe";
        box.appendChild(tag);
      }
    });

    card.querySelector("[data-add]").addEventListener("click", () => addToCart(p.id));
    grid.appendChild(card);
  });
}

// --- Cart operations -------------------------------------------------------
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  showToast(`Added ${productById(id).name} to cart`);
  bumpCartBtn();
}
function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}
function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
}
function cartEntries() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ product: productById(id), qty }))
    .filter((e) => e.product);
}
function cartCount() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}
function cartSubtotal() {
  return cartEntries().reduce((sum, e) => sum + e.product.price * e.qty, 0);
}

// --- Render: cart ----------------------------------------------------------
function renderCart() {
  const entries = cartEntries();
  const count = cartCount();
  cartCountEl.textContent = count;
  cartCountEl.style.display = count ? "grid" : "none";

  if (entries.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🪴</span>
        Your cart is empty.<br />Add a plant to get growing!
      </div>`;
    $("#cartFooter").style.display = "none";
  } else {
    $("#cartFooter").style.display = "block";
    cartItemsEl.innerHTML = entries
      .map(
        (e) => `
        <div class="cart-item">
          <div class="cart-item-img">${e.product.emoji}</div>
          <div class="cart-item-info">
            <h4>${e.product.name}</h4>
            <span class="ci-price">${CURRENCY(e.product.price)}</span>
            <div class="qty">
              <button data-dec="${e.product.id}" aria-label="Decrease quantity">−</button>
              <span>${e.qty}</span>
              <button data-inc="${e.product.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="ci-remove" data-rm="${e.product.id}">Remove</button>
          </div>
          <div class="ci-line">${CURRENCY(e.product.price * e.qty)}</div>
        </div>`
      )
      .join("");

    cartItemsEl.querySelectorAll("[data-inc]").forEach((b) =>
      b.addEventListener("click", () => changeQty(b.dataset.inc, 1)));
    cartItemsEl.querySelectorAll("[data-dec]").forEach((b) =>
      b.addEventListener("click", () => changeQty(b.dataset.dec, -1)));
    cartItemsEl.querySelectorAll("[data-rm]").forEach((b) =>
      b.addEventListener("click", () => removeFromCart(b.dataset.rm)));
  }

  const subtotal = cartSubtotal();
  cartSubtotalEl.textContent = CURRENCY(subtotal);
  if (subtotal >= FREE_SHIP_THRESHOLD || subtotal === 0) {
    shipNoteEl.textContent = subtotal === 0 ? "" : "🎉 You've unlocked free shipping!";
  } else {
    const left = FREE_SHIP_THRESHOLD - subtotal;
    shipNoteEl.textContent = `Add ${CURRENCY(left)} more for free shipping.`;
  }
}

// --- Drawer ----------------------------------------------------------------
function openCart() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
}
function closeCart() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
}

// --- Order by email (no backend, no payment) -------------------------------
function emailOrder() {
  const entries = cartEntries();
  if (entries.length === 0) {
    showToast("Your cart is empty");
    return;
  }
  const subtotal = cartSubtotal();
  const shipping = subtotal >= FREE_SHIP_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  const lines = entries
    .map((e) => `  • ${e.qty} × ${e.product.name} — ${CURRENCY(e.product.price * e.qty)}`)
    .join("\n");

  const body =
    `Hi Verdant, I'd like to order:\n\n${lines}\n\n` +
    `Subtotal: ${CURRENCY(subtotal)}\n` +
    `Shipping: ${shipping === 0 ? "Free" : CURRENCY(shipping)}\n` +
    `Total: ${CURRENCY(total)}\n\n` +
    `Please confirm availability and how to pay.\n\n` +
    `My details:\nName:\nDelivery address:\nPhone:`;

  const mailto =
    `mailto:${STORE_EMAIL}` +
    `?subject=${encodeURIComponent("Plant order")}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  showToast("Order email ready — add your details and send 🌿");
}

// --- Toast & micro-interactions --------------------------------------------
let toastTimer;
function showToast(msg) {
  const toast = $("#toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function bumpCartBtn() {
  const btn = $("#cartBtn");
  btn.animate(
    [{ transform: "scale(1)" }, { transform: "scale(1.2)" }, { transform: "scale(1)" }],
    { duration: 300, easing: "ease-out" }
  );
}

// --- Wire up ---------------------------------------------------------------
function init() {
  renderFilters();
  renderProducts();
  renderCart();

  $("#cartBtn").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
  $("#checkoutBtn").addEventListener("click", emailOrder);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  $("#year").textContent = new Date().getFullYear();
}

init();
