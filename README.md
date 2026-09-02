# Liberta Eleições

Site estático (HTML/CSS/JS puro, sem build, sem dependências) que compara as
propostas dos **13 candidatos a presidente registrados no TSE** para a
eleição de 2026: Lula (PT), Flávio Bolsonaro (PL), Ronaldo Caiado (PSD),
Renan Santos (Missão), Romeu Zema (Novo), Augusto Cury (Avante), Pablo
Marçal (PRTB), Rui Costa Pimenta (PCO), Hertz Dias (PSTU), Edmilson Costa
(PCB), Clariana Barão (DC), Wilson Grassi (Democrata) e Samara Martins (UP).

Cobertura em **6 temas** — Economia, Educação, Segurança Pública, Saúde,
Política Externa e Combate à Corrupção — cada um com aba de **Diagnóstico**
e aba de **Propostas**. Economia é o único tema dividido em 7 subtemas
(cada um com o mesmo par Diagnóstico/Propostas); os outros 5 vão direto ao
par. Todo trecho de posicionamento é **citação literal** dos **planos de
governo oficiais registrados no TSE** (nunca resumo nosso), com a página do
PDF referenciada.

Página única, sem navegação por âncora — trocar de seção nunca muda a URL
(atualizar a página ou compartilhar o link sempre cai no cardzinho
inicial). Ao abrir o site, um **diálogo de seleção de candidatos** pede pra
escolher quem aparece — os 13, um atalho de "Top 5" pela pesquisa
Atlas/Bloomberg ou uma seleção livre — antes de qualquer seção existir;
nada fica marcado por padrão, e a escolha não é salva entre visitas (pede
de novo a cada carregamento). Um botão fixo "Candidatos" no topbar reabre o
mesmo diálogo a qualquer momento, sem recarregar a página, e atualiza Visão
Geral, Temas, Comparar 1×1 e Contagem de Palavras juntos — Fontes é a
exceção: sempre lista os 13, independente do filtro.

Por padrão só o cardzinho inicial aparece. O menu no topo (Visão Geral,
Temas, Comparar 1×1, Contagem de Palavras, Fontes) mostra uma seção por vez
em tela cheia, escondendo o cardzinho e as demais — é sempre uma coisa de
cada vez, nunca duas seções juntas nem seção e cardzinho ao mesmo tempo.
Clicar no logo "Poder & Mercado" no canto esquerdo do topbar volta pro
cardzinho inicial (é a única forma de voltar — não tem item "Início" na
navegação). Dentro de Temas, os 6 temas ficam em abas (clique para
trocar), e Economia tem um segundo nível de abas para os subtemas.

