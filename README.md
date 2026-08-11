# Subsistemas da Loja da Vivi

Este projeto e um conjunto de ferramentas internas da Loja da Vivi para operacao do dia a dia.

Ele foi feito para reduzir erro manual e acelerar tarefas repetitivas.

## O que existe aqui

1. Calculadora de marketplaces ([index.html](index.html))
- Calcula preco de venda e liquido esperado por canal.
- Usa variaveis vindas de uma planilha publica do Google Sheets.

2. Calculadora de caixa ([caixa.html](caixa.html))
- Soma cedulas e moedas rapidamente.

3. Gerador de etiquetas A4 ([precos.html](precos.html))
- Le XLS/CSV e gera etiquetas para impressao.

4. Gerador DANFE simplificada ([XMLtoHTML.html](XMLtoHTML.html))
- Converte XML para visualizacao e tabelas auxiliares.

## Estrutura de pastas (resumo)

- [index.html](index.html), [caixa.html](caixa.html), [precos.html](precos.html), [XMLtoHTML.html](XMLtoHTML.html): paginas principais.
- [JS/calculadora.js](JS/calculadora.js): motor da calculadora e sincronizacao com Google Sheets.
- [JS/ui.js](JS/ui.js): tema, login e comportamento da interface.
- [JS/precos.js](JS/precos.js): logica do gerador de etiquetas.
- [style.css](style.css): estilos globais.
- [STYLES](STYLES): imagens, icones e fontes.
- [tests](tests): scripts de teste/regressao.
- [docs](docs): documentacao tecnica detalhada.
- [CHANGELOG.md](CHANGELOG.md): historico de versoes.

## Como abrir e usar (sem programacao)

1. Abra [index.html](index.html) no navegador (ou pelo servidor interno da empresa).
2. Faça login na tela inicial.
3. Preencha CNPJ, nivel, peso e custo.
4. Use um dos 3 modos:
- Manual: voce informa o preco.
- Valor liquido: voce informa quanto quer receber.
- Percentual liquido: voce informa a margem em %.
5. Veja os resultados na tabela.
6. Se quiser atualizar as variaveis da planilha na hora, clique em Atualizar planilha.

## Fonte de dados da calculadora

- A calculadora busca variaveis apenas da planilha Google configurada em [JS/calculadora.js](JS/calculadora.js).
- Nao existe arquivo local de variaveis para fallback.
- Se a planilha estiver privada, offline ou com formato incorreto, os calculos podem falhar.

Formato esperado da planilha CSV:
- Deve conter colunas chave e valor.
- Cada linha deve ter uma variavel conhecida pela calculadora.
- Opcional: metadado de ultima alteracao com chave PLANILHA_ULTIMA_ALTERACAO (ou META_ULTIMA_ATUALIZACAO / ULTIMA_ATUALIZACAO).

## Regras importantes para manutencao

1. Ao alterar regra de preco, revise sempre:
- [JS/calculadora.js](JS/calculadora.js)
- [index.html](index.html) (campos e linhas de resultado)
- [tests/regression-calculadora.js](tests/regression-calculadora.js)

2. Ao alterar visual, revise:
- [style.css](style.css)
- [JS/ui.js](JS/ui.js)

3. Ao alterar etiquetas, revise:
- [precos.html](precos.html)
- [JS/precos.js](JS/precos.js)

## Testes rapidos recomendados

Validar sintaxe JS:

```bash
node --check JS/calculadora.js
node --check JS/ui.js
node --check JS/precos.js
```

Rodar regressao da calculadora:

```bash
node tests/regression-calculadora.js
node tests/stress-calculadora-financeiro.js
```

## Solucao de problemas comuns

1. Mensagem de falha na planilha
- Verifique se o link da planilha esta publico.
- Verifique se o cabecalho tem chave e valor.

2. Mudou a planilha e nao refletiu
- Clique em Atualizar planilha.
- Recarregue a pagina.

3. Pagina abre sem estilo
- Confira se a pasta [STYLES](STYLES) esta presente.
- Confira se [style.css](style.css) esta na raiz do projeto.

## Guia para IA (handoff tecnico)

Este bloco foi escrito para agentes de IA e tambem para devs novos no projeto.

1. Objetivo do sistema
- Ferramenta interna de precificacao e operacao administrativa.

2. Restricoes de arquitetura
- Projeto estatico (HTML/CSS/JS), sem bundler.
- Nao introduzir dependencias sem necessidade.
- Calculos de marketplaces dependem da planilha Google em runtime.

3. Pontos criticos
- [JS/calculadora.js](JS/calculadora.js): qualquer alteracao pode impactar precificacao.
- IDs da tabela em [index.html](index.html) devem bater com a escrita em JS.
- Fluxo de autenticacao/interface fica em [JS/ui.js](JS/ui.js).

4. Boas praticas de mudanca
- Fazer alteracoes pequenas e validaveis.
- Rodar checks de sintaxe e regressao antes de entregar.
- Atualizar [CHANGELOG.md](CHANGELOG.md) em mudancas funcionais.
- Atualizar [docs/DOCUMENTACAO_CALCULADORA.md](docs/DOCUMENTACAO_CALCULADORA.md) quando mudar regra de negocio.

5. Nao fazer
- Nao reintroduzir arquivo local de variaveis de calculo.
- Nao hardcodar valores de negocio que deveriam vir da planilha.

## Licenca

CC BY-NC-SA 4.0.
