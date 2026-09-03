// ============================================================================
// PABLO MARÇAL (PRTB) — citações do "Plano de Governo" (Marçal Presidente),
// proposta de governo registrada no TSE (ver data/sources.js). Todo texto em
// `quote` é TRANSCRIÇÃO LITERAL do PDF oficial; `title` é redigido por nós só
// para nomear o card. Peculiaridade deste plano: é um documento de slides,
// com "Diagnóstico do Brasil" em texto corrido (usado em `diagnosis`) e as "7
// Missões" em fragmentos curtos de bullet/tópico, não frases completas — a
// transcrição continua literal, só que de fragmentos, não de parágrafos.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["pablo-marcal"] = {
  basics: {
    name: "Pablo Marçal",
    ballotName: "Pablo Marçal",
    party: "PRTB",
    number: 28,
    coalition: "Candidatura de partido isolado (PRTB)",
    vp: "Leonardo Avalanche (PRTB)",
    initials: "PM",
    photo: "sources/pablo-marcal.jpg",
    birthDate: "1987-04-18"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "O modelo de desenvolvimento predominante nas últimas décadas concentrou excessiva confiança na capacidade do Estado de induzir crescimento econômico, direcionar investimentos e definir prioridades produtivas. Esse modelo revelou limitações estruturais cada vez mais evidentes.", page: 7 },
        { quote: "Não existe prosperidade duradoura sem responsabilidade fiscal.", page: 14 }
      ],
      proposals: [
        { title: "Âncora fiscal com redução gradual da dívida/PIB", quotes: [{ quote: "Fortalecimento de uma âncora fiscal baseada na redução gradual da relação dívida/PIB;", page: 14 }] },
        { title: "Revisão permanente das despesas públicas", quotes: [{ quote: "Revisão permanente das despesas públicas para eliminar desperdícios e aumentar a eficiência do Estado;", page: 14 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "A expansão contínua da burocracia, a crescente complexidade regulatória, a elevada carga tributária e a insegurança jurídica aumentaram os custos de produção e reduziram a velocidade de adaptação da economia brasileira às transformações do mundo moderno.", page: 7 }
      ],
      proposals: [
        { title: "Redução progressiva da carga tributária sobre produção e emprego", quotes: [{ quote: "Redução progressiva da carga tributária sobre a produção, o investimento e a geração de empregos;", page: 14 }] },
        { title: "Fim de subsídios sem retorno comprovado", quotes: [{ quote: "Fim dos subsídios e incentivos fiscais que não gerem retorno econômico ou social comprovado;", page: 14 }] },
        { title: "Simplificação do modelo na reforma tributária", quotes: [{ quote: "Reforma Tributária", page: 20 }, { quote: "Garantir simplificação do modelo", page: 20 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [],
      proposals: [
        { title: "Câmbio flutuante como parte do tripé econômico", quotes: [{ quote: "Câmbio flutuante", page: 20 }, { quote: "Tripé Econômico", page: 20 }] },
        { title: "Dobrar as exportações brasileiras", quotes: [{ quote: "Dobrar as exportações brasileiras", page: 26 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "O resultado desse processo é percebido diariamente pelos brasileiros: baixo crescimento da renda, mobilidade social limitada, serviços públicos insuficientes e perda de competitividade frente a economias que há poucas décadas possuíam condições inferiores às nossas.", page: 6 }
      ],
      proposals: [
        { title: "Ministério da Empresarização", quotes: [{ quote: "Criar o Ministério da Empresarização", page: 19 }] },
        { title: "Renegocia Brasil: renegociação de dívidas de 70 milhões de negativados", quotes: [{ quote: "Programa de renegociação de dívidas dos quase 70 milhões de brasileiros com nome no SPC e das mais de 30% das empresas que se encontram negativadas", page: 19 }] },
        { title: "Salário mínimo como o melhor da América do Sul", quotes: [{ quote: "Valorizamos o trabalhador brasileiro que se empenha em trazer o sustento para sua família através do seu suor, de modo que definiremos e manteremos o valor do salário mínimo como o melhor da América do Sul.", page: 14 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [],
      proposals: [
        { title: "Metas para conter a inflação no tripé econômico", quotes: [{ quote: "Metas para conter a inflação", page: 20 }, { quote: "Responsabilidade fiscal", page: 20 }, { quote: "Tripé Econômico", page: 20 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [
        { quote: "Nenhuma nação prospera quando o Estado cresce seu próprio custo e estrutura mais rapidamente do que a capacidade de geração de riqueza de seu povo.", page: 7 }
      ],
      proposals: [
        { title: "Programa de Desestatização Prioritária", quotes: [{ quote: "Lançar o Programa de Desestatização Prioritária", page: 20 }, { quote: "Profissionalizar gestão das estatais para gerar valor ao ativo e lançar abertura de capital", page: 20 }] },
        { title: "One in, one out: só cria norma revogando outra", quotes: [{ quote: "Mutirão anual de revogação de normas obsoletas", page: 20 }, { quote: "Normas somente serão editadas se outra for revogada – One in, one out", page: 20 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [],
      proposals: [
        { title: "Plano Nacional de Infraestrutura Integrada", quotes: [{ quote: "Lançar o Plano Nacional de Infraestrutura Integrada", page: 23 }] },
        { title: "Finalizar mais de 20 mil obras públicas federais inacabadas", quotes: [{ quote: "Promover a finalização das mais de 20 mil obras públicas federais inacabadas", page: 23 }] }
      ]
    }
  },
  themes: {
    educacao: {
      diagnosis: [],
      proposals: [
        { title: "Alfabetização plena até o 2º ano", quotes: [{ quote: "Garantir a alfabetização plena até o 2º ano", page: 17 }] },
        { title: "Valorização dos professores: salário, segurança e capacitação", quotes: [{ quote: "Valorização dos professores: salario, segurança e capacitação", page: 17 }] },
        { title: "IA aplicada à educação pública", quotes: [{ quote: "IA aplicada à educação pública", page: 22 }] },
        { title: "Internet em 100% das escolas públicas", quotes: [{ quote: "Internet em 100% das escolas públicas", page: 22 }] }
      ]
    },
    seguranca: {
      diagnosis: [],
      proposals: [
        { title: "Plano Nacional de Combate às Facções", quotes: [{ quote: "Plano Nacional de Combate às Facções", page: 25 }, { quote: "Integração de inteligência financeira", page: 25 }] },
        { title: "Presídios como centros de ressocialização", quotes: [{ quote: "Transformar presídios em centros de ressocialização", page: 25 }] }
      ]
    },
    saude: {
      diagnosis: [],
      proposals: [
        { title: "Reduzir filas e prontuário único nacional", quotes: [{ quote: "Reduzir filas e ampliar acesso à atenção básica", page: 17 }, { quote: "Garantir prontuário único nacional", page: 17 }] },
        { title: "Telemedicina nacional integrada ao SUS", quotes: [{ quote: "Telemedicina nacional integrada ao SUS", page: 17 }] }
      ]
    },
    "politica-externa": {
      diagnosis: [
        { quote: "O mundo está entrando em uma nova era econômica. A reorganização das cadeias globais de produção, a ascensão da inteligência artificial, a corrida por minerais críticos, a busca por segurança energética e alimentar e a transformação digital das economias estão redefinindo a distribuição global de riqueza e poder.", page: 8 }
      ],
      proposals: [
        { title: "Destravar o Acordo Mercosul-União Europeia", quotes: [{ quote: "Destravar o potencial do Acordo Mercosul-União Europeia", page: 26 }] },
        { title: "Retomada do convívio diplomático com os EUA", quotes: [{ quote: "Retomada do convívio diplomático e de colaboração", page: 26 }, { quote: "Cooperação em IA e semicondutores", page: 26 }] }
      ]
    },
    corrupcao: {
      diagnosis: [],
      proposals: [
        { title: "IA para identificar casos de corrupção", quotes: [{ quote: "Transparência total dos gastos públicos", page: 25 }, { quote: "Utilização de IA para identificar casos de corrupção", page: 25 }] },
        { title: "Confisco ampliado de patrimônio criminoso", quotes: [{ quote: "Confisco ampliado de patrimônio criminoso", page: 25 }] },
        { title: "Fim do compadrio nas indicações para estatais", quotes: [{ quote: "Contração de executivos do mercado com comprovada experiência corporativa – fim do compadrio nas indicações", page: 20 }] },
        { title: "IA para combate a fraudes em licitações", quotes: [{ quote: "IA para combate a fraudes em licitações", page: 20 }] }
      ]
    },
    "direitos-bem-estar": {
      diagnosis: [
        { quote: "O desenvolvimento econômico somente é legítimo quando alcança todos os brasileiros.", page: 12 },
        { quote: "O Governo terá como princípio inegociável a proteção dos direitos e garantias fundamentais previstos na Constituição Federal, assegurando igualdade perante a lei, respeito à dignidade humana e ampliação das oportunidades para todos os cidadãos.", page: 12 },
        { quote: "O Brasil é uma nação diversa, formada por diferentes povos, culturas, tradições e realidades regionais. Essa diversidade constitui uma riqueza nacional e deve ser protegida e valorizada.", page: 12 }
      ],
      proposals: [
        { title: "Respeito aos direitos constitucionais de povos indígenas, quilombolas e tradicionais", quotes: [{ quote: "Respeito aos direitos constitucionais dos povos indígenas, comunidades quilombolas e povos tradicionais;", page: 12 }] },
        { title: "Acessibilidade e inclusão das pessoas com deficiência", quotes: [{ quote: "Promoção da acessibilidade e inclusão das pessoas com deficiência;", page: 12 }] },
        { title: "Programa de integração e regularização fundiária de comunidades tradicionais", quotes: [{ quote: "Preservar a cultura de comunidades tradicionais", page: 18 }, { quote: "Lançar programa de integração das comunidades tradicionais", page: 18 }, { quote: "Regularização fundiária de territórios reconhecidos", page: 18 }, { quote: "Programa de bioeconomia para comunidades tradicionais", page: 18 }] },
        { title: "Combate ao comércio ilegal e proteção ao direito dos animais", quotes: [{ quote: "Implementar políticas de combate ao comércio ilegal e proteção ao direito dos animais", page: 21 }] }
      ]
    }
  }
};
