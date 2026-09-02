# Diretrizes de Operação (Liberta Eleições)

## Auto Mode (Padrão - Estilo Claude Code)
- Execução 100% autônoma de ponta a ponta: ler, criar, editar arquivos, rodar comandos e testes sem parar para pedir aprovação intermediária.
- Ao receber qualquer instrução, resolver o problema completamente e entregar o resultado validado.
- Exceção: nunca dar `git push` (ou criar/configurar o repositório remoto) sem confirmação explícita — é publicação para fora do disco local.

## Plan Mode
- Ativado quando o usuário solicitar explicitamente planejamento ou usar `/plan`.
- Nessas ocasiões, estruturar o plano detalhado antes de iniciar grandes alterações.

## Ao editar dados de candidatos
- Manter neutralidade: mesmo tratamento visual para todos (cores de `--cand-*` são só categóricas, não de partido), ordem alfabética por nome de urna (não por posição em pesquisa nem pela seleção do momento no diálogo de candidatos).
- `economy.<subtema>.diagnosis`/`.proposals.*.quotes` e `themes.<tema>.diagnosis`/`.proposals.*.quotes` em `data/candidates/*.js` são **citação literal** do PDF — nunca parafrasear. Só o `title` de cada proposta é redigido por nós. Todo `quote` precisa de `page`.
- `basics.birthDate` é a única informação de `basics` que não vem do plano de governo (vem de fonte pública externa) — mudar exige checar a fonte de novo, não estimar.
- `data/poll.js` (percentuais e `presetTop5Ids`) também é proveniência externa, mesma regra do `birthDate`: citar a pesquisa exata (instituto + datas de campo) e nunca inventar percentual para quem a pesquisa não nomeou individualmente (`results[id]: null` nesse caso).
- Um candidato sem Proposta de Governo registrada no TSE leva `planFiled: false` em `data/sources.js`, com `officialPdfUrl`/`localPdfPath`/`pageCount` como `null` **literal** — nunca string vazia, nunca chave omitida (os validadores de `scripts/build_artifact.py` dependem disso, e `app.js` usa `=== false`, não uma checagem de truthiness).
- Ao adicionar/remover um candidato, manter sincronizadas as 3 listas que hoje ainda são hardcoded fora de `CANDIDATE_ORDER`: `SCRIPT_FILES` (`scripts/build_artifact.py`), `DATA_FILES` (`scripts/export_content_md.py`) e os `<script src>` de `index.html`. `scripts/export_plans_md.py` e `scripts/build_plan_texts.py` não têm lista própria — leem `CANDIDATE_ORDER` direto.
- Depois de editar qualquer `data/*.js`, rodar `python3 scripts/build_artifact.py` antes de publicar o Artifact — os dois nunca devem divergir.
- `data/plan-texts.js` é o único arquivo de dados com texto BRUTO/mecânico (alimenta só a Contagem de Palavras) — nunca editar à mão. É gerado por `scripts/build_plan_texts.py` a partir de `.sources-cache/texts/*.txt`, que por sua vez vem de `scripts/extract_plan_texts.py` (PyMuPDF) sobre `sources/*.pdf`. Depois de adicionar ou trocar um PDF em `sources/*.pdf`, rodar os dois scripts (extract → build) antes de publicar, senão `data/plan-texts.js` diverge do PDF real.
