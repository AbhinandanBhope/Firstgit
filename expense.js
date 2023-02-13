const myForm =document.querySelector('#my-form');
myForm.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    console.log('hhh');
    let a=document.getElementById("description");
    let c=document.getElementById("inputGroupSelect01");
    localStorage.setItem(  'catA',c.value);

    localStorage.setItem(  'dis',a.value);
    let mon = document.getElementById('money');
    localStorage.setItem('money',mon.value);
    //console.log(dis);
    var DIS = document.getElementById('description').value;
    var d =document.getElementById('inputGroupSelect01').value;
     
   var  monA= document.getElementById('money').value;
    var li =document.createElement('li');
    li.className ='items';
    const iTEMMS=document.createTextNode("Expenseamount = " +monA+"       ");
    const monB=document.createTextNode("Description = "+DIS+"       ");
    const catB=document.createTextNode("Category  = "+d+" ");
    
    li.appendChild(monB);
    li.appendChild(iTEMMS);
    li.appendChild(catB);
    users.appendChild(li);
    const deletebtn =document.createElement('button');
    const editbtn = document.createElement('button');
   deletebtn.appendChild(document.createTextNode('Delete'));
   editbtn.appendChild(document.createTextNode('Edit'));
 

   li.appendChild(deletebtn);
   li.appendChild(editbtn);

    
   deletebtn.onclick=() => {
    
    

    
    const parent = document.getElementById('users');
    parent.removeChild(li);

    
    

    
    localStorage.removeItem('dis');
    localStorage.removeItem('money');
    localStorage.removeItem('catA');



    

    
 }
 editbtn.onclick=() => {


    const parent = document.getElementById('users');
    parent.removeChild(li);
    document.getElementById("money").value=monA;
    document.getElementById("description").value=DIS;
    document.getElementById("inputGroupSelect01").value=d;
    

    
    localStorage.removeItem("dis");
    localStorage.removeItem("money");
    localStorage.removeItem('catA');


 }
 
 document.getElementById("money").value="";
 document.getElementById("description").value="";
 document.getElementById("inputGroupSelect01").value="Choose...";
 




    
    

}
