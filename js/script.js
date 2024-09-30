const inItem = document.querySelector('#inItem');
const btnAddItem = document.querySelector('.btnAddItem');

const itemsList = document.querySelector('#list-items');

const item = document.querySelector('li.hide');

const addedItems = itemsList.querySelectorAll('.item');

let idAndNameNewItem = 0;

btnAddItem.addEventListener('click', () => {

    if (inItem.value == '') {
        alert('O campo para adicionar item está vázio, preencha-o!');
        inItem.focus();
    } else {
        let messageItem = inItem.value;
        let newItem = item.cloneNode(true);

        newItem.classList.add('item');
        newItem.classList.remove('hide');

        newItem.childNodes[1].id = 'item-' + idAndNameNewItem;
        newItem.childNodes[1].name = 'item-' + idAndNameNewItem;
        newItem.childNodes[1].value = messageItem;

        newItem.childNodes[3].htmlFor = 'item-' + idAndNameNewItem;
        newItem.childNodes[3].textContent = messageItem;

        idAndNameNewItem++;

        itemsList.appendChild(newItem);
    }
});