const inItem = document.querySelector('#inItem');
const btnAddItem = document.querySelector('.btnAddItem');

const itemsList = document.querySelector('#list-items');

let idAndNameNewItem = 1;

let btnRemove;

btnAddItem.addEventListener('click', () => {

    if (inItem.value == '') {
        alert('O campo para adicionar item está vázio, preencha-o!');
        inItem.focus();
    } else {
        let messageItem = inItem.value;

        // Creating a new li element
        let li = document.createElement('li');
        // Adding item class in the element
        li.classList.add('item');

        // Creating a new input element
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'item-' + idAndNameNewItem;
        input.name = 'item-' + idAndNameNewItem;
        input.value = messageItem;

        // Creating a new label element
        let label = document.createElement('label');
        label.htmlFor = 'item-' + idAndNameNewItem;
        label.innerText = messageItem;

        // Creating a new button element
        let button = document.createElement('button');
        button.classList.add('btnBin');

        // Adding children in parent
        li.append(input, label, button);

        idAndNameNewItem++;

        itemsList.appendChild(li);

        inItem.value = '';
    }

    btnRemove = document.querySelectorAll('#list-items li button');

    btnRemove.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            let deleteItemConfirm = confirm('Tem certeza que deseja deletar o item?');

            if(deleteItemConfirm) {
                btn.parentElement.remove();
            }

        });
    });
});