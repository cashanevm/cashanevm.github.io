


 let i =0;
    


async function getResponse (){
   

let response = await fetch(`https://nevmerapp.herokuapp.com/users/${i+1}`)
let content = await response.json()
console.log(content[0].name)


let list= document.querySelector('.post')
let fon= document.querySelector('.fon')
let email= document.querySelector('.email')


email.innerHTML=`<h1>${content[0].email} </h1>`
fon.innerHTML=`<img class="foto" id="image" src="${content[0].img}" alt="Photo">`
list.innerHTML=`<h1>${content[0].name} </h1>`

if(i==4){i=0;}
else{i++;}
}






function clicknext(button){
    getResponse()

}