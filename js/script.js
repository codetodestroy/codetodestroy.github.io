// Obtendo todos os elementos necessários 
const inItem = document.querySelector('#inItem');
const btnAddItem = document.querySelector('.btnAddItem');
const listItems = document.querySelector('#list-items');
const warningStatus = document.querySelector('.warning-status');

// Todo item adicionado na lista vai ir somando para diferenciá-los
let numberItem = 1;

// Listener no Botão para que ele possa adicionar um novo item sempre que clicar
btnAddItem.addEventListener('click', () => {
    if (!inItem.value) {
        return alert('O campo de novo item está em branco, adicione-o!');
    }

    // Adicionando um novo item na lista
    const item = createItem(inItem.value);
    listItems.append(item);
});

function createItem(message) {
    // Criando um elemento pai de <li>
    const li = document.createElement('li');

    // Criando os elementos filhos de <li>
    const input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');

    // Adicionando uma classe no elemento pai
    li.classList.add('item');

    // Adicionando atributos nos elementos filhos
    input.type = 'checkbox';
    input.name = 'item-' + numberItem;
    input.id = 'item-' + numberItem;

    label.htmlFor = 'item-' + numberItem;
    label.innerText = message;

    // Adicionando uma classe no botão de remover
    button.classList.add('btnRemoveItem');

    // Colocando os elementos filhos no elemento pai
    li.append(input, label, button);

    // Incrementando para que o proximo item seja o valor a seguir
    numberItem++;

    // Retorna o elemento pai
    return li;
}

document.addEventListener('click', (e) => {
    // Recupera o elemento que foi clicado
    const bin = e.target;

    // Se o elemento clicado tiver a classe btnRemoveItem entra no if
    if (bin.classList.contains('btnRemoveItem')) {

        // Dialog para pegar a resposta se deseja mesmo remover
        const answer = confirm('Tem certeza que deseja remover o item?');

        // Se a resposta for OK
        if (answer) {
            // Remove o item
            bin.parentElement.remove();

            // Em seguinda, remove a classe para mostrar a mensagem de exclusão
            warningStatus.classList.remove('hide');

            // Depois de 2 segundos, a mensagem some
            setTimeout(() => {
                warningStatus.classList.add('hide');
            }, 2000);
        }
    }
});