function exibirCardapio() {
    cardapioUl.innerHTML = ""
    cardapio.forEach((pizza) => {
        //cria um elemento <li> para inserir cada pizza na UL
        const li = document.createElement('li');
        //atribui uma classe para a <li> criada
        li.className = "pizza";
        //cria um elemento <img> para adicionar a imagem da pizza
        const img = document.createElement('img');
        //atribui a foto da pizza para o 'src' da img
        img.src = pizza.foto
        //cria uma div para exibir os ingredientes da pizza
        const ingredientesDiv = document.createElement('div');
        ingredientesDiv.innerHTML = `(${pizza.ingredientes.join(' | ')})`;
        //atribui uma classe para os ingredientes
        ingredientesDiv.className = "ingredientes";
        //cria um botão para adicionar a pizza ao carrinho
        const button = document.createElement('button');
        //texto para o botão comprar
        button.textContent = "COMPRAR 🍕";
        //montar card da pizza
        li.appendChild(img);
        li.append(`${pizza.nome} - R$ ${pizza.valor.toFixed(2)}`);
        li.appendChild(ingredientesDiv);
        li.appendChild(button);
        //adiciona a <li> dentro da <ul>
        cardapioUl.appendChild(li);
        //seleciona o botão "Comprar" no <li> e escuta o evento 'click'
        li.querySelector('button').addEventListener('click', () => {
            //quando o botão é clicado, adiciona a pizza em questão ao array
            carrinho.push(pizza);
            //aviso de pizza adicionda
            alert(`Pizza adicionada [${pizza.nome}] ao carrinho`);
            //atulizar o carrinho após adicionar pizza
            atualizarCarrinho();
        });
    });//fim repetição cardápio
}