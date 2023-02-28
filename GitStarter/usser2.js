
    
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
const delet =document.getElementById("users");
const edit =document.getElementById("users");
myForm.addEventListener('submit',onsubmit);

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/27d5c7dad9e4442f8dda65f492acd1dd/appointmentData")
    .then((respone) => {
        console.log(respone);
        for (let index = 0; index < respone.data.length; index++) {
            
            showOutput(respone.data[index]);
            
        }
        
        
    }).catch((err) => {
        console.log("error");
        
    });
    


})



function onsubmit(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    
    const obj={
        
        name,
        email
        

    }
    axios.post("https://crudcrud.com/api/27d5c7dad9e4442f8dda65f492acd1dd/appointmentData",obj)
    .then((respone) => {
        
        console.log(respone);
        
    }).catch((err) => {
        document.body.innerHTML=document.body.innerHTML + "<h1>Somthing Went Worng</h1>"
    });
    showOutput(obj);
}

    //localStorage.setItem(  'name',name.value);
    
    //localStorage.setItem('email1',email.value);
   //let one= document.getElementById('1');
   
   //var nameA = document.getElementById('name').value;
   
   //var  emailA= document.getElementById('email').value;
   //var li =document.createElement('li');
   //li.className ='items';
   //const iTEMMS=document.createTextNode(nameA);
   //const emailB =document.createTextNode(" email= "+emailA);
   //const deletebtn =document.createElement('button');

   
   
   
   


   //const editbtn = document.createElement('button');
   //editbtn.appendChild(document.createTextNode('Edit'));

    
     
   //deletebtn.appendChild(document.createTextNode('Delete'));
   


  // li.appendChild(iTEMMS);
   //li.appendChild(emailB);
   
   function showOutput(obj) {
    
    
    let objectall = JSON.stringify(obj);
    var li = document.createElement('li');
    var id = obj._id;
    console.log(id);
    li.id=id;
      childElem = obj.name+ "-"+ obj.email;
      const iTEMMS=document.createTextNode(childElem);
      const deletebtn =document.createElement('button');
      const editbtn = document.createElement('button');

   editbtn.appendChild(document.createTextNode('Edit'));
    deletebtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(iTEMMS);
    users.appendChild(li);
   li.appendChild(deletebtn);
   li.appendChild(editbtn);
    
    deletebtn.onclick=(e) => {
        console.log('hhh');
        
         
          
   document.getElementById('email').value="";
        
    
   document.getElementById('name').value =" ";

   
   
        const parent = document.getElementById('users');
        parent.removeChild(li);
        deletet(id);
    
    } 

    editbtn.onclick=(e) => {
       
        console.log(id);
        document.getElementById('name').value= obj.email
    document.getElementById('email').value =obj.name


        const parent = document.getElementById('users');
        parent.removeChild(li);
        deletet(id);
        
        
    
        
        //localStorage.removeItem("email1");
        //localStorage.removeItem("name");
    
    
    
     } 

    
    
    //console.log(obj);


    
    //localStorage.removeItem("email1");
    //localStorage.removeItem("name");

    
    
    
 

 
 
   //users.appendChild(li);
   //li.appendChild(deletebtn);
   //li.appendChild(editbtn);
   
}

function deletet(id) {
    axios.delete(`https://crudcrud.com/api/27d5c7dad9e4442f8dda65f492acd1dd/appointmentData/${id}`).then((respone) => {
    console.log(respone);    
    }).catch((err) => {
        console.log();
       // console.log(id);
        
    });

    
}
function remove(id) {
    axios.delete(`https://crudcrud.com/api/27d5c7dad9e4442f8dda65f492acd1dd/appointmentData/${id}`).then((respone) => {
        //console.log(id);
    console.log(respone);
       
    }).catch((err) => {
        console.log();
       
        
    });

    
}


        
        





;

