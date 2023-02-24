
        


 const posts = [{title: 'POST1'}];
  const time = new Array(1);;
  
  
  var c=1;
   async function printPost() {
    let t=time;
    
    console.log( "Last Activity " +t)

        posts.forEach((post) => {
            console.log(post.title)
        })
    
}

   function lastActivity() {
    return new Promise ( function (resolve,reject) {
        
   
 setTimeout(() => {
  
 
        
        a = new Date();
            let s = a.getHours()+ ":" + a.getMinutes() + ":" + a.getSeconds();
            time.pop();
            time.push(s);
            //console.log(time);
            resolve();
          }, 1000);
})
    
  }
  function createpost(){
    return new Promise(function (resolve, reject) {
        
            
       
        c=c+1;
        posts.push({title: 'POST'+c})
        //console.log("POST"+c);
        resolve();
        lastActivity()
    })

  }
  function deletePost(){
    return new Promise((resolve, reject) => {
        
            
        
       
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                
                
                reject("ERROR: ARRAY IS EMPTY")
            }
        
    })
}
   
async function creat  ()  {
  
  const  cr =createpost();
  const ar = lastActivity();
  

let print = await cr;
let print1 = await ar;
let print2 =await printPost();

}
 creat();

  
  //createpost()
 // printPost();
  //createpost()
  
  //printPost()
  //deletePost();
  //printPost();
  
  
  




  


