var form = document.getElementById('formid');
var itemList = document.getElementById('items');
var filter = document.getElementById('search-btn');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e) {

    e.preventDefault();



    var newItem = document.getElementById('plainwhite').value;

    var li = document.createElement('li');


    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa-solid fa-x'

    li.appendChild(deleteBtn);
    itemList.appendChild(li);

}
function removeItem(e) {
    if (e.target.classList.contains('fa-solid')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else (item.style.display = 'none')
    })
}