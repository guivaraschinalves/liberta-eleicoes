# Liberta Eleições

Site estático (HTML/CSS/JS puro, sem build, sem dependências) que compara as
propostas dos 5 candidatos com mais intenção de voto na eleição presidencial
de 2026 (pesquisa BTG/Nexus, 17/ago/2026): Lula (PT), Flávio Bolsonaro (PL),
Ronaldo Caiado (PSD), Renan Santos (Missão) e Romeu Zema (Novo).

Cobertura em **6 temas** — Economia, Educação, Segurança Pública, Saúde,
Política Externa e Combate à Corrupção — cada um com aba de **Diagnóstico**
e aba de **Propostas**. Economia é o único tema dividido em 7 subtemas
(cada um com o mesmo par Diagnóstico/Propostas); os outros 5 vão direto ao
par. Todo trecho de posicionamento é **citação literal** dos **planos de
governo oficiais registrados no TSE** (nunca resumo nosso), com a página do
PDF referenciada.

Página única, navegação por âncora. As 4 seções principais (Visão Geral,
Temas, Comparar 1×1, Fontes) são `<details>` retráteis, todas fechadas por
padrão ao abrir o site — clique no título de cada uma para abrir,
independentes umas das outras. Dentro de Temas, os 6 temas ficam em abas
(clique para trocar), e Economia tem um segundo nível de abas para os
subtemas.

Este repositório é uma bifurcação de
[ftm-eleicoes](https://github.com/guivaraschinalves/ftm-eleicoes), do mesmo
autor, com o escopo reduzido: sem Perfil Político, Papel do Estado nem
Contagem de Palavras (leitura editorial e contagem mecânica, respectivamente
— não citação), e com um tema novo, Combate à Corrupção, que o original não
tinha.

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
index.html          → casca da página (sidebar, seções) — script tags na ordem certa
styles.css           → visual (tokens de cor/tipografia/candidato, cards, tabs)
app.js               → lê os dados e monta as seções (DOM puro, sem framework)
data/
  taxonomy.js         → os 6 temas (window.THEMES), subtemas de Economia, ordem dos candidatos
  sources.js           → URL oficial de cada plano no TSE + caminho do PDF local
  candidates/*.js       → um arquivo por candidato: dados básicos (com data de nascimento) + citações por tema
sources/             → foto oficial (TSE) + cópia de cada PDF por candidato
scripts/
  build_artifact.py    → gera dist/liberta-eleicoes-artifact.html (versão self-contained p/ Artifact)
  export_content_md.py  → gera CONTEUDO-DO-SITE.md (dump de data/*.js em markdown)
  export_plans_md.py     → gera PLANOS-DE-GOVERNO.md (texto bruto dos 5 PDFs, um arquivo só)
CONTEUDO-DO-SITE.md  → leitura de apoio: tudo que está em data/*.js, formatado (não é lido pelo site)
PLANOS-DE-GOVERNO.md → leitura de apoio: os 5 planos de governo completos, um atrás do outro
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
`index.html` (e na lista `SCRIPT_FILES` de `scripts/build_artifact.py`),
inclua `<id>` em `CANDIDATE_ORDER` (`data/taxonomy.js`), adicione a entrada
em `data/sources.js`, e coloque a foto oficial em `sources/<id>.jpg` e o PDF
em `sources/<id>.pdf`.

Para adicionar/renomear um tema: edite `window.THEMES` em `data/taxonomy.js`
(só o tema `economia` leva `subthemes`) e replique a chave em
`themes.<id>` de cada `data/candidates/*.js`.

## De onde vieram os dados

Os 5 PDFs foram baixados do **Portal de Dados Abertos do TSE**
(`dadosabertos.tse.jus.br/dataset/candidatos-2026`, recurso "BR — Proposta de
Governo", pacote `proposta_governo_2026_BR.zip`) e identificados cruzando o
`SQ_CANDIDATO` de cada um no arquivo de metadados
(`consulta_cand_2026_BR.csv`, recurso "Candidatos") com o nome do arquivo PDF
dentro do pacote (`2026BR<SQ_CANDIDATO>_01.pdf`). As fotos oficiais vieram do
recurso "BR — Fotos de Candidatos" do mesmo dataset, pareadas pelo mesmo
`SQ_CANDIDATO`. Fallback individual de PDF, quando necessário:
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
`PLANOS-DE-GOVERNO.md` é a matéria-prima: o texto bruto extraído dos 5 PDFs
oficiais, um atrás do outro. Regenere os dois sempre que os dados mudarem;
nenhum dos dois é referenciado por `index.html`/`app.js`.

## Publicar no GitHub Pages

```
cd liberta-eleicoes
git add .
git commit -m "Atualiza propostas"
git push
```
