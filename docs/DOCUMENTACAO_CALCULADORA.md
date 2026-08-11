# Documentação da Calculadora

## Resumo

Este projeto possui duas camadas separadas:

- Camada de negócio: regras de cálculo e constantes
- Camada de interface: layout, tema, interações e eventos

A separação facilita manutenção e reduz risco de regressão ao mexer no visual.

## Arquivos e responsabilidades

- JS/calculadora.js
  - Função principal calcular()
  - Carrega constantes via CSV público do Google Sheets
  - Reconstrói mapas de configuração (CNPJ_ALIQUOTAS, FRETE_POR_PESO, NIVEL_DESCONTO)
  - Lê entradas da tela
  - Aplica fórmulas por canal
  - Escreve os resultados nos IDs de saída

- JS/ui.js
  - Inicializa tema claro/escuro
  - Faz bind de eventos dos campos
  - Aplica cor de contexto por CNPJ
  - Inicializa valores padrão dos campos
  - Aguarda sincronização da planilha para liberar cálculo com dados atualizados
  - Mostra status de sincronização da planilha e permite atualização manual

- tests/regression-calculadora.js
  - Executa regressão da versão atual
  - Valida preenchimento das saídas textuais por cenário

- index.html
  - Estrutura semântica da interface
  - Mantém IDs necessários para calculadora.js

- style.css
  - Tokens visuais e componentes em estilo Fluent 2
  - Regras responsivas para desktop e mobile

## Contrato de integração (não quebrar)

Para preservar o funcionamento, estes IDs devem permanecer:

- Entradas
  - cnpj
  - nivel
  - peso
  - custo
  - Manual
  - ValorLiq
  - PctLiq

- Saídas
  - resultado_Presencial_Manual
  - resultado_Presencial_ValorLiq
  - resultado_Presencial_PctLiq
  - resultado_Amazon_Manual
  - resultado_Amazon_ValorLiq
  - resultado_Amazon_PctLiq
  - resultado_CasasBahia_Manual
  - resultado_CasasBahia_ValorLiq
  - resultado_CasasBahia_PctLiq
  - resultado_Magalu_Manual
  - resultado_Magalu_ValorLiq
  - resultado_Magalu_PctLiq
  - resultado_MLC_Manual
  - resultado_MLC_ValorLiq
  - resultado_MLC_PctLiq
  - resultado_MLP_Manual
  - resultado_MLP_ValorLiq
  - resultado_MLP_PctLiq
  - resultado_Olist_Manual
  - resultado_Olist_ValorLiq
  - resultado_Olist_PctLiq
  - resultado_RD_Manual
  - resultado_RD_ValorLiq
  - resultado_RD_PctLiq
  - resultado_Shein_Manual
  - resultado_Shein_ValorLiq
  - resultado_Shein_PctLiq
  - resultado_Shopee_Manual
  - resultado_Shopee_ValorLiq
  - resultado_Shopee_PctLiq

## Fluxo de execução

1. Página carrega e os scripts são inicializados com defer.
2. JS/calculadora.js inicializa bindings em zero e tenta sincronizar variáveis pela planilha pública.
3. JS/ui.js aplica tema salvo e preenche campos padrão.
4. Eventos de mudança e digitação disparam calcular().
5. Antes do cálculo, JS/ui.js pode sincronizar variáveis remotas novamente (intervalo e botão manual).
6. JS/calculadora.js processa as fórmulas por canal.
7. Resultados são exibidos em tempo real.

## Regressão

Para validar equivalência do motor após refatoração:

```bash
node tests/regression-calculadora.js
```

Observação: os testes atuais validam consistência da versão em produção.

## Regras de negócio preservadas

- Mesmo motor de cálculo da versão anterior
- Mesmas constantes de negócio (agora carregadas da planilha Google)
- Mesmo tratamento especial para CNPJ RAV SHEFA
- Mesmo formato final dos textos de saída

## Como alterar com segurança

### Ajustes visuais

Edite apenas:

- style.css
- index.html
- JS/ui.js

Sem alterar nomes de IDs e sem mexer no contrato de integração.

### Ajustes de negócio

- Atualize constantes na planilha pública do Google Sheets
- Se necessário, ajuste fórmulas em JS/calculadora.js
- Valide todas as plataformas e faixas de preço/peso

## Checklist rápido de regressão

- CNPJ muda e a superfície de contexto acompanha
- Tema claro/escuro alterna e persiste
- Mudança em qualquer campo atualiza resultados
- Todos os canais exibem resultados esperados
- CNPJ RAV SHEFA continua com comportamento especial

## Observação

docs/FORMULAS_CALCULO.md continua como referência matemática para auditoria das fórmulas.
