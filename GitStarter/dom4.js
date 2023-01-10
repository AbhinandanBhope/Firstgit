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
var items = document.getElementsByClassName('list-group-item');
items[1].getElementsByClassName.fontWeight='bold';
items[1].textContent='Hellow 2';
items[2].style.color ='green';
for(var i=0;i<items.length;i++){
   
    items[i].getElementsByClassName.fontWeight='bold';
}

var li = document.getElementsByTagName('li');
console.log(li[1]);
li[1].getElementsByTagName.fontWeight='bold';
li[1].textContent='Hellow 1';
li[2].style.color ='yellow';
for(var i=0;i<items.length;i++){
    
    items[i].getElementsByClassName.fontWeight='heavy (900)';
}



