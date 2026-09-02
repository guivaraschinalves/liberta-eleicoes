// ============================================================================
// ROMEU ZEMA (NOVO) — citações do "Plano Implacável", proposta de governo
// registrada no TSE (ver data/sources.js). Todo texto em `quote` é
// TRANSCRIÇÃO LITERAL do PDF oficial; `title` é redigido por nós só para
// nomear o card.
// ============================================================================
window.CANDIDATES_DATA = window.CANDIDATES_DATA || {};
window.CANDIDATES_DATA["zema"] = {
  basics: {
    name: "Romeu Zema Neto",
    ballotName: "Romeu Zema",
    party: "NOVO",
    number: 30,
    coalition: "Candidatura de partido isolado (Novo)",
    vp: "Eduardo Girão (Novo)",
    initials: "RZ",
    photo: "sources/zema.jpg",
    birthDate: "1964-10-28"
  },
  economy: {
    fiscal: {
      diagnosis: [
        { quote: "O Brasil entrou em 2026 com a maior carga tributária da sua história, em torno de 32,4% do PIB, déficit nas contas públicas e uma dívida que já ultrapassa os R$10 trilhões, próximo de 80% do PIB.", page: 14 },
        { quote: "Em virtude desse cenário, a SELIC está próxima a 15% e, com isso, o pagamento de juros consome cerca de R$1 trilhão por ano, drenando recursos que deveriam estar financiando investimentos, infraestrutura e serviços essenciais.", page: 14 }
      ],
      proposals: [
        { title: "Reformar a Previdência de forma definitiva", quotes: [{ quote: "Fazer uma Reforma da Previdência envolvendo estados e municípios, bem como a previdência rural e militar, criando também um mecanismo de reajuste automático da idade mínima para aposentadoria com base na expectativa de vida da população.", page: 14 }] },
        { title: "Reforma Administrativa para enxugar o governo", quotes: [{ quote: "Fazer uma Reforma Administrativa para enxugar a estrutura do Governo Federal e deixá-la mais eficiente, reduzindo os ministérios, cortando cargos comissionados e revisando as autarquias e fundações do governo.", page: 15 }] },
        { title: "Metas de redução de impostos que forcem corte de gastos", quotes: [{ quote: "Fixar metas progressivas de redução da carga tributária que imponham os cortes de gastos necessários para atingi-las, invertendo a lógica atual em que o gasto define o imposto.", page: 16 }] }
      ]
    },
    tributacao: {
      diagnosis: [
        { quote: "Esse sistema tem nome: Custo Brasil. É o peso invisível que encarece tudo no país e custa R$1,7 trilhão por ano [...] Antes de vender o primeiro produto ou contratar o primeiro funcionário, o empreendedor brasileiro já esbarra em um dos juros mais altos do mundo, impostos incompreensíveis, infraestrutura ruim, insegurança jurídica.", page: 17 }
      ],
      proposals: [
        { title: "Reduzir o IR das empresas ao nível dos países desenvolvidos", quotes: [{ quote: "Reduzir gradualmente o imposto de renda das empresas para aproximar o Brasil das economias desenvolvidas e permitir que mais recursos fiquem na atividade produtiva impulsionando investimento, expansão e geração de empregos.", page: 19 }] },
        { title: "Reforma do IRPJ: Receita calcula, não o contribuinte", quotes: [{ quote: "Reformar a tributação das empresas, em especial os impostos diretos como o IRPJ, partindo do princípio de que é o Estado, e não o contribuinte, que deve calcular o imposto, com a Receita apurando o valor automaticamente a partir da nota fiscal eletrônica.", page: 19 }] },
        { title: "Neutralidade na regulamentação da reforma tributária", quotes: [{ quote: "Evitar que a regulamentação da Reforma Tributária replique a complexidade do sistema atual por meio de burocracias desnecessárias, regimes especiais, exceções e tratamentos favorecidos, garantindo monitoramento técnico, transparência sobre impactos setoriais e compromisso verificável de neutralidade da carga tributária.", page: 19 }] }
      ]
    },
    "cambio-comercio": {
      diagnosis: [
        { quote: "O Brasil tem uma das economias mais fechadas do planeta: apesar de ser a nona maior economia do mundo, o país ocupa apenas a 22a posição em exportações. Dentre 203 países, o Brasil tem a quinta menor proporção entre importações e seu PIB (15,7%).", page: 36 }
      ],
      proposals: [
        { title: "Sair do BRICS e ingressar na OCDE", quotes: [
          { quote: "Retirar o Brasil do BRICS de forma diplomática, preservando pragmaticamente as relações comerciais com todos os países do bloco.", page: 37 },
          { quote: "Retomar o processo de adesão do Brasil à OCDE, promovendo as reformas institucionais e econômicas necessárias para aderir ao bloco.", page: 37 }
        ] },
        { title: "Mercosul como zona de livre comércio", quotes: [{ quote: "Flexibilizar a estrutura atual do Mercosul, hoje uma união aduaneira que impede os países membros de negociarem sozinhos, transformando-o em zona de livre comércio, para que o Brasil assine acordos comerciais e de investimentos com países e blocos que ampliem seu acesso a novos mercados.", page: 38 }] },
        { title: "Alinhar tarifas de importação a países em desenvolvimento", quotes: [{ quote: "Alinhar gradualmente as tarifas de importação brasileiras à média dos países em desenvolvimento à medida que o Custo Brasil for reduzido, acabando com a dupla tributação e reduzindo as barreiras não tarifárias.", page: 21 }] }
      ]
    },
    "trabalho-renda": {
      diagnosis: [
        { quote: "No trimestre encerrado em janeiro de 2026, o país tinha 38,5 milhões de trabalhadores informais, o equivalente a 37,5% da população ocupada fora da CLT.", page: 23 },
        { quote: "83% consideram a flexibilidade de horário uma prioridade ao escolher um emprego.", page: 23 }
      ],
      proposals: [
        { title: "Regime alternativo à CLT com negociado sobre legislado", quotes: [{ quote: "Permitir que trabalhador e empregador ajustem o modelo de contratação às suas preferências e à realidade de cada atividade, com prevalência do negociado sobre o legislado.", page: 23 }] },
        { title: "Zerar encargos na contratação de informais", quotes: [{ quote: "Zerar os encargos sobre o equivalente a um salário mínimo na contratação de quem está há mais de um ano na informalidade, em empresas de todos os setores.", page: 24 }] },
        { title: "Fim do monopólio sindical", quotes: [{ quote: "Encerrar o monopólio sindical, assegurando ao profissional o direito de não se filiar ou contribuir para sindicatos, e limitar o poder regulatório e disciplinar dos conselhos profissionais.", page: 24 }] },
        { title: "Acabar com reservas de mercado corporativistas", quotes: [{ quote: "Desregulamentar profissões que não envolvam risco à saúde ou segurança da população, eliminando exigências corporativistas que existem apenas para proteger grupos estabelecidos.", page: 25 }] },
        { title: "Condicionar o Bolsa Família à busca de trabalho", quotes: [{ quote: "Permitir que adultos saudáveis e aptos ao trabalho permaneçam no Bolsa Família apenas enquanto estiverem buscando emprego, estudando ou se qualificando profissionalmente, com possibilidade de suspensão do benefício para quem, sem justificativa, recusar ofertas formais de trabalho.", page: 63 }] },
        { title: "Prêmio de R$ 5 mil para quem sai da dependência de programas sociais", quotes: [{ quote: "Conceder um prêmio de R$5 mil às famílias que deixarem o Bolsa Família após superar o limite de renda, premiando quem aceita uma oportunidade, entra na formalidade, começa a empreender e conquista sua própria autonomia.", page: 63 }] }
      ]
    },
    "inflacao-monetaria": {
      diagnosis: [
        { quote: "a SELIC está próxima a 15% e, com isso, o pagamento de juros consome cerca de R$1 trilhão por ano.", page: 14 },
        { quote: "Antes de vender o primeiro produto ou contratar o primeiro funcionário, o empreendedor brasileiro já esbarra em um dos juros mais altos do mundo, impostos incompreensíveis, infraestrutura ruim, insegurança jurídica.", page: 17 }
      ],
      proposals: [
        { title: "Choque fiscal para derrubar a curva de juros", quotes: [{ quote: "Garantir a queda da curva de juros por meio de um choque fiscal para estabilizar a relação dívida/PIB, promovendo reformas e mantendo superávits primários que permitam o pagamento da dívida.", page: 18 }] },
        { title: "Reduzir o IOF sobre operações financeiras", quotes: [{ quote: "Reduzir os custos diretos das operações financeiras começando pela redução do IOF, alinhando o Brasil às práticas dos países desenvolvidos.", page: 18 }] },
        { title: "Reduzir crédito direcionado (linhas subsidiadas do BNDES)", quotes: [{ quote: "Reduzir gradualmente os programas de crédito direcionado, incluindo linhas subsidiadas do BNDES, para setores escolhidos politicamente, visando ampliar a concorrência entre bancos e baratear o crédito no Brasil.", page: 18 }] }
      ]
    },
    "estado-privatizacoes": {
      diagnosis: [
        { quote: "Fazer o ajuste fiscal de verdade exige atacar a raiz do problema: cortar gastos, reduzir o peso do Estado onde ele não é essencial e devolver ao orçamento a capacidade de investir, crescer e aliviar a pressão sobre famílias e empresas.", page: 14 },
        { quote: "O Brasil tem um Estado caro que entrega pouco [...] Embora os servidores sejam apenas 12% da força de trabalho formal, abaixo da média da OCDE (18%) [...] o gasto com pessoal consome 13,5% do PIB, contra 9,3% nos países da OCDE.", page: 39 },
        { quote: "Gastamos como um país rico e entregamos como um país pobre: o Brasil ocupa a 102a posição, entre 179 países, na provisão de serviços públicos essenciais, atrás de Argentina, Uruguai e Chile, no Índice de Fragilidade dos Estados do Fund for Peace.", page: 39 }
      ],
      proposals: [
        { title: "Privatizar todas as empresas estatais", quotes: [{ quote: "Privatizar todas as empresas estatais para que o governo possa se concentrar naquilo que de fato lhe cabe, como segurança pública e educação, reduzindo o espaço para escândalos de corrupção e garantindo maior eficiência no uso dos recursos públicos e mais competição na economia brasileira.", page: 15 }] },
        { title: "Ampliar PPPs em todos os serviços públicos", quotes: [{ quote: "Aumentar o investimento privado no país por meio da ampliação das parcerias público-privadas em todos os setores da administração pública, inclusive em projetos que geram impacto direto na qualidade dos serviços e na vida da população, como saúde e educação.", page: 15 }] },
        { title: "Vender imóveis e ativos públicos sem uso", quotes: [{ quote: "Mapear o patrimônio imobiliário federal e vender, por venda direta ao ocupante ou leilão, os imóveis desocupados, subutilizados ou sem função pública, com metas anuais de arrecadação.", page: 15 }] }
      ]
    },
    "infraestrutura-investimento": {
      diagnosis: [
        { quote: "O investimento total, público e privado, em infraestrutura no país representa 2,22% do PIB, cerca da metade de outros países de renda média, que investem entre 3,5% e 5,5%. Os custos logísticos consomem 15,5% do PIB, o pior patamar entre as 20 maiores economias do mundo.", page: 26 }
      ],
      proposals: [
        { title: "Conceder ativos viáveis, PPP onde o mercado não chega", quotes: [{ quote: "Conceder à iniciativa privada a construção, operação e manutenção dos ativos com viabilidade econômica e, onde o mercado não chega sozinho, garantir a presença do Estado via PPPs.", page: 19 }] },
        { title: "Atrair investimento em data centers sem regulação precoce de IA", quotes: [{ quote: "Atrair investimentos internacionais em inovação e tecnologia, principalmente em data centers, aproveitando a energia barata em excesso [...] Garantir que o Brasil não irá restringir o mercado de IA por meio de regulações excessivas e inadequadas.", page: 21 }] },
        { title: "Ampliar e modernizar a malha ferroviária", quotes: [{ quote: "Dar destinação célere aos trechos ferroviários ociosos ou devolvidos [...] avançando também na implantação de corredores ferroviários estruturantes, com prioridade para projetos estratégicos como a FICO, a FIOL e a Ferrogrão, de modo a ampliar a integração logística nacional e reduzir os custos do transporte.", page: 29 }] },
        { title: "Ampliar concessões rodoviárias e mobilidade urbana federal", quotes: [
          { quote: "Aperfeiçoar os modelos de contratação, financiamento e gestão dos ativos rodoviários, ampliando o uso de concessões e PPPs e de contratos de longo prazo orientados por indicadores de desempenho, inclusive para trechos de menor viabilidade econômica.", page: 30 },
          { quote: "Integrar o planejamento da mobilidade urbana ao Ministério da Infraestrutura [...] e instituir uma política nacional de implantação e expansão dos sistemas estruturantes de transporte coletivo de alta capacidade, com o Governo Federal apoiando a estruturação dos projetos.", page: 30 }
        ] },
        { title: "Fortalecer a ANA e o Novo Marco do Saneamento", quotes: [{ quote: "Consolidar a ANA como coordenadora nacional da regulação do saneamento, ampliando a adoção de suas normas de referência pelas entidades reguladoras subnacionais [...] de modo a fortalecer a harmonização regulatória e a efetividade do Novo Marco do Saneamento.", page: 29 }] },
        { title: "Ampliar o financiamento privado de projetos de infraestrutura", quotes: [{ quote: "Ampliar e diversificar o mercado de financiamento e desenvolvimento de projetos de infraestrutura: Reduzir a dependência dos bancos públicos federais e multilaterais nas etapas de estruturação e financiamento dos projetos; aprimorar os mecanismos de project finance, visando à ampliação da participação do mercado de capitais e de fontes privadas no financiamento dos projetos; e criar um ambiente institucional que estimule a participação de outros atores na estruturação de projetos, de maneira a ampliar a oferta de projetos de infraestrutura nos níveis federal, estadual e municipal.", page: 27 }] },
        { title: "Recuperar a independência das agências reguladoras", quotes: [{ quote: "Recuperar a independência e a capacidade institucional das Agências Reguladoras: Reconstruir as agências como instituições técnicas fortes e autônomas, com dirigentes de reputação ilibada, mandatos independentes, quadros técnicos qualificados e autonomia administrativa, financeira e decisória, blindando-as da captura política e assegurando estabilidade regulatória aos investimentos de longo prazo.", page: 28 }] },
        { title: "Conectar todo o Brasil à internet de qualidade", quotes: [{ quote: "Conectar todo o Brasil à internet de qualidade: Estruturar a abertura de novas faixas de espectro para o 5G, atraindo novos concorrentes para baixar preços e melhorar o serviço ao consumidor, e usar parcerias com o setor privado e incentivos econômicos para levar conectividade de qualidade ao interior, ao campo e às regiões isoladas do país, conectando também escolas, postos de saúde e demais serviços públicos que hoje ficam à margem da rede.", page: 31 }] },
        { title: "Reduzir encargos e baixar a conta de luz", quotes: [{ quote: "Reduzir encargos setoriais da tarifa de energia elétrica: Retirar da conta de luz a grande quantidade de encargos e subsídios que hoje são pagos por todo consumidor, mas privilegiam setores escolhidos pelo governo.", page: 33 }] }
      ]
    }
  },
  themes: {
    educacao: {
      diagnosis: [
        { quote: "apenas 13,3% dos alunos saem do ensino fundamental sabendo Português e Matemática de forma adequada. No ensino médio, a situação é ainda mais trágica: somente 4,5% dos estudantes se formam com conhecimento adequado.", page: 50 },
        { quote: "Cerca de 826 mil crianças estão na fila de espera por vagas em creches, 4 em cada 10 alunos do 2o ano do ensino fundamental ainda não estão alfabetizados e cerca de 230 mil estudantes abandonam o ensino médio todos os anos.", page: 50 },
        { quote: "O Brasil investe no ensino superior público cerca de 0,7% do PIB, patamar próximo ao da União Europeia, mas não tem nenhuma universidade entre as 100 melhores do mundo. Gastamos mais de 15 mil dólares por aluno no ensino superior, acima da média da OCDE, e ainda assim cerca de metade dos brasileiros com diploma não possuem domínio proficiente do próprio português.", page: 54 }
      ],
      proposals: [
        { title: "Creches e pré-escolas com parceria privada", quotes: [{ quote: "Aumentar o acesso à educação infantil, especialmente para famílias mais vulneráveis, por meio do fortalecimento das redes públicas e de parcerias com entidades privadas e comunitárias, com e sem fins lucrativos, priorizando a expansão com qualidade.", page: 50 }] },
        { title: "Modernizar a BNCC", quotes: [{ quote: "Revisar e aprimorar a BNCC para torná-la mais clara, objetiva e focada nas aprendizagens essenciais de cada etapa da educação básica, alinhando o currículo às competências necessárias para o século XXI.", page: 51 }] },
        { title: "Transferir o ensino superior para o Ministério de Ciência e Tecnologia", quotes: [
          { quote: "Transferir as atribuições relacionadas ao ensino superior do atual Ministério da Educação para o Ministério de Ciência e Tecnologia, permitindo que o MEC esteja exclusivamente focado na aprendizagem das crianças e jovens e nos desafios inerentes à primeira infância, alfabetização, ensinos fundamental e médio e na educação profissional e tecnológica.", page: 52 },
          { quote: "Transferir a gestão do ensino superior do Ministério da Educação para o Ministério de Ciência e Tecnologia, de forma a integrar o ensino superior, o financiamento à pesquisa e o desenvolvimento tecnológico em uma única direção.", page: 54 }
        ] },
        { title: "Fortalecer a formação e a carreira dos professores", quotes: [
          { quote: "Fortalecer a formação dos professores na graduação para aproximá-la da prática em sala de aula e das evidências científicas sobre aprendizagem, com prioridade para alfabetização, matemática e ensino estruturado, fortalecendo os critérios de qualidade para cursos de licenciatura, ampliando residências pedagógicas e incentivando programas que atraiam e desenvolvam os melhores talentos para a carreira docente.", page: 52 },
          { quote: "Avançar na adoção de modelos mais modernos de valorização docente, para que a progressão na carreira dependa do desenvolvimento profissional, do desempenho pedagógico e da atuação em contextos vulneráveis, e não do tempo de serviço.", page: 52 }
        ] },
        { title: "Ampliar a liberdade de escolha educacional das famílias", quotes: [{ quote: "Dar mais liberdade aos pais de escolher o modelo educacional de seus filhos, facilitando a formalização de parcerias com instituições comunitárias, filantrópicas e confessionais, avançando em uma agenda de parcerias com escolas conveniadas na educação, escolas cívico-militares e regulamentando o homeschooling.", page: 53 }] },
        { title: "Vincular o Pé-de-Meia ao desempenho escolar", quotes: [{ quote: "Elevar a exigência de frequência escolar do programa e premiar os estudantes de excelência ao fim do ensino médio com o pagamento do valor máximo, fortalecendo o incentivo à aprendizagem e alinhando os recursos aos objetivos de aprendizado, inclusive com a exigência de nota mínima no Enem para o recebimento da parcela.", page: 53 }] },
        { title: "Ampliar a educação inclusiva para alunos com deficiência e TEA", quotes: [{ quote: "Ampliar o acesso de estudantes com deficiência e TEA a atendimento adequado às suas necessidades em ambientes inclusivos, com professores e profissionais especializados capacitados, plano educacional individualizado obrigatório, autorização de matrícula em escolas especializadas e instrumentos específicos de avaliação da aprendizagem, assegurando a participação ativa das famílias na escolha do modelo mais adequado para cada estudante.", page: 53 }] },
        { title: "Escolher reitores por critérios técnicos e financiar universidades por desempenho", quotes: [
          { quote: "Substituir o atual modelo de eleição interna de reitores por um processo de escolha técnico e transparente, com participação de conselhos externos e critérios objetivos de capacidade de gestão, despolitizando as universidades e profissionalizando sua gestão.", page: 55 },
          { quote: "Criar incentivos financeiros para universidades e institutos federais com base em indicadores objetivos de qualidade da gestão e acadêmica, como resultados em exames padronizados, empregabilidade dos egressos e produção científica relevante, estimulando as instituições a aprimorar sua gestão e entregar melhores resultados à sociedade.", page: 55 }
        ] },
        { title: "Formar mais profissionais em STEM e atrair especialistas estrangeiros", quotes: [
          { quote: "Ampliar as vagas e o financiamento de bolsas de pesquisa para as áreas de ciências, tecnologia, engenharia e matemática, alinhando a oferta do ensino superior às demandas da economia e aos setores com maior potencial de geração de renda e inovação para o Brasil.", page: 56 },
          { quote: "Simplificar os processos de reconhecimento de qualificações e de concessão de vistos para especialistas em setores de fronteira tecnológica, reduzindo os obstáculos à entrada desses profissionais no mercado e nas universidades brasileiras e permitindo que o setor privado tenha acesso aos talentos de que necessita para crescer.", page: 56 }
        ] }
      ]
    },
    seguranca: {
      diagnosis: [
        { quote: "Viramos o país do 'prende e solta', onde 4 em cada 10 criminosos capturados são liberados em menos de 24 horas, após a audiência de custódia.", page: 5 },
        { quote: "em um período de 20 anos, o Brasil ultrapassou a marca de um milhão de homicídios, com perdas de vidas que superam as registradas em conflitos como a Guerra Civil da Síria e a guerra entre Rússia e Ucrânia.", page: 5 },
        { quote: "as cerca de 90 facções que atuam no Brasil expandem seu controle sobre o território nacional. Estudos recentes apontam que entre 28 e 60 milhões de pessoas vivem sob o domínio do crime organizado.", page: 5 }
      ],
      proposals: [
        { title: "Classificar facções como organizações terroristas", quotes: [{ quote: "Classificar, nacional e internacionalmente, as facções criminosas como organizações terroristas: enquadrar como terroristas os criminosos que usam táticas e armamentos de guerra para dominar territórios.", page: 5 }] },
        { title: "Presídios de segurança máxima", quotes: [{ quote: "Construir presídios de segurança máxima para confinamento de faccionados.", page: 6 }] },
        { title: "Substituir a progressão automática de pena por prisão efetiva e condicional monitorada", quotes: [{ quote: "Garantir que o criminoso fique efetivamente preso durante o cumprimento da pena substituindo o modelo atual em que o preso progride rapidamente do regime fechado para o semiaberto e aberto, por um modelo de restrição de liberdade seguido de liberdade condicional com monitoramento eletrônico.", page: 7 }] },
        { title: "Dar autonomia aos estados para criar seus próprios crimes e penas", quotes: [{ quote: "Conceder autonomia para que cada estado endureça o combate ao crime, com a possibilidade de instituir novos crimes e agravar penas e regimes de cumprimento de pena em relação ao previsto na legislação federal.", page: 7 }] },
        { title: "Dar respaldo legal e tecnológico à atuação policial", quotes: [{ quote: "Fortalecer a atuação policial, garantindo proteção legal na legítima defesa contra criminosos armados, especialmente com fuzis, e fornecer estrutura para o trabalho policial, integrando em tempo real as informações entre as polícias federal e estaduais e ampliando o acesso a equipamentos e tecnologias.", page: 7 }] },
        { title: "Proteger a mulher e monitorar o agressor: Patrulhas Maria da Penha e Salas Lilás", quotes: [
          { quote: "Ampliar a rede de delegacias da mulher com atuação 24 horas e equipes preferencialmente femininas capacitadas em violência de gênero, e apoiar os estados na construção de sistemas integrados entre Saúde, Segurança Pública e delegacias.", page: 7 },
          { quote: "Expandir nas redes de segurança pública e saúde de estados e municípios as Patrulhas Maria da Penha, que monitoram o cumprimento de medidas protetivas para reduzir a reincidência, e as Salas Lilás, com espaços de acolhimento às vítimas em unidades policiais.", page: 7 }
        ] },
        { title: "Assumir protagonismo no combate ao crime que cruza fronteiras", quotes: [
          { quote: "Ampliar a presença do Estado brasileiro nos postos de fronteira e na Amazônia, integrando inteligência, vigilância e forças de segurança para sufocar a entrada de drogas e armas que abastecem o crime organizado.", page: 38 },
          { quote: "Coordenar com os Estados Unidos, países sul americanos e demais países e atores interessados no combate ao PCC, ao CV e às demais facções terroristas, compartilhando inteligência e atuando de forma conjunta contra suas redes financeiras e operacionais que atravessam fronteiras.", page: 38 }
        ] }
      ]
    },
    saude: {
      diagnosis: [
        { quote: "Três em cada quatro brasileiros dependem exclusivamente do SUS e, muitas vezes, o que encontram é fila: fila para consultas, exames e cirurgias que não podem esperar.", page: 57 },
        { quote: "A atenção primária, que deveria evitar a doença antes que ela se agrave, promovida pela Estratégia de Saúde da Família, ainda não alcança 72 milhões de brasileiros.", page: 57 }
      ],
      proposals: [
        { title: "Registro nacional de saúde sob controle do cidadão", quotes: [{ quote: "Construir um registro nacional de saúde unificado e sob controle do cidadão por meio do prontuário eletrônico, centralizando o histórico clínico do paciente, garantindo a continuidade do cuidado em qualquer unidade de atendimento.", page: 58 }] },
        { title: "Expandir telemedicina", quotes: [{ quote: "Expandir o acesso a consultas médicas e ao monitoramento de doenças por meio da telemedicina, reduzindo a escassez de especialistas em regiões remotas, as longas filas de espera nos grandes centros urbanos e os vazios assistenciais.", page: 57 }] },
        { title: "Reduzir filas do SUS com parcerias com clínicas e hospitais privados", quotes: [{ quote: "Reduzir as filas e o tempo de espera no SUS por meio de parcerias com clínicas e hospitais privados para realização de consultas, exames e cirurgias, com metas claras de atendimentos e qualidade dos serviços, aproveitando a capacidade ociosa dessas unidades de saúde privadas.", page: 60 }] },
        { title: "Expandir hospitais e UPAs por meio de concessões e PPPs", quotes: [{ quote: "Ampliar o uso de parcerias público-privadas para construir e gerir as unidades de saúde, garantindo maior eficiência operacional, melhor experiência para o paciente e controle rigoroso de resultados por parte do poder público.", page: 60 }] }
      ]
    },
    "politica-externa": {
      diagnosis: [
        { quote: "O Brasil já foi uma voz respeitada no mundo, com uma diplomacia reconhecida pelo pragmatismo e pela capacidade de defender os interesses nacionais. Esse patrimônio foi dilapidado nos últimos anos.", page: 36 },
        { quote: "apesar de ser a nona maior economia do mundo, o país ocupa apenas a 22a posição em exportações. [...] o Brasil tem a quinta menor proporção entre importações e seu PIB (15,7%).", page: 36 }
      ],
      proposals: [
        { title: "Sair do BRICS, retomar adesão à OCDE", quotes: [{ quote: "Retirar o Brasil do BRICS de forma diplomática [...] Retomar o processo de adesão do Brasil à OCDE, promovendo as reformas institucionais e econômicas necessárias para aderir ao bloco.", page: 37 }] },
        { title: "Recuperar protagonismo na América do Sul", quotes: [{ quote: "Restabelecer parcerias estratégicas com os países do Mercosul, em especial a Argentina, e aproximar-se dos países da bacia do Pacífico e da Amazônia, devolvendo ao Brasil a influência que perdeu na região.", page: 36 }] }
      ]
    },
    corrupcao: {
      diagnosis: [
        { quote: "O Brasil convive há décadas com um problema estrutural de privilégios, corrupção e baixa responsabilização dos políticos e agentes do Estado que cometem crimes.", page: 8 },
        { quote: "O país manteve a 107a posição no Índice de Percepção da Corrupção em 2025, mesma colocação de 2024, evidenciando a dificuldade de sustentar avanços consistentes na área.", page: 8 },
        { quote: "hoje, mais de 53 mil servidores ativos e inativos recebem acima do teto constitucional, com custo anual estimado em cerca de R$ 20 bilhões, enquanto o orçamento público segue sendo desviado para privilégios e fins eleitorais, com bilhões em emendas parlamentares distribuídas sem transparência adequada.", page: 8 }
      ],
      proposals: [
        { title: "Limitar drasticamente o foro privilegiado", quotes: [{ quote: "Limitar drasticamente o foro privilegiado, mantendo-o apenas para o Presidente da República, de modo que as autoridades não possam se beneficiar da morosidade do Judiciário e, eventualmente, da sua proximidade com o STF para não serem julgadas, levando os hoje intocáveis a uma justiça mais célere e imparcial.", page: 8 }] },
        { title: "Investigação automática de enriquecimento incompatível", quotes: [{ quote: "Estabelecer que toda variação patrimonial incompatível com os rendimentos declarados por titulares de cargos eletivos, funções de confiança e empregos públicos, acima de determinado patamar, dispare automaticamente uma sindicância patrimonial no âmbito da Controladoria-Geral da União, com prazo definido e responsabilização em caso de omissão.", page: 9 }] },
        { title: "Fim de supersalários, férias de 60 dias e regalias da elite do funcionalismo", quotes: [{ quote: "Regulamentar as verbas indenizatórias que podem ser pagas acima do limite remuneratório previsto na Constituição Federal, aplicar esse limite a todos os profissionais do setor público, reduzir férias e licenças especiais, limitando as férias a 30 dias anuais, extinguir auxílios e licenças não previstos no setor privado e acabar com a possibilidade de aposentadoria compulsória como punição.", page: 9 }] },
        { title: "Fim do sigilo de 100 anos e mais transparência pública", quotes: [{ quote: "Tornar a transparência a regra na gestão pública, avançando com a digitalização do governo e a divulgação dos dados em formato aberto, acabando com a possibilidade de sigilos de 100 anos e ampliando as informações divulgadas sobre as despesas públicas, incluindo notas fiscais, uso de imóveis e repasses a organizações da sociedade civil conveniadas.", page: 10 }] }
      ]
    }
  }
};
