//================= ATUALIZAR CARRINHO ===================
function atualizarCarrinho() {
    //limpar carrinho
    carrinhoUl.innerHTML = "";
    //cria a variavelpara o total a pagar
    let total = 0;
    //---------- adicionar itens ao carrinho ----------
    carrinho.forEach((pizza) => {
        const liCarrinho = document.createElement('li');
        //adiciona classe ao <li> do carrinho
        liCarrinho.className = "item_carrinho";
        //definir conteúdo do <li> do carrinho
        liCarrinho.textContent = `${pizza.nome} - R$ ${pizza.valor.toFixed(2)}`;
        carrinhoUl.appendChild(liCarrinho);
        //cria botão para remover item do carrinho
        const removerBtn = document.createElement('button');
        removerBtn.textContent = "X";
        //define uma classe para o botão remover
        removerBtn.className = 'btn_remover';
        total += pizza.valor;
        liCarrinho.appendChild(removerBtn);
        removerBtn.addEventListener('click', () => {
            let indiceClicado = carrinho.indexOf(pizza);
            removerCarrinho(indiceClicado);
            alert(`Item removido: ${pizza.nome}`);
        });
    });
    //--------- Exibe o valor total a pagar --------
    const divTotal = document.querySelector('.total');
    divTotal.innerHTML = `TOTAL R$ ${total.toFixed(2)}`;
}//fecha função atualizar