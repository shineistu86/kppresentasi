(function () {
  const C = window.CONTENT;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Paragraf + butir daftar
  function blocks(lines) {
    let html = "", list = [];
    const flush = () => { if (list.length) { html += "<ul>" + list.map((l) => `<li>${md(l)}</li>`).join("") + "</ul>"; list = []; } };
    lines.forEach((l) => {
      if (l.startsWith("- ")) list.push(l.slice(2));
      else { flush(); html += `<p>${md(l)}</p>`; }
    });
    flush();
    return html;
  }

  // ---------- Hero
  $("#story").innerHTML = C.story.map((s, i) => `<p><span class="step">${i + 1}</span><span>${md(s)}</span></p>`).join("");
  $("#storyLimit").innerHTML = "⚠️ " + md(C.storyLimit);
  $("#pipeline").innerHTML = C.pipeline
    .map((p, i) => `<div class="pipe"><div class="pipe-n">${esc(p.n)}</div><div class="pipe-t">${esc(p.t)}</div></div>${i < C.pipeline.length - 1 ? '<div class="pipe-arrow">→</div>' : ""}`)
    .join("");

  // ---------- Kamus
  const glossGrid = $("#glossGrid");
  glossGrid.innerHTML = C.glossary
    .map(([t, b, a]) => `<div class="gloss" data-q="${esc((t + " " + b + " " + a).toLowerCase())}">
        <div class="gloss-term">${esc(t)}</div>
        <div class="gloss-baby">🍼 ${esc(b)}</div>
        <div class="gloss-ana">💡 ${esc(a)}</div></div>`)
    .join("");
  $("#glossSearch").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    glossGrid.querySelectorAll(".gloss").forEach((g) => (g.hidden = q && !g.dataset.q.includes(q)));
  });

  // ---------- Slides
  const done = JSON.parse(localStorage.getItem("kp-done") || "{}");
  const navSlides = $("#navSlides");
  const slidesEl = $("#slides");
  C.slides.forEach((s) => {
    const id = `slide-${s.no}`;
    const pad = String(s.no).padStart(2, "0");
    navSlides.insertAdjacentHTML("beforeend",
      `<a href="#${id}" data-slide="${s.no}" class="${s.backup ? "nav-backup" : ""}"><span class="nav-no">${s.no}</span>${esc(s.title)}${s.key ? ' <span class="star">★</span>' : ""}<span class="nav-check">${done[s.no] ? "✓" : ""}</span></a>`);

    const nums = s.nums && s.nums.length ? `<div class="block nums"><div class="block-label">🔢 Angka wajib ingat</div><div class="chips">${s.nums.map((n) => `<span class="chip">${esc(n)}</span>`).join("")}</div></div>` : "";
    const note = [].concat(s.note || []).map((n) => `<div class="block note">💬 ${md(n)}</div>`).join("");
    const warn = s.warn ? `<div class="block warn">⚠️ ${md(s.warn)}</div>` : "";
    const ask = s.ask ? `<div class="block ask">🙋 <b>Buka slide ini kalau ditanya:</b> ${md(s.ask)}</div>` : "";
    const bridge = s.bridge ? `<div class="block bridge"><span class="bridge-arrow">➜</span><div><div class="block-label">Jembatan ke slide ${s.no + 1}</div>“${md(s.bridge)}”</div></div>` : "";
    const clusterTable = s.clusters ? `
      <div class="block ctable">
        <table>
          <thead><tr><th>Median</th><th class="t0">C0 rapi</th><th class="t1">C1 ribet</th><th>Artinya</th></tr></thead>
          <tbody>
            <tr><td>Luas</td><td>168 m²</td><td>285 m²</td><td>C1 sedikit lebih luas</td></tr>
            <tr><td>Compactness</td><td>0,73</td><td>0,46</td><td>C0 lebih padat</td></tr>
            <tr><td>Solidity</td><td>1,00</td><td>0,87</td><td>C1 punya lekukan</td></tr>
            <tr><td>Elongation</td><td>1,27</td><td>1,81</td><td>C1 lebih memanjang</td></tr>
            <tr><td>Titik sudut</td><td>5</td><td>10</td><td>C1 lebih banyak sudut</td></tr>
            <tr><td>angle_std</td><td>28,2°</td><td>36,1°</td><td>Sudut C1 lebih beragam</td></tr>
            <tr><td>edge_cv</td><td>0,40</td><td>0,56</td><td>Panjang sisi C1 lebih beragam</td></tr>
          </tbody>
        </table>
      </div>` : "";

    slidesEl.insertAdjacentHTML("beforeend", `
      <section class="slide-card section ${s.key ? "is-key" : ""} ${s.backup ? "is-backup" : ""}" id="${id}" data-no="${s.no}">
        <div class="slide-head">
          <div class="slide-no">${s.no}</div>
          <div class="slide-title">
            <h2>${esc(s.title)} ${s.key ? '<span class="badge key">★ slide inti</span>' : ""}${s.backup ? '<span class="badge backup">cadangan</span>' : ""}</h2>
            <span class="dur">⏱ ${esc(s.dur)}</span>
          </div>
          <label class="check"><input type="checkbox" data-done="${s.no}" ${done[s.no] ? "checked" : ""}> Sudah latihan</label>
        </div>
        <div class="slide-body">
          <figure class="thumb"><img src="slides/s${pad}.jpg" alt="Slide ${s.no}: ${esc(s.title)}" loading="lazy"></figure>
          <div class="slide-text">
            ${ask}
            <div class="block baby"><div class="block-label">🍼 Bahasa bayi</div>${md(s.baby)}</div>
            ${clusterTable}
            <div class="block say"><div class="block-label">🎤 Yang diucapkan</div>${blocks(s.say)}</div>
            ${nums}${note}${warn}${bridge}
          </div>
        </div>
      </section>`);
  });

  // Progress latihan (slide 1–13)
  const mainCount = C.slides.filter((s) => !s.backup).length;
  function updateProgress() {
    const n = C.slides.filter((s) => !s.backup && done[s.no]).length;
    $("#progressFill").style.width = (n / mainCount) * 100 + "%";
    $("#progressText").textContent = `${n}/${mainCount}`;
  }
  slidesEl.addEventListener("change", (e) => {
    const no = e.target.dataset.done;
    if (!no) return;
    if (e.target.checked) done[no] = 1; else delete done[no];
    localStorage.setItem("kp-done", JSON.stringify(done));
    navSlides.querySelector(`[data-slide="${no}"] .nav-check`).textContent = e.target.checked ? "✓" : "";
    updateProgress();
  });
  updateProgress();

  // ---------- FAQ
  const faqList = $("#faqList");
  faqList.innerHTML = C.faq
    .map(([q, a], i) => `<details class="faq-item" data-q="${esc((q + " " + a).toLowerCase())}"><summary><span class="faq-no">${i + 1}</span>${esc(q)}</summary><div class="faq-a">${md(a)}</div></details>`)
    .join("");
  $("#faqSearch").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    faqList.querySelectorAll(".faq-item").forEach((f) => (f.hidden = q && !f.dataset.q.includes(q)));
  });

  // ---------- Contekan & tips
  $("#cheat").innerHTML = C.cheat.map(([k, v]) => `<div class="cheat-item"><div class="cheat-k">${esc(k)}</div><div class="cheat-v">${esc(v)}</div></div>`).join("");
  $("#tipsList").innerHTML = C.tips.map(([t, d]) => `<li><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join("");

  // ---------- Lightbox
  const lb = $("#lightbox"), lbImg = $("#lightboxImg");
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".thumb img");
    if (img) { lbImg.src = img.src; lbImg.alt = img.alt; lb.hidden = false; return; }
    if (!lb.hidden && (e.target === lb || e.target.closest(".lb-close"))) lb.hidden = true;
  });

  // ---------- Timer
  let start = 0, elapsed = 0, tick = null;
  const disp = $("#timerDisplay"), tgl = $("#timerToggle");
  const fmt = (ms) => { const t = Math.floor(ms / 1000); return String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0"); };
  function render() {
    const ms = elapsed + (tick ? Date.now() - start : 0);
    disp.textContent = fmt(ms);
    const m = ms / 60000;
    disp.className = "timer-display" + (m >= 15 ? " over" : m >= 12 ? " ok" : "");
  }
  tgl.addEventListener("click", () => {
    if (tick) { elapsed += Date.now() - start; clearInterval(tick); tick = null; tgl.textContent = "▶"; }
    else { start = Date.now(); tick = setInterval(render, 250); tgl.textContent = "⏸"; }
    render();
  });
  $("#timerReset").addEventListener("click", () => { elapsed = 0; if (tick) start = Date.now(); render(); });

  // ---------- Mode latihan (teleprompter)
  const modeBtn = $("#modeBtn");
  function toggleMode() {
    document.body.classList.toggle("prompter");
    modeBtn.classList.toggle("active", document.body.classList.contains("prompter"));
  }
  modeBtn.addEventListener("click", toggleMode);

  const cards = () => [...document.querySelectorAll(".slide-card")];
  function currentIndex() {
    const list = cards();
    let idx = 0;
    list.forEach((c, i) => { if (c.getBoundingClientRect().top < window.innerHeight * 0.35) idx = i; });
    return idx;
  }
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    if (e.key === "Escape") { lb.hidden = true; return; }
    if (e.key.toLowerCase() === "p") { toggleMode(); return; }
    if (document.body.classList.contains("prompter") && ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      const list = cards();
      const i = currentIndex() + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1);
      if (list[i]) list[i].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // ---------- Menu mobile & nav aktif
  const sidebar = $("#sidebar");
  $("#menuBtn").addEventListener("click", () => sidebar.classList.toggle("open"));
  sidebar.addEventListener("click", (e) => { if (e.target.closest("a")) sidebar.classList.remove("open"); });

  const links = [...document.querySelectorAll(".sidebar a")];
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
})();
