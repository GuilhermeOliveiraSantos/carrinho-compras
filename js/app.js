function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //Calcular o valor e subtotal
    let valorTotal = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    //Adicionar produto ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> ${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
        </section>`;

    //Atualizar o valor total
    

}

function limpar() {

}