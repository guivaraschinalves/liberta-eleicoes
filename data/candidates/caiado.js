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
        { title: "Universalizar o saneamento até 2033", quotes: [{ quote: "Cumprir e acelerar as metas do marco legal do saneamento (universalização até 2033), água tratada e coleta e tratamento de esgoto para todos os brasileiros [...] avançar na prestação regionalizada, que viabiliza a universalização nos municípios de menor atratividade.", page: 48 }] },
        { title: "Corredores logísticos para escoar o agronegócio", quotes: [{ quote: "Organizar ferrovias, hidrovias, rodovias, portos e armazenagem em corredores logísticos estratégicos. Estabelecer um programa decenal para a logística do agronegócio, assegurar manutenção permanente das hidrovias e ampliar a capacidade de armazenagem próxima às regiões produtoras. Priorizar obras estruturantes de escoamento, como a Ferrogrão, a Ferrovia Norte-Sul, a Fiol, a Malha Norte, a BR-163 e as hidrovias do Centro-Oeste e do Norte.", page: 23 }] },
        { title: "Infraestrutura pública digital como instrumento de diplomacia tecnológica", quotes: [{ quote: "Transformar PIX, gov.br, open finance e outras soluções brasileiras em instrumentos de cooperação e exportação; diversificar parcerias de computação e tecnologia; liderar coalizões de potências médias para ampliar o acesso global à capacidade computacional; e usar a política externa para atrair investimento, conhecimento e mercado.", page: 27 }] }
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
        { title: "Professor bem formado, apoiado e valorizado", quotes: [{ quote: "Elevar padrão das licenciaturas, exigir prática supervisionada robusta, restringir cursos de baixa qualidade e oferecer bolsas a bons estudantes que escolham docência.", page: 33 }] },
        { title: "Educação de jovens e adultos conectada à oportunidade", quotes: [{ quote: "Integrar alfabetização e conclusão escolar a qualificação, certificação de competências, cuidado infantil e intermediação de trabalho. Oferecer horários flexíveis e modelos híbridos de qualidade para adultos, trabalhadores rurais.", page: 34 }] }
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
        { title: "Sistema Nacional de Inteligência Criminal", quotes: [{ quote: "Integrar os bancos de dados da União, dos estados, do Distrito Federal, do Ministério Público e do Poder Judiciário, reunindo antecedentes, mandados, vínculos com organizações criminosas, informações penitenciárias, perfis genéticos e dados biométricos.", page: 17 }] },
        { title: "Rede Nacional de Presídios de Segurança Máxima e REDAD", quotes: [{ quote: "Criar uma Rede Nacional de Presídios de Segurança Máxima, com padrões comuns para unidades federais e estaduais. Identificar e separar os integrantes das organizações criminosas conforme suas funções de comando, financiamento, disciplina, comunicação e recrutamento.", page: 18 }, { quote: "Aplicar às lideranças o Regime Especial Disciplinar Antiterrorismo Doméstico (REDAD), com isolamento em cela individual, bloqueio de celulares, monitoramento ambiental, proibição de visitas íntimas e progressão somente após o cumprimento de 90% da pena, impedindo que os presídios sejam utilizados para transmitir ordens ou administrar atividades criminosas.", page: 18 }] },
        { title: "Comando Nacional de Proteção de Fronteiras, Portos e Aeroportos", quotes: [{ quote: "Implantar o Comando Nacional de Proteção de Fronteiras e Corredores Logísticos, reunindo Forças Armadas, Polícia Federal, Polícia Rodoviária Federal, forças estaduais, órgãos ambientais e autoridades portuárias e aeroportuárias na defesa permanente das fronteiras brasileiras, portos e aeroportos, e na recuperação do controle territorial da Amazônia Legal pelo Estado brasileiro, e, de forma complementar, no apoio aos estados e DF em ações de reintegração de territórios ao Estado brasileiro.", page: 18 }] },
        { title: "Secretaria Nacional da Segurança da Mulher, da Criança e Minorias", quotes: [{ quote: "Criar a Secretaria Nacional da Segurança da Mulher, da Criança e Minorias, vinculada ao Ministério da Segurança Pública.", page: 19 }, { quote: "Implantar o monitoramento nacional de agressores submetidos a medidas protetivas, associado a sistemas de alerta, botão de pânico e cadastro nacional. Integrar boletins de ocorrência, decisões judiciais, avaliações de risco e chamadas de emergência.", page: 19 }] },
        { title: "Redução da maioridade penal para 16 anos em crimes graves", quotes: [{ quote: "Trabalhar fortemente pela aprovação da PEC da redução da maioridade penal para 16 (dezesseis) anos, com redirecionamento para: autores de crimes de homicídio, tentativa de homicídio, tortura, lesão corporal seguida de morte, estupro de vulnerável, roubo cometido com violência ou grave ameaça à pessoa (assalto) e todos os crimes tipificados na Lei de Combate ao Terrorismo Doméstico, submetendo-os integralmente ao regime penal aplicável aos maiores de idade.", page: 20 }] },
        { title: "Segurança pública sem discriminação e auditoria de vieses no reconhecimento facial", quotes: [{ quote: "Aperfeiçoar formação, protocolos de abordagem, videomonitoramento com Inteligência Artificial (estratégias de reconhecimento facial e uso de câmeras deverão considerar toda a diversidade brasileira, com auditoria permanente e medidas para treinar, identificar e reduzir vieses raciais e enfrentar o racismo algorítmico), supervisão e responsabilização, protegendo simultaneamente cidadãos e policiais.", page: 67 }] }
      ]
    },
    saude: {
      diagnosis: [
        { quote: "O Brasil vive uma das mais profundas transições demográficas e epidemiológicas de sua história. Em 2022, já éramos mais de 32 milhões de brasileiros com 60 anos ou mais. [...] Em 2070, quase quatro em cada dez brasileiros terão 60 anos ou mais.", page: 75 },
        { quote: "Não podemos enfrentar o Brasil de amanhã com um sistema de saúde desenhado para o Brasil de ontem. Durante décadas, organizamos grande parte da assistência para agir quando a doença já estava instalada.", page: 75 }
      ],
      proposals: [
        { title: "SUS mais preventivo, integrado e digital", quotes: [{ quote: "O SUS será preservado como sistema universal e transformado em uma rede mais preventiva, integrada, digital e orientada por resultados.", page: 75 }] },
        { title: "Acesso regulado por risco clínico", quotes: [{ quote: "A saúde será organizada por regiões, com atenção primária resolutiva, acesso regulado por risco clínico, especialistas conectados, hospitais avaliados por qualidade e profissionais valorizados.", page: 75 }] },
        { title: "Ação 1 — Zerar a espera evitável", quotes: [{ quote: "Criar um Sistema Nacional de Acesso e Regulação Inteligente que substitua progressivamente a fila passiva por uma jornada clínica rastreável. A posição do cidadão não será definida apenas pela data do pedido, mas por gravidade, risco de progressão, impacto do atraso, vulnerabilidade e tempo já transcorrido.", page: 77 }] },
        { title: "Ação 2 — Um SUS preventivo e resolutivo", quotes: [{ quote: "A Estratégia Saúde da Família deve continuar sendo a principal porta de entrada do SUS, mas precisa evoluir de um modelo centrado em atender quem procura para outro capaz de conhecer sua população, identificar risco e buscar ativamente quem precisa.", page: 78 }] },
        { title: "Ação 5 — Saúde da mulher ao longo de toda a vida", quotes: [{ quote: "A saúde da mulher não pode ser reduzida à gestação. A política nacional deverá integrar adolescência, saúde sexual e reprodutiva, maternidade segura, prevenção cardiovascular, câncer, endometriose, saúde mental, climatério, menopausa, saúde óssea e envelhecimento.", page: 81 }] },
        { title: "Ação 8 — Saúde mental como prioridade nacional", quotes: [{ quote: "A política de saúde mental deve começar antes da crise, estar próxima da comunidade e funcionar de forma integrada ao restante do SUS.", page: 84 }, { quote: "Os CAPS permanecem essenciais para os casos de maior complexidade, mas não podem ser a única porta de entrada para uma demanda que atravessa todas as idades e diferentes graus de gravidade. A Atenção Primária deve assumir papel central na prevenção, identificação precoce, acompanhamento longitudinal e encaminhamento oportuno, com apoio matricial, teleconsultoria e referência especializada sempre que necessário.", page: 84 }] },
        { title: "Ação 9 — Saúde indígena com equidade, território e respeito cultural", quotes: [{ quote: "Equidade significa reconhecer que populações indígenas vivem realidades epidemiológicas, geográficas e culturais próprias. O subsistema indígena deve ser fortalecido, conectado às redes regionais do SUS e capaz de oferecer continuidade do cuidado da aldeia à alta complexidade.", page: 86 }] },
        { title: "Ação 13 — Soberania sanitária e medicamentos de alto custo", quotes: [{ quote: "Saúde é também soberania, ciência, emprego qualificado e capacidade industrial. O Brasil precisa usar a escala do SUS e a força de suas instituições científicas para reduzir dependência externa, garantir abastecimento e participar das novas fronteiras da medicina.", page: 90 }] },
        { title: "Saúde da população negra", quotes: [{ quote: "Fortalecer atenção a hipertensão, diabetes, doença falciforme, saúde mental, câncer e mortalidade materna, com protocolos, formação e acesso regional. Combater discriminação no atendimento e melhorar qualidade dos registros de raça e cor.", page: 68 }] },
        { title: "Estratégia de Saúde Amazônica no SUS", quotes: [{ quote: "Estruturar atenção primária fluvial e itinerante, telemedicina, transporte sanitário aéreo e fluvial, diagnóstico remoto, redes de referência e provimento de profissionais. Integrar saúde indígena e ribeirinha, vigilância epidemiológica e cuidado relacionado a doenças tropicais, contaminação da água, fumaça, mineração e eventos climáticos.", page: 71 }] }
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
        { title: "Aproximação pragmática com a OCDE", quotes: [{ quote: "Participar ativamente da ONU, da OMC, do G20 e do BRICS e retomar, com pragmatismo, o processo de aproximação com a OCDE.", page: 74 }] },
        { title: "Integração sul-americana física, energética e econômica", quotes: [{ quote: "Priorizar corredores rodoviários, ferroviários, hidroviários e portuários, interconexões elétricas, gás e telecomunicações, conectando regiões brasileiras ao Pacífico e aos mercados vizinhos, com viabilidade econômica e governança de projetos aferidas caso a caso.", page: 74 }] },
        { title: "Cooperação internacional contra o crime organizado transnacional", quotes: [{ quote: "Ampliar a cooperação internacional no combate ao crime organizado transnacional, ao narcotráfico, ao tráfico de armas, aos crimes ambientais, à lavagem de dinheiro e às ameaças cibernéticas, com mecanismos permanentes de inteligência, investigações conjuntas e controle de fronteiras.", page: 74 }] }
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
    },
    "direitos-bem-estar": {
      diagnosis: [
        { quote: "No trabalho, mulheres têm escolaridade elevada, mas assumem parcela desproporcional do cuidado não remunerado, enfrentam interrupções de carreira e menor presença em liderança, tecnologia e áreas de maior salário. Empreendedoras encontram dificuldade de crédito, garantias, redes e mercado. A expansão de creches e serviços de cuidado é política social e econômica.", page: 58 },
        { quote: "Crianças e adolescentes representam parcela expressiva da população e sofrem de forma desproporcional com pobreza, violência sexual, homicídio, evasão e insegurança alimentar. O artigo 227 da Constituição determina prioridade absoluta, mas orçamento, coordenação e execução ainda não refletem plenamente esse comando.", page: 61 },
        { quote: "Pessoas com deficiência ainda enfrentam barreiras de acessibilidade, educação, transporte e trabalho.", page: 61 },
        { quote: "Pretos e pardos constituem a maior parte da população, mas permanecem sobre-representados entre pobres, vítimas de homicídio, presos, trabalhadores informais e estudantes com menor aprendizagem. Essas diferenças não decorrem de uma única causa: combinam legado histórico, desigualdade territorial, discriminação, escola de qualidade desigual, violência, baixa acumulação patrimonial e redes de oportunidade limitadas.", page: 67 },
        { quote: "Mulheres negras enfrentam sobreposição de desigualdades de renda, cuidado, saúde materna e violência. Comunidades quilombolas e povos indígenas lidam com acesso insuficiente a serviços, regularização territorial, segurança e oportunidades econômicas compatíveis com seus modos de vida.", page: 67 }
      ],
      proposals: [
        { title: "Creche e infraestrutura do cuidado como base da autonomia feminina", quotes: [{ quote: "Acelerar oferta de creche em áreas de maior demanda, ampliar horários compatíveis com trabalho e apoiar serviços de cuidado a idosos e pessoas com deficiência. Assegurar busca ativa e flexibilidade acadêmica para a permanência de gestantes, puérperas e estudantes com filhos na educação básica, na Educação de Jovens e Adultos. Reconhecer o cuidado como infraestrutura que libera tempo e renda.", page: 59 }] },
        { title: "Igualdade salarial e Selo 'Empresa pela Igualdade'", quotes: [{ quote: "Aplicar a legislação de igualdade remuneratória com critérios objetivos, proteção de dados e correção de discriminação comprovada. Estimular avaliação de funções, retorno após maternidade, desenvolvimento de liderança e ambientes sem assédio. Criar o Selo \"Empresa pela Igualdade\", com critérios públicos, para reconhecer empresas que promovam equidade de gênero e condições dignas, inclusive na contratação e permanência de mulheres periféricas, mães atípicas e mulheres acima de 50 anos.", page: 59 }] },
        { title: "Empreendedorismo e crédito para mulheres", quotes: [{ quote: "Criar garantias, educação financeira, mentoria, compras e redes para empreendedoras, especialmente em periferias e áreas rurais. Medir sobrevivência, faturamento e empregos, evitando programas limitados à abertura formal do negócio.", page: 59 }] },
        { title: "Mulheres no agro, ciência, tecnologia e indústria", quotes: [{ quote: "Ampliar formação, bolsas, extensão, sucessão rural e acesso a ativos produtivos. Incentivar participação em STEM, inovação e liderança por meio de orientação, redes, ambientes seguros e critérios transparentes de seleção.", page: 59 }] },
        { title: "Combate ao assédio no trabalho e proteção à maternidade", quotes: [{ quote: "Fortalecer canais, inspeção, protocolos e responsabilização por assédio e violência, incluindo trabalho doméstico, rural e plataformas.", page: 59 }, { quote: "Estender igualdade de acesso, prevenção ao assédio e proteção à maternidade às carreiras públicas civis e militares, respeitadas suas exigências funcionais.", page: 60 }] },
        { title: "Participação política das mulheres sem violência", quotes: [{ quote: "Combater violência política de gênero e ataques coordenados, garantir investigação e segurança e fortalecer formação de candidatas e lideranças. Partidos deverão cumprir regras de financiamento e transparência, sem candidaturas fictícias.", page: 60 }] },
        { title: "Dados e orçamento com recorte de gênero", quotes: [{ quote: "Identificar impacto de políticas e gastos sobre mulheres e publicar indicadores de segurança, saúde, trabalho e cuidado. Programas serão revisados por resultado, e recursos seguirão diagnóstico territorial, não apenas distribuição histórica.", page: 60 }] },
        { title: "Prioridade absoluta para crianças e adolescentes", quotes: [{ quote: "Identificar orçamento federal da infância, publicar metas e criar instância de coordenação na Presidência. Políticas de saúde, educação, assistência, segurança, cultura, esporte, cidades e internet deverão demonstrar impacto sobre crianças e adolescentes.", page: 62 }] },
        { title: "Proteção da infância contra violência, exploração e tráfico", quotes: [{ quote: "Integrar Disque 100, conselhos tutelares, escola, saúde, polícia, perícia e justiça em protocolo nacional. Ampliar escuta especializada, atendimento sem revitimização, proteção a testemunhas, investigação digital e resposta a exploração sexual, trabalho infantil e tráfico.", page: 62 }] },
        { title: "Convivência familiar, acolhimento e adoção", quotes: [{ quote: "Priorizar apoio à família de origem quando seguro, famílias acolhedoras e acolhimento de pequeno porte. Reduzir tempo de decisão judicial, apoiar egressos, irmãos e crianças com deficiência e organizar resposta a orfandade por violência, epidemias e desastres.", page: 62 }] },
        { title: "Juventude vulnerável: aprendizagem e primeiro trabalho", quotes: [{ quote: "Expandir aprendizagem profissional no setor público e privado, formação digital, orientação e serviço civil voluntário em atividades comunitárias. Priorizar jovens fora da escola e do trabalho, egressos do acolhimento e do sistema socioeducativo e territórios de violência.", page: 62 }] },
        { title: "Sistema socioeducativo que interrompa carreiras criminais", quotes: [{ quote: "Garantir escolarização, formação, saúde mental, esporte, cultura e acompanhamento familiar, com segurança e separação por perfil. Medir reincidência e inserção após a medida e impedir recrutamento de adolescentes por facções dentro das unidades.", page: 62 }] },
        { title: "Inclusão das pessoas com deficiência", quotes: [{ quote: "Assegurar acessibilidade universal, tecnologia assistiva, educação inclusiva com apoio especializado, reabilitação, transporte e trabalho. Simplificar avaliação biopsicossocial, reduzir espera e apoiar famílias cuidadoras, preservando autonomia e escolha.", page: 62 }] },
        { title: "Habitação social com prioridade a pessoas com deficiência e famílias vulneráveis", quotes: [{ quote: "Integrar produção habitacional, urbanização, regularização fundiária, locação social e melhoria de moradias. Priorizar famílias com crianças, mulheres vítimas de violência, pessoas com deficiência e idosos, com localização próxima a emprego, transporte e serviços.", page: 62 }] },
        { title: "Metas de equidade racial em todas as políticas públicas", quotes: [{ quote: "Exigir que programas relevantes de educação, saúde, segurança, trabalho, habitação e crédito publiquem resultados por raça, território e gênero, observada a proteção de dados. Diferenças persistentes gerarão planos de correção, recursos e assistência técnica.", page: 67 }] },
        { title: "Aprendizagem com equidade racial", quotes: [{ quote: "Direcionar tutoria, alfabetização, escola integral e professores adequados aos estudantes com maiores defasagens. Monitorar diferenças de aprendizagem e conclusão e apoiar escolas para corrigi-las, evitando baixar expectativas ou substituir conteúdo por retórica.", page: 68 }] },
        { title: "Trabalho, empreendedorismo e patrimônio para territórios vulneráveis", quotes: [{ quote: "Ampliar qualificação, intermediação, crédito, garantias e compras públicas para empreendedores de territórios vulneráveis, com critérios econômicos e assistência. Apoiar formalização, cooperativismo, propriedade e educação financeira, medindo renda, sobrevivência de negócios e empregos.", page: 68 }] },
        { title: "Igualdade racial de oportunidades no serviço público e nas empresas", quotes: [{ quote: "Aprimorar políticas de inclusão em concursos e formação, respeitando decisões judiciais e mérito. Estimular programas empresariais de diversidade com metas voluntárias, transparência e foco em recrutamento, desenvolvimento e liderança, sem burocracia simbólica.", page: 68 }] },
        { title: "Regularização territorial de comunidades quilombolas", quotes: [{ quote: "Acelerar regularização territorial com segurança jurídica, saneamento, energia, conectividade, saúde, educação, assistência técnica e apoio a cadeias produtivas e turismo. Projetos serão construídos com participação das comunidades e respeito a patrimônio cultural.", page: 68 }] },
        { title: "Povos indígenas: direitos, proteção territorial e autonomia", quotes: [{ quote: "Proteger territórios contra invasão, garimpo, madeira e crime organizado; fortalecer saúde e educação intercultural; e apoiar atividades sustentáveis escolhidas pelas comunidades. Consultas seguirão a Constituição e normas aplicáveis, sem tutela que impeça autonomia.", page: 68 }] }
      ]
    }
  }
};
