// ============================================================================
// PESQUISA — alimenta só o preset "Top 5" do diálogo de seleção de
// candidatos e os badges de intenção de voto exibidos ao lado de cada nome
// no próprio diálogo. NUNCA usada para ordenar quem aparece no site — a
// ordem de exibição é sempre alfabética por nome de urna, via
// `CANDIDATE_ORDER` em data/taxonomy.js.
//
// Fonte: pesquisa AtlasIntel/Bloomberg Línea, campo 25–30/ago/2026 (cenário
// estimulado de primeiro turno), 5.014 entrevistas, margem de erro de 1 p.p.
// `results` traz o percentual (0–100) de cada candidato quando a pesquisa o
// nomeou individualmente; `null` para os 3 que não apareceram nomeados na
// tabela divulgada (entram provavelmente agregados em "outros") — sem
// inventar número onde a pesquisa não deu um.
// ============================================================================
window.POLL_DATA = {
  name: "Atlas Intel / Bloomberg Línea",
  fieldDates: "25–30/ago/2026",
  source: {
    label: "AtlasIntel",
    url: "https://atlasintel.org/media"
  },
  // Top 5 por percentual nesta pesquisa — ids em ordem alfabética por nome
  // de urna (mesma convenção de CANDIDATE_ORDER), não por posição na
  // pesquisa. Ajustar aqui se a pesquisa de referência mudar.
  presetTop5Ids: ["augusto-cury", "flavio-bolsonaro", "lula", "renan-santos", "caiado"],
  results: {
    "clariana-barao": null,
    "edmilson-costa": null,
    "augusto-cury": 7.8,
    "flavio-bolsonaro": 33.7,
    "hertz-dias": null,
    "lula": 43.4,
    "pablo-marcal": 1.9,
    "renan-santos": 7.6,
    "zema": 1.0,
    "caiado": 3.3,
    "rui-costa-pimenta": 0.1,
    "samara-martins": 0.9,
    "wilson-grassi": 0.1
  }
};
