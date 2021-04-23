const addItemsAction = document.querySelector(".addItems-action");
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit')

const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action')
const clear = document.querySelector('.displayItems-clear')


submit.addEventListener('click', addItem)
clear.addEventListener('click', removeItems)
list.addEventListener('click', removeSingleItem)




function addItem(event) {
    event.preventDefault()
    let value = input.value;
    if (value === "") {
        showAction(addItemsAction, 'Please Add Grocery Item', false)
    } else {
        showAction(addItemsAction, `${value} added to the List`, true)
        createItem(value)

    }
}

function showAction(element, text, value) {
    if (value) {
        element.classList.add('success');
        element.textContent = text
        input.value = ""
        setTimeout(function () {
            element.classList.remove('success')
        }, 3000)
    } else {
        element.classList.add('alert');
        element.textContent = text;
        input.value = "";
        setTimeout(function () {
            element.classList.remove('alert')
        }, 3000)
    }
}

function createItem(value) {
    let parent = document.createElement('div');
    parent.classList.add('grocery-item')

    parent.innerHTML = `
    <h4 class="grocery-item-title">${value}</h4>
                <a href="#" class="grocery-item-link">
                    <i class="far fa-trash-alt"></i>
                </a>
    `
    list.appendChild(parent)
}


function removeItems() {
    let items = document.querySelectorAll('.grocery-item');

    if (items.length > 0) {

        showAction(displayItemsAction, "All Items Removed", false)
        items.forEach((item) => {
            list.removeChild(item)
        })
    } else {
        showAction(displayItemsAction, "No More Items", false)
    }

}

function removeSingleItem(event) {
    event.preventDefault();

    let item = event.target.parentElement.parentElement
    if (item.classList.contains('grocery-item')) {
        list.removeChild(event.target.parentElement.parentElement)
    }

    showAction(displayItemsAction, `${event.target.parentElement.previousElementSibling.textContent} Removed from list`, true)
}