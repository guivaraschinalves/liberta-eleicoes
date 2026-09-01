(function () {
  "use strict";

  function el(tag, className) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    return e;
  }

  function initials(name) {
    var parts = String(name || "").trim().split(/\s+/);
    if (!parts.length) return "?";
    var first = parts[0][0] || "";
    var last = parts.length > 1 ? parts[parts.length - 1][0] || "" : "";
    return (first + last).toUpperCase();
  }

  function orderedCandidateIds() {
    var order = window.CANDIDATE_ORDER || [];
    var data = window.CANDIDATES_DATA || {};
    var ids = order.filter(function (id) { return data[id]; });
    Object.keys(data).forEach(function (id) {
      if (ids.indexOf(id) === -1) ids.push(id);
    });
    return ids;
  }

  // Seleção atual do diálogo de candidatos (ver "Seletor de candidatos" mais
  // abaixo) — sempre um subconjunto de orderedCandidateIds(), na mesma
  // ordem. Começa vazia: nada em Visão Geral/Temas/Comparar 1×1 existe até o
  // primeiro `applySelection()`. `sourcesRendered` garante que Fontes (que
  // sempre lista os 13, independente do filtro) só é montada uma vez.
  var visibleIds = [];
  var sourcesRendered = false;

  // Idade calculada a partir de `basics.birthDate` ("AAAA-MM-DD"), sempre em
  // relação à data de hoje — não é um número fixo gravado nos dados, então
  // continua correto em qualquer visita, não só na data de publicação.
  function calcAge(birthDateStr) {
    if (!birthDateStr) return null;
    var parts = birthDateStr.split("-").map(Number);
    var birth = new Date(parts[0], parts[1] - 1, parts[2]);
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var hadBirthdayThisYear = (today.getMonth() > birth.getMonth()) ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
    if (!hadBirthdayThisYear) age--;
    return age;
  }

  // Avatar: foto oficial (TSE) quando existe, com fallback para iniciais se a
  // imagem falhar ao carregar — nunca deixa um círculo vazio sem explicação.
  function buildAvatar(basics, sizeClass) {
    var avatar = el("div", "candidate-avatar" + (sizeClass ? " " + sizeClass : ""));
    if (basics.photo) {
      var img = document.createElement("img");
      img.src = basics.photo;
      img.alt = basics.ballotName || basics.name;
      img.loading = "lazy";
      img.addEventListener("error", function () {
        avatar.innerHTML = "";
        avatar.textContent = basics.initials || initials(basics.name);
      }, { once: true });
      avatar.appendChild(img);
    } else {
      avatar.textContent = basics.initials || initials(basics.name);
    }
    return avatar;
  }

  /* ============================== Visão Geral ============================== */
  function buildCandidateCard(id) {
    var c = window.CANDIDATES_DATA[id];
    var b = c.basics;
    var card = el("div", "candidate-card");

    var head = el("div", "candidate-card-head");
    head.appendChild(buildAvatar(b, "candidate-avatar-lg"));
    var nameWrap = document.createElement("div");
    var h3 = el("h3", "candidate-name");
    h3.textContent = b.ballotName || b.name;
    var party = el("div", "candidate-party");
    party.textContent = b.party + " · nº " + b.number;
    nameWrap.appendChild(h3);
    nameWrap.appendChild(party);
    head.appendChild(nameWrap);
    card.appendChild(head);

    var meta = el("dl", "candidate-meta");
    function metaRow(label, value) {
      if (!value) return;
      var dt = document.createElement("dt");
      dt.textContent = label + ": ";
      var dd = document.createElement("dd");
      dd.textContent = value;
      meta.appendChild(dt);
      meta.appendChild(dd);
    }
    metaRow("Nome completo", b.name);
    var age = calcAge(b.birthDate);
    metaRow("Idade", age != null ? age + " anos" : null);
    metaRow("Vice", b.vp);
    metaRow("Coligação", b.coalition);
    card.appendChild(meta);

    return card;
  }

  function buildCandidateGrid() {
    var host = document.getElementById("candidate-grid");
    if (!host) return;
    host.innerHTML = "";
    visibleIds.forEach(function (id) {
      host.appendChild(buildCandidateCard(id));
    });
  }

  /* ============================== Citações ============================== */
  function citeLinks(quotes, candidateId) {
    var wrap = el("div", "cite-links");
    var src = (window.SOURCES_DATA || {})[candidateId];
    (quotes || []).forEach(function (q) {
      var a = document.createElement("a");
      a.className = "cite-link";
      a.textContent = "p. " + q.page;
      a.href = src ? src.officialPdfUrl : "#";
      a.target = "_blank";
      a.rel = "noopener";
      wrap.appendChild(a);
    });
    return wrap;
  }

  // Bloco de propostas: título nosso (redigido para identificar o card) +
  // uma ou mais citações literais do plano, cada uma com a página.
  function proposalListBlock(entries, candidateId) {
    var block = el("div", "compare-block");
    var lbl = el("p", "compare-block-label");
    lbl.textContent = "Propostas";
    block.appendChild(lbl);
    if (entries && entries.length) {
      entries.forEach(function (entry) {
        var item = el("div", "proposal-item");
        var title = el("p", "proposal-title");
        title.textContent = entry.title;
        item.appendChild(title);
        (entry.quotes || []).forEach(function (q) {
          var bq = el("blockquote", "plan-quote");
          bq.textContent = q.quote;
          item.appendChild(bq);
        });
        item.appendChild(citeLinks(entry.quotes, candidateId));
        block.appendChild(item);
      });
    } else {
      var empty = el("p", "compare-empty");
      empty.textContent = "Não abordado explicitamente no plano de governo.";
      block.appendChild(empty);
    }
    return block;
  }

  function compareCardHead(basics) {
    var head = el("div", "compare-card-head");
    head.appendChild(buildAvatar(basics, "candidate-avatar-sm"));
    var nameWrap = document.createElement("div");
    var h4 = document.createElement("h4");
    h4.textContent = basics.ballotName || basics.name;
    var party = el("div", "candidate-party");
    party.textContent = basics.party;
    nameWrap.appendChild(h4);
    nameWrap.appendChild(party);
    head.appendChild(nameWrap);
    return head;
  }

  // Um bloco de citações "cruas" (usado no Diagnóstico: sem título nosso,
  // só o trecho do plano + a página de onde foi tirado).
  function quoteListBlock(label, entries, candidateId) {
    var block = el("div", "compare-block");
    var lbl = el("p", "compare-block-label");
    lbl.textContent = label;
    block.appendChild(lbl);
    if (entries && entries.length) {
      entries.forEach(function (entry) {
        var bq = el("blockquote", "plan-quote");
        bq.textContent = entry.quote;
        block.appendChild(bq);
        block.appendChild(citeLinks([entry], candidateId));
      });
    } else {
      var empty = el("p", "compare-empty");
      empty.textContent = "Não abordado explicitamente no plano de governo.";
      block.appendChild(empty);
    }
    return block;
  }

  // Bloco usado no lugar de Diagnóstico/Propostas para um candidato que
  // registrou candidatura sem entregar Proposta de Governo ao TSE
  // (`SOURCES_DATA[id].planFiled === false`) — mensagem bem diferente de
  // "Não abordado explicitamente...", que pressupõe um plano real que
  // simplesmente não fala daquele tema.
  function noPlanBlock(kind) {
    var block = el("div", "compare-block");
    var lbl = el("p", "compare-block-label");
    lbl.textContent = kind === "diagnosis" ? "Diagnóstico" : "Propostas";
    block.appendChild(lbl);
    var empty = el("p", "compare-empty compare-empty-noplan");
    empty.textContent = "Esta candidatura não registrou Proposta de Governo no TSE — não há trecho para citar.";
    block.appendChild(empty);
    return block;
  }

  // Card de Economia: lê de `c.economy[subthemeId]`.
  function buildEconomyCard(id, subthemeId, kind) {
    var c = window.CANDIDATES_DATA[id];
    var src = (window.SOURCES_DATA || {})[id];
    var card = el("div", "compare-card");
    card.dataset.candidate = id;
    card.appendChild(compareCardHead(c.basics));
    if (src && src.planFiled === false) {
      card.appendChild(noPlanBlock(kind));
    } else {
      var entry = (c.economy || {})[subthemeId] || { diagnosis: [], proposals: [] };
      if (kind === "diagnosis") {
        card.appendChild(quoteListBlock("Diagnóstico", entry.diagnosis, id));
      } else {
        card.appendChild(proposalListBlock(entry.proposals, id));
      }
    }
    return card;
  }

  // Card dos outros 5 temas (Educação, Segurança, Saúde, Política Externa,
  // Combate à Corrupção): lê de `c.themes[themeId]` — mesmo formato de
  // Economia (Diagnóstico + Propostas), só que sem nível de subtema.
  function buildThemeCard(id, themeId, kind) {
    var c = window.CANDIDATES_DATA[id];
    var src = (window.SOURCES_DATA || {})[id];
    var card = el("div", "compare-card");
    card.dataset.candidate = id;
    card.appendChild(compareCardHead(c.basics));
    if (src && src.planFiled === false) {
      card.appendChild(noPlanBlock(kind));
    } else {
      var entry = (c.themes || {})[themeId] || { diagnosis: [], proposals: [] };
      if (kind === "diagnosis") {
        card.appendChild(quoteListBlock("Diagnóstico", entry.diagnosis, id));
      } else {
        card.appendChild(proposalListBlock(entry.proposals, id));
      }
    }
    return card;
  }

  /* ============================== Abas ============================== */
  // Par de abas Diagnóstico/Propostas — nível mais interno, reusado por todo
  // tema (com ou sem subtema). `cardBuilder(id, kind)` devolve o card de um
  // candidato para aquele kind ("diagnosis" ou "proposals").
  function buildKindTabs(tabsHost, panelsHost, ids, cardBuilder) {
    var kinds = [{ label: "Diagnóstico", kind: "diagnosis" }, { label: "Propostas", kind: "proposals" }];
    tabsHost.setAttribute("role", "tablist");
    kinds.forEach(function (k, ki) {
      var btn = el("button", "tab-btn tab-btn-inner");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", ki === 0 ? "true" : "false");
      btn.textContent = k.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.setAttribute("role", "tabpanel");
      if (ki !== 0) panel.hidden = true;
      var grid = el("div", "compare-grid");
      ids.forEach(function (id) { grid.appendChild(cardBuilder(id, k.kind)); });
      panel.appendChild(grid);
      panelsHost.appendChild(panel);

      btn.addEventListener("click", function () {
        tabsHost.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        Array.prototype.forEach.call(panelsHost.children, function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
  }

  // Seção "Temas": abas de nível 1 para cada tema de window.THEMES. Economia
  // é o único com `subthemes` — ganha um segundo nível de abas (um por
  // subtema) antes do par Diagnóstico/Propostas; os outros 5 temas vão direto
  // para o par Diagnóstico/Propostas. `ids` e `idPrefix` são parametrizados
  // porque a aba Comparar 1×1 reusa esta mesma função para só 2 candidatos,
  // num host e prefixo de id diferentes (evita ids de DOM duplicados entre a
  // seção Temas e a Comparação).
  function buildTemasSection(tabsHost, panelsHost, ids, idPrefix) {
    if (!tabsHost || !panelsHost) return;
    var themes = window.THEMES || [];

    tabsHost.setAttribute("role", "tablist");
    themes.forEach(function (theme, ti) {
      var btn = el("button", "tab-btn");
      btn.type = "button";
      btn.id = idPrefix + "-tab-" + theme.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", idPrefix + "-panel-" + theme.id);
      btn.setAttribute("aria-selected", ti === 0 ? "true" : "false");
      btn.textContent = theme.label;
      tabsHost.appendChild(btn);

      var panel = el("div", "tab-panel");
      panel.id = idPrefix + "-panel-" + theme.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", idPrefix + "-tab-" + theme.id);
      if (ti !== 0) panel.hidden = true;

      if (theme.subthemes) {
        // Economia: um nível a mais de abas, uma por subtema.
        var subTabs = el("div", "tabs");
        var subPanels = document.createElement("div");
        subTabs.setAttribute("role", "tablist");
        theme.subthemes.forEach(function (sub, si) {
          var subBtn = el("button", "tab-btn");
          subBtn.type = "button";
          subBtn.setAttribute("role", "tab");
          subBtn.setAttribute("aria-selected", si === 0 ? "true" : "false");
          subBtn.textContent = sub.label;
          subTabs.appendChild(subBtn);

          var subPanel = el("div", "tab-panel");
          subPanel.setAttribute("role", "tabpanel");
          if (si !== 0) subPanel.hidden = true;
          var subHeading = el("h3", "panel-heading");
          subHeading.textContent = sub.label;
          subPanel.appendChild(subHeading);

          var kindTabs = el("div", "tabs tabs-inner");
          var kindPanels = document.createElement("div");
          buildKindTabs(kindTabs, kindPanels, ids, function (id, kind) {
            return buildEconomyCard(id, sub.id, kind);
          });
          subPanel.appendChild(kindTabs);
          subPanel.appendChild(kindPanels);
          subPanels.appendChild(subPanel);

          subBtn.addEventListener("click", function () {
            subTabs.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
            Array.prototype.forEach.call(subPanels.children, function (p) { p.hidden = true; });
            subBtn.setAttribute("aria-selected", "true");
            subPanel.hidden = false;
          });
        });
        panel.appendChild(subTabs);
        panel.appendChild(subPanels);
      } else {
        var heading = el("h3", "panel-heading");
        heading.textContent = theme.label;
        panel.appendChild(heading);
        var kindTabs = el("div", "tabs tabs-inner");
        var kindPanels = document.createElement("div");
        buildKindTabs(kindTabs, kindPanels, ids, function (id, kind) {
          return buildThemeCard(id, theme.id, kind);
        });
        panel.appendChild(kindTabs);
        panel.appendChild(kindPanels);
      }

      panelsHost.appendChild(panel);

      btn.addEventListener("click", function () {
        tabsHost.querySelectorAll(".tab-btn").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
        // Só os filhos diretos de panelsHost (os painéis de tema), não
        // querySelectorAll(".tab-panel") — isso pegaria também os painéis
        // internos de subtema/Diagnóstico/Propostas aninhados dentro do
        // painel que está prestes a aparecer, e o deixaria sem nenhuma aba
        // interna visível até o usuário clicar manualmente numa delas.
        Array.prototype.forEach.call(panelsHost.children, function (p) { p.hidden = true; });
        btn.setAttribute("aria-selected", "true");
        panel.hidden = false;
      });
    });
  }

  /* ============================== Seletor de candidatos ============================== */
  // Diálogo nativo <dialog>: bloqueia o resto da página (backdrop) sem
  // precisar escondê-la. Abre sozinho ao carregar (visibleIds começa vazio,
  // então applySelection() ainda não rodou) e reabre a pedido pelo botão
  // fixo do topbar, sempre pré-marcado com a seleção atual.
  function describeSelection(ids) {
    var top5 = (window.POLL_DATA && window.POLL_DATA.presetTop5Ids) || [];
    var all = orderedCandidateIds();
    if (ids.length === top5.length && top5.every(function (id) { return ids.indexOf(id) !== -1; })) {
      return "Top 5";
    }
    if (ids.length === all.length) return "Todos os 13";
    return ids.length + " selecionados";
  }

  function updatePickerConfirmState() {
    var grid = document.getElementById("candidate-picker-grid");
    var confirmBtn = document.getElementById("candidate-picker-confirm");
    var countEl = document.getElementById("candidate-picker-count");
    if (!grid || !confirmBtn) return;
    var n = grid.querySelectorAll('input[type="checkbox"]:checked').length;
    if (countEl) countEl.textContent = n;
    confirmBtn.disabled = n === 0;
  }

  // (Re)constrói a grade de checkboxes do diálogo — chamada toda vez que o
  // diálogo abre, pré-marcando `preselected` (a seleção atual, ou nenhuma na
  // primeira abertura).
  function renderPickerGrid(host, preselected) {
    host.innerHTML = "";
    var results = (window.POLL_DATA && window.POLL_DATA.results) || {};
    orderedCandidateIds().forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var label = document.createElement("label");
      label.className = "candidate-picker-chip";

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = id;
      checkbox.checked = preselected.indexOf(id) !== -1;
      checkbox.addEventListener("change", updatePickerConfirmState);
      label.appendChild(checkbox);

      label.appendChild(buildAvatar(c.basics, "candidate-avatar-sm"));

      var nameWrap = document.createElement("span");
      var name = document.createElement("strong");
      name.textContent = c.basics.ballotName || c.basics.name;
      var party = el("span", "candidate-picker-party");
      party.textContent = c.basics.party;
      nameWrap.appendChild(name);
      nameWrap.appendChild(party);
      label.appendChild(nameWrap);

      var pct = results[id];
      if (pct != null) {
        var badge = el("span", "candidate-picker-poll");
        badge.textContent = String(pct).replace(".", ",") + "%";
        label.appendChild(badge);
      }

      host.appendChild(label);
    });
    updatePickerConfirmState();
  }

  function openPicker() {
    var dialog = document.getElementById("candidate-picker");
    if (!dialog) return;
    renderPickerGrid(document.getElementById("candidate-picker-grid"), visibleIds);
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  // Liga o diálogo uma única vez (presets, checkboxes, confirmar) — chamado
  // só a partir de init(). Reabrir o diálogo (openPicker) nunca religa nada
  // disso de novo, só repovoa a grade.
  function buildCandidatePicker() {
    var dialog = document.getElementById("candidate-picker");
    var presetsHost = document.getElementById("candidate-picker-presets");
    var grid = document.getElementById("candidate-picker-grid");
    var confirmBtn = document.getElementById("candidate-picker-confirm");
    if (!dialog || !presetsHost || !grid || !confirmBtn) return;

    var top5Btn = el("button", "");
    top5Btn.type = "button";
    var pollName = (window.POLL_DATA && window.POLL_DATA.name) || "pesquisa";
    top5Btn.textContent = "Top 5 (" + pollName + ")";
    top5Btn.addEventListener("click", function () {
      applySelection((window.POLL_DATA && window.POLL_DATA.presetTop5Ids) || []);
      dialog.close();
    });

    var allBtn = el("button", "");
    allBtn.type = "button";
    allBtn.textContent = "Todos os 13";
    allBtn.addEventListener("click", function () {
      applySelection(orderedCandidateIds());
      dialog.close();
    });

    presetsHost.appendChild(top5Btn);
    presetsHost.appendChild(allBtn);

    confirmBtn.addEventListener("click", function () {
      var chosen = Array.prototype.slice
        .call(grid.querySelectorAll('input[type="checkbox"]:checked'))
        .map(function (cb) { return cb.value; });
      if (!chosen.length) return;
      applySelection(chosen);
      dialog.close();
    });
  }

  function initPinnedPickerControl() {
    var btn = document.getElementById("candidate-picker-toggle");
    if (!btn) return;
    btn.addEventListener("click", openPicker);
  }

  /* ============================== Comparar 1×1 ============================== */
  // Pinta os cards de comparação para o par (a, b) — sempre chamado depois
  // que renderComparisonSection() já garantiu que há pelo menos 2 opções.
  function paintComparisonPanels(a, b) {
    var headHost = document.getElementById("compare-head-to-head");
    var tabsHost = document.getElementById("compare-temas-tabs");
    var panelsHost = document.getElementById("compare-temas-panels");
    headHost.innerHTML = "";
    headHost.appendChild(buildCandidateCard(a));
    headHost.appendChild(buildCandidateCard(b));
    tabsHost.innerHTML = "";
    panelsHost.innerHTML = "";
    buildTemasSection(tabsHost, panelsHost, [a, b], "cmp");
  }

  // Handler dos dois <select>, vinculado uma única vez em
  // buildComparisonSection() — lê `visibleIds` "ao vivo" a cada clique em
  // vez de um array capturado no bind, porque visibleIds muda a cada
  // reconfirmação do diálogo de candidatos, mas este listener nunca é
  // re-vinculado.
  function onCompareSelectChange(ev) {
    var selectA = document.getElementById("compare-select-a");
    var selectB = document.getElementById("compare-select-b");
    if (selectA.value === selectB.value) {
      var alt = visibleIds.filter(function (id) { return id !== selectA.value; })[0];
      if (alt) {
        if (ev && ev.target === selectA) selectB.value = alt;
        else selectA.value = alt;
      }
    }
    paintComparisonPanels(selectA.value, selectB.value);
  }

  // Reconstrói as opções dos dois selects a partir de `visibleIds` — chamada
  // no init e de novo a cada reconfirmação do diálogo. Com menos de 2
  // candidatos visíveis, esconde o comparador e mostra um aviso em vez de
  // quebrar.
  function renderComparisonSection() {
    var selectA = document.getElementById("compare-select-a");
    var selectB = document.getElementById("compare-select-b");
    var pickerHost = document.getElementById("compare-picker");
    var headHost = document.getElementById("compare-head-to-head");
    var tabsHost = document.getElementById("compare-temas-tabs");
    var panelsHost = document.getElementById("compare-temas-panels");
    var notEnough = document.getElementById("compare-not-enough");
    if (!selectA || !selectB) return;

    if (visibleIds.length < 2) {
      pickerHost.hidden = true;
      headHost.hidden = true;
      tabsHost.hidden = true;
      panelsHost.hidden = true;
      notEnough.hidden = false;
      return;
    }
    pickerHost.hidden = false;
    headHost.hidden = false;
    tabsHost.hidden = false;
    panelsHost.hidden = false;
    notEnough.hidden = true;

    var prevA = selectA.value, prevB = selectB.value;
    selectA.innerHTML = "";
    selectB.innerHTML = "";
    visibleIds.forEach(function (id) {
      var label = (window.CANDIDATES_DATA[id].basics.ballotName || window.CANDIDATES_DATA[id].basics.name);
      [selectA, selectB].forEach(function (sel) {
        var opt = document.createElement("option");
        opt.value = id;
        opt.textContent = label;
        sel.appendChild(opt);
      });
    });

    // Preserva A/B se os dois ainda estiverem em visibleIds; senão cai nos
    // dois primeiros da nova seleção (já em ordem alfabética).
    var a = visibleIds.indexOf(prevA) !== -1 ? prevA : visibleIds[0];
    var b = (visibleIds.indexOf(prevB) !== -1 && prevB !== a)
      ? prevB
      : visibleIds.filter(function (id) { return id !== a; })[0];
    selectA.value = a;
    selectB.value = b;

    paintComparisonPanels(a, b);
  }

  // Vincula os listeners dos selects uma única vez (chamado só a partir de
  // init()) e faz a primeira pintura — reconfirmações do diálogo chamam
  // direto renderComparisonSection(), nunca esta função de novo.
  function buildComparisonSection() {
    var selectA = document.getElementById("compare-select-a");
    var selectB = document.getElementById("compare-select-b");
    if (!selectA || !selectB) return;
    selectA.addEventListener("change", onCompareSelectChange);
    selectB.addEventListener("change", onCompareSelectChange);
    renderComparisonSection();
  }

  /* ============================== Orquestrador da seleção ============================== */
  // Chamado ao confirmar o diálogo (primeira vez ou reconfirmação): filtra
  // `ids` contra a lista completa (preserva ordem alfabética, descarta
  // qualquer id inválido) e reconstrói Visão Geral, Temas e Comparar 1×1.
  // Fontes só é montada da primeira vez (sempre lista os 13, independente do
  // filtro, então não precisa ser refeita a cada troca).
  function applySelection(ids) {
    var all = orderedCandidateIds();
    visibleIds = all.filter(function (id) { return ids.indexOf(id) !== -1; });

    buildCandidateGrid();

    var temasTabsHost = document.getElementById("temas-tabs");
    var temasPanelsHost = document.getElementById("temas-panels");
    temasTabsHost.innerHTML = "";
    temasPanelsHost.innerHTML = "";
    buildTemasSection(temasTabsHost, temasPanelsHost, visibleIds, "temas");

    renderComparisonSection();

    if (!sourcesRendered) {
      buildSourcesList();
      sourcesRendered = true;
    }

    var toggleBtn = document.getElementById("candidate-picker-toggle");
    if (toggleBtn) {
      toggleBtn.hidden = false;
      toggleBtn.textContent = "Candidatos: " + describeSelection(visibleIds) + " ▾";
    }
  }

  /* ============================== Fontes ============================== */
  // Sempre lista os 13 candidatos (orderedCandidateIds()), nunca `visibleIds`
  // — Fontes é referência de transparência, não muda com o filtro.
  function buildSourcesList() {
    var host = document.getElementById("sources-list");
    if (!host) return;
    host.innerHTML = "";
    orderedCandidateIds().forEach(function (id) {
      var c = window.CANDIDATES_DATA[id];
      var src = (window.SOURCES_DATA || {})[id];
      if (!src) return;

      var row = el("div", "source-row");
      var who = document.createElement("div");
      var whoName = el("span", "who");
      whoName.textContent = (c.basics.ballotName || c.basics.name) + " ";
      var planTitle = el("span", "plan-title");
      who.appendChild(whoName);
      who.appendChild(planTitle);
      row.appendChild(who);

      if (src.planFiled === false) {
        row.classList.add("source-row-noplan");
        planTitle.textContent = "— Não registrou Proposta de Governo no TSE";
      } else {
        planTitle.textContent = "— " + src.planTitle + (src.pageCount ? " (" + src.pageCount + " páginas)" : "");
        var links = el("div", "links");
        var pdfLink = document.createElement("a");
        pdfLink.href = src.officialPdfUrl;
        pdfLink.target = "_blank";
        pdfLink.rel = "noopener";
        pdfLink.textContent = "Ver no TSE";
        links.appendChild(pdfLink);
        if (src.localPdfPath) {
          var localLink = document.createElement("a");
          localLink.href = src.localPdfPath;
          localLink.target = "_blank";
          localLink.rel = "noopener";
          localLink.textContent = "PDF (cópia local)";
          links.appendChild(localLink);
        }
        row.appendChild(links);
      }

      host.appendChild(row);
    });
  }

  /* ============================== Sidebar nav ativo ============================== */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var sections = links
      .map(function (l) { return document.querySelector(l.getAttribute("href")); })
      .filter(Boolean);
    if (!sections.length) return;

    function onScroll() {
      var pos = window.scrollY + 120;
      var current = sections[0];
      sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
      links.forEach(function (l) {
        l.classList.toggle("active", l.getAttribute("href") === "#" + current.id);
      });
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function init() {
    buildCandidatePicker();
    buildCandidateGrid();
    buildTemasSection(
      document.getElementById("temas-tabs"),
      document.getElementById("temas-panels"),
      visibleIds,
      "temas"
    );
    buildComparisonSection();
    initPinnedPickerControl();
    initScrollSpy();
    // visibleIds está vazio aqui — nada em Visão Geral/Temas/Comparar 1×1
    // existe até a primeira confirmação. O diálogo modal bloqueia o resto
    // da página nesse meio-tempo (backdrop nativo do <dialog>), então não é
    // preciso esconder `<main>` para isso.
    openPicker();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
