# Fórmulas Matemáticas da Calculadora

## Conceitos Fundamentais

### 1. Estrutura de Preço de Venda
```
PREÇO_VENDA = CUSTO + DESPESAS + LUCRO
```

Onde:
- **CUSTO** = Custo puro do produto + Custo de insumos/embalagem
- **DESPESAS** = Comissão plataforma + Frete + Taxas próprias da plataforma
- **LUCRO** = Margem que o vendedor quer manter

### 2. Cálculo de Comissão e Taxas

As plataformas cobram uma **comissão sobre o preço de venda**, não sobre o custo.

#### Fórmula geral de retorno (lucro bruto):
```
LUCRO_BRUTO = PREÇO_VENDA - CUSTO - FRETE - TAXAS - (PREÇO_VENDA × TAXA_COMISSÃO)
```

Reorganizando:
```
LUCRO_BRUTO = PREÇO_VENDA × (1 - TAXA_COMISSÃO) - CUSTO - FRETE - TAXAS
```

## Três Métodos de Cálculo

### Método 1: MANUAL (Preço de Entrada)

O usuário entra com um **preço manual** e o sistema calcula quanto sobrará após deduzir custos, comissões e fretes.

#### Fórmula:
```
LUCRO = PREÇO_MANUAL - CUSTO - (PREÇO_MANUAL × TAXA_COMISSÃO) - FRETE - TAXAS
```

Distribuindo:
```
LUCRO = PREÇO_MANUAL × (1 - TAXA_COMISSÃO) - CUSTO - FRETE - TAXAS
```

#### Exemplo (Amazon):
```
PREÇO_MANUAL = R$ 100,00
CUSTO = R$ 20,00
COMISSÃO_AMAZON = 15%
FRETE = R$ 10,00
TAXA_PLATAFORMA = R$ 2,00

LUCRO = 100 × (1 - 0,15) - 20 - 10 - 2
LUCRO = 100 × 0,85 - 20 - 10 - 2
LUCRO = 85 - 32
LUCRO = R$ 53,00
```

### Método 2: VALOR LÍQUIDO (Lucro Desejado)

O usuário diz **quanto quer lucrar** (em reais) e o sistema calcula qual deve ser o preço de venda.

#### Fórmula (invertida):
```
PREÇO_VENDA = (LUCRO_DESEJADO + CUSTO + FRETE + TAXAS) / (1 - TAXA_COMISSÃO)
```

Deduzindo a comissão primeiro:
```
LUCRO_DESEJADO = PREÇO_VENDA × (1 - TAXA_COMISSÃO) - CUSTO - FRETE - TAXAS

LUCRO_DESEJADO + CUSTO + FRETE + TAXAS = PREÇO_VENDA × (1 - TAXA_COMISSÃO)

PREÇO_VENDA = (LUCRO_DESEJADO + CUSTO + FRETE + TAXAS) / (1 - TAXA_COMISSÃO)
```

#### Exemplo (Amazon):
```
LUCRO_DESEJADO = R$ 50,00
CUSTO = R$ 20,00
FRETE = R$ 10,00
TAXA = R$ 2,00
COMISSÃO = 15%

PREÇO_VENDA = (50 + 20 + 10 + 2) / (1 - 0,15)
PREÇO_VENDA = 82 / 0,85
PREÇO_VENDA = R$ 96,47

Verificação:
Lucro = 96,47 × 0,85 - 20 - 10 - 2 = 82 - 32 = 50 ✓
```

### Método 3: PERCENTUAL DE MARGEM (Margem % sobre custo)

O usuário diz que quer uma **margem de X% sobre o custo** e o sistema calcula o preço.

#### Fórmula:
```
MARGEM_EM_REAIS = CUSTO × (PERCENTUAL / 100)
PREÇO_VENDA = (CUSTO + MARGEM + FRETE + TAXAS) / (1 - TAXA_COMISSÃO)
```

Ou combinado:
```
PREÇO_VENDA = (CUSTO × (1 + PERCENTUAL/100) + FRETE + TAXAS) / (1 - TAXA_COMISSÃO)
```

#### Exemplo (Amazon):
```
CUSTO = R$ 20,00
PERCENTUAL_MARGEM = 50%
FRETE = R$ 10,00
TAXA = R$ 2,00
COMISSÃO = 15%

MARGEM = 20 × (50/100) = R$ 10,00

PREÇO_VENDA = (20 + 10 + 10 + 2) / 0,85
PREÇO_VENDA = 42 / 0,85
PREÇO_VENDA = R$ 49,41

Verificação:
Lucro = 49,41 × 0,85 - 20 - 10 - 2 = 42 - 32 = 10 (que é 50% de 20) ✓
```

## Componentes Variáveis

### A. Fretes por Faixa de Preço

Alguns canais têm **frete progressivo** que varia conforme o preço de venda:

