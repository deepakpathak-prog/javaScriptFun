var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', deletefun);

filter.addEventListener('keyup', filterItems);


// add item
function addItem(e) {
    // to prevent default form submit behaviour
    e.preventDefault();
    
    //get Input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    // adding class to li
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    //create del button
    var delbtn = document.createElement('button');
    delbtn.className = 'btn btn-danger btn-sm float-right delete';
    //add text node
    delbtn.appendChild(document.createTextNode('X'));
    //append btn to li
    li.appendChild(delbtn);
    //append li to list
    itemList.appendChild(li);
    
}   

function deletefun(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e) {
    //converting to lower case
    var text = e.target.value.toLowerCase();
    // getting all li
    var items = itemList.getElementsByTagName('li');
    // converting to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
)}