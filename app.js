/* ===========================================================
   Verdant — plant catalog / landing page
   Pure client-side: product catalog, filtering, and a "list"
   (cart) that lets visitors track plants they're interested in.
   Buying happens on Facebook Marketplace — there is no checkout.
   =========================================================== */

// --- Catalog ---------------------------------------------------------------
// `img` uses stable Unsplash CDN URLs as placeholders; if one fails to load
// we fall back to the emoji tile so the grid never shows a broken image.
// Swap these for photos of your own plants when you can.
const PRODUCTS = [
  // ---------- Houseplants ----------
  {
    id: "monstera", name: "Monstera Deliciosa", sci: "Monstera deliciosa", price: 38,
    emoji: "🌿", category: "indoor", light: "Bright indirect", care: "Easy", petSafe: false,
    desc: "The iconic split-leaf beauty. Fast-growing and forgiving — a perfect first statement plant.",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "snake", name: "Snake Plant", sci: "Dracaena trifasciata", price: 24,
    emoji: "🪴", category: "indoor", light: "Low to bright", care: "Very easy", petSafe: false,
    desc: "Nearly indestructible architectural leaves. Thrives on neglect and purifies the air.",
    img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "pothos", name: "Golden Pothos", sci: "Epipremnum aureum", price: 18,
    emoji: "🍃", category: "indoor", light: "Low to bright", care: "Very easy", petSafe: false,
    desc: "Trailing heart-shaped leaves that drape beautifully from a shelf. Roots in water, grows anywhere.",
    img: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "fiddle", name: "Fiddle Leaf Fig", sci: "Ficus lyrata", price: 56,
    emoji: "🌳", category: "indoor", light: "Bright indirect", care: "Moderate", petSafe: false,
    desc: "A floor-standing showstopper with broad violin-shaped leaves. Loves a consistent sunny spot.",
    img: "https://images.unsplash.com/photo-1597055181300-e3633a917c2b?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "zz", name: "ZZ Plant", sci: "Zamioculcas zamiifolia", price: 28,
    emoji: "🌱", category: "indoor", light: "Low to medium", care: "Very easy", petSafe: false,
    desc: "Glossy waxy leaves and drought-tolerant roots. The ideal plant for dim offices and busy people.",
    img: "https://images.unsplash.com/photo-1632207171349-3741f6b7e0e7?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "calathea", name: "Calathea Orbifolia", sci: "Goeppertia orbifolia", price: 32,
    emoji: "🍃", category: "indoor", light: "Medium indirect", care: "Moderate", petSafe: true,
    desc: "Silver-striped round leaves that fold up at night. Pet-safe and stunning in a humid spot.",
    img: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "spider", name: "Spider Plant", sci: "Chlorophytum comosum", price: 16,
    emoji: "🕸️", category: "indoor", light: "Bright indirect", care: "Very easy", petSafe: true,
    desc: "Arching variegated leaves that send out baby 'pups' you can replant or gift. Pet-safe.",
    img: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "rubber", name: "Rubber Plant", sci: "Ficus elastica", price: 34,
    emoji: "🌿", category: "indoor", light: "Bright indirect", care: "Easy", petSafe: false,
    desc: "Burgundy-tinged, glossy leaves on an upright trunk. Grows into a dramatic indoor tree.",
    img: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "parlor-palm", name: "Parlor Palm", sci: "Chamaedorea elegans", price: 29,
    emoji: "🌴", category: "indoor", light: "Low to medium", care: "Easy", petSafe: true,
    desc: "Feathery fronds that bring a tropical, low-light corner to life. Completely pet-safe.",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&q=80&auto=format&fit=crop",
  },

  // ---------- Succulents & Cacti ----------
  {
    id: "aloe", name: "Aloe Vera", sci: "Aloe barbadensis", price: 19,
    emoji: "🪴", category: "succulent", light: "Bright direct", care: "Very easy", petSafe: false,
    desc: "A sunny-windowsill succulent with soothing gel inside. Water sparingly and it'll flourish.",
    img: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "string-pearls", name: "String of Pearls", sci: "Curio rowleyanus", price: 22,
    emoji: "🟢", category: "succulent", light: "Bright indirect", care: "Moderate", petSafe: false,
    desc: "Cascading strands of bead-like leaves. Perfect for a high shelf or hanging planter.",
    img: "https://images.unsplash.com/photo-1632321600623-31c8d9c3a3c0?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "echeveria", name: "Echeveria Rosette", sci: "Echeveria elegans", price: 14,
    emoji: "🌵", category: "succulent", light: "Bright direct", care: "Very easy", petSafe: true,
    desc: "A perfect pale-green rosette that blushes pink in strong light. Tiny, tough, and pet-safe.",
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "jade", name: "Jade Plant", sci: "Crassula ovata", price: 21,
    emoji: "🌿", category: "succulent", light: "Bright direct", care: "Very easy", petSafe: false,
    desc: "Plump, coin-shaped leaves on a sturdy little trunk. A long-lived 'money plant' that ages into a bonsai look.",
    img: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "barrel-cactus", name: "Golden Barrel Cactus", sci: "Echinocactus grusonii", price: 27,
    emoji: "🌵", category: "succulent", light: "Bright direct", care: "Very easy", petSafe: false,
    desc: "A globe of golden spines that asks for almost nothing. Bright light and the rare deep soak.",
    img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80&auto=format&fit=crop",
  },

  // ---------- Outdoor & Garden ----------
  {
    id: "lavender", name: "English Lavender", sci: "Lavandula angustifolia", price: 17,
    emoji: "💜", category: "outdoor", light: "Full sun", care: "Easy", petSafe: false,
    desc: "Fragrant purple spikes that bees adore. Loves a sunny border and dries beautifully.",
    img: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "hydrangea", name: "Hydrangea", sci: "Hydrangea macrophylla", price: 33,
    emoji: "💐", category: "outdoor", light: "Sun to part shade", care: "Moderate", petSafe: false,
    desc: "Big mophead blooms that shift colour with your soil. A classic for shady garden corners.",
    img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "japanese-maple", name: "Japanese Maple", sci: "Acer palmatum", price: 64,
    emoji: "🍁", category: "outdoor", light: "Part shade", care: "Moderate", petSafe: true,
    desc: "Delicate, lacy foliage that turns fiery in autumn. A graceful small tree for pots or borders.",
    img: "https://images.unsplash.com/photo-1507371341162-763b5e419408?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "hosta", name: "Hosta", sci: "Hosta sieboldiana", price: 19,
    emoji: "🌿", category: "outdoor", light: "Shade", care: "Easy", petSafe: false,
    desc: "Bold, ribbed leaves that brighten shady beds. Low-fuss and comes back bigger every year.",
    img: "https://images.unsplash.com/photo-1599685315640-9ceab2f58148?w=600&q=80&auto=format&fit=crop",
  },

  // ---------- Herbs & Edibles ----------
  {
    id: "basil", name: "Sweet Basil", sci: "Ocimum basilicum", price: 9,
    emoji: "🌿", category: "herb", light: "Full sun", care: "Easy", petSafe: true,
    desc: "Aromatic leaves for pesto, pasta, and summer salads. Pinch often to keep it bushy.",
    img: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "rosemary", name: "Rosemary", sci: "Salvia rosmarinus", price: 11,
    emoji: "🌱", category: "herb", light: "Full sun", care: "Easy", petSafe: true,
    desc: "Evergreen, piney, and endlessly useful in the kitchen. Drought-tolerant once established.",
    img: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "cherry-tomato", name: "Cherry Tomato", sci: "Solanum lycopersicum", price: 12,
    emoji: "🍅", category: "herb", light: "Full sun", care: "Moderate", petSafe: false,
    desc: "A patio-friendly plant that pumps out sweet little tomatoes all summer. Give it sun and a stake.",
    img: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&q=80&auto=format&fit=crop",
  },

  // ---------- Flowering ----------
  {
    id: "peace-lily", name: "Peace Lily", sci: "Spathiphyllum", price: 26,
    emoji: "🌸", category: "flowering", light: "Low to medium", care: "Easy", petSafe: false,
    desc: "Elegant white blooms above deep green leaves. Droops to tell you exactly when it's thirsty.",
    img: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "orchid", name: "Moth Orchid", sci: "Phalaenopsis", price: 30,
    emoji: "🌸", category: "flowering", light: "Bright indirect", care: "Moderate", petSafe: true,
    desc: "Arcing sprays of long-lasting blooms. Easier than its reputation — and completely pet-safe.",
    img: "https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "anthurium", name: "Anthurium", sci: "Anthurium andraeanum", price: 28,
    emoji: "🌺", category: "flowering", light: "Bright indirect", care: "Easy", petSafe: false,
    desc: "Glossy, heart-shaped red blooms almost year-round. A bold pop of colour for any bright room.",
    img: "https://images.unsplash.com/photo-1633969242593-8f5b7e8c2c2e?w=600&q=80&auto=format&fit=crop",
  },
];

