# Subsistema da Loja da Vivi

Ferramenta interna para acelerar rotinas operacionais de precificação e emissão/organização de documentos fiscais.

## Objetivo

- Reduzir tempo de operação no escritório.
- Padronizar cálculo de preço líquido entre marketplaces.
- Apoiar geração e organização de DANFE/XML.

## Módulos

- `calc`: calculadora de marketplaces.
- `core`: estrutura geral do subsistema (UI, navegação e páginas auxiliares).
- `danfe`: gerador de DANFE simplificada.

## Licença

- `CC BY-NC-SA 4.0`

## Changelog Unificado

Base de versionamento: **versão da calculadora** (`calc`).

Quando uma mudança não altera a calculadora, ela ainda entra na mesma linha do tempo e recebe:

- `base-calc`: versão da calculadora vigente no período.
- `módulo`: `core` ou `danfe`.

### Padrão de escrita (dev)

Use sempre frases curtas, no formato:

- `tipo(escopo): ação objetiva`

Tipos sugeridos:

- `feat`: nova funcionalidade.
- `fix`: correção de bug.
- `refactor`: melhoria interna sem mudança funcional.
- `style`: mudança visual/UX.
- `docs`: documentação.
- `chore`: manutenção/infra.

### Template para novas entradas

```md
### [versão] - AAAA-MM-DD
- tipo(módulo): mudança 1
- tipo(módulo): mudança 2
- base-calc: x.y.z (use quando o módulo não for `calc`)
```

## Histórico

### [5.0.1] - 2026-05-04
- fix(calc/ml): corrigiu taxa da faixa até R$ 12,50 para 50% do valor de venda (era valor fixo zerado).
- refactor(calc/ml): migrou `Taxa_ML_ATE12` de constante fixa para percentual `Taxa_ML_ATE12_PCT = 0.5`, deslocando o cálculo do numerador para o denominador nas fórmulas de MLC e MLP.

### [5.0.0] - 2026-04-03
- style(core): aplicou repaginação global com refinamento de superfícies, interações e legibilidade.
- style(core): redesenhou o rodapé em todas as páginas principais com layout unificado e atalhos úteis.
- refactor(core): centralizou estilos dos módulos XML/DANFE no CSS global e removeu blocos inline duplicados.
- fix(calc/olist): corrigiu mapeamento de frete da faixa `0.5 a 1kg` para evitar subprecificação no canal Olist.
- test(calc): adicionou stress test financeiro com alta cobertura de cenários e validação de sanidade numérica.
- docs(core): atualizou referência de versão da calculadora para `5.0.0`.

### [4.7.0] - 2026-03-31
- docs(calc): documentou os arquivos principais.
- feat(core): adicionou seletor de tema claro/escuro.
- style(core): atualizou visual para liquid glass.
- refactor(calc): otimizou fórmulas de cálculo.

### [4.6.2] - 2026-03-30
- feat(calc/ml): atualizou comissão do ML Clássico para `14%`.
- feat(calc/ml): atualizou comissão do ML Premium para `19%`.
- feat(calc/ml): revisou tabela de taxas fixas por faixa de preço.
- feat(calc/shopee): atualizou comissão por faixa (`<=79` e `>79`).
- feat(calc/shopee): revisou tabela de taxas fixas por faixa de preço.

### [4.6.1] - 2025-11-19
- fix(calc/tax): corrigiu alíquota do CNPJ FERREIRA PROSPERITA para `11%`.

### [4.6.0] - 2025-11-12
- feat(calc): adicionou canal AMAZON.

### [4.5.1] - 2025-09-12
- feat(calc/magalu): atualizou taxa fixa de `R$ 5` para `R$ 2`.

### [4.5.0] - 2025-09-04
- feat(calc): adicionou canais OLIST e RD.

### [4.4.3] - 2025-08-08
- feat(calc): adicionou custo de insumos por peso (`<=300g` e `>300g`).

### [4.4.2] - 2025-08-01
- fix(calc/ml): corrigiu reaproveitamento indevido de cálculo entre Clássico e Premium.