#### Amazon:
```
SE preço < R$ 30:  frete = R$ 15,00
SE R$ 30 ≤ preço < R$ 50: frete = R$ 12,00
SE R$ 50 ≤ preço < R$ 79: frete = R$ 8,00
SE preço ≥ R$ 79: frete = R$ 5,00 (ou definido em constante)
```

#### Casas Bahia:
```
SE preço < R$ 69,90: frete = R$ 20,00
SE preço ≥ R$ 69,90: frete = R$ 0,00 (frete grátis)
```

### B. Nível (Desconto de Frete)

O **nível** atua como um multiplicador (desconto) no frete:

```
FRETE_FINAL = FRETE_BASE × NÍVEL_DESCONTO
```

Níveis típicos:
```
NÍVEL 5 = 0.85 (desconto de 15%)
NÍVEL 4 = 0.90 (desconto de 10%)
NÍVEL 3 = 0.95 (desconto de 5%)
NÍVEL 2 = 1.00 (sem desconto)
NÍVEL 1 = 1.05 (10% acréscimo)
```

#### Exemplo:
```
FRETE_BASE_AMAZON = R$ 10,00
NÍVEL_5_AMAZON = 0.85

FRETE_FINAL = 10 × 0.85 = R$ 8,50
```

### C. Taxas Variáveis por Faixa

Alguns canais como **Magalu** e **Mercado Livre** cobram **taxas diferentes** conforme o preço:

#### Mercado Livre:
```
SE preço ≤ R$ 12,50: taxa = R$ 1,50
SE R$ 12,50 < preço ≤ R$ 29,00: taxa = R$ 2,50
SE R$ 29,00 < preço ≤ R$ 50,00: taxa = R$ 3,50
SE R$ 50,00 < preço ≤ R$ 79,00: taxa = R$ 4,50
SE preço > R$ 79,00: taxa = R$ 6,00
```

#### Magalu:
```
SE preço ≤ R$ 9,99: taxa = R$ 1,00
SE preço > R$ 9,99: taxa = R$ 2,50
```

### D. Comissão Variável (Shopee)

**Shopee** varia a comissão conforme o preço:

```
SE preço ≤ R$ 79,99: comissão = 5%
SE preço > R$ 79,99: comissão = 8%
```

## Caso Especial: RAV SHEFA

RAV SHEFA tem um **tratamento especial** por ser um cliente importante:

```
Presencial: comissão reduzida (ex: 2% ao invés de 5%)
Outros canais: bloqueados (exibem células vazias)
```

Fórmula específica:
```
LUCRO = PREÇO × (1 - COMISSÃO_RAV) - CUSTO - FRETE

(Sem TAXA_COMISSÃO na fórmula de Valor Líquido - usa apenas COMISSÃO_RAV)
```

## Cálculos Complexos com Múltiplas Faixas

Alguns canais como **Mercado Livre** exigem cálculos em três faixas:

### Etapa 1: Testar se entra na PRIMEIRA FAIXA
```
preço_calculado = (valor_entrada + custo + frete_faixa1 + taxa_faixa1) / (1 - comissão)

SE preço_calculado ≤ limite_faixa1:
  resultado = preço_calculado
FIM SE
```

### Etapa 2: Se não, testar SEGUNDA FAIXA
```
SE preço_calculado > limite_faixa1 E 
   (valor_entrada + custo + frete_faixa2 + taxa_faixa2) / (1 - comissão) ≤ limite_faixa2:
  resultado = (valor_entrada + custo + frete_faixa2 + taxa_faixa2) / (1 - comissão)
FIM SE
```

### Etapa 3: Se não, usar TERCEIRA FAIXA
```
SENÃO:
  resultado = (valor_entrada + custo + frete_faixa3 + taxa_faixa3) / (1 - comissão)
FIM SENÃO
```

## Formatação de Saída

Todos os resultados são formatados como:
```
"R$ XX,XX (YY%)" ou "R$ XX,XX (R$ YY,YY)"
```

Processo:
1. Arredondar para 2 casas decimais: `.toFixed(2)`
2. Substituir ponto por vírgula: `.replace(".", ",")`
3. Prefixar com "R$ "

```javascript
// Exemplo:
calcAmazonManual = 53.004
resultado = "R$ " + calcAmazonManual.toFixed(2).replace(".", ",")
resultado = "R$ " + "53.00".replace(".", ",")
resultado = "R$ 53,00"
```

## Verificação de Cálculos

Para verificar se um cálculo está correto:

### Método Manual:
```
LUCRO_VERIFICADO = PREÇO_FINAL × (1 - COMISSÃO) - CUSTO - FRETE - TAXAS
Deve ser ≈ LUCRO_ESPERADO
```

### No Browser (Console):
```javascript
let precoFinal = 96.47;
let custo = 20;
let frete = 10;
let taxa = 2;
let comissao = 0.15;

let lucro = precoFinal * (1 - comissao) - custo - frete - taxa;
console.log("Lucro:", lucro); // Deve ser ≈ 50
```

---

**Nota**: As fórmulas usam decimais (0.15 = 15%) para cálculos internos, mas são exibidas como porcentagens (15%) para o usuário.
