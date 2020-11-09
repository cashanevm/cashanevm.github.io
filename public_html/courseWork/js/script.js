

let bool=1;




function clicknext(button){
    let aside_block= document.querySelector('.aside_block')


if(bool==1){
aside_block.innerHTML=`<aside class="aside " id="menu1">
<ul>
  <li>
      <a class="tabnav" href="tabs/menutabs/tab1.html">Чоловіче взуття</a>
      
        <div class="wblock">
       
        <ul class="col">
        <li>
        <ul class="hor">
          <li class="w-100 "><div class="item1 " ><script>itemicon(1);</script></div></li>
            
            <li class="w-100 "><div class="item2"><script>itemicon(2);</script></div></li>
            <li class="w-100"><div class="item3"><script>itemicon(3);</script></div></li>
      <li class="w-100"><div class="item4"><script>itemicon(4);</script></div></li>
        </ul>
      </li>
      <li>
        <ul class="hor">
          <li class="w-100 "><div class="item5 " ><script>itemicon(5);</script></div></li>
          <li class="w-100 "><div class="item6 " ><script>itemicon(6);</script></div></li>
          <li class="w-100 "><div class="item7 " ><script>itemicon(7);</script></div></li>
          <li class="w-100 "><div class="item8 " ><script>itemicon(8);</script></div></li>
        </ul>
      </li>


          
          
          </div>
        
      
  </li>
  <li>
      <a  class="tabnav"href="tabs/menutabs/tab2.html">Жіноче взуття</a>
      <ul>
      <div class="wblock">
       
      <ul class="col">
      <li>
      <ul class="hor">
        <li class="w-100 "><div class="item9 " ><script>itemicon(9);</script></div></li>
        <li class="w-100 "><div class="item10 " ><script>itemicon(10);</script></div></li>
        <li class="w-100 "><div class="item11 " ><script>itemicon(11);</script></div></li>
        <li class="w-100 "><div class="item12 " ><script>itemicon(12);</script></div></li>
      </ul>
    </li>
    <li>
      <ul class="hor">
        <li class="w-100 "><div class="item13 " ><script>itemicon(13);</script></div></li>
        <li class="w-100 "><div class="item14 " ><script>itemicon(14);</script></div></li>
        <li class="w-100 "><div class="item15 " ><script>itemicon(15);</script></div></li>
        <li class="w-100 "><div class="item16 " ><script>itemicon(16);</script></div></li>
      </ul>
    </li>

        
        
        </div>
        
      </ul>
  </li>
  
</ul> 
</aside>`;
bool--;
}
else {aside_block.innerHTML=`<h1></h1>`;
bool++}

}

function clicknexttab(button){
  let aside_block= document.querySelector('.aside_block')


if(bool==1){
aside_block.innerHTML=`<aside class="aside" id="menu1">
     


<ul><h1>Колір</h1>
  <li><input onclick="color('white')" type="radio" name="f1">білий </li>
  <li><input  onclick="color('black')" type="radio" name="f1">чорний </li>
  <li><input  onclick="color(null)" type="radio" name="f1">ніякий </li>
</ul>

<ul><h1>Розмір</h1>
  <li><input onclick="size1('39')" type="radio" name="f2">39 </li>
  <li><input  onclick="size1('40')" type="radio" name="f2">40 </li>
  <li><input  onclick="size1('41')" type="radio" name="f2">41 </li>
  <li><input  onclick="size1('42')" type="radio" name="f2">42 </li>
  <li><input  onclick="size1(null)" type="radio" name="f2">ніякий </li>
</ul>
</aside>`;
bool--;
}
else {aside_block.innerHTML=`<h1></h1>`;
bool++}

}


function item(id){

localStorage.setItem("id",id)

}



function getdata(){
  let name= document.querySelector('.name')
    
    
    let res = localStorage.getItem("id")
    name.innerHTML=`<h1>tufla${res}</h1>`;
}
async function itemicon(num){
  
  let item= document.querySelector(".item"+num)
  let response = await fetch(`https://nevmerapp.herokuapp.com/users/${num}`)
  let content = await response.json()
  
  
  console.log("complite")
  item.innerHTML=`<img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="tabs/discr.html" ><button class="buy" onclick="item(${num})">купить</button></a>`
  
}
async function itemiconintab(num){
  
  let item= document.querySelector(".item"+num)
  let response = await fetch(`https://nevmerapp.herokuapp.com/users/${num}`)
  let content = await response.json()
  let color = localStorage.getItem("color")
  let size = localStorage.getItem("size")

  if(size == 'null'){if(color=="white"){
    if(content[0].color=="white"){
      item.innerHTML=`<div><img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="../discr.html" ><button class="buy" onclick="item(${num})">купить</button></a></div>`
    

  }}
  else if(color=="black"){
if(content[0].color=="black"){
  item.innerHTML=`<div><img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="../discr.html" ><button class="buy" onclick="item(${num})">купить</button></a></div>`
}
  }
  else{
    item.innerHTML=`<div><img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="../discr.html" ><button class="buy" onclick="item(${num})">купить</button></a></div>`
  }
  }
  else{
    if(content[0].size==size){
      if(color=="white"){
        if(content[0].color=="white"){
          item.innerHTML=`<div><img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="../discr.html" ><button class="buy" onclick="item(${num})">купить</button></a></div>`
        
    
      }}
      else if(color=="black"){
    if(content[0].color=="black"){
      item.innerHTML=`<div><img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="../discr.html" ><button class="buy" onclick="item(${num})">купить</button></a></div>`
    }
      }
      else{
        item.innerHTML=`<div><img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="../discr.html" ><button class="buy" onclick="item(${num})">купить</button></a></div>`
      }
    }
  }
  // item.innerHTML=`<img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><a href="../discr.html" ><button class="buy" onclick="item(${num})">купить</button></a>`
  
}

