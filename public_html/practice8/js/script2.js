let counter=1;
document.addEventListener("DOMContentLoaded",
  (event) => {
      
    const btn = document.getElementById("change");
    const first_name=document.getElementById("first_name");
    const last_name=document.getElementById("last_name");
    const image=document.getElementById("image");
    const email=document.getElementById("email");
    const company_name=document.getElementById("company_name");
    const Job=document.getElementById("Job");
    const content=document.getElementById("content");
    btn.onclick=()=>{
       $ajaxUtils
       
          .sendGetRequest('https://nevmerapp.herokuapp.com/users/${counter}', 
            (request) => {
              const data = (JSON.parse(request.responseText));
              if(i%5 != 0){
              first_name.innerHTML=data.name;
               last_name.innerHTML=data.name;
              image.src=data.img;
              email.innerHTML=data.email;
              counter++;
            }
            else{
              first_name.innerHTML="OLEKSANDR";
              last_name.innerHTML=' ' + "NEVMERZHYTSKYI";
              image.src="img/i.png";
              email.innerHTML="cashanevm@gmail.com";
i=0
            }
            i++

     
            
              if (counter==13){
                  counter=1;
              }
              
              
            });
            
            
   }
  });




  