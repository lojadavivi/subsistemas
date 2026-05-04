const COLUNA_SKU = 1;
const COLUNA_NOME = 2;
const COLUNA_PRECO = 6;
let produtosCarregados = [];

function obterModeloEtiqueta() {
    const selectModelo = document.getElementById("modeloEtiqueta");
    return selectModelo ? selectModelo.value : "colorido";
}

function obterConfiguracaoModelo(modeloEtiqueta) {
    if (modeloEtiqueta === "colorido-3x3") {
        return {
            classeModelo: "colorido-3x3",
            colunasPorPagina: 6,
            linhasPorPagina: 9,
            semLogo: true,
            isQuadrada: true,
            usaPb: false
        };
    }

    if (modeloEtiqueta === "pb-3x3") {
        return {
            classeModelo: "pb-3x3",
            colunasPorPagina: 6,
            linhasPorPagina: 9,
            semLogo: true,
            isQuadrada: true,
            usaPb: true
        };
    }

    return {
        classeModelo: modeloEtiqueta === "pb" ? "pb" : "colorido",
        colunasPorPagina: 4,
        linhasPorPagina: 9,
        semLogo: false,
        isQuadrada: false,
        usaPb: modeloEtiqueta === "pb"
    };
}

function limparTexto(valor) {
    if (valor === undefined || valor === null) return "";
    return String(valor).trim();
}

function normalizarSku(valor) {
    if (valor === undefined || valor === null || valor === "") {
        return "SEM SKU";
    }

    if (typeof valor === "number" && Number.isFinite(valor)) {
        return Math.round(valor).toString();
    }

    const texto = limparTexto(valor);
    if (!texto) {
        return "SEM SKU";
    }

    if (/^[0-9]+\.0+$/.test(texto)) {
        return texto.replace(/\.0+$/, "");
    }

    if (/^[0-9]+(\.[0-9]+)?e\+[0-9]+$/i.test(texto)) {
        const numero = Number(texto);
        if (Number.isFinite(numero)) {
            return numero.toLocaleString("en-US", {
                useGrouping: false,
                maximumFractionDigits: 0
            });
        }
    }

    return texto;
}

function parsePreco(valor) {
    if (typeof valor === "number" && Number.isFinite(valor)) {
        return valor;
    }

    const texto = limparTexto(valor);
    if (!texto) return null;

    let normalizado = texto
        .replace(/R\$/gi, "")
        .replace(/\s+/g, "");

    if (normalizado.includes(",")) {
        normalizado = normalizado.replace(/\./g, "").replace(/,/g, ".");
    }

    normalizado = normalizado.replace(/[^0-9.-]/g, "");

    const numero = Number.parseFloat(normalizado);
    return Number.isFinite(numero) ? numero : null;
}