const CATEGORIES = [
  { id: "all", label: "All plants" },
  { id: "indoor", label: "Houseplants" },
  { id: "succulent", label: "Succulents & Cacti" },
  { id: "outdoor", label: "Outdoor & Garden" },
  { id: "herb", label: "Herbs & Edibles" },
  { id: "flowering", label: "Flowering" },
];

// ⚠️ REPLACE THIS with the link to your Facebook Marketplace profile/shop.
// Every "Shop / Buy on Facebook Marketplace" button on the page uses it.
const MARKETPLACE_URL = "https://www.facebook.com/marketplace/profile/REPLACE_ME/";
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
          <button class="add-btn" data-add="${p.id}">Add to list</button>
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

// --- List ("cart") operations ----------------------------------------------
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  showToast(`Added ${productById(id).name} to your list`);
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

// --- Render: list ----------------------------------------------------------
function renderCart() {
  const entries = cartEntries();
  const count = cartCount();
  cartCountEl.textContent = count;
  cartCountEl.style.display = count ? "grid" : "none";

  if (entries.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🪴</span>
        Your list is empty.<br />Add plants you love to keep track of them!
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

  cartSubtotalEl.textContent = CURRENCY(cartSubtotal());
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

  // Point every Marketplace link at the configured profile URL.
  document.querySelectorAll("[data-marketplace]").forEach((a) => {
    a.href = MARKETPLACE_URL;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  $("#year").textContent = new Date().getFullYear();
}

init();
