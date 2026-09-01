# Diretrizes de Operação (Liberta Eleições)

## Auto Mode (Padrão - Estilo Claude Code)
- Execução 100% autônoma de ponta a ponta: ler, criar, editar arquivos, rodar comandos e testes sem parar para pedir aprovação intermediária.
- Ao receber qualquer instrução, resolver o problema completamente e entregar o resultado validado.
- Exceção: nunca dar `git push` (ou criar/configurar o repositório remoto) sem confirmação explícita — é publicação para fora do disco local.

## Plan Mode
- Ativado quando o usuário solicitar explicitamente planejamento ou usar `/plan`.
- Nessas ocasiões, estruturar o plano detalhado antes de iniciar grandes alterações.

## Ao editar dados de candidatos
- Manter neutralidade: mesmo tratamento visual para todos (cores de `--cand-*` são só categóricas, não de partido), ordem alfabética por nome de urna (não por posição em pesquisa).
- `economy.<subtema>.diagnosis`/`.proposals.*.quotes` e `themes.<tema>.diagnosis`/`.proposals.*.quotes` em `data/candidates/*.js` são **citação literal** do PDF — nunca parafrasear. Só o `title` de cada proposta é redigido por nós. Todo `quote` precisa de `page`.
- `basics.birthDate` é a única informação de `basics` que não vem do plano de governo (vem de fonte pública externa) — mudar exige checar a fonte de novo, não estimar.
- Depois de editar qualquer `data/*.js`, rodar `python3 scripts/build_artifact.py` antes de publicar o Artifact — os dois nunca devem divergir.
