//console.dir(document);
//console.log(document.URL);
//
//document.title=123;
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.links);
//console.log(document.images);
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent ='hellow';

//headerTitle.innerHTML ='Goodbye';
//console.log(headerTitle);
//headerTitle.innerHTML='<h3>hellow</h3>';
//headerTitle.style.borderBottom ="solid 3px #000";
//headerTitle.style.borderBottom

// GET ELEMENTS BY CLASSNAME//
//var items = document.getElementsByClassName('list-group-item');
//items[1].getElementsByClassName.fontWeight='bold';
//items[1].textContent='Hellow 2';
//items[2].style.color ='green';
//for(var i=0;i<items.length;i++){
   
  //  items[i].getElementsByClassName.fontWeight='bold';
//}

//var li = document.getElementsByTagName('li');
//console.log(li[1]);
//li[1].getElementsByTagName.fontWeight='bold';
//li[1].textContent='Hellow 1';
//li[2].style.color ='yellow';
//for(var i=0;i<items.length;i++){
    
  //  items[i].getElementsByClassName.fontWeight='heavy (900)';
//}
//var header =document.querySelector('#main-header');
//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color='White';
//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor ='green';
//var odd =document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
 //   odd[i].style.backgroundColor='green';
//}
//TRAVERSING THE DOM //

var itemList =document.querySelector('#items');
//parentElement
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//childNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//Firstchild
console.log(itemList.firstChild);
itemList.firstElementChild.textContent='Hellow2';
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hellow 4';
console.log(itemList.nextSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//creat element 
var newDiv =document.createElement('div');
newDiv.className='hellow';
console.log(newDiv);
//Add id
newDiv.id='hellow';
// Add attr
newDiv.setAttribute('title','Helow Div');
var newDivText =document.createTextNode('hellow World');
newDiv.appendChild(newDivText);
var container =document.querySelector('header .container');
var h1 =document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';



