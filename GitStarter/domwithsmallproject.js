var form =document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter =document.getElementById('filter');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);



function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li =document.createElement('li');
    li.className ='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    
    var deletebtn =document.createElement('button');
    
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('x'));
    li.appendChild(deletebtn);
    li.className ='list-group-item';
    itemList.appendChild(li);
} 
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure?')) {
            var li =e.target.parentElement;
            itemList.removeChild(li);
        }
    

    }
}
    

function filterItems(e){
    var text =e.target.value.toLowerCase();
    
    

}