function calcularEntradas() {
    const valorPresente = parseFloat(document.getElementById("valorPresente").value);
    const valorFuturo = parseFloat(document.getElementById("valorFuturo").value);
    const taxaJuros = parseFloat(document.getElementById("taxaJuros").value);

    if (isNaN(valorPresente) || isNaN(valorFuturo) || isNaN(taxaJuros)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let numeroEntradas = 0;
    let valorAtual = valorPresente;
    let listaEntradas = "";

    while (valorAtual < valorFuturo) {
        numeroEntradas++;
        var ultimoValor = valorAtual;
        const lucro = (valorAtual * taxaJuros) / 100;
        valorAtual += lucro;

        const numeroFormatado = numeroEntradas.toString().padStart(3, ' ');
        let entradaFormatada, valorAtualFormatado;
        

        if (numeroEntradas === 1) {
            // Mostra o valor da entrada apenas na primeira entrada
            ultimoValor = valorPresente;
            entradaFormatada = ultimoValor.toFixed(2).padStart(8, ' ');
            valorAtualFormatado = valorAtual.toFixed(2).padStart(8, ' ');
        } else {
            ultimoValor = 
            entradaFormatada = ultimoValor.toFixed(2).padStart(8, ' ');
            valorAtualFormatado = valorAtual.toFixed(2).padStart(8, ' ');
        }

        listaEntradas += `${numeroFormatado} - Entrada: ${entradaFormatada}, Lucro: ${lucro.toFixed(2).padStart(8, ' ')}, Valor Atual: ${valorAtualFormatado}\n`;
    }

    document.getElementById("resultado").textContent = `Número de Entradas Necessárias: ${numeroEntradas}`;
    document.getElementById("listaEntradas").value = listaEntradas;
}