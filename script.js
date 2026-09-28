(function () {
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Contactos
  $$("[data-bind]").forEach((el) => (el.textContent = S[el.dataset.bind]));
  $$('[data-href="tel"]').forEach((a) => (a.href = "tel:" + S.telefoneLink));
  $$('[data-href="mailto"]').forEach((a) => (a.href = "mailto:" + S.email));
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.mapaQuery);
  $$('[data-href="maps"]').forEach((a) => (a.href = mapsUrl));
  $$("[data-map]").forEach((f) => (f.src = "https://www.google.com/maps?q=" + encodeURIComponent(S.mapaQuery) + "&z=16&output=embed"));
  $$('[data-href="whatsapp"]').forEach((a) => (a.href = "https://wa.me/" + S.telefoneLink.replace("+", "")));
  $("#year").textContent = new Date().getFullYear();

  // Disciplinas
  $("#subjects").innerHTML = S.disciplinas
    .map(
      (g) => `
      <div class="subject subject--${g.cor}">
        <h3>${esc(g.area)}</h3>
        <ul>${g.itens.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  // Preçário
  $("#prices").innerHTML = Object.entries(S.precos)
    .map(
      ([key, t], idx) => `
      <div class="price-card${idx === 0 ? " price-card--wide is-active" : ""}" id="price-${key}" role="tabpanel">
        <div class="price-card__head"><h3>${esc(t.titulo)}</h3><span>${esc(t.subtitulo)}</span></div>
        <table class="price-table">
          <thead><tr>${t.colunas
            .map((c, j) => {
              const curta = t.colunasCurtas && t.colunasCurtas[j];
              return `<th scope="col">${curta ? `<span class="label-long">${esc(c)}</span><span class="label-short">${esc(curta)}</span>` : esc(c)}</th>`;
            })
            .join("")}</tr></thead>
          <tbody>${t.linhas
            .map((r) => `<tr>${r.map((c, j) => (j ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`)).join("")}</tr>`)
            .join("")}</tbody>
        </table>
        ${t.nota ? `<p class="price-card__note">${esc(t.nota)}</p>` : ""}
      </div>`
    )
    .join("");

  const tabs = $$(".price-tabs [role=tab]");
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", t === tab));
      $$(".price-card").forEach((c) => c.classList.toggle("is-active", c.id === "price-" + tab.dataset.tab));
    })
  );

  $("#extras").innerHTML = S.extras.map((x) => `<li><span>${esc(x.nome)}</span><strong>${esc(x.valor)}</strong></li>`).join("");

  // Horário (destaca o dia de hoje)
  const today = new Date().getDay();
  $("#hours").innerHTML = S.horario
    .map((h) => {
      const isToday = h.dias.includes(today);
      return `<div class="hours__row${isToday ? " is-today" : ""}${h.horas === "Encerrado" ? " is-closed" : ""}">
        <span>${esc(h.dia)}${isToday ? "<em>hoje</em>" : ""}</span><strong>${esc(h.horas)}</strong></div>`;
    })
    .join("");

  // Vagas
  $("#vagas-list").innerHTML = S.vagas.length
    ? S.vagas
        .map(
          (v) => `
        <div class="vaga${v.placeholder ? " is-placeholder" : ""}">
          <div><strong>${esc(v.titulo)}</strong><span>${esc(v.detalhe)}</span></div>
          <span class="badge badge--${v.tipo}">${esc(v.estado)}</span>
        </div>`
        )
        .join("")
    : `<p class="muted">De momento não há vagas anunciadas. Contacte-nos para entrar em lista de espera.</p>`;

  // Menu móvel
  const toggle = $(".nav-toggle");
  const nav = $("#nav");
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  $$("#nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
})();