### [4.4.1] - 2025-07-29
- fix(calc/rav): corrigiu cálculo do CNPJ RAV conforme orientação contábil.
- refactor(calc): abreviou nomenclaturas de constantes.

### [4.4.0] - 2025-07-28
- feat(calc/rav): adicionou regra específica de lucro presumido para RAV.
- refactor(calc): simplificou fórmulas de cálculo.
- chore(calc): removeu fórmulas de marketplaces não utilizados.

### [4.3.5] - 2025-07-21
- feat(calc/tax): atualizou alíquotas de CNPJ.

### [4.3.4] - 2025-05-20
- chore(calc): atualizou nomes de CNPJ.
- docs(core): adicionou link de changelog no texto de versão.

### [4.3.3] - 2025-02-19
- fix(calc/shopee): corrigiu erro de cálculo manual em valores próximos de `500`.

### [4.3.2] - 2025-01-22
- feat(calc): adicionou linha de cálculo para vendas presenciais.

### [4.3.1] - 2024-12-18
- feat(calc/ml): atualizou regras de taxas fixas por faixa de preço.

### [4.3.0] - 2024-07-02
- feat(calc): adicionou marketplace SHEIN.

### [core/3.2.0] - 2024-07-02
- style(core): aplicou novo design com paleta Material e fonte Nunito.
- base-calc: `4.3.0`

### [4.2.9] - 2024-06-19
- fix(calc): ajustou exibição de porcentagem com separador decimal em vírgula.

### [4.2.8] - 2024-06-13
- feat(calc/shopee): atualizou taxa fixa para `R$ 4`.

### [core/3.1.0] - 2024-06-12
- feat(core): adicionou página de calculadora de caixa.
- base-calc: `4.2.8`

### [4.2.7] - 2024-05-23
- feat(calc/shopee): adicionou `+2%` de comissão (programa Shopee Antecipa).

### [4.2.6] - 2024-05-15
- fix(calc/ml): corrigiu taxas fixas até `R$ 78,99` e acima de `R$ 79,00`.

### [4.2.5] - 2024-04-29
- feat(calc/magalu): atualizou taxas de frete para nova política.

### [4.2.4] - 2024-04-10
- refactor(calc): reescreveu fórmulas de cálculo por valor líquido.
- refactor(calc): reescreveu fórmulas de cálculo por porcentagem líquida.
- chore(calc): marcou RD e WebContinental em manutenção por falta de dados.

### [4.2.3] - 2024-04-09
- refactor(calc): reescreveu fórmulas de cálculo manual.

### [4.2.2] - 2024-04-05
- feat(calc): cadastrou e atualizou variáveis de marketplaces (exceto WebContinental).
- feat(calc): removeu opção de categoria e passou a usar maior comissão por marketplace.

### [4.2.1] - 2024-04-04
- fix(calc/ui): corrigiu layout relacionado à troca de cores por CNPJ.
- feat(calc): adicionou RD, SITE-UOOL e SITE-ATACADO (em desenvolvimento).
- chore(calc): atualizou razão social dos CNPJs.
- feat(calc): adicionou CNPJ VIVIANE CHRISTINA FERREIRA.

### [4.2.0] - 2024-04-03
- style(calc): atualizou layout para novo padrão visual.
- feat(calc): adicionou CASAS BAHIA (em desenvolvimento).
- chore(calc): marcou AMERICANAS em manutenção.
- chore(calc): removeu canal SITE.

### [danfe/1.0.0] - 2024-03-04
- release(danfe): marcou versão estável após ciclo de testes.
- style(danfe): atualizou layout para novo padrão visual.
- base-calc: `4.1.2`

### [4.1.2] - 2024-01-18
- feat(calc/site): atualizou taxa de cartão do canal SITE.

### [4.1.1] - 2023-10-10
- feat(calc/ui): adicionou diferenciação visual por CNPJ.
- feat(calc/ui): adicionou textos de ajuda em spoiler.
- fix(calc/site): corrigiu comissão do canal SITE.

