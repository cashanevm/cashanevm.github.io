const http = require('http')
const fs =require('fs')
const path = require('path')
const server = http.createServer((req ,res)=>{

    
//     if(req.url === '/' ){fs.readFile(path.join(__dirname,'pablic','index.html'),(err,data)=>{


//         if(err){throw err}
            
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end(data)
    
//     })}


// else if(req.url === '/contact' ){fs.readFile(path.join(__dirname,'pablic','contact.html'),(err,data)=>{


//     if(err){throw err}
        
// res.writeHead(200,{'content-type':'text/html'})
// res.end(data)

// })}


let filePath = path.join(__dirname,'pablic',req.url ==='/'? 'index.html': req.url)
const ext= path.extname(filePath)
let contentType = 'text/html'
switch(ext){
    case '.css':
        contentType = 'text/css'
        break

    case '.js':
        contentType = 'text/javascript'
        break
    default:
        contentType = 'text/html'
}


if(!ext){filePath +='.html'}

console.log(filePath)

fs.readFile(filePath,(err,content)=>{
    if(err){
fs.readFile(path.join(__dirname,'pablic','error.html'),(err,data)=>{
    if(err){
        throw err
    }else{
        res.writeHead(200,{'content-type':'text/html'})
        res.end(data)
    }
})



}else{
    res.writeHead(200,{'content-type':contentType})
    res.end(content)
}



})






})


const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log('prosses.....',PORT)
})