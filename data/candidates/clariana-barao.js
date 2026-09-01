// ============================================================================
// CLARIANA BARÃO (DC) — citações do "Plano de Governo — Proteger Hoje,
// Transformar o Amanhã", proposta de governo registrada no TSE (ver
// data/sources.js). Todo texto em `quote` é TRANSCRIÇÃO LITERAL do PDF
// oficial; `title` é redigido por nós só para nomear o card.
// Peculiaridade deste plano: é um "template" de gestão por indicadores — cada
// um dos 21 subeixos repete literalmente a mesma frase-objetivo genérica
// ("Transformar o eixo em uma agenda executável...") em vez de um parágrafo de
// diagnóstico próprio. Por isso quase todo `diagnosis` fica vazio aqui — não é
// lacuna de coleta, é o formato real do documento, sem narrativa de cenário
// atual. O plano também não tem nenhum capítulo de política externa.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["clariana-barao"] = {
  basics: {
    name: "Clariana Barão",
    ballotName: "Clariana Barão",
    party: "DC",
    number: 27,
    coalition: "Candidatura de partido isolado (DC)",
    vp: "Fabiana Torquato (DC)",
    initials: "CB",
    photo: "sources/clariana-barao.jpg",
    birthDate: "1987-04-03"
  },
  economy: {
    fiscal: {
      diagnosis: [],
      proposals: [
        { title: "Revisão de gastos e subsídios", quotes: [{ quote: "Revisão de gastos e subsídios", page: 6 }] },
        { title: "Planejamento plurianual orientado a metas", quotes: [{ quote: "Planejamento plurianual orientado a metas", page: 6 }] },
        { title: "Transparência de benefícios e avaliação de impacto", quotes: [{ quote: "Transparência de benefícios e avaliação de impacto", page: 6 }] }
      ]
    },
    tributacao: {
      diagnosis: [],
      proposals: []
    },
    "cambio-comercio": {
      diagnosis: [],
      proposals: []
    },
    "trabalho-renda": {
      diagnosis: [],
      proposals: [
        { title: "Crédito produtivo e garantias para pequenos negócios", quotes: [{ quote: "Crédito produtivo e garantias", page: 5 }] },
        { title: "Capacitação gerencial e digital de empreendedores", quotes: [{ quote: "Capacitação gerencial e digital", page: 5 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [],
      proposals: []
    },
    "estado-privatizacoes": {
      diagnosis: [],
      proposals: [
        { title: "Simplificação regulatória para abertura de empresas", quotes: [{ quote: "Simplificação regulatória", page: 5 }, { quote: "Digitalização e abertura rápida de empresas", page: 5 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [],
      proposals: [
        { title: "Rodovias, ferrovias e concessões de longo prazo", quotes: [{ quote: "Rodovias e manutenção baseada em desempenho", page: 5 }, { quote: "Concessões, PPPs e planejamento de longo prazo", page: 5 }] },
        { title: "Segurança energética e expansão da conectividade", quotes: [{ quote: "Segurança e confiabilidade energética", page: 5 }, { quote: "Expansão de conectividade", page: 5 }] }
      ]
    }
  },
  themes: {
    educacao: {
      diagnosis: [],
      proposals: [
        { title: "Alfabetização na idade adequada", quotes: [{ quote: "Alfabetização na idade adequada", page: 7 }] },
        { title: "Recomposição de aprendizagem com avaliação frequente", quotes: [{ quote: "Recomposição de aprendizagem", page: 7 }, { quote: "Avaliação frequente com intervenção pedagógica", page: 7 }] }
      ]
    },
    seguranca: {
      diagnosis: [],
      proposals: [
        { title: "Inteligência sobre rotas do narcotráfico", quotes: [{ quote: "Inteligência sobre rotas e redes", page: 9 }] },
        { title: "Sufocamento financeiro das facções", quotes: [{ quote: "Rastreamento de lavagem de dinheiro", page: 9 }, { quote: "Recuperação de ativos com devido processo", page: 9 }] }
      ]
    },
    saude: {
      diagnosis: [
        { quote: "Observação sobre saúde e inovação: o documento não presume a incorporação de uma substância específica ao SUS. Peptídeos e demais terapias inovadoras devem seguir avaliação regulatória e técnico-científica antes de qualquer oferta pública.", page: 15 }
      ],
      proposals: [
        { title: "Atenção primária resolutiva com prontuário interoperável", quotes: [{ quote: "Equipes completas e acesso territorial", page: 11 }, { quote: "Coordenação do cuidado e prontuário interoperável", page: 11 }] },
        { title: "Via transparente de avaliação de novas tecnologias em saúde", quotes: [{ quote: "Via transparente de avaliação de novas tecnologias", page: 11 }] }
      ]
    },
    "politica-externa": {
      diagnosis: [],
      proposals: []
    },
    corrupcao: {
      diagnosis: [],
      proposals: [
        { title: "Compras públicas rastreáveis", quotes: [{ quote: "Compras públicas rastreáveis", page: 13 }] },
        { title: "Gestão de riscos e prevenção de fraude", quotes: [{ quote: "Gestão de riscos e prevenção de fraude", page: 13 }] }
      ]
    }
  }
};