### [4.1.0] - 2023-09-26
- feat(calc/site): adicionou cálculo em `12x` com juros.
- feat(calc/site): adicionou cálculo para PIX.

### [core/2.0.6] - 2023-10-24
- docs(core): corrigiu ortografia no README.
- base-calc: `4.1.1`

### [danfe/0.1.1] - 2023-10-19
- fix(danfe): corrigiu exibição de centavos nos valores.
- base-calc: `4.1.1`

### [core/2.0.5] - 2023-10-18
- feat(core): adicionou botão do gerador DANFE simplificado.
- style(core): adicionou fonte Lekton em partes da UI.
- base-calc: `4.1.1`

### [danfe/0.1.0] - 2023-10-18
- feat(danfe): publicou versão alpha funcional.
- feat(danfe): adicionou GIF de carregamento durante geração.
- base-calc: `4.1.1`

### [danfe/0.0.1] - 2023-10-17
- feat(danfe): iniciou desenvolvimento e liberou para testes.
- base-calc: `4.1.1`

### [core/2.0.4] - 2023-10-16
- docs(core): moveu changelog para a página do projeto.
- base-calc: `4.1.1`

### [core/2.0.3] - 2023-09-29
- fix(core/ui): corrigiu centralização dos botões.
- base-calc: `4.1.0`

### [core/2.0.2] - 2023-09-26
- fix(core): corrigiu link social.
- base-calc: `4.1.0`

### [core/2.0.1] - 2023-09-05
- fix(core/css): corrigiu erro de sintaxe que quebrava o CSS.
- base-calc: `4.0.3`

### [core/2.0.0] - 2023-09-05
- release(core): publicou versão online hospedada no GitHub.
- chore(core): reorganizou estrutura de pastas.
- base-calc: `4.0.3`

### [4.0.3] - 2023-09-15
- fix(calc): corrigiu bugs de fórmula percentual em ML Clássico, ML Premium e SITE.
- fix(calc/shopee): corrigiu cálculo manual com líquido acima do real.

### [4.0.2] - 2023-09-14
- feat(calc/shopee): atualizou taxa fixa de `R$ 2` para `R$ 3`.

### [4.0.1] - 2023-08-22
- fix(calc): corrigiu bloqueio de cálculo para custo abaixo de `R$ 8`.
- refactor(calc): reorganizou e unificou estilos CSS.

### [core/1.0.2] - 2023-08-26
- feat(core/estoque): preparou bloco "Todos os Estoques" para conferência entre lojas.
- base-calc: `4.0.1`

### [core/1.0.1] - 2023-08-21
- feat(core/estoque): adicionou bloco "Todos os Estoques" (em desenvolvimento).
- style(core): centralizou botões na página.
- base-calc: `4.0.0`

### [4.0.0] - 2023-08-17
- release(calc): lançou versão HTML para uso individual da calculadora.
- fix(calc): corrigiu fórmulas com sugestão de preço subestimada.
- docs(calc): referenciou changelog legado da planilha `3.2.1`.

### [core/1.0.0] - 2023-08-18
- release(core): lançamento oficial da base do subsistema.
- docs(core): redesenhou changelog com separação por função.
- style(core): aplicou nova paleta global.
- refactor(core): reorganizou estilos CSS.
- docs(core): melhorou documentação.
- base-calc: `4.0.0`

### [core/0.1.1] - 2023-08-17
- feat(core): adicionou calculadora para marketplaces em HTML.
- base-calc: `4.0.0`

### [core/0.1.0] - 2023-08-16
- refactor(core): consolidou estilos CSS em arquivo único.
- feat(core/estoque): adicionou SITE na lista de estoque.
- feat(core): adicionou botão de acesso à calculadora (em breve).
- refactor(core): limpou variáveis de código.
- docs(core): melhorou documentação.
- base-calc: `pré-4.0.0`

### [core/0.0.1] - 2023-08-15
- feat(core): iniciou desenvolvimento e liberou para testes.
- base-calc: `pré-4.0.0`