function formatarMoedaBRL(valor) {
    if (!Number.isFinite(valor)) {
        return "R$ -";
    }

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

function separarPartesDoPreco(valor) {
    if (!Number.isFinite(valor)) {
        return { inteiro: "00", centavos: "00" };
    }

    const [inteiro, centavos] = valor.toFixed(2).split(".");
    return { inteiro, centavos };
}

function extrairProdutos(linhas) {
    const produtos = [];

    linhas.forEach((linha) => {
        const sku = normalizarSku(linha[COLUNA_SKU]);
        const nome = limparTexto(linha[COLUNA_NOME]);
        const precoNumerico = parsePreco(linha[COLUNA_PRECO]);

        if (!nome && precoNumerico === null) {
            return;
        }

        if (!nome) {
            return;
        }

        const precoPartes = separarPartesDoPreco(precoNumerico);

        produtos.push({
            sku,
            nome,
            precoInteiro: precoPartes.inteiro,
            precoCentavos: precoPartes.centavos
        });
    });

    return produtos;
}

function ehArquivoCsv(arquivo) {
    const nome = arquivo && arquivo.name ? arquivo.name.toLowerCase() : "";
    return nome.endsWith(".csv");
}

function criarCelula(produto, configuracaoModelo) {
    if (!produto) {
        return null;
    }

    const td = document.createElement("td");
    const conteudo = document.createElement("div");
    conteudo.className = "price-cell";

    const tamanhoPreco = produto ? produto.precoInteiro.replace(/\D/g, "").length : 2;
    const ocultarLogo = configuracaoModelo.semLogo || tamanhoPreco >= 3;

    if (configuracaoModelo.isQuadrada) {
        conteudo.classList.add("layout-3x3");

        if (tamanhoPreco >= 3) {
            conteudo.classList.add("price-int-3plus");
        }

        if (tamanhoPreco >= 4) {
            conteudo.classList.add("price-int-4plus");
        }
    }

    if (ocultarLogo) {
        conteudo.classList.add("no-logo");
    }

    const logo = document.createElement("div");
    logo.className = "price-logo";

    const logoImg = document.createElement("img");
    logoImg.className = "price-logo-img";
    logoImg.src = configuracaoModelo.usaPb
        ? "STYLES/logo-etiqueta-pb.png"
        : "STYLES/logo-etiqueta.png";
    logoImg.alt = "Loja da Vivi";
    logo.appendChild(logoImg);

    const nome = document.createElement("p");
    nome.className = "price-name";
    nome.textContent = produto.nome;

    const sku = document.createElement("p");
    sku.className = "price-sku";
    sku.textContent = `Código: ${produto.sku}`;

    const tag = document.createElement("div");
    tag.className = "price-tag";

    const rs = document.createElement("p");
    rs.className = "price-rs";
    rs.textContent = "R$";

    const preco = document.createElement("p");
    preco.className = "price-value";
    preco.textContent = produto.precoInteiro;

    const centavos = document.createElement("p");
    centavos.className = "price-cents";
    centavos.textContent = `,${produto.precoCentavos}`;

    tag.appendChild(rs);
    tag.appendChild(preco);
    tag.appendChild(centavos);

    if (!ocultarLogo) {
        conteudo.appendChild(logo);
    }

    conteudo.appendChild(nome);
    conteudo.appendChild(sku);
    conteudo.appendChild(tag);
    td.appendChild(conteudo);

    return td;
}

function renderizarPaginas(produtos, modeloEtiqueta = "colorido") {
    const pagesContainer = document.getElementById("a4Pages");
    pagesContainer.innerHTML = "";
    const configuracaoModelo = obterConfiguracaoModelo(modeloEtiqueta);
    const celulasPorPagina = configuracaoModelo.colunasPorPagina * configuracaoModelo.linhasPorPagina;

    if (produtos.length === 0) {
        pagesContainer.textContent = "Nenhum produto válido encontrado nas colunas B, C e G.";
        return;
    }

    const totalPaginas = Math.ceil(produtos.length / celulasPorPagina);

    for (let paginaIndex = 0; paginaIndex < totalPaginas; paginaIndex++) {
        const section = document.createElement("section");
        section.className = "a4-page";
        section.classList.add(`modelo-${configuracaoModelo.classeModelo}`);

        const table = document.createElement("table");
        table.className = "price-sheet";
        const tbody = document.createElement("tbody");

        const inicio = paginaIndex * celulasPorPagina;
        const produtosDaPagina = produtos.slice(inicio, inicio + celulasPorPagina);
        let indiceProdutoPagina = 0;

        for (let linha = 0; linha < configuracaoModelo.linhasPorPagina; linha++) {
            if (indiceProdutoPagina >= produtosDaPagina.length) {
                break;
            }

            const tr = document.createElement("tr");

            for (let coluna = 0; coluna < configuracaoModelo.colunasPorPagina; coluna++) {
                if (indiceProdutoPagina >= produtosDaPagina.length) {
                    break;
                }

                const celula = criarCelula(produtosDaPagina[indiceProdutoPagina], configuracaoModelo);
                indiceProdutoPagina += 1;

                if (celula) {
                    tr.appendChild(celula);
                }
            }

            if (tr.children.length > 0) {
                tbody.appendChild(tr);
            }
        }

        table.appendChild(tbody);
        section.appendChild(table);
        pagesContainer.appendChild(section);
    }
}

function atualizarMeta(totalProdutos, totalPaginas) {
    const meta = document.getElementById("priceMeta");

    if (totalProdutos === 0) {
        meta.textContent = "Nenhum produto válido encontrado nas colunas B (SKU), C (nome) e G (preço).";
        return;
    }

    meta.textContent = `${totalProdutos} produto(s) processado(s) em ${totalPaginas} página(s) A4.`;
}

async function lerPlanilha(arquivo) {
    if (typeof XLSX === "undefined") {
        throw new Error("Biblioteca XLSX não foi carregada.");
    }

    const buffer = await arquivo.arrayBuffer();
    let workbook;

    if (ehArquivoCsv(arquivo)) {
        // CSV recebido em UTF-8: decodifica explicitamente para evitar caracteres quebrados.
        const textoCsv = new TextDecoder("utf-8").decode(buffer).replace(/^\uFEFF/, "");
        workbook = XLSX.read(textoCsv, {
            type: "string",
            raw: false,
            codepage: 65001
        });
    } else {
        workbook = XLSX.read(buffer, {
            type: "array",
            cellDates: false,
            raw: false
        });
    }

    const primeiraAba = workbook.SheetNames[0];
    if (!primeiraAba) {
        return [];
    }

    const sheet = workbook.Sheets[primeiraAba];
    return XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        raw: false,
        defval: ""
    });
}

function tratarErro(mensagem) {
    const pagesContainer = document.getElementById("a4Pages");
    const meta = document.getElementById("priceMeta");
    pagesContainer.textContent = mensagem;
    meta.textContent = "Falha ao processar a planilha.";
}

async function processarArquivo(event) {
    const arquivo = event.target.files && event.target.files[0];
    if (!arquivo) {
        return;
    }

    try {
        const linhasBrutas = await lerPlanilha(arquivo);
        const linhas = linhasBrutas.length > 0 ? linhasBrutas.slice(1) : [];
        const produtos = extrairProdutos(linhas);
        const configuracaoModelo = obterConfiguracaoModelo(obterModeloEtiqueta());
        const celulasPorPagina = configuracaoModelo.colunasPorPagina * configuracaoModelo.linhasPorPagina;
        const totalPaginas = Math.max(1, Math.ceil(produtos.length / celulasPorPagina));
        produtosCarregados = produtos;
        renderizarPaginas(produtosCarregados, obterModeloEtiqueta());
        atualizarMeta(produtos.length, totalPaginas);
    } catch (erro) {
        console.error("Erro ao importar planilha:", erro);
        tratarErro("Não foi possível ler o arquivo. Use um CSV/XLS válido.");
    }
}

function configurarEventos() {
    const input = document.getElementById("planilhaInput");
    const botaoImprimir = document.getElementById("imprimirBtn");
    const selectModelo = document.getElementById("modeloEtiqueta");

    if (input) {
        input.addEventListener("change", processarArquivo);
    }

    if (botaoImprimir) {
        botaoImprimir.addEventListener("click", () => window.print());
    }

    if (selectModelo) {
        selectModelo.addEventListener("change", () => {
            if (produtosCarregados.length > 0) {
                renderizarPaginas(produtosCarregados, obterModeloEtiqueta());
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", configurarEventos);