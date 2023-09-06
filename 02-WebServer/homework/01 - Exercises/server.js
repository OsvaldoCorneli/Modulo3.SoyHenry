var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;




/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports = http
.createServer((request ,response)=>{
  console.log(`Server raised in port ${PORT}`) ;
if(request.url === "/api"){
  fs.readFile("./utils/dogsData.json", (err,data)=>{
      if(err){
      response.writeHead(404,{"Content-Type": "text/plain"})
      response.end("json not found")}
      else{response.writeHead(200,{"Content-Type": "application/json"})
      response.end(data)}

  })
  return
 } 

 if(request.url === "/allDogs"){
  fs.readFile("./utils/allDogs.html","utf8",(err,data)=>{
    if(err){
      response.writeHead(404,{"Content-Type": "text/plain"})
     response.end("json not found")}
      else{response.writeHead(200,{"Content-Type": "text/html"})
     response.end(data)}
  })
  return
 }

 response.writeHead(404,{"Content-Type": "text/plain"})
 return response.end("Route not found")


}).listen(PORT, "localhost")
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR 
  DE NULL POR EL SERVIDOR */
  null;
