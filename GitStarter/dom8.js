var form =document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter =document.getElementById('filter');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);



function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var DItem = document.getElementById('Discrp').value;
    var li =document.createElement('li');
    li.className ='list-group-item';
    const iTEMMS=document.createTextNode(newItem);
    const disp=document.createTextNode(DItem);
    li.appendChild(iTEMMS);
    li.appendChild(disp);
   // var DItem = document.getElementById('DisScrp').value;
    //var Ai =document.createElement('li');
   // li.className ='list-group-item';
    //li.appendChild(document.createTextNode(DItem));
    
    var deletebtn =document.createElement('button');
    
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('Delet'));
    li.appendChild(deletebtn);
    //Ai.className ='list-group-item';
    //itemList.appendChild(Ai);
    var Editebtn =document.createElement('button');
    
    //deletebtn.className='btn btn-danger btn-sm float-right delete';
    Editebtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(Editebtn);
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
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName =item.firstChild.textContent;
        var dispName =item.childNodes[1].textContent;
        console.log(itemName);
        if(itemName.toLocaleLowerCase().indexOf(text) !=-1 || dispName.toLocaleLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';

        }
    });

    
    

}