Este repositório é uma bifurcação de
[ftm-eleicoes](https://github.com/guivaraschinalves/ftm-eleicoes), do mesmo
autor, com o escopo reduzido: sem Perfil Político nem Papel do Estado
(leitura editorial, não citação — os dois ficaram de fora), mas com
**Contagem de Palavras reincorporada** (contagem mecânica de ocorrências no
texto integral do plano — bem diferente das citações com página do resto do
site; ver "## Contador de palavras" abaixo) e com um tema novo, Combate à
Corrupção, que o original não tinha.

## Identidade visual

Paleta e tipografia herdadas da marca **Poder & Mercado**: verde-escuro
`#0D2220`, verde `#1ED760`, dourado `#FEE801`, branco e preto — dourado é a
cor de ação (abas ativas, sempre com texto escuro por cima, igual aos CTAs
da marca), verde é o brilho ambiente atrás do hero e a borda que aparece ao
passar o mouse nos cards. Tipografia: **Neue Haas Grotesk Display Pro** nos
títulos (fonte paga, sem CDN público — cai para Helvetica Neue/Arial quando
não instalada) e **Montserrat** (Google Fonts) no texto e nos rótulos. Os
tokens de cor/fonte ficam todos no topo de `styles.css`; claro e escuro
continuam suportados via `prefers-color-scheme`/`data-theme`, os dois
recolorindo para a mesma paleta.

O mecanismo de dados (`window.X = {...}` em `data/*.js`, sem nenhuma
chamada de rede em runtime) é herdado do
[ftm-chartbook](https://github.com/guivaraschinalves/ftm-chartbook), outro
projeto do mesmo autor — o site também precisa funcionar como Claude
Artifact, que bloqueia qualquer `fetch()` externo.

## Estrutura

```
index.html          → casca da página (sidebar, diálogo de seleção, seções) — script tags na ordem certa
styles.css           → visual (tokens de cor/tipografia/candidato, cards, tabs, diálogo)
app.js               → lê os dados, monta as seções e o diálogo de seleção (DOM puro, sem framework)
data/
  taxonomy.js         → os 6 temas (window.THEMES), subtemas de Economia, ordem dos 13 candidatos
  sources.js           → URL oficial de cada plano no TSE + caminho do PDF local (+ planFiled)
  plan-texts.js         → texto INTEGRAL de cada plano (window.PLAN_TEXTS) — gerado, não editar à mão; só a Contagem de Palavras usa
  poll.js               → pesquisa Atlas/Bloomberg: só alimenta o preset "Top 5" e os badges do diálogo
  candidates/*.js       → um arquivo por candidato: dados básicos (com data de nascimento) + citações por tema
sources/             → foto oficial (TSE) + cópia de cada PDF por candidato
scripts/
  build_artifact.py    → gera dist/liberta-eleicoes-artifact.html (versão self-contained p/ Artifact)
  export_content_md.py  → gera CONTEUDO-DO-SITE.md (dump de data/*.js em markdown)
  export_plans_md.py     → gera PLANOS-DE-GOVERNO.md (texto bruto dos PDFs, um arquivo só)
  extract_plan_texts.py  → extrai .sources-cache/texts/<id>.txt de sources/<id>.pdf (PyMuPDF)
  build_plan_texts.py    → gera data/plan-texts.js a partir de .sources-cache/texts/
  audit_coverage.py      → gera AUDITORIA-COBERTURA.md (páginas com possível conteúdo ainda não citado)
CONTEUDO-DO-SITE.md      → leitura de apoio: tudo que está em data/*.js, formatado (não é lido pelo site)
PLANOS-DE-GOVERNO.md     → leitura de apoio: os planos de governo completos, um atrás do outro
AUDITORIA-COBERTURA.md   → leitura de apoio: páginas sinalizadas por audit_coverage.py, pra revisar
```

## Como atualizar um candidato

Edite o arquivo dele em `data/candidates/<id>.js`. Cada tema (`economy.<subtema>`
para Economia, `themes.<tema>` para os outros 5) tem:
- `diagnosis`: array de `{ quote, page }` — trecho **literal** do plano sobre
  o cenário atual, sem título nosso.
- `proposals`: array de `{ title, quotes: [{ quote, page }] }` — `title` é
  redigido por nós só para identificar o card; `quotes` é sempre transcrição
  literal do plano (pode ter mais de uma citação quando a proposta precisa de
  dois trechos para fazer sentido).

Se o plano não aborda um tema/subtema, deixe os arrays vazios — o site mostra
"Não abordado explicitamente no plano de governo" em vez de um card em
branco (evita parecer erro de coleta).

`basics.birthDate` (formato `"AAAA-MM-DD"`) alimenta a Idade mostrada em
Visão Geral — calculada em `app.js` (`calcAge`) a partir da data de hoje,
não gravada como número fixo, então continua correta em qualquer visita.

Para trocar/adicionar um candidato: crie `data/candidates/<id>.js` seguindo
o formato acima, adicione `<script src="data/candidates/<id>.js">` em
`index.html` (e nas listas `SCRIPT_FILES` de `scripts/build_artifact.py` e
`DATA_FILES` de `scripts/export_content_md.py` — `scripts/export_plans_md.py`
não precisa, ele lê `CANDIDATE_ORDER` direto), inclua `<id>` em
`CANDIDATE_ORDER` (`data/taxonomy.js`, ordenado por `ballotName`), adicione a
entrada em `data/sources.js`, uma linha em `results` de `data/poll.js` (ou
`null` se a pesquisa de referência não nomeou esse candidato), e coloque a
foto oficial em `sources/<id>.jpg` e o PDF em `sources/<id>.pdf`.

Depois de colocar o PDF, rode `python3 scripts/extract_plan_texts.py <id>`
(extrai o texto pra `.sources-cache/texts/<id>.txt` via PyMuPDF) e em
seguida `python3 scripts/build_plan_texts.py` (regenera `data/plan-texts.js`
a partir do cache) — sem isso o candidato aparece em Visão Geral/Temas mas
fica de fora da Contagem de Palavras.

Depois de escrever as citações (ou sempre que atualizar as de um candidato
já existente), rode `python3 scripts/audit_coverage.py <id>` — ver
"## Auditoria de cobertura" abaixo — pra conferir que nenhum trecho
relevante ficou de fora antes de publicar.

Se o candidato registrou candidatura **sem** entregar Proposta de Governo ao
TSE, marque `planFiled: false` na entrada dele em `data/sources.js` (com
`officialPdfUrl`/`localPdfPath`/`pageCount` como `null` **literal**, não
string vazia nem chave omitida — os validadores de `build_artifact.py`
dependem disso). O site então mostra, em todo card de Temas e na linha de
Fontes desse candidato, uma mensagem clara de que não há plano registrado —
bem diferente de "não abordado", que pressupõe um plano real que só não fala
daquele tema.

Para adicionar/renomear um tema: edite `window.THEMES` em `data/taxonomy.js`
(só o tema `economia` leva `subthemes`) e replique a chave em
`themes.<id>` de cada `data/candidates/*.js`.

## Auditoria de cobertura

A seleção de citações é leitura manual, tema por tema — não é uma busca
automática/exaustiva, então não garante sozinha que nada relevante ficou de
fora (o risco cresce com o tamanho do plano). `scripts/audit_coverage.py`
existe pra reduzir esse risco: varre o texto integral de cada plano
(`.sources-cache/texts/<id>.txt`) por palavras-chave de cada um dos 12
temas/subtemas e sinaliza **páginas que mencionam o assunto mas ainda não
têm nenhuma citação lá** (mesma granularidade de página que `quote.page` já
usa, sem depender de detectar quebra de parágrafo — a extração de PDF não
garante isso). Roda assim:

```
python3 scripts/audit_coverage.py              # todos os candidatos com plano
python3 scripts/audit_coverage.py caiado zema  # só os ids passados
```

Gera/atualiza `AUDITORIA-COBERTURA.md` (leitura de apoio, como
`CONTEUDO-DO-SITE.md`/`PLANOS-DE-GOVERNO.md` — não é lido pelo site). A
ferramenta **não decide sozinha** o que falta: cada página sinalizada
precisa ser lida (no `.txt` ou no PDF, pra ter o contexto completo) e
julgada — já coberta em espírito por uma citação existente, tangencial/menção
de passagem, ou genuinamente um ponto novo, caso em que vira uma citação
literal nova em `data/candidates/<id>.js` (nunca alterando as que já
existem). Rodar de novo depois: a página some da lista assim que ganha uma
citação naquele tema, então o relatório sempre mostra só o que ainda não
foi decidido.

As listas de palavras-chave (`KEYWORDS` no script) são um ponto de partida
editorial, não uma lista fechada — ajustar é esperado conforme aparecerem
falsos negativos (tema relevante que nenhuma palavra-chave pegou) ou falsos
positivos (muito ruído numa categoria específica). O filtro já exige pelo
menos 3 palavras-chave distintas na mesma página e ignora páginas de
sumário/índice — sem isso, um plano de governo holístico (que menciona
saúde/educação/segurança de passagem o tempo todo, só conectando políticas)
sinaliza quase toda página do documento.

## Seletor de candidatos

Nada em Visão Geral, Temas ou Comparar 1×1 existe até o usuário confirmar
uma seleção no diálogo que abre sozinho ao carregar a página (`#candidate-picker`
em `index.html`, montado por `buildCandidatePicker`/`applySelection` em
`app.js`) — a escolha não fica salva entre visitas, então o diálogo abre de
novo a cada carregamento. Um botão fixo no topbar ("Candidatos: ...") reabre
o mesmo diálogo depois, pré-marcado com a seleção atual, sem esconder o
resto da página (o `<dialog>` nativo já bloqueia interação com o fundo via
`::backdrop`). Fontes é a única seção que ignora o filtro — sempre lista os
13, para referência de transparência.

O preset "Top 5" vem de `data/poll.js` (`presetTop5Ids`), hoje a pesquisa
Atlas/Bloomberg — trocar de pesquisa é editar esse arquivo, nunca a ordem de
exibição dos candidatos (`CANDIDATE_ORDER`), que continua sempre alfabética
por nome de urna, sem relação com pesquisa nenhuma.

## Contador de palavras

Digite uma palavra em Contagem de Palavras para ver um gráfico de barras de
quantas vezes ela aparece no **texto completo** do plano de governo de cada
candidato atualmente selecionado — os mesmos `visibleIds` de Visão
Geral/Temas/Comparar 1×1 (trocar a seleção no diálogo de candidatos
recalcula o gráfico sozinho, sem precisar buscar de novo). Busca por
**palavra inteira** (não substring — "imposto" não casa com "impostos"),
sem diferenciar maiúscula/minúscula nem acento (`normalizeForMatch`/
`countWordOccurrences` em `app.js`). Candidato com `planFiled: false` em
`data/sources.js` fica de fora do gráfico com um aviso, nunca vira uma barra
de "0" — "0 ocorrências reais" e "não há plano pra contar" são fatos
diferentes.

Diferente do resto do site, isto é **contagem mecânica bruta**, não
citação: o texto vem de `data/plan-texts.js` (`window.PLAN_TEXTS`), gerado
por `scripts/build_plan_texts.py` a partir do cache em
`.sources-cache/texts/*.txt`, que por sua vez vem de
`scripts/extract_plan_texts.py` (PyMuPDF sobre `sources/*.pdf`). Rode os
dois sempre que adicionar ou trocar um PDF — ver "Como atualizar um
candidato" acima.

Passar o mouse (ou navegar com Tab) em cima de uma barra mostra um tooltip
com a **taxa de ocorrência a cada 10 mil palavras do plano** — não a
contagem absoluta, que já fica visível no número ao lado da barra. Planos
com menos de 10 mil palavras não mostram taxa (extrapolaria demais pra ser
representativa): o tooltip mostra só o tamanho do plano nesse caso, ex.
"Clariana Barão possui 1.945 palavras no plano." O tamanho de cada plano é
calculado a partir do próprio `window.PLAN_TEXTS`, não é um número gravado
em lugar nenhum.

## De onde vieram os dados

Os PDFs e fotos oficiais vêm do **Portal de Dados Abertos do TSE**
(`dadosabertos.tse.jus.br/dataset/candidatos-2026`, recurso "BR — Proposta de
Governo", pacote `proposta_governo_2026_BR.zip`, e recurso "BR — Fotos de
Candidatos"), identificados cruzando o `SQ_CANDIDATO` de cada candidato no
arquivo de metadados (`consulta_cand_2026_BR.csv`, recurso "Candidatos") com
o nome do arquivo dentro dos pacotes (`2026BR<SQ_CANDIDATO>_01.pdf` para o
plano, `FBR<SQ_CANDIDATO>_div.jpg` para a foto). Quando o domínio
`dadosabertos.tse.jus.br` não está acessível diretamente, os mesmos arquivos
— confirmados byte a byte idênticos ao original do TSE — podem ser obtidos
via `static.ndmais.com.br/eleicoes/2026/...`, que replica essa mesma
estrutura de nomes. Fallback individual de PDF, quando necessário:
`divulgacandcontas.tse.jus.br/divulga/rest/arquivo/doc/<ID>`. Em caso de
dúvida ou divergência, o PDF oficial (linkado em cada card e na seção
Fontes) prevalece sobre qualquer citação aqui reproduzida.

As datas de nascimento (`basics.birthDate`) vêm de fontes públicas — perfis
oficiais no Senado/governos estaduais e cobertura jornalística da candidatura
de cada um — reunidas na pesquisa que originou este repositório; nenhuma
delas consta do plano de governo em si.

## Testar localmente

```
cd liberta-eleicoes
python3 -m http.server 8000
```

Abra `http://localhost:8000`. Não depende de nenhuma API externa — funciona
igual local e publicado.

## Gerar e publicar o Artifact

```
cd liberta-eleicoes
python3 scripts/build_artifact.py
```

Gera `dist/liberta-eleicoes-artifact.html`: HTML único, com CSS, todos os
dados e as fotos (`sources/*.jpg`) embutidos como data URI — sem nenhum
`<link>`/`<script src>` externo — pronto pra colar na ferramenta de
Artifact. Os PDFs (`sources/*.pdf`) **não** são embutidos: o build zera
`localPdfPath` nessa versão e o site usa só o link "Ver no TSE"
(`officialPdfUrl`), que aponta pra fonte oficial de qualquer forma. Rode de
novo sempre que mudar dado, estilo ou `app.js`; nunca edite o arquivo gerado
à mão.

## Arquivos de leitura de apoio (não lidos pelo site)

Dois arquivos em markdown, gerados a partir dos mesmos dados/fontes que o
site usa, para quem quer ler tudo de uma vez fora do navegador:

```
python3 scripts/export_content_md.py   # gera CONTEUDO-DO-SITE.md
python3 scripts/export_plans_md.py     # gera PLANOS-DE-GOVERNO.md
```

`CONTEUDO-DO-SITE.md` é o conteúdo já curado (o que está em `data/*.js`,
formatado — diagnóstico e propostas com citação e página, por tema).
`PLANOS-DE-GOVERNO.md` é a matéria-prima: o texto bruto extraído dos PDFs
oficiais, um atrás do outro (candidato sem plano registrado entra só com um
aviso, sem texto). Regenere os dois sempre que os dados mudarem; nenhum dos
dois é referenciado por `index.html`/`app.js`.

## Publicar no GitHub Pages

```
cd liberta-eleicoes
git add .
git commit -m "Atualiza propostas"
git push
```
