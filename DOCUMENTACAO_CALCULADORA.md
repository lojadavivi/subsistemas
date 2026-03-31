# Documentação da Calculadora de Preços

## Visão Geral

A calculadora de preços (`calculadora.js`) é um sistema complexo que calcula o preço final de produtos para múltiplos canais de distribuição (Amazon, Mercado Livre, Shopee, Shein, etc.), considerando custos, taxas, comissões, fretes e margens de lucro específicas de cada plataforma.

## Estrutura da Função Principal

A função `calcular(inputElement)` é acionada quando o usuário clica no botão de cálculo no formulário HTML. Ela executa 7 etapas principais:

### Etapa 1: Obtenção dos Valores de Entrada
```javascript
var cnpj = document.getElementById("cnpj").value;      // CNPJ/Loja
var nivel = document.getElementById("nivel").value;    // Nível (1-5)
var peso = document.getElementById("peso").value;      // Faixa de peso
var custo_puro = ...                                   // Custo puro do produto
var Manual = ...                                       // Preço de venda manual
var ValorLiq = ...                                     // Valor líquido desejado
var PctLiq = ...                                       // Percentual de margem
```

**Entrada HTML requerida:**
- Campo com ID "cnpj" - dropdown com opções de CNPJ
- Campo com ID "nivel" - dropdown com níveis 1-5
- Campo com ID "peso" - dropdown com faixas de peso
- Campo com ID "custo" - valor em R$
- Campo com ID "Manual" - valor em R$
- Campo com ID "ValorLiq" - valor em R$
- Campo com ID "PctLiq" - percentual

### Etapa 2: Definição de Constantes de CNPJ
Cada CNPJ tem uma taxa/comissão diferente:
- LOJA DA VIVI LTDA
- FERREIRA PROSPERITA COSMETICOS LTDA
- RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA (tratamento especial)
- VIVIANE CHRISTINA FERREIRA

**Onde estão as constantes?** Arquivo `calc_variables.js`

### Etapa 3: Definição de Constantes de Frete
O frete varia de acordo com:
- **Peso do produto**: até 0.3kg, 0.3-0.5kg, 0.5-1kg, ..., 23-30kg
- **Plataforma de vendas**: cada uma tem frete diferente

Produtos acima de R$ 79 geralmente têm frete reduzido ou gratuito.

### Etapa 4: Definição de Constantes de Nível
Níveis definem descontos progressivos no frete:
- **Nível 5**: maior desconto
- **Nível 1**: menor desconto

Plataformas como RAV SHEFA e RD não têm variação de nível.

### Etapa 5: Definição de Custo de Insumos
Produtos com peso diferente têm custos de embalagem/insumos diferentes:
- **Até 300g**: `Custo_Insumos_ate300G`
- **Acima de 300g**: `Custo_Insumos_acima300G`

**Custo total** = Custo puro + Custo de insumos

### Etapa 6: Cálculo de Preços para Canais
Cada canal tem três métodos de cálculo:

#### Método 1: Manual (calcNomeManual)
Preço de entrada - (Custo + Comissão + Frete + Taxas)
```
Resultado = Manual - (custo + comissão + frete + taxas)
```

#### Método 2: Valor Líquido (calcNomeValorLiq)
Calcula o preço de venda necessário para obter um valor líquido desejado.
```
Preço Venda = (Valor_Desejado + custo + frete + taxas) / (1 - taxa_comissão)
```

#### Método 3: Percentual de Margem (calcNomePctLiq)
Calcula o preço de venda com uma margem percentual sobre o custo.
```
Preço_Venda = (custo + margem_percentual + frete + taxas) / (1 - taxa_comissão)
```

### Canais Suportados

#### Presencial
- Sem variação de frete por preço
- Para RAV SHEFA: comissão reduzida

#### Amazon
- Frete progressivo até R$ 79
- Faixas: até 30 / 30-50 / 50-79 / acima 79

#### Casas Bahia
- Taxa fixa aplicada
- Frete progressivo até R$ 69,90
- Variação de nível por CNPJ

#### Magalu
- Taxa variável por preço: até 9,99 / 10+
- Frete progressivo até R$ 79

#### Mercado Livre (Clássico e Premium)
- Taxa variável por faixa de preço: até 12,50 / 12,50-29 / 29-50 / 50-79 / acima 79
- Duas modalidades: Clássico (MLC) e Premium (MLP) com comissões diferentes

#### Olist
- Agregador de marketplace
- Taxa fixa
- Frete progressivo até R$ 79

#### RD
- Cliente especial com cálculo simplificado
- Sem variação de nível
- Frete fixo

#### Shein
- Taxa fixa
- Frete progressivo até R$ 49,89
- Duas faixas: até 49,89 / acima 49,89

#### Shopee
- Comissão variável por preço: até 79,99 / até 99,99 / até 199,99 / acima 200
- Taxa progressiva em 4 faixas
- Frete fixo

### Etapa 7: Exibição de Resultados

