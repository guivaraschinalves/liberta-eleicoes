// ============================================================================
// RONALDO CAIADO (PSD) — citações do "Plano de Governo 2027 a 2030", proposta
// de governo registrada no TSE (ver data/sources.js). O documento já traz,
// para cada tema, seções "Diagnóstico" e "Propostas" numeradas — usamos o
// texto literal dessas seções. Todo texto em `quote` é TRANSCRIÇÃO LITERAL do
// PDF; `title` é redigido por nós só para nomear o card.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["caiado"] = {
  basics: {
    name: "Ronaldo Ramos Caiado",
    ballotName: "Ronaldo Caiado",
    party: "PSD",
    number: 55,
    coalition: "Candidatura de partido isolado (PSD)",
    vp: "Gilberto Kassab (PSD)",
    initials: "RC",
    photo: "sources/caiado.jpg",
    birthDate: "1949-09-25"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "O Brasil enfrenta uma crise fiscal estrutural. A expansão das despesas obrigatórias, dos benefícios tributários, dos subsídios e de mecanismos orçamentários fragmentados reduziu a capacidade do governo de escolher prioridades e comprimiu o investimento público.", page: 12 },
        { quote: "O resultado é conhecido: a dívida pública cresce em relação ao PIB e os juros reais permanecem entre os mais altos do mundo.", page: 12 },
        { quote: "A carga tributária já é elevada e o sistema permanece complexo. A resposta não pode ser a criação contínua de receitas para acompanhar despesas que crescem automaticamente.", page: 12 }
      ],
      proposals: [
        { title: "Publicar o 'Orçamento da Verdade'", quotes: [{ quote: "Apresentar, nos primeiros meses, diagnóstico completo de despesas obrigatórias, passivos, subsídios, benefícios tributários, restos a pagar, fundos, garantias e riscos fiscais, acompanhado de projeções e alternativas de decisão.", page: 12 }] },
        { title: "Estratégia fiscal plurianual", quotes: [{ quote: "Definir trajetória para estabilizar a dívida em relação ao PIB, recuperar superávits primários e reduzir a despesa de juros, com metas anuais, bandas de tolerância, cláusulas de correção e prestação periódica de contas.", page: 12 }] },
        { title: "Combater supersalários", quotes: [{ quote: "Aplicar o teto constitucional de forma efetiva em todos os Poderes e órgãos, com transparência das parcelas remuneratórias e responsabilização de pagamentos incompatíveis com a Constituição.", page: 12 }] },
        { title: "Coordenar política fiscal e monetária respeitando o BC", quotes: [{ quote: "Coordenar políticas fiscal e monetária com respeito à autonomia do Banco Central. Reduzir pressões fiscais sobre preços, aperfeiçoar comunicação e previsibilidade e criar condições para que inflação controlada, juros menores e desenvolvimento coexistam de forma sustentável.", page: 13 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "A carga tributária já é elevada e o sistema permanece complexo. A resposta não pode ser a criação contínua de receitas para acompanhar despesas que crescem automaticamente. O esforço deverá concentrar-se na qualidade, na trajetória e na governança do gasto.", page: 12 }
      ],
      proposals: [
        { title: "Rever subsídios, subvenções e benefícios tributários", quotes: [{ quote: "Exigir prazo, objetivo, beneficiário, estimativa de custo, contrapartida e avaliação independente. Benefícios sem resultado ou incompatíveis com as prioridades nacionais serão reduzidos ou encerrados.", page: 12 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [
        { quote: "Persiste, entretanto, um déficit de inserção. Somos uma grande economia pouco integrada ao comércio mundial, com rede limitada de acordos, empresas pouco internacionalizadas e pauta exportadora de baixa complexidade tecnológica.", page: 72 },
        { quote: "O Mercosul, por sua vez, já não conta com uma visão comum entre seus membros sobre seus objetivos, seu funcionamento e seu futuro.", page: 72 }
      ],
      proposals: [
        { title: "Mercosul–União Europeia e ampliação de acordos", quotes: [{ quote: "Consolidar o acordo entre o Mercosul e a União Europeia, aprofundar a integração econômica regional e negociar novos acordos que ampliem o acesso das empresas e dos produtos brasileiros aos mercados mais dinâmicos do mundo.", page: 73 }] },
        { title: "Exportar melhor: mais complexidade tecnológica", quotes: [{ quote: "Elevar progressivamente a complexidade tecnológica e o valor agregado da inserção da economia brasileira. O objetivo não será apenas exportar mais, mas exportar melhor.", page: 73 }] },
        { title: "Diplomacia econômica com metas por embaixada", quotes: [{ quote: "Atribuir a embaixadas e representações metas de exportação, investimento, tecnologia e abertura de mercados, com avaliação periódica.", page: 74 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "O crescimento sustentável depende de produtividade. Entre 1981 e 2024, a produtividade por hora trabalhada cresceu apenas cerca de 0,5% ao ano.", page: 14 },
        { quote: "Com a desaceleração do crescimento da população em idade ativa, a produção por trabalhador será o principal determinante da renda futura. Produtividade exige educação, qualificação, ciência, tecnologia, concorrência, infraestrutura, segurança jurídica e processos decisórios mais rápidos.", page: 14 },
        { quote: "Qualificação muitas vezes não corresponde às vagas [...] jovens não encontram primeira experiência e pequenos empreendedores carecem de capital, mercado e acompanhamento. Benefícios podem ser perdidos de forma abrupta quando a renda melhora, desestimulando formalização.", page: 61 }
      ],
      proposals: [
        { title: "Modernizar o mercado de trabalho", quotes: [{ quote: "Promover formação contínua, intermediação digital, apoio à transição profissional, inclusão de jovens e mulheres, segurança para novas formas de trabalho e redução dos custos que empurram pessoas e empresas à informalidade.", page: 15 }] },
        { title: "Medir crescimento pelo que chega às famílias", quotes: [{ quote: "Acompanhar produtividade, renda, emprego formal, investimento, custo de vida, qualidade dos serviços e mobilidade social, corrigindo políticas que elevem indicadores agregados sem melhorar a vida concreta das pessoas.", page: 15 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [
        { quote: "A incerteza sobre a sustentabilidade das contas públicas aumenta o custo de financiamento do governo, das empresas e das famílias, prejudicando investimento, emprego e crescimento.", page: 12 },
        { quote: "A consolidação fiscal é condição necessária, mas não suficiente. Com confiança nas contas públicas, inflação moderada e juros menores, o país poderá mobilizar poupança doméstica e capital internacional para elevar o investimento, hoje situado em patamar baixo para uma economia emergente.", page: 14 }
      ],
      proposals: [
        { title: "Coordenação fiscal-monetária respeitando a autonomia do BC", quotes: [{ quote: "Coordenar políticas fiscal e monetária com respeito à autonomia do Banco Central. Reduzir pressões fiscais sobre preços, aperfeiçoar comunicação e previsibilidade e criar condições para que inflação controlada, juros menores e desenvolvimento coexistam de forma sustentável.", page: 13 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [
        { quote: "As economias que deram grandes saltos de renda combinaram mercado, coordenação estatal, capital humano, infraestrutura, abertura e inovação; onde o Estado foi omisso ou capturado, o crescimento perdeu força.", page: 14 },
        { quote: "O setor privado tornou-se o principal investidor em infraestrutura no Brasil, respondendo por mais de 70% dos aportes anuais, por meio de concessões, parcerias público-privadas e instrumentos de mercado de capitais.", page: 46 }
      ],
      proposals: [
        { title: "Ampliação das concessões e PPPs", quotes: [{ quote: "Manter um calendário permanente e previsível de leilões (dando continuidade ao Programa de Parcerias em Investimentos, o PPI) em rodovias, ferrovias, portos, aeroportos, saneamento, energia e infraestrutura social, como hospitais, escolas e iluminação pública.", page: 46 }] },
        { title: "Governança técnica das estatais protegida de indicação política", quotes: [{ quote: "Remover as barreiras que impedem esse capital de fluir por decisão própria: governança técnica protegida de indicações políticas, segurança para quem decide com diligência e responsabilidade, e tratamento regulatório e tributário adequado ao investidor de longo prazo.", page: 47 }] },
        { title: "Fortalecer agências reguladoras com autonomia técnica", quotes: [{ quote: "Fortalecer as agências reguladoras com autonomia técnica de fato, diretorias completas, orçamento adequado e quadros qualificados.", page: 46 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        { quote: "O investimento total do país, público e privado, situa-se em torno de 2% do PIB ao ano, quando o consenso técnico indica a necessidade de patamares próximos a 4% do PIB, de forma sustentada.", page: 46 },
        { quote: "Esse quadro não decorre da falta de projetos nem da ausência de capital. Decorre da descontinuidade. A cada ciclo de governo, programas são criados, renomeados ou abandonados; prioridades mudam; obras param no meio do caminho, consumindo recursos sem entregar um único serviço à população.", page: 46 }
      ],
      proposals: [
        { title: "Plano Nacional de Infraestrutura como política de Estado", quotes: [{ quote: "Instituir um planejamento integrado de longo prazo, com horizonte de trinta anos e revisões periódicas, e uma carteira única de projetos priorizados por critérios técnicos de retorno econômico e social.", page: 46 }] },
        { title: "Elevar investimento total de ~17% para ~25% do PIB", quotes: [{ quote: "O país deverá trabalhar para que o investimento total avance dos atuais cerca de 17% do PIB em direção a aproximadamente 25%, com participação relevante do investimento público das três esferas em áreas nas quais o retorno social não é plenamente apropriado pelo setor privado.", page: 14 }] },
        { title: "BNDES como estruturador, não financiador direto", quotes: [{ quote: "Aprofundar os instrumentos de financiamento privado que o país construiu na última década [...] com o BNDES atuando prioritariamente como estruturador de projetos e catalisador de capital privado.", page: 47 }] },
        { title: "Logística integrada para reduzir o Custo Brasil", quotes: [{ quote: "Rebalancear a matriz de transportes, hoje excessivamente concentrada no modal rodoviário, com prioridade a ferrovias, hidrovias, cabotagem e terminais intermodais, conectando as regiões produtoras aos portos e colocando o custo logístico do país em trajetória firme de queda.", page: 48 }] },
        { title: "Universalizar o saneamento até 2033", quotes: [{ quote: "Cumprir e acelerar as metas do marco legal do saneamento (universalização até 2033), água tratada e coleta e tratamento de esgoto para todos os brasileiros [...] avançar na prestação regionalizada, que viabiliza a universalização nos municípios de menor atratividade.", page: 48 }] }
      ]
    }
  },
  themes: {
    educacao: {
      diagnosis: [
        { quote: "Os resultados da educação básica mostram queda acentuada da aprendizagem ao longo da trajetória escolar. Dados do Saeb indicam proporção muito menor de estudantes em nível adequado de matemática no fim do ensino fundamental e do ensino médio do que nos anos iniciais.", page: 32 },
        { quote: "Parte relevante das crianças chega ao terceiro ano sem ler com fluência e compreender textos simples.", page: 32 }
      ],
      proposals: [
        { title: "Pacto Nacional pela Alfabetização e Matemática na Idade Certa", quotes: [{ quote: "Apoiar estados e municípios para que todas as crianças leiam, escrevam, compreendam e dominem fundamentos matemáticos até o fim do 2º ano.", page: 32 }] },
        { title: "Recomposição nacional das aprendizagens", quotes: [{ quote: "Diagnosticar defasagens por estudante e rede, oferecer material, tempo adicional, tutoria e formação. Estabelecer meta de reduzir drasticamente o contingente abaixo do básico, com prioridade a português, matemática e ciências.", page: 32 }] },
        { title: "Professor bem formado, apoiado e valorizado", quotes: [{ quote: "Elevar padrão das licenciaturas, exigir prática supervisionada robusta, restringir cursos de baixa qualidade e oferecer bolsas a bons estudantes que escolham docência.", page: 33 }] }
      ]
    },
    seguranca: {
      diagnosis: [
        { quote: "A violência retirou de milhões de brasileiros o direito de viver com liberdade e segurança. Homicídios, feminicídios, violência sexual, roubos, furtos de celulares, golpes e fraudes digitais atingem diariamente as famílias.", page: 16 },
        { quote: "O problema mais grave é o avanço das organizações criminosas e das milícias. Esses grupos deixaram de atuar apenas nos mercados ilegais e passaram a controlar territórios, rotas logísticas, presídios e atividades econômicas formais.", page: 16 },
        { quote: "O sistema penitenciário também não pode continuar funcionando como centro de comando das organizações criminosas.", page: 16 }
      ],
      proposals: [
        { title: "Ministério da Segurança Pública", quotes: [{ quote: "Criar o Ministério da Segurança Pública e instituir o Conselho Estratégico Nacional de Segurança Pública e Combate ao Terrorismo Doméstico, sob liderança da Presidência da República e com participação dos governadores.", page: 16 }] },
        { title: "Lei do Terrorismo Doméstico para facções", quotes: [{ quote: "Propor legislação que enquadre como terrorismo doméstico as organizações criminosas e milícias que apresentem estrutura permanente de comando, domínio territorial, capacidade armada, poder econômico e uso sistemático da violência.", page: 17 }] },
        { title: "Sistema Nacional de Inteligência Criminal", quotes: [{ quote: "Integrar os bancos de dados da União, dos estados, do Distrito Federal, do Ministério Público e do Poder Judiciário, reunindo antecedentes, mandados, vínculos com organizações criminosas, informações penitenciárias, perfis genéticos e dados biométricos.", page: 17 }] }
      ]
    },
    saude: {
      diagnosis: [
        { quote: "O Brasil vive uma das mais profundas transições demográficas e epidemiológicas de sua história. Em 2022, já éramos mais de 32 milhões de brasileiros com 60 anos ou mais. [...] Em 2070, quase quatro em cada dez brasileiros terão 60 anos ou mais.", page: 75 },
        { quote: "Não podemos enfrentar o Brasil de amanhã com um sistema de saúde desenhado para o Brasil de ontem. Durante décadas, organizamos grande parte da assistência para agir quando a doença já estava instalada.", page: 75 }
      ],
      proposals: [
        { title: "SUS mais preventivo, integrado e digital", quotes: [{ quote: "O SUS será preservado como sistema universal e transformado em uma rede mais preventiva, integrada, digital e orientada por resultados.", page: 75 }] },
        { title: "Acesso regulado por risco clínico", quotes: [{ quote: "A saúde será organizada por regiões, com atenção primária resolutiva, acesso regulado por risco clínico, especialistas conectados, hospitais avaliados por qualidade e profissionais valorizados.", page: 75 }] }
      ]
    },
    "politica-externa": {
      diagnosis: [
        { quote: "Vivemos um período de profunda transformação da ordem internacional. O sistema que emergiu após a Segunda Guerra Mundial e se consolidou com o fim da Guerra Fria está sendo rapidamente reconfigurado.", page: 72 },
        { quote: "A economia e a geopolítica passaram a caminhar juntas. Países utilizam tarifas, controles tecnológicos, políticas industriais, sanções econômicas e incentivos ao investimento como parte de estratégias nacionais de longo prazo.", page: 72 }
      ],
      proposals: [
        { title: "Política externa como política de Estado", quotes: [{ quote: "Definir uma estratégia nacional de inserção internacional aprovada em conselho de governo e debatida com o Congresso, o setor produtivo, a academia e a sociedade. As prioridades transcenderão ciclos políticos e eleitorais.", page: 72 }] },
        { title: "Sem alinhamento automático a nenhum polo", quotes: [{ quote: "Fortalecer simultaneamente as relações com os Estados Unidos, a União Europeia, a América Latina, a África, a Ásia e o Oriente Médio, sem hierarquias ou preferências determinadas por afinidades ideológicas.", page: 73 }] },
        { title: "Aproximação pragmática com a OCDE", quotes: [{ quote: "Participar ativamente da ONU, da OMC, do G20 e do BRICS e retomar, com pragmatismo, o processo de aproximação com a OCDE.", page: 74 }] }
      ]
    },
    corrupcao: {
      diagnosis: [
        { quote: "A corrupção constitui parte da infraestrutura do crime organizado. As organizações dependem de vazamento de operações, proteção interna, favorecimento prisional, captura de contratos, empresas de fachada, lavagem de dinheiro e cooptação de agentes públicos.", page: 16 }
      ],
      proposals: [
        { title: "Sistema Nacional Anticorrupção e de Integridade Pública", quotes: [{ quote: "Instituir o Sistema Nacional Anticorrupção e de Integridade Pública, integrando os órgãos de controle, investigação, inteligência financeira e defesa jurídica do Estado.", page: 20 }] },
        { title: "IA para detectar fraudes e empresas de fachada em contratos públicos", quotes: [{ quote: "Implantar plataforma nacional de análise de riscos em gastos públicos, com inteligência artificial, para identificar fraudes, empresas de fachada, beneficiários ocultos e vínculos com organizações criminosas, e emitir alerta rápido para bloqueio de licitações e contratos de entes públicos com empresas suspeitas.", page: 20 }] },
        { title: "Lei do Enriquecimento Ilícito", quotes: [{ quote: "Propor LEI DO ENRIQUECIMENTO ILÍCITO, para patrimônio incompatível de agentes públicos, pessoas politicamente expostas, operadores financeiros, laranjas e empresas vinculadas. A Lei permitirá a emissão de ordens judiciais para que esses agentes expliquem a origem de bens incompatíveis com sua renda declarada, permitindo bloqueio cautelar e posterior perda civil dos ativos quando não houver comprovação lícita da origem.", page: 20 }] },
        { title: "Transparência total de obras públicas e Lei do Gestor Público de Boa-Fé", quotes: [{ quote: "Ampliar a transparência das obras públicas, com seguro-garantia, modelagem digital, informações georreferenciadas, identificação dos beneficiários finais e acompanhamento público dos cronogramas e aditivos. Ao mesmo tempo, aprovar uma Lei Nacional do Gestor Público de Boa-Fé, protegendo decisões técnicas regularmente fundamentadas e mantendo a responsabilização por dolo, fraude, corrupção, desvio de finalidade ou erro grosseiro.", page: 20 }] }
      ]
    }
  }
};
