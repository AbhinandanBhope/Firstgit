
//console.log(window);
//alert(1);
//single element selector
//document.getElementById('my-form');
//console.log(document.querySelector('h1'))
//Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//const items =document.querySelectorAll('.item');
//items.forEach((item)=> console.log(item));
//const ul = document.querySelector('.items');
//ul.remove()
//ul.firstElementChild.textContent='HELLOW';
//document.getElementById('1').style.color='green';
//document.getElementById('2').style.color='yellow';
//const btn = document.querySelector('.btn');
//btn.addEventListener('mouseout',(e)=>{
    //e.preventDefault();
    
    //document.querySelector('.items').lastElementChild.innerHTML='<h1>hellow</h1>';



//});

//btn.addEventListener('mouseover',(e)=>{
    //e.preventDefault();
    
    //document.querySelector('.items').lastElementChild.innerHTML='<h1>by</h1>';



//});

// btn.addEventListener('click',(e)=>{
    // e.preventDefault();
    
//     document.querySelector('.items').lastElementChild.innerHTML='<h1>Hi</h1>';




// });

const myForm =document.querySelector('#my-form');
const nameInput =document.querySelector('#name');
const emailInput =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userList=document.querySelector('#users');
myForm.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    let name = document.getElementById('name');
    localStorage.setItem(  'name',name.value);
    let email = document.getElementById('email');
    localStorage.setItem('email1',email.value);
   //let one= document.getElementById('1');
   
   var nameA = document.getElementById('name').value;
   
   var  emailA= document.getElementById('email').value;
   var li =document.createElement('li');
   li.className ='items';
   const iTEMMS=document.createTextNode(nameA);
   const emailB =document.createTextNode(" email= "+emailA);

   li.appendChild(iTEMMS);
   li.appendChild(emailB);
   users.appendChild(li);
   

    

}
//localStorage.setItem('Name','harry');
//localStorage.setItem('Name2','Abhi');

//let Name=localStorage.getItem('Name');
//console.log(Name);
//sessionStorage.setItem('name2','sam');





