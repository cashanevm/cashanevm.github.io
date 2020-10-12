let counter=1;
var i= 1;
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
          .sendGetRequest(`https://reqres.in/api/users/${counter}`, 
            (request) => {
              const data = (JSON.parse(request.responseText));
              if(i%5 != 0){
              first_name.innerHTML=data.data.first_name;
              last_name.innerHTML=' ' + data.data.last_name;
              image.src=data.data.avatar;
              email.innerHTML=data.data.email;
              counter++;
            }
            else{
              first_name.innerHTML="oleksandr";
              last_name.innerHTML=' ' + "oleksandr";
              image.src="img/i.png";
              email.innerHTML="oleksandr";
i=0
            }
            i++

     
            
              if (counter==16){
                  counter=1;
              }
              
              
            });
            
            
   }
  });




  