var form =document.getElementById('addForms');
var itemList =document.getElementById('items');

form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    //creat new li element
    var li =document.createElement('li');
    li.className ='list-group-item';
    li.appendChild(document.createTextNode('newItem'));
    itemList.appendChild(li);
}