async function getResponse (){
   
  let num = localStorage.getItem("id")
let response = await fetch(`https://nevmerapp.herokuapp.com/users/${num}`)
let content = await response.json()
console.log(content[0].name)


let name= document.querySelector('.name')
let size= document.querySelector('.size')
let color= document.querySelector('.color')
let disc= document.querySelector('.disc')
let img= document.querySelector('.img')
let cost= document.querySelector('.cost')



name.innerHTML=`<h1>${content[0].name} </h1>`
size.innerHTML=`<h1>Розмір: ${content[0].size} </h1>`
color.innerHTML=`<h1>Колір: ${content[0].color} </h1>`
disc.innerHTML=`<h1>Відгуки: ${content[0].disc} </h1>`
img.innerHTML=`  <img src="${content[0].img}" alt="img">`
cost.innerHTML=`<h1> Ціна: ${content[0].cost} грн</h1>`

}


function buyclick(buy){
 let q=9;
 for(i=0;i<=7;i++){
   let l = localStorage.getItem(i)

   if(l==-1){q--}

 }
 let buttomtrash= document.querySelector('.buttomtrash')
buttomtrash.innerHTML='<a class="triggered">'+q+'</a>'
 for(i=0;i<=7;i++){
    
         
  let l = localStorage.getItem(i)
     
       
     
       if(l==-1){
       
        
        
        let num = localStorage.getItem("id")
        localStorage.setItem(i,num)
        
        
        
        
     
         break
       }
       else
       {
        
        }
        
      }
    
  
   
   
  
  
  
  //  let h= localStorage.getItem("h")
  //   let e =localStorage.getItem(h)
  //   if(e=-1){ 
    
  //   let num = localStorage.getItem("id")
  //   localStorage.setItem(h,num)
    
    
  //   h++
  //   localStorage.setItem("h",h)
  //   }
  //   else{
     
  //    }
   
 
 
  

 



}  
async function getTrash()
   {
  
 let velue=0
 let vel= document.querySelector(".velue")
  for(i=0;i<=7;i++){
    let l = localStorage.getItem(i)
    
          let response = await fetch(`https://nevmerapp.herokuapp.com/users/${l}`)
     
      let content = await response.json()
       let item= document.querySelector(".slot"+i) 
     
       if(l==-1){
         item.innerHTML=``
       }else{
         velue=velue+(Number(content[0].cost))
     console.log(content[0].cost)
       item.innerHTML=`<img src="${content[0].img}"  alt="imgmenu"><p>${content[0].name}</p><button class="del" onclick="delclick(${i})">удалити</button`
      }
       
  vel.innerHTML=`<h1>Ціна:${velue} грн</h1>`;
  }
  
///////////////////////////////////////
     
  //     item.innerHTML=`<img src="${content[l].img}"  alt="imgmenu"><p>${content[l].name}</p><a href="tabs/discr.html" ><button ">купить</button><button class="del" onclick="delclick(${h})">удалити</button</a>`
       }
      
  





    
    
    
    
    function delclick(num){
      localStorage.setItem(num,-1)
      
      
      getTrash()
  
  
  
  }  

  function Trachcreater(){
  
    for(i=0;i<=7;i++){
      let l = localStorage.getItem(i)
      if(l===null){
      
        localStorage.setItem(i,-1)
      }
    }

  }

  function color(color){
    localStorage.setItem("color",color)
    location.reload();
  }
  function size1(size){
    localStorage.setItem("size",size)
    location.reload();
  }

  function filset(){
    let color = localStorage.getItem("color")
  let size = localStorage.getItem("size")
  
  let color1= document.querySelector('.color')
    color1.innerHTML=`<h1>Колір:${color}</h1>`;
    
    let size1= document.querySelector('.size')
    size1.innerHTML=`<h1>Розмір:${size}</h1>`;



}
async function getVelue(){
  res=0
  for(i=0;i<=7;i++){
    let l = localStorage.getItem(i)
if(l==-1){

}
else{
  let response = await fetch(`https://nevmerapp.herokuapp.com/users/${l}`)
  let content = await response.json()
  res=res+content[0].cost
  console.log(Number(content[0].cost))
}
  }
  let item= document.querySelector(".velue") 
  item.innerHTML=`<h1>Ціна:${res}</h1>`;
}