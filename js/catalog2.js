/* =========================================================
   P2J Industries — catalogue pages
   products.html / machines.html : category tabs, landing grid, listing
   product-detail.html          : price & specification page
   Needs js/data.js loaded first.
   ========================================================= */
(function () {
  const C = window.P2J_CATALOG;
  if (!C) return;
  const params = new URLSearchParams(location.search);
  const $ = id => document.getElementById(id);
  const inr = n => "₹ " + Number(n).toLocaleString("en-IN");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const detailUrl = it => `product-detail.html?id=${encodeURIComponent(it.id)}`;

  // Image with automatic dummy fallback (real photo replaces it once added)
  const imageSlot = (it, extra = "") => `
    <div class="img-slot dummy ${extra}">
      <div class="dummy-art"><i class="fa-solid ${it.icon}"></i><span>Image coming soon</span></div>
      <img src="${it.image}" alt="${esc(it.name)}" loading="lazy" onerror="this.remove()">
    </div>`;

  const priceHtml = it => `${inr(it.price)}${it.confirmed ? "" : '<sup title="Indicative placeholder price">*</sup>'}`;

  const quoteUrl = it => {
    const q = new URLSearchParams({
      inquiry: it.cat.type === "machines" ? "Machines" : "Products",
      subject: `Quote request: ${it.name} (${it.model})`,
      product: it.name, model: it.model, category: it.cat.name, id: it.id
    });
    return "contact.html?" + q.toString();
  };

  const itemCard = it => {
    const specs = Object.entries(it.specs).slice(0, 2);
    return `
    <article class="item-card">
      <a href="${detailUrl(it)}" tabindex="-1" aria-hidden="true">${imageSlot(it)}</a>
      <div class="item-body">
        <span class="item-cat">${esc(it.cat.name)}</span>
        <h3><a href="${detailUrl(it)}">${esc(it.name)}</a></h3>
        <div class="item-model">Model: ${it.model}</div>
        <ul class="item-specs">${specs.map(([k, v]) => `<li><span>${esc(k)}</span><b>${esc(v)}</b></li>`).join("")}</ul>
        <div class="item-foot">
          <span class="item-price">${priceHtml(it)}</span>
          <a href="${detailUrl(it)}" class="btn btn-dark">View Details <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </article>`;
  };

  /* ---------------- Listing pages ---------------- */
  const listRoot = $("catalog");
  if (listRoot) {
    const type = listRoot.dataset.type; // "products" | "machines"
    const cats = type === "machines" ? C.machines : C.products;
    const current = C.category(type, params.get("cat"));
    const page = type === "machines" ? "machines.html" : "products.html";

    // Tabs
    $("cat-tabs").innerHTML = cats.map(c =>
      `<a href="${c.listUrl}" class="cat-tab${current === c ? " active" : ""}"${current === c ? ' aria-current="page"' : ""}>${esc(c.name)}</a>`
    ).join("");
    const active = $("cat-tabs").querySelector(".active");
    if (active) active.scrollIntoView({ block: "nearest", inline: "center" });

    if (!current) {
      // Landing: every category as a card
      $("catalog-listing").remove();
      $("land-grid").innerHTML = cats.map(c => `
        <a class="land-card" href="${c.listUrl}">
          ${imageSlot({ icon: c.icon, name: c.name, image: `Images/${type === "machines" ? "Machines" : "Categories"}/${c.urlCat}.png` })}
          <div class="land-body">
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.blurb)}</p>
            <span class="land-link">View ${type === "machines" ? "Machines" : "Products"} <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </a>`).join("");
    } else {
      // One category
      $("catalog-landing").remove();
      document.title = `${current.name} — P2J Industries`;
      $("cat-title").textContent = current.name;
      $("cat-blurb").textContent = current.blurb;
      $("crumb-current").outerHTML = `<a href="${page}">${type === "machines" ? "Machine Manufacturers" : "Products"}</a><i class="fa-solid fa-chevron-right"></i><span>${esc(current.name)}</span>`;
      $("list-count").textContent = `${current.items.length} ${type === "machines" ? "machines" : "products"} in ${current.name}`;
      $("item-grid").innerHTML = current.items.map(itemCard).join("");
    }
  }

  /* ---------------- Detail page ---------------- */
  const mount = $("detail-mount");
  if (mount) {
    const id = params.get("id") || params.get("product");
    const it = id && C.byId[id];

    if (!it) {
      mount.innerHTML = `
        <div class="catalog-missing">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>We couldn't find that item</h3>
          <p>It may have been renamed or removed. Browse the catalogue to find what you need.</p>
          <a class="btn btn-primary" href="products.html">Browse Products</a>
          <a class="btn btn-outline" href="machines.html">View Machines</a>
        </div>`;
      return;
    }

    const cat = it.cat;
    if (cat.type === "machines") {
      document.querySelectorAll('.main-nav a.active').forEach(a => a.classList.remove("active"));
      const m = document.querySelector('.main-nav a[href="machines.html"]'); if (m) m.classList.add("active");
    }
    const typeLabel = cat.type === "machines" ? "Machine Manufacturers" : "Products";
    document.title = `${it.name} (${it.model}) — P2J Industries`;
    $("detail-eyebrow").textContent = cat.name;
    $("detail-title").textContent = it.name;
    $("crumb-cat").outerHTML = `<a href="${cat.page}">${typeLabel}</a><i class="fa-solid fa-chevron-right"></i><a href="${cat.listUrl}">${esc(cat.name)}</a><i class="fa-solid fa-chevron-right"></i><span>${esc(it.name)}</span>`;

    const rows = [["Model", it.model], ...Object.entries(it.specs), ["Warranty", cat.warranty], ["Category", cat.name]];
    const related = cat.items.filter(x => x !== it).slice(0, 3);

    mount.innerHTML = `
      <div class="detail-card">
        <div class="pd-media">${imageSlot(it, "pd-image")}</div>
        <div class="pd-info">
          <span class="eyebrow">${esc(cat.name)}</span>
          <h2 class="pd-name">${esc(it.name)}</h2>
          <div class="pd-model">Model: <b>${it.model}</b></div>
          <div class="pd-price">${inr(it.price)} <small>ex-works, excl. GST</small></div>
          ${it.confirmed ? "" : '<div class="pd-dummy"><i class="fa-solid fa-circle-info"></i> Indicative placeholder price and specifications — final values to be confirmed.</div>'}
          <p class="pd-desc">${esc(it.desc)}</p>
          <table class="pd-specs"><caption class="sr-only">Technical specifications</caption><tbody>
            ${rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}
          </tbody></table>
          <div class="pd-actions">
            <a href="${quoteUrl(it)}" class="btn btn-primary btn-lg">Request a Quote <i class="fa-solid fa-arrow-right"></i></a>
            <a href="${cat.listUrl}" class="btn btn-outline btn-lg" id="back-to-listing"><i class="fa-solid fa-arrow-left"></i> Back to Listing</a>
          </div>
        </div>
      </div>
      <div class="related">
        <div class="section-head"><div><span class="eyebrow">More in ${esc(cat.name)}</span><h2>Related ${cat.type === "machines" ? "Machines" : "Products"}</h2></div>
          <a href="${cat.listUrl}" class="btn btn-outline">View All <i class="fa-solid fa-arrow-right"></i></a></div>
        <div class="item-grid">${related.map(itemCard).join("")}</div>
      </div>`;

    // Back to Listing: use browser history when we came from that listing,
    // otherwise go straight to the category listing.
    $("back-to-listing").addEventListener("click", e => {
      const ref = document.referrer;
      if (ref && ref.includes(cat.page) && ref.includes("cat=" + cat.urlCat) && history.length > 1) {
        e.preventDefault();
        history.back();
      }
    });
  }
})();