Os resultados são formatados e exibidos em elementos HTML com IDs específicos:
- `resultado_Presencial_Manual`
- `resultado_Amazon_Manual`
- etc.

**Formato do resultado**: "R$ XX,XX (YY%)" ou "R$ XX,XX (R$ YY,YY)"

**Tratamento Especial**: Se CNPJ = "RAV SHEFA DISTRIBUIDORA DE COSMETICOS LTDA", apenas Presencial e Olist/RD são exibidos. Os demais ficam em branco.

## Arquivo de Variáveis (calc_variables.js)

Este arquivo externo deve conter todas as constantes:

### Constantes de CNPJ
```javascript
var cnpj_LTDA = 0.05;           // Taxa para LOJA DA VIVI LTDA
var cnpj_FERREIRA = 0.04;       // Taxa para FERREIRA PROSPERITA
var cnpj_RAV = 0.02;            // Taxa para RAV SHEFA (reduzida)
var cnpj_VIVI = 0.05;           // Taxa para VIVIANE CHRISTINA
```

### Constantes de Frete (por canal e peso)
```javascript
var Frete_Amazon_ATE30 = 10.50;
var Frete_Amazon_30a50 = 15.00;
// ... mais fretes para diferentes canais e pesos
```

### Constantes de Nível (descontos de frete)
```javascript
var Nivel_Amazon = 0.95;         // Desconto de 5% no frete Amazon
var Nivel_Magalu_5 = 0.90;       // 10% de desconto no nível 5
// ... mais níveis para diferentes canais
```

### Constantes de Comissão (por canal)
```javascript
var Comissao_Presencial = 0.05;  // 5% de comissão
var Comissao_Amazon = 0.15;      // 15% de comissão
// ... mais comissões
```

### Constantes de Taxa (por canal)
```javascript
var Taxa_CasasBahia = 2.50;      // Taxa fixa Casas Bahia
var Taxa_ML_ATE12 = 1.50;        // Taxa Mercado Livre até R$ 12,50
// ... mais taxas
```

### Constantes de Custo de Insumos
```javascript
var Custo_Insumos_ate300G = 0.50;    // Embalagem até 300g
var Custo_Insumos_acima300G = 1.00;  // Embalagem acima 300g
```

## Como Modificar ou Adicionar Canais

### Para adicionar um novo canal de vendas:

1. **Adicione as constantes em `calc_variables.js`**:
   - Comissão do novo canal
   - Taxas (se houver)
   - Fretes por faixa de peso e nível

2. **Defina as variáveis de constante na função `calcular()`**:
   ```javascript
   var constFrete_NovoCanal;
   var constNivel_NovoCanal;
   ```

3. **Implemente os três tipos de cálculo**:
   ```javascript
   // Manual
   var calcNovoCanal_Manual = Manual - (custo + comissão + frete + taxa);
   
   // Valor Líquido (em uma ou mais faixas de preço)
   var calcNovoCanal_ValorLiq = ... / (1 - comissão);
   
   // Percentual de Margem
   var calcNovoCanal_PctLiq = ... / (1 - comissão);
   ```

4. **Adicione elementos HTML para exibição**:
   ```html
   <span id="resultado_NovoCanal_Manual"></span>
   <span id="resultado_NovoCanal_ValorLiq"></span>
   <span id="resultado_NovoCanal_PctLiq"></span>
   ```

5. **Adicione a exibição dos resultados** (na Etapa 7):
   ```javascript
   document.getElementById("resultado_NovoCanal_Manual").textContent = 
       "R$ " + calcNovoCanal_Manual.toFixed(2).replace(".", ",") + ...
   ```

## Notas Importantes

- **Valores em reais**: Todas as variáveis de preço usam ponto (.) como separador decimal internamente, mas são exibidas com vírgula (,) para o usuário brasileiro.

- **Variável `x`**: Quando um valor não é definido ou "Selecione" é escolhido, a variável recebe o valor `x`, que deve ser zero ou estar definida como constante.

- **Precisão de cálculo**: Todos os resultados usam `.toFixed(2)` para arredondar a 2 casas decimais.

- **RAV SHEFA**: Tem tratamento especial com:
  - Comissão reduzida no canal Presencial
  - Apenas canais Presencial e alguns específicos são exibidos
  - Não acessar canais não configurados

## Debugging

Se os cálculos estão incorretos:

1. **Verifique calc_variables.js** - as constantes estão definidas?
2. **Verifique os IDs dos elementos HTML** - combinam com o código?
3. **Use console.log()** para imprimir valores:
   ```javascript
   console.log("CNPJ:", cnpj);
   console.log("Custo total:", custo);
   console.log("Resultado Presencial Manual:", calcPresencialManual);
   ```
4. **Verifique a entrada HTML** - os valores digitados estão corretos?

## Performance

A função é executada em tempo real quando o usuário clica no botão. Com os múltiplos cálculos e verificações de faixas de preço, o tempo de execução é praticamente instantâneo em navegadores modernos.